/**
 * Rings — двухуровневая система колец Сатурна.
 * Уровень 1: диск с щелью Кассини, микроструктурой, честной тенью
 * планеты на кольцах и (через injectRingShadow) тенью колец на облаках.
 */
import * as THREE from 'three';

export interface RingOptions {
  innerRadius: number;
  outerRadius: number;
  planetRadius: number;
  color?: THREE.ColorRepresentation;
  /** Прозрачность базового кольца. */
  opacity?: number;
}

/** GLSL-функция тени колец — инъекция в материалы планеты. */
export function ringShadowGLSL(): string {
  return /* glsl */ `
    uniform vec3 ringSunDir;
    uniform vec3 ringPlanetCenter;
    uniform vec3 ringNormal;
    uniform float ringInner;
    uniform float ringOuter;
    uniform float ringEnabled;

    float ringShadowAt(vec3 worldPos) {
      if (ringEnabled < 0.5) return 1.0;
      vec3 fromPlanet = worldPos - ringPlanetCenter;
      float denom = dot(ringSunDir, ringNormal);
      if (abs(denom) < 1e-5) return 1.0;
      float tHit = -dot(fromPlanet, ringNormal) / denom;
      if (tHit <= 0.0) return 1.0;
      vec3 hit = fromPlanet + ringSunDir * tHit;
      float rHit = length(hit - ringNormal * dot(hit, ringNormal));
      if (rHit < ringInner || rHit > ringOuter) return 1.0;
      float t = (rHit - ringInner) / (ringOuter - ringInner);
      float cassini = smoothstep(0.52, 0.58, t) * (1.0 - smoothstep(0.62, 0.68, t));
      float bands = 0.55 + 0.45 * sin(t * 90.0) * sin(t * 27.0 + 1.7);
      float cover = bands * (1.0 - cassini * 0.92);
      return 1.0 - cover * 0.78;
    }
  `;
}

export class Rings {
  readonly mesh: THREE.Mesh;
  readonly material: THREE.ShaderMaterial;
  private inner: number;
  private outer: number;

  constructor(opts: RingOptions) {
    this.inner = opts.innerRadius;
    this.outer = opts.outerRadius;

    const geo = new THREE.RingGeometry(opts.innerRadius, opts.outerRadius, 256, 24);
    // Кольцо лежит в плоскости XZ: разворачиваем из XY
    geo.rotateX(-Math.PI / 2);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        innerR: { value: opts.innerRadius },
        outerR: { value: opts.outerRadius },
        planetRadius: { value: opts.planetRadius },
        color: { value: new THREE.Color(opts.color ?? 0xe8d5a3) },
        opacity: { value: opts.opacity ?? 0.95 },
        sunDirW: { value: new THREE.Vector3(1, 0, 0) },
        planetCenterW: { value: new THREE.Vector3() },
        time: { value: 0 }
      },
      vertexShader: /* glsl */ `
        varying vec3 vLocal;
        varying vec3 vWorld;
        void main() {
          vLocal = position;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float innerR;
        uniform float outerR;
        uniform float planetRadius;
        uniform vec3 color;
        uniform float opacity;
        uniform vec3 sunDirW;
        uniform vec3 planetCenterW;
        varying vec3 vLocal;
        varying vec3 vWorld;

        float hash1(float p) {
          return fract(sin(p * 127.1) * 43758.5453);
        }
        float noise1(float x) {
          float i = floor(x), f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(hash1(i), hash1(i + 1.0), f);
        }

        void main() {
          float r = length(vLocal.xz);
          float t = (r - innerR) / (outerR - innerR);
          if (t < 0.0 || t > 1.0) discard;

          // Микроструктура колец: сотни узких волокон
          float micro = noise1(t * 120.0) * 0.55 + noise1(t * 340.0) * 0.3 + noise1(t * 42.0) * 0.35;
          float bands = 0.42 + 0.58 * micro;

          // Щель Кассини и деление Энке
          float cassini = smoothstep(0.54, 0.585, t) * (1.0 - smoothstep(0.635, 0.68, t));
          float enke = smoothstep(0.895, 0.905, t) * (1.0 - smoothstep(0.915, 0.925, t));
          float alpha = bands * (1.0 - cassini * 0.94) * (1.0 - enke * 0.75);

          // Края: плавное затухание
          alpha *= smoothstep(0.0, 0.045, t) * (1.0 - smoothstep(0.86, 1.0, t) * 0.85);

          // Тень планеты на кольцах (честная)
          vec3 toPoint = vWorld - planetCenterW;
          float along = dot(toPoint, sunDirW);
          if (along > 0.0) {
            vec3 radial = toPoint - sunDirW * along;
            float dist = length(radial);
            if (dist < planetRadius) {
              float pen = smoothstep(planetRadius * 0.92, planetRadius * 1.06, dist);
              alpha *= mix(0.06, 1.0, pen);
            }
          }

          // Затемнение от Солнца (косой свет)
          float lit = 0.72 + 0.28 * abs(dot(normalize(vWorld - planetCenterW), sunDirW));

          vec3 col = color * lit * (0.72 + micro * 0.55);
          gl_FragColor = vec4(col, alpha * opacity);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.renderOrder = 6;
    this.mesh.name = 'Rings';
  }

  /** Обновление мировых параметров (Солнце и центр планеты). */
  update(sunDirWorld: THREE.Vector3, planetCenterWorld: THREE.Vector3, time: number): void {
    this.material.uniforms['sunDirW'].value.copy(sunDirWorld);
    this.material.uniforms['planetCenterW'].value.copy(planetCenterWorld);
    this.material.uniforms['time'].value = time;
  }

  /** Нормаль плоскости колец в мировых координатах (для тени на планете). */
  ringNormalWorld(out = new THREE.Vector3()): THREE.Vector3 {
    return out.set(0, 1, 0).applyQuaternion(this.mesh.getWorldQuaternion(_q)).normalize();
  }

  get innerRadius(): number {
    return this.inner;
  }

  get outerRadius(): number {
    return this.outer;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}

const _q = new THREE.Quaternion();

/**
 * Локальное поле 3D-ледяных глыб для режима «Нырнуть в кольца» (Уровень 2).
 * Тысячи обломков на орбитах вокруг камеры — InstancedMesh.
 */
export class RingDiveField {
  readonly mesh: THREE.InstancedMesh;
  private dummy = new THREE.Object3D();
  private count: number;
  private angles: Float32Array;
  private radii: Float32Array;
  private speeds: Float32Array;
  private tilts: Float32Array;

  constructor(count: number, spread: number) {
    this.count = count;
    const geo = new THREE.IcosahedronGeometry(1, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xd8e6f2,
      roughness: 0.72,
      metalness: 0.02,
      flatShading: true
    });
    this.mesh = new THREE.InstancedMesh(geo, mat, count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.angles = new Float32Array(count);
    this.radii = new Float32Array(count);
    this.speeds = new Float32Array(count);
    this.tilts = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      this.angles[i] = Math.random() * Math.PI * 2;
      this.radii[i] = 6 + Math.random() * spread;
      this.speeds[i] = (0.08 + Math.random() * 0.22) / Math.sqrt(this.radii[i] * 0.1);
      this.tilts[i] = (Math.random() - 0.5) * 0.16;
      const s = 0.12 + Math.pow(Math.random(), 2.2) * 1.5;
      this.dummy.scale.setScalar(s);
      this.dummy.position.set(
        Math.cos(this.angles[i]) * this.radii[i],
        this.tilts[i] * this.radii[i],
        Math.sin(this.angles[i]) * this.radii[i]
      );
      this.dummy.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.visible = false;
    this.mesh.frustumCulled = false;

    // Спутники-пастухи: две ледяные глыбы покрупнее, «пасущие» кольцо
    for (const r of [spread * 0.35, spread * 0.75]) {
      const shepherd = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.6, 1),
        new THREE.MeshStandardMaterial({ color: 0xb8c8d8, roughness: 0.8, flatShading: true })
      );
      shepherd.position.set(r, 0, 0);
      shepherd.userData.orbitR = r;
      shepherd.userData.angle = Math.random() * Math.PI * 2;
      shepherd.userData.speed = 0.05 / Math.sqrt(r * 0.1);
      this.mesh.add(shepherd);
    }
  }

  update(dt: number): void {
    if (!this.mesh.visible) return;
    for (const i of this.mesh.children as unknown as THREE.Mesh[]) {
      const angle = ((i.userData.angle as number) + (i.userData.speed as number) * dt) % (Math.PI * 2);
      i.userData.angle = angle;
      const r = i.userData.orbitR as number;
      i.position.set(Math.cos(angle) * r, 0, Math.sin(angle) * r);
      i.rotation.x += dt * 0.15;
    }
    for (let i = 0; i < this.count; i++) {
      this.angles[i] += this.speeds[i] * dt;
      this.dummy.position.set(
        Math.cos(this.angles[i]) * this.radii[i],
        this.tilts[i] * this.radii[i],
        Math.sin(this.angles[i]) * this.radii[i]
      );
      this.dummy.rotation.x += dt * 0.12;
      this.dummy.rotation.z += dt * 0.08;
      this.dummy.scale.setScalar(0.12 + ((i * 2654435761) % 1000) / 1000 * 1.5);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
