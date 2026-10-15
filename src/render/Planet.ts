/**
 * PlanetBody — визуализация тела системы: PBR, LOD 0–2, облака с тенями,
 * атмосфера, сияние, кольца, ночные огня и тень колец на коре.
 */
import * as THREE from 'three';
import type { BodyDef } from '../data/bodies';
import { buildTextureSet, type TextureSet } from './textures';
import { Atmosphere, Aurora } from './Atmosphere';
import { Rings, ringShadowGLSL } from './Rings';

export interface PlanetBuildOptions {
  radiusUnits: number;
  qualitySegs: number;
  cloudShadows: boolean;
  withRings: boolean;
}

const ATMOSPHERE_STYLE: Record<string, { day: number; sunset: number; intensity: number; scale: number }> = {
  earth: { day: 0x5aa2ff, sunset: 0xff8844, intensity: 1.45, scale: 1.05 },
  venus: { day: 0xe8b85a, sunset: 0xff7722, intensity: 1.8, scale: 1.08 },
  mars: { day: 0xd8886a, sunset: 0x6699ff, intensity: 1.1, scale: 1.06 },
  titan: { day: 0xffa040, sunset: 0xff6622, intensity: 2.1, scale: 1.13 },
  jupiter: { day: 0xd8b48a, sunset: 0xffaa66, intensity: 0.9, scale: 1.04 },
  saturn: { day: 0xe8d8a8, sunset: 0xffcc88, intensity: 0.85, scale: 1.04 },
  uranus: { day: 0x9fe0e8, sunset: 0x88ccee, intensity: 0.8, scale: 1.05 },
  neptune: { day: 0x4b70dd, sunset: 0x5588ff, intensity: 0.85, scale: 1.05 },
  io: { day: 0xddaa44, sunset: 0xff7722, intensity: 0.4, scale: 1.02 },
  europa: { day: 0xcce0ff, sunset: 0xffccaa, intensity: 0.35, scale: 1.02 },
  enceladus: { day: 0xcce8ff, sunset: 0xaaddff, intensity: 0.45, scale: 1.03 },
  moon: { day: 0x888888, sunset: 0x886655, intensity: 0.12, scale: 1.01 }
};

export class PlanetBody {
  readonly def: BodyDef;
  /** Позиция орбиты (мировые координаты сцены, обновляется эфемеридой). */
  readonly group = new THREE.Group();
  readonly tiltGroup = new THREE.Group();
  readonly spinGroup = new THREE.Group();
  readonly cloudGroup = new THREE.Group();

  readonly radius: number;

  private lods: THREE.Mesh[] = [];
  private lodMats: THREE.MeshStandardMaterial[] = [];
  private clouds: THREE.Mesh | null = null;
  private cloudShadow: THREE.Mesh | null = null;
  private textures: TextureSet;

  atmosphere: Atmosphere | null = null;
  aurora: Aurora | null = null;
  rings: Rings | null = null;

  private ringShadowUniforms: Record<string, THREE.IUniform> = {};
  /** Ускорение вращения (эксперименты «Что если?»). */
  spinBoost = 1;
  private spin = 0;
  private cloudSpin = 0;
  private tmpSunDir = new THREE.Vector3();
  private tmpCenter = new THREE.Vector3();
  private tmpNormal = new THREE.Vector3();
  private worldPos = new THREE.Vector3();

  constructor(def: BodyDef, opts: PlanetBuildOptions) {
    this.def = def;
    this.radius = opts.radiusUnits;
    this.group.name = def.id;

    this.tiltGroup.rotation.z = THREE.MathUtils.degToRad(def.axialTiltDeg);
    this.group.add(this.tiltGroup);
    this.tiltGroup.add(this.spinGroup);
    this.tiltGroup.add(this.cloudGroup);

    this.textures = buildTextureSet(def.texture, def.radiusKm > 1500);

    // --- LOD 0/1/2 ---
    const segOptions = [
      { seg: 32, disp: false },
      { seg: Math.max(48, opts.qualitySegs), disp: false },
      { seg: Math.max(96, opts.qualitySegs * 1.4), disp: true }
    ];
    for (let i = 0; i < segOptions.length; i++) {
      const { seg, disp } = segOptions[i];
      const geo = new THREE.SphereGeometry(this.radius, Math.round(seg), Math.round(seg / 2));
      const mat = new THREE.MeshStandardMaterial({
        map: this.textures.map,
        normalMap: this.textures.normalMap ?? undefined,
        normalScale: new THREE.Vector2(0.85, 0.85),
        roughnessMap: this.textures.roughnessMap ?? undefined,
        roughness: 1,
        metalness: 0,
        emissive: def.hasCityLights || def.texture === 'io' ? 0xffffff : 0x000000,
        emissiveMap:
          def.hasCityLights || def.texture === 'io' ? this.textures.emissiveMap ?? undefined : undefined,
        emissiveIntensity: def.texture === 'io' ? 0.35 : 0.9,
        displacementMap: disp ? this.textures.displacementMap ?? undefined : undefined,
        displacementScale: disp ? this.radius * 0.012 : 0,
        displacementBias: disp ? -this.radius * 0.006 : 0
      });
      this.patchMaterial(mat);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = i === 1;
      this.lods.push(mesh);
      this.lodMats.push(mat);
      this.spinGroup.add(mesh);
    }

    // --- Облака ---
    if (def.hasClouds && this.textures.cloudMap) {
      const cloudGeo = new THREE.SphereGeometry(this.radius * 1.012, 64, 48);
      const cloudMat = new THREE.MeshStandardMaterial({
        map: this.textures.cloudMap,
        transparent: true,
        depthWrite: false,
        opacity: def.texture === 'titan' ? 0.55 : 0.88,
        roughness: 1,
        metalness: 0
      });
      this.clouds = new THREE.Mesh(cloudGeo, cloudMat);
      this.clouds.renderOrder = 3;
      this.cloudGroup.add(this.clouds);

      if (opts.cloudShadows) {
        const shadowGeo = new THREE.SphereGeometry(this.radius * 1.003, 48, 32);
        const shadowMat = new THREE.MeshBasicMaterial({
          map: this.textures.cloudMap,
          transparent: true,
          blending: THREE.MultiplyBlending,
          depthWrite: false,
          opacity: 0.4
        });
        this.cloudShadow = new THREE.Mesh(shadowGeo, shadowMat);
        this.cloudShadow.renderOrder = 2;
        this.cloudGroup.add(this.cloudShadow);
      }
    }

    // --- Атмосфера ---
    const atm = ATMOSPHERE_STYLE[def.texture];
    if (def.hasAtmosphere && atm) {
      this.atmosphere = new Atmosphere(this.radius, {
        dayColor: atm.day,
        sunsetColor: atm.sunset,
        intensity: atm.intensity,
        scale: atm.scale,
        falloff: def.texture === 'titan' ? 1.8 : 2.7
      });
      this.group.add(this.atmosphere.mesh);
    }

    // --- Полярное сияние ---
    if (def.hasMagnetosphere && (def.id === 'earth' || def.id === 'jupiter' || def.id === 'saturn')) {
      const aurColor = def.id === 'earth' ? 0x3dff9a : def.id === 'jupiter' ? 0xff66ff : 0x66ffcc;
      this.aurora = new Aurora(this.radius, aurColor);
      this.tiltGroup.add(this.aurora.mesh);
    }

    // --- Кольца ---
    if (opts.withRings && def.hasRings) {
      const isSaturn = def.id === 'saturn';
      this.rings = new Rings({
        innerRadius: isSaturn ? this.radius * 1.24 : this.radius * 1.52,
        outerRadius: isSaturn ? this.radius * 2.32 : this.radius * 2.0,
        planetRadius: this.radius,
        color: isSaturn ? 0xe8d5a3 : 0x9ab8c8,
        opacity: isSaturn ? 0.96 : 0.5
      });
      this.tiltGroup.add(this.rings.mesh);
    }
  }

  /** Инъекция тени колец и ночных огней в PBR-шейдер планеты. */
  private patchMaterial(mat: THREE.MeshStandardMaterial): void {
    const hasRings = this.def.hasRings;
    const hasNight = Boolean(this.def.hasCityLights);
    mat.onBeforeCompile = (shader) => {
      shader.uniforms['ringSunDir'] = { value: new THREE.Vector3(1, 0, 0) };
      shader.uniforms['ringPlanetCenter'] = { value: new THREE.Vector3() };
      shader.uniforms['ringNormal'] = { value: new THREE.Vector3(0, 1, 0) };
      shader.uniforms['ringInner'] = { value: 0 };
      shader.uniforms['ringOuter'] = { value: 0 };
      shader.uniforms['ringEnabled'] = { value: hasRings ? 1 : 0 };

      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWorldPosHP;')
        .replace(
          '#include <fog_vertex>',
          '#include <fog_vertex>\nvWorldPosHP = (modelMatrix * vec4(transformed, 1.0)).xyz;'
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>\nvarying vec3 vWorldPosHP;\n${ringShadowGLSL()}`
        )
        .replace(
          '#include <opaque_fragment>',
          `
          float ringSh = ringShadowAt(vWorldPosHP);
          outgoingLight *= ringSh;
          #include <opaque_fragment>
          `
        );

      if (hasNight) {
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <emissivemap_fragment>',
          `#include <emissivemap_fragment>
           {
             vec3 fromC = vWorldPosHP - ringPlanetCenter;
             float nightF = 1.0 - smoothstep(-0.12, 0.28, dot(normalize(fromC), ringSunDir));
             totalEmissiveRadiance *= nightF * 1.35;
           }`
        );
      }
      this.ringShadowUniforms = shader.uniforms;
    };
    mat.customProgramCacheKey = () => `planet_${this.def.id}`;
  }

  setLOD(level: 0 | 1 | 2): void {
    for (let i = 0; i < this.lods.length; i++) this.lods[i].visible = i === level;
    if (this.clouds) this.clouds.visible = level > 0;
    if (this.cloudShadow) this.cloudShadow.visible = level > 0;
  }

  /** Выбор LOD по дистанции камеры с гистерезисом (без «щелчков»). */
  private currentLOD: 0 | 1 | 2 = 1;
  updateLOD(cameraWorldPos: THREE.Vector3): void {
    const d = this.group.getWorldPosition(_v).distanceTo(cameraWorldPos) / this.radius;
    let next = this.currentLOD;
    if (this.currentLOD === 1 && d < 5.2) next = 2;
    else if (this.currentLOD === 2 && d > 6.4) next = 1;
    else if (this.currentLOD === 1 && d > 26) next = 0;
    else if (this.currentLOD === 0 && d < 22) next = 1;
    if (next !== this.currentLOD) {
      this.currentLOD = next;
      this.setLOD(next);
    }
  }

  /**
   * @param sunWorldPos — мировая позиция Солнца (для освещения и теней).
   */
  update(
    dt: number,
    sunWorldPos: THREE.Vector3,
    cameraWorldPos: THREE.Vector3,
    time: number
  ): void {
    // Вращение планеты
    const rotHours = Math.abs(this.def.rotationHours) || 24;
    const dir = this.def.rotationHours < 0 ? -1 : 1;
    const speed = ((Math.PI * 2 * dir) / (rotHours * 8)) * this.spinBoost; // замедление «музейного» времени
    this.spin += speed * dt;
    this.spinGroup.rotation.y = this.spin;

    if (this.clouds) {
      const cloudSpeed = this.def.cloudSpeed ?? 1.12;
      this.cloudSpin += speed * cloudSpeed * dt;
      this.cloudGroup.rotation.y = this.cloudSpin;
    }

    // Мировая позиция и направление на Солнце
    this.group.getWorldPosition(this.worldPos);
    this.tmpSunDir.copy(sunWorldPos).sub(this.worldPos).normalize();
    this.tmpCenter.copy(this.worldPos);

    // Юнит-формы для тени колец
    if (this.ringShadowUniforms['ringSunDir']) {
      const u = this.ringShadowUniforms;
      (u['ringSunDir'].value as THREE.Vector3).copy(this.tmpSunDir);
      (u['ringPlanetCenter'].value as THREE.Vector3).copy(this.tmpCenter);
      if (this.rings) {
        this.rings.ringNormalWorld(this.tmpNormal);
        (u['ringNormal'].value as THREE.Vector3).copy(this.tmpNormal);
        (u['ringInner'].value as number) = this.rings.innerRadius;
        (u['ringOuter'].value as number) = this.rings.outerRadius;
        (u['ringEnabled'].value as number) = 1;
      } else {
        (u['ringEnabled'].value as number) = 0;
      }
    }

    if (this.atmosphere) {
      this.atmosphere.update(this.tmpSunDir, cameraWorldPos);
    }
    if (this.aurora) {
      this.aurora.update(dt, this.tmpSunDir);
    }
    if (this.rings) {
      this.rings.update(this.tmpSunDir, this.tmpCenter, time);
    }

    this.updateLOD(cameraWorldPos);
  }

  get worldPosition(): THREE.Vector3 {
    return this.worldPos;
  }

  dispose(): void {
    for (const m of this.lods) {
      m.geometry.dispose();
      (m.material as THREE.Material).dispose();
    }
    this.atmosphere?.dispose();
    this.rings?.dispose();
  }
}

const _v = new THREE.Vector3();
