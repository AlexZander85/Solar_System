/**
 * Sun — «живое Солнце»: многослойный GLSL-шейдер фотосферы,
 * лимбовое потемнение, солнечные пятна, протуберанцы (TubeGeometry),
 * объёмная корона и два режима отображения (видимый свет / УФ «SDO»).
 */
import * as THREE from 'three';
import { Burst, settle, spring1 } from '../core/SpringMath';

export type SunViewMode = 'visible' | 'sdo';

const noiseGLSL = /* glsl */ `
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise3(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i + vec3(0, 0, 0)), hash(i + vec3(1, 0, 0)), f.x),
          mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x),
          mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
      f.z);
  }
  float fbm3(vec3 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) {
      s += a * noise3(p);
      p = p * 2.02 + vec3(1.7);
      a *= 0.5;
    }
    return s;
  }
`;

const sunVertex = /* glsl */ `
  varying vec3 vNormalV;
  varying vec3 vNormalW;
  varying vec3 vPosO;
  varying vec3 vPosW;
  void main() {
    vPosO = position;
    vNormalV = normalize(normalMatrix * normal);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const sunFragment = /* glsl */ `
  uniform float time;
  uniform float modeMix; // 0 = видимый свет, 1 = УФ SDO
  varying vec3 vNormalV;
  varying vec3 vNormalW;
  varying vec3 vPosO;
  varying vec3 vPosW;

  ${noiseGLSL}

  void main() {
    vec3 dir = normalize(vPosO);

    // Кипящая грануляция фотосферы (ячейки конвекции)
    float gran = fbm3(dir * 9.0 + vec3(time * 0.035, time * 0.021, 0.0));
    float cells = fbm3(dir * 22.0 - vec3(0.0, time * 0.05, time * 0.018));
    float bub = smoothstep(0.32, 0.78, gran * 0.65 + cells * 0.45);

    // Солнечные пятна (магнитные области, темнее и холоднее)
    float spotNoise = fbm3(dir * 3.1 + vec3(time * 0.008, 0.0, 0.0));
    float equatorMask = 1.0 - smoothstep(0.18, 0.55, abs(dir.y));
    float spot = smoothstep(0.62, 0.72, spotNoise) * equatorMask;

    // Лимбовое потемнение: mu = cos угла к лучу зрения
    float mu = clamp(dot(normalize(vNormalV), normalize(vNormalV)), 0.0, 1.0);
    vec3 viewDir = normalize(cameraPosition - vPosW);
    mu = clamp(dot(normalize(vNormalW), viewDir), 0.0, 1.0);
    float limb = mix(0.42, 1.0, pow(mu, 0.45));

    // «Кинематографический» видимый свет
    vec3 hot = vec3(1.0, 0.86, 0.62);
    vec3 cool = vec3(1.0, 0.52, 0.16);
    vec3 visibleCol = mix(cool, hot, bub) * 2.6;
    visibleCol = mix(visibleCol, vec3(0.36, 0.12, 0.03) * 1.6, spot * 0.92);
    visibleCol *= limb;

    // «Научный УФ-фильтр» (как SDO): магнитная плазма, петли, волокна
    float fil = fbm3(dir * 6.5 + vec3(0.0, time * 0.012, 0.0));
    float ridge = 1.0 - abs(fil * 2.0 - 1.0);
    ridge = pow(ridge, 3.2);
    float loops = fbm3(dir * 3.4 + vec3(time * 0.006));
    vec3 sdoCol = mix(vec3(0.16, 0.02, 0.14), vec3(0.95, 0.32, 0.12), ridge);
    sdoCol += vec3(1.0, 0.72, 0.28) * pow(smoothstep(0.45, 0.9, loops), 2.0) * 1.2;
    sdoCol *= mix(0.55, 1.0, limb);

    vec3 col = mix(visibleCol, sdoCol, modeMix);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const coronaVertex = /* glsl */ `
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const coronaFragment = /* glsl */ `
  uniform vec3 color;
  uniform float time;
  uniform float modeMix;
  varying vec3 vNormalW;
  varying vec3 vPosW;
  ${noiseGLSL}
  void main() {
    vec3 viewDir = normalize(cameraPosition - vPosW);
    float fres = pow(1.0 - abs(dot(normalize(vNormalW), viewDir)), 3.0);
    float wisp = fbm3(normalize(vPosW) * 7.0 + vec3(time * 0.02));
    float a = fres * (0.55 + wisp * 0.75);
    vec3 c = mix(color, vec3(0.62, 0.22, 0.72), modeMix * 0.75);
    gl_FragColor = vec4(c * a * 1.4, a);
  }
`;

export class Sun {
  readonly group = new THREE.Group();
  readonly light: THREE.PointLight;
  /** Directional shadow caster: focused on the currently selected body. */
  readonly shadowLight: THREE.DirectionalLight;
  private shadowTarget = new THREE.Object3D();

  private surface: THREE.Mesh;
  private surfaceMat: THREE.ShaderMaterial;
  private coronaInner: THREE.Mesh;
  private coronaMat: THREE.ShaderMaterial;
  private sprites: THREE.Sprite[] = [];
  private prominences: THREE.Group = new THREE.Group();
  private promMats: THREE.ShaderMaterial[] = [];
  private flare = new Burst(0.18, 1.1);
  private modeMix = spring1(0);
  private time = 0;
  private radius: number;

  mode: SunViewMode = 'visible';

  constructor(radius: number) {
    this.radius = radius;
    this.group.name = 'Sun';

    this.surfaceMat = new THREE.ShaderMaterial({
      vertexShader: sunVertex,
      fragmentShader: sunFragment,
      uniforms: {
        time: { value: 0 },
        modeMix: { value: 0 }
      }
    });
    this.surface = new THREE.Mesh(new THREE.SphereGeometry(radius, 96, 64), this.surfaceMat);
    this.surface.layers.enable(1); // bloom
    this.group.add(this.surface);

    // Внутренняя корона — френелевская оболочка
    this.coronaMat = new THREE.ShaderMaterial({
      vertexShader: coronaVertex,
      fragmentShader: coronaFragment,
      uniforms: {
        color: { value: new THREE.Color(0xffb066) },
        time: { value: 0 },
        modeMix: { value: 0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide
    });
    this.coronaInner = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.22, 64, 48), this.coronaMat);
    this.coronaInner.layers.enable(1);
    this.group.add(this.coronaInner);

    // Внешняя корона — мягкие спрайты
    for (const [scale, alpha, col] of [
      [2.6, 0.42, '#ff9a3c'],
      [5.2, 0.2, '#ff7a28'],
      [9.5, 0.1, '#ff6a20']
    ] as Array<[number, number, string]>) {
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: coronaSpriteTexture(),
          color: new THREE.Color(col),
          transparent: true,
          opacity: alpha,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      sprite.scale.setScalar(radius * scale);
      sprite.layers.enable(1);
      this.sprites.push(sprite);
      this.group.add(sprite);
    }

    this.buildProminences();
    this.group.add(this.prominences);

    this.light = new THREE.PointLight(0xfff2dd, 2.6, 0, 0);
    this.group.add(this.light);

    // Настоящая карта глубины для облаков. Она следует за выбранной планетой,
    // поэтому не тратит разрешение на весь масштаб системы сразу.
    this.shadowTarget.name = 'SunShadowTarget';
    this.shadowLight = new THREE.DirectionalLight(0xfff1d6, 0.42);
    this.shadowLight.castShadow = true;
    this.shadowLight.shadow.mapSize.set(2048, 2048);
    this.shadowLight.shadow.camera.near = 0.1;
    this.shadowLight.shadow.camera.far = 6000;
    this.shadowLight.shadow.camera.left = -900;
    this.shadowLight.shadow.camera.right = 900;
    this.shadowLight.shadow.camera.top = 900;
    this.shadowLight.shadow.camera.bottom = -900;
    this.shadowLight.shadow.bias = -0.00008;
    this.shadowLight.shadow.normalBias = 0.012;
    this.shadowLight.target = this.shadowTarget;
    this.group.add(this.shadowLight);
    this.group.add(this.shadowTarget);
  }

  /** 3D-петли протуберанцев вдоль лимба. */
  private buildProminences(): void {
    const r = this.radius;
    for (let i = 0; i < 6; i++) {
      const a0 = (i / 6) * Math.PI * 2 + 0.4;
      const spread = 0.35 + Math.random() * 0.5;
      const lift = 0.16 + Math.random() * 0.16;

      const p0 = new THREE.Vector3(Math.cos(a0), (Math.random() - 0.5) * 0.7, Math.sin(a0)).multiplyScalar(r * 0.985);
      const p2 = new THREE.Vector3(Math.cos(a0 + spread), (Math.random() - 0.5) * 0.7, Math.sin(a0 + spread)).multiplyScalar(r * 0.985);
      const mid = p0.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(r * (1 + lift));

      const curve = new THREE.QuadraticBezierCurve3(p0, mid, p2);
      const tube = new THREE.TubeGeometry(curve, 48, r * 0.012, 8, false);

      const mat = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          phase: { value: Math.random() * 10 },
          color: { value: new THREE.Color(0xff6a22) }
        },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float time;
          uniform float phase;
          uniform vec3 color;
          varying vec2 vUv;
          void main() {
            float flow = sin(vUv.x * 18.0 - time * 1.7 + phase) * 0.5 + 0.5;
            float edge = sin(vUv.y * 3.14159);
            float a = (0.22 + flow * 0.5) * edge;
            gl_FragColor = vec4(color * (1.4 + flow) * a, a);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(tube, mat);
      mesh.layers.enable(1);
      this.promMats.push(mat);
      this.prominences.add(mesh);
    }
  }

  /**
   * Перенастроить shadow camera на тело в текущем локальном пространстве.
   * Облачная оболочка и поверхность этого тела теперь участвуют в одной
   * настоящей depth shadow map, а не в нарисованном MultiplyBlending-слое.
   */
  updateShadowTarget(bodyWorldPosition: THREE.Vector3, radius: number, enabled = true): void {
    this.shadowLight.visible = enabled;
    if (!enabled) return;
    const targetLocal = this.group.worldToLocal(_shadowTarget.copy(bodyWorldPosition));
    const sunLocal = this.group.worldToLocal(_shadowSun.copy(this.group.getWorldPosition(_shadowSunWorld)));
    const fromSun = sunLocal.sub(targetLocal);
    if (fromSun.lengthSq() < 1e-8) fromSun.set(0, 1, 0);
    fromSun.normalize();
    const parentScale = Math.max(Math.abs(this.group.scale.x), 1e-4);
    const span = THREE.MathUtils.clamp(radius * 7.0, 4, 1400) / parentScale;
    const distance = Math.max(span * 5, 40 / parentScale);
    this.shadowTarget.position.copy(targetLocal);
    this.shadowLight.position.copy(targetLocal).addScaledVector(fromSun, distance);
    this.shadowLight.shadow.camera.left = -span;
    this.shadowLight.shadow.camera.right = span;
    this.shadowLight.shadow.camera.top = span;
    this.shadowLight.shadow.camera.bottom = -span;
    this.shadowLight.shadow.camera.far = distance + span * 2;
    this.shadowLight.shadow.camera.updateProjectionMatrix();
    this.shadowTarget.updateMatrixWorld();
    this.shadowLight.target.updateMatrixWorld();
  }

  setViewMode(mode: SunViewMode): void {
    this.mode = mode;
  }

  /** Случайная солнечная вспышка (используется «Опасностями космоса»). */
  triggerFlare(): void {
    this.flare.trigger();
  }

  get flareEnergy(): number {
    return this.flare.value;
  }

  update(dt: number): void {
    this.time += dt;
    const targetMix = this.mode === 'sdo' ? 1 : 0;
    settle(this.modeMix, targetMix, dt, 0.7);

    this.surface.rotation.y += dt * 0.012;
    this.prominences.rotation.y += dt * 0.012;

    this.surfaceMat.uniforms['time'].value = this.time;
    this.surfaceMat.uniforms['modeMix'].value = this.modeMix.value;
    this.coronaMat.uniforms['time'].value = this.time;
    this.coronaMat.uniforms['modeMix'].value = this.modeMix.value;

    for (const m of this.promMats) m.uniforms['time'].value = this.time;

    const flare = this.flare.update(dt);
    const pulse = 1 + Math.sin(this.time * 0.32) * 0.018 + flare * 0.28;
    this.coronaInner.scale.setScalar(pulse);
    for (let i = 0; i < this.sprites.length; i++) {
      const base = [2.6, 5.2, 9.5][i];
      this.sprites[i].scale.setScalar(this.radius * base * (1 + flare * 0.35));
      const baseOpacity = [0.42, 0.2, 0.1][i];
      const mat = this.sprites[i].material as THREE.SpriteMaterial;
      mat.opacity = baseOpacity * (1 + flare * 1.1) * (1 - this.modeMix.value * 0.35);
    }
    this.light.intensity = 2.6 * (1 + flare * 0.4);
  }
}

/** Процедурная текстура короны для спрайтов. */
const _shadowTarget = new THREE.Vector3();
const _shadowSun = new THREE.Vector3();
const _shadowSunWorld = new THREE.Vector3();

function coronaSpriteTexture(): THREE.CanvasTexture {
  const size = 256;
  const [c, ctx] = [document.createElement('canvas'), document.createElement('canvas').getContext('2d')] as const;
  void ctx;
  c.width = size;
  c.height = size;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255, 240, 210, 1)');
  grad.addColorStop(0.18, 'rgba(255, 190, 110, 0.55)');
  grad.addColorStop(0.45, 'rgba(255, 130, 45, 0.18)');
  grad.addColorStop(1, 'rgba(255, 90, 20, 0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
