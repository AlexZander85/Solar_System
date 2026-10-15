/**
 * CurlVortexField — анимируемые вихри газовых и ледяных гигантов.
 *
 * Поле строится в шейдере из потенциального шума: градиент поворачивается
 * на 90 градусов и даёт бездивергентный curl-noise. Поэтому полосы не просто
 * меняют яркость, а действительно «текут» вокруг вихревых центров.
 */
import * as THREE from 'three';

export type VortexStyle = 'jupiter' | 'saturn' | 'uranus' | 'neptune';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPositionW;
  void main() {
    vUv = uv;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPositionW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float time;
  uniform vec3 baseColor;
  uniform vec3 stormColor;
  uniform float style;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPositionW;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y
    );
  }

  float potential(vec2 p) {
    float value = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      value += noise(p) * amp;
      p = p * 2.03 + vec2(17.2, 9.4);
      amp *= 0.5;
    }
    return value;
  }

  // ∇×(0, 0, potential) в двумерном срезе — бездивергентное течение.
  vec2 curlNoise(vec2 p) {
    float e = 0.035;
    float dx = potential(p + vec2(e, 0.0)) - potential(p - vec2(e, 0.0));
    float dy = potential(p + vec2(0.0, e)) - potential(p - vec2(0.0, e));
    return normalize(vec2(dy, -dx) + vec2(0.0001));
  }

  void main() {
    vec2 p = vec2(vUv.x * 13.0, vUv.y * 7.0);
    float flowTime = time * (style < 1.5 ? 0.16 : 0.085);
    vec2 advected = p;
    for (int i = 0; i < 4; i++) {
      vec2 flow = curlNoise(advected * 0.72 + vec2(flowTime, -flowTime * 0.63));
      advected += flow * (0.17 + float(i) * 0.035);
    }

    float n = potential(advected + vec2(time * 0.018, -time * 0.012));
    float nFine = potential(advected * 1.8 - vec2(time * 0.035, time * 0.02));
    float latitude = abs(vNormalW.y);
    float bandWave = sin((vUv.y * 2.0 - 1.0) * 31.0 + n * 4.2 + time * 0.05);
    float bands = smoothstep(-0.34, 0.68, bandWave * 0.5 + n * 0.8);

    vec3 col = mix(baseColor * 0.58, baseColor * 1.32, bands);
    col *= 0.78 + nFine * 0.42;

    // Большое Красное Пятно Юпитера: вихревой эллипс с живым curl-потоком.
    if (style < 1.5) {
      vec2 stormUv = vec2((vUv.x - 0.69) * 2.65, (vUv.y - 0.48) * 5.1);
      float stormR = length(stormUv);
      float storm = 1.0 - smoothstep(0.42, 1.0, stormR);
      float swirl = 0.5 + 0.5 * sin(atan(stormUv.y, stormUv.x) * 8.0 - time * 0.72 + nFine * 5.0);
      col = mix(col, stormColor * (0.68 + swirl * 0.44), storm * 0.92);
    }

    // Быстрый шестиугольный узор северного полюса Сатурна.
    if (style > 1.5 && style < 2.5) {
      vec2 h = vec2((vUv.x - 0.50) * 2.2, (vUv.y - 0.91) * 5.0);
      float a = atan(h.y, h.x);
      float hex = cos(a * 6.0) * 0.5 + 0.5;
      float ring = 1.0 - smoothstep(0.18, 0.62, abs(length(h) - 0.42));
      col = mix(col, vec3(0.48, 0.68, 0.72), ring * (0.48 + hex * 0.32));
    }

    // Контраст вихрей у ледяных гигантов.
    if (style > 2.5) {
      float eddy = smoothstep(0.54, 0.9, nFine) * (1.0 - latitude * 0.3);
      col = mix(col, col * vec3(0.68, 0.82, 1.22), eddy * 0.36);
    }

    float edge = clamp(dot(normalize(vNormalW), normalize(cameraPosition - vPositionW)), 0.0, 1.0);
    float alpha = 0.15 + bands * 0.14 + nFine * 0.07;
    alpha *= 0.72 + edge * 0.28;
    gl_FragColor = vec4(col, alpha);
  }
`;

const STYLE_INDEX: Record<VortexStyle, number> = {
  jupiter: 1,
  saturn: 2,
  uranus: 3,
  neptune: 4
};

export class CurlVortexField {
  readonly mesh: THREE.Mesh;
  private readonly material: THREE.ShaderMaterial;
  private elapsed = 0;

  constructor(radius: number, style: VortexStyle) {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        baseColor: { value: new THREE.Color(style === 'jupiter' ? 0xc98f69 : style === 'saturn' ? 0xd6c29e : style === 'uranus' ? 0x75c8d8 : 0x426fe0) },
        stormColor: { value: new THREE.Color(style === 'jupiter' ? 0xb94725 : 0x8ab8b8) },
        style: { value: STYLE_INDEX[style] }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.NormalBlending
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.006, 96, 64), this.material);
    this.mesh.name = `${style}_curl_noise_vortices`;
    this.mesh.renderOrder = 2;
  }

  update(dt: number): void {
    this.elapsed += dt;
    this.material.uniforms['time'].value = this.elapsed;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
