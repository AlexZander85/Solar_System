/**
 * Atmosphere — шейдер атмосферного рассеяния.
 * Рэлеевское свечение (френелевский ободок), закатное покраснение
 * у терминатора и тёмная ночная сторона.
 */
import * as THREE from 'three';

export interface AtmosphereOptions {
  dayColor: THREE.ColorRepresentation;
  sunsetColor: THREE.ColorRepresentation;
  /** Радиус оболочки относительно планеты. */
  scale?: number;
  /** Сила свечения. */
  intensity?: number;
  /** Плотность (степень френеля). */
  falloff?: number;
}

const vertexShader = /* glsl */ `
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 dayColor;
  uniform vec3 sunsetColor;
  uniform vec3 sunDirection;
  uniform vec3 cameraPosW;
  uniform float intensity;
  uniform float falloff;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(vNormalW);
    vec3 viewDir = normalize(cameraPosW - vPosW);
    float fresnel = pow(1.0 - clamp(dot(n, viewDir), 0.0, 1.0), falloff);

    float sunDot = dot(n, normalize(sunDirection));
    // День → закат → ночь
    float day = smoothstep(-0.12, 0.42, sunDot);
    float sunsetBand = smoothstep(-0.28, 0.12, sunDot) * (1.0 - smoothstep(0.12, 0.55, sunDot));
    vec3 col = mix(sunsetColor, dayColor, day);
    col = mix(col, sunsetColor * 1.25, sunsetBand * 0.85);

    float nightFaint = 0.045;
    float alpha = fresnel * intensity * (day * 0.95 + nightFaint);
    // Свечение терминатора усиливаем
    alpha += fresnel * sunsetBand * intensity * 0.55;

    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

export class Atmosphere {
  readonly mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private sunDir = new THREE.Vector3(1, 0, 0);

  constructor(radius: number, opts: AtmosphereOptions) {
    const scale = opts.scale ?? 1.045;
    const geometry = new THREE.SphereGeometry(radius * scale, 64, 48);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        dayColor: { value: new THREE.Color(opts.dayColor) },
        sunsetColor: { value: new THREE.Color(opts.sunsetColor) },
        sunDirection: { value: this.sunDir },
        cameraPosW: { value: new THREE.Vector3() },
        intensity: { value: opts.intensity ?? 1.35 },
        falloff: { value: opts.falloff ?? 2.6 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide
    });
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.renderOrder = 10;
  }

  /** sunDirWorld — единичный вектор от планеты к Солнцу (мировые координаты). */
  update(sunDirWorld: THREE.Vector3, cameraPosW: THREE.Vector3): void {
    this.sunDir.copy(sunDirWorld);
    (this.material.uniforms['cameraPosW'].value as THREE.Vector3).copy(cameraPosW);
  }

  setIntensity(v: number): void {
    this.material.uniforms['intensity'].value = v;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}

/**
 * Полярное сияние — мерцающий ореол вокруг полюсов магнитных планет.
 */
export class Aurora {
  readonly mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private time = 0;

  constructor(radius: number, color: THREE.ColorRepresentation = 0x44ff99) {
    const geometry = new THREE.SphereGeometry(radius * 1.06, 48, 32, 0, Math.PI * 2, 0, 0.62);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(color) },
        sunDirection: { value: new THREE.Vector3(1, 0, 0) }
      },
      vertexShader: /* glsl */ `
        varying vec3 vN;
        varying vec3 vP;
        void main() {
          vN = normalize(mat3(modelMatrix) * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vP = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float time;
        uniform vec3 color;
        uniform vec3 sunDirection;
        varying vec3 vN;
        varying vec3 vP;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
                     mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
        }
        void main() {
          float n = noise(vN.xz * 6.0 + vec2(time * 0.22, time * 0.13));
          n += 0.5 * noise(vN.xz * 14.0 - vec2(time * 0.31, 0.0));
          float band = smoothstep(0.25, 0.85, n);
          // Сияние видно на ночной стороне
          float night = smoothstep(0.25, -0.15, dot(vN, normalize(sunDirection)));
          float edge = smoothstep(1.0, 0.55, length(vN.xz));
          float alpha = band * night * edge * 0.75;
          gl_FragColor = vec4(color * alpha * 1.6, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.renderOrder = 11;
    // Южное сияние — зеркальная копия
    const south = new THREE.Mesh(geometry, this.material);
    south.rotation.x = Math.PI;
    south.renderOrder = 11;
    this.mesh.add(south);
  }

  update(dt: number, sunDirWorld: THREE.Vector3): void {
    this.time += dt;
    this.material.uniforms['time'].value = this.time;
    (this.material.uniforms['sunDirection'].value as THREE.Vector3).copy(sunDirWorld);
  }
}
