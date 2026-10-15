/**
 * SurfaceWorld — SURFACE_PATCH_SPACE: локальный участок поверхности
 * (Луна, Марс, Венера, Титан, Меркурий, Европа, Энцелад).
 * Террейн с кривизной горизонта, небо, рельеф, следы, гейзеры, пылевые дьяволы.
 */
import * as THREE from 'three';
import type { BodyDef } from '../data/bodies';
import { ProceduralTileProvider, type SurfaceTileProvider } from './SurfaceTileProvider';

export type SurfaceInput = {
  forward: number;
  side: number;
  jump: boolean;
  run: boolean;
  /** E — действие (бурение). */
  action: boolean;
  /** G — бросить камень. */
  throwStone: boolean;
};

export type CeremonyKind = 'apollo' | 'perseverance';

interface Noise2 {
  (x: number, y: number): number;
}

function makeNoise(seed: number): Noise2 {
  const hash = (ix: number, iy: number): number => {
    let h = (ix * 374761393 + iy * 668265263 + seed * 1442695041) | 0;
    h = (h ^ (h >>> 13)) | 0;
    h = Math.imul(h, 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  };
  return (x: number, y: number): number => {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = x - ix;
    const fy = y - iy;
    const u = fx * fx * (3 - 2 * fx);
    const v = fy * fy * (3 - 2 * fy);
    const a = hash(ix, iy);
    const b = hash(ix + 1, iy);
    const c = hash(ix, iy + 1);
    const d = hash(ix + 1, iy + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
}

function fbm2(n: Noise2, x: number, y: number, oct = 5): number {
  let s = 0;
  let a = 0.5;
  let f = 1;
  for (let i = 0; i < oct; i++) {
    s += a * n(x * f, y * f);
    a *= 0.5;
    f *= 2;
  }
  return s;
}

/* ----------------------------- Стили поверхностей ----------------------------- */

interface SurfaceStyle {
  ground: [number, number, number];
  ground2: [number, number, number];
  skyTop: number;
  skyHorizon: number;
  skyIsSpace: boolean;
  fogColor: number;
  fogDensity: number;
  sunSize: number;
  sunColor: number;
  gravityScale: number;
  curvature: number;
  props: 'apollo' | 'rocks' | 'volcanoes' | 'lake' | 'craters' | 'geysers' | 'ice';
  parentPlanet?: { name: string; color: number; size: number };
}

function styleFor(def: BodyDef): SurfaceStyle {
  switch (def.texture) {
    case 'moon':
      return {
        ground: [128, 126, 120], ground2: [92, 90, 86],
        skyTop: 0x000000, skyHorizon: 0x0a0a12, skyIsSpace: true, fogColor: 0x000000, fogDensity: 0,
        sunSize: 4, sunColor: 0xfff6e0, gravityScale: 1, curvature: 5,
        props: 'apollo'
      };
    case 'mercury':
      return {
        ground: [120, 114, 106], ground2: [84, 80, 74],
        skyTop: 0x000000, skyHorizon: 0x0c0a08, skyIsSpace: true, fogColor: 0x000000, fogDensity: 0,
        sunSize: 8, sunColor: 0xfff2d0, gravityScale: 1, curvature: 4,
        props: 'craters'
      };
    case 'mars':
      return {
        ground: [172, 92, 52], ground2: [118, 58, 34],
        skyTop: 0x8a4a28, skyHorizon: 0xd8986a, skyIsSpace: false, fogColor: 0xc8866a, fogDensity: 0.0022,
        sunSize: 3.2, sunColor: 0xffe8c8, gravityScale: 1, curvature: 6,
        props: 'rocks'
      };
    case 'venus':
      return {
        ground: [186, 142, 82], ground2: [140, 100, 56],
        skyTop: 0xc8963a, skyHorizon: 0xe8c060, skyIsSpace: false, fogColor: 0xd8a848, fogDensity: 0.012,
        sunSize: 0, sunColor: 0xffe0a0, gravityScale: 1, curvature: 7,
        props: 'volcanoes'
      };
    case 'titan':
      return {
        ground: [152, 96, 42], ground2: [104, 64, 28],
        skyTop: 0x7a4418, skyHorizon: 0xd8863a, skyIsSpace: false, fogColor: 0xc87830, fogDensity: 0.008,
        sunSize: 2.2, sunColor: 0xffd8a0, gravityScale: 1, curvature: 5,
        props: 'lake',
        parentPlanet: { name: 'Сатурн', color: 0xe8d8a8, size: 26 }
      };
    case 'europa':
      return {
        ground: [198, 192, 178], ground2: [150, 148, 142],
        skyTop: 0x000000, skyHorizon: 0x0a0c14, skyIsSpace: true, fogColor: 0x000000, fogDensity: 0,
        sunSize: 2, sunColor: 0xfff0d8, gravityScale: 1, curvature: 3,
        props: 'ice',
        parentPlanet: { name: 'Юпитер', color: 0xd8a878, size: 60 }
      };
    case 'enceladus':
      return {
        ground: [226, 232, 240], ground2: [180, 194, 210],
        skyTop: 0x000000, skyHorizon: 0x0c1018, skyIsSpace: true, fogColor: 0x000000, fogDensity: 0,
        sunSize: 1.4, sunColor: 0xfff4e2, gravityScale: 1, curvature: 3,
        props: 'geysers',
        parentPlanet: { name: 'Сатурн', color: 0xe8d8a8, size: 52 }
      };
    default:
      return {
        ground: [120, 112, 104], ground2: [88, 82, 76],
        skyTop: 0x0a0c14, skyHorizon: 0x2a2c38, skyIsSpace: true, fogColor: 0x0a0c14, fogDensity: 0.001,
        sunSize: 3, sunColor: 0xfff2e0, gravityScale: 1, curvature: 5,
        props: 'rocks'
      };
  }
}

/* ----------------------------- Поверхность ----------------------------- */

const TERRAIN_SIZE = 320; // метры
const EYE_HEIGHT = 1.7;

export class SurfaceWorld {
  readonly group = new THREE.Group();
  private terrain: THREE.Mesh;
  private heightNoise: Noise2;
  private style: SurfaceStyle;
  private def: BodyDef;

  // Состояние прогулки
  position = new THREE.Vector3(0, 0, 0);
  yaw = 0;
  pitch = 0;
  velocityY = 0;
  onGround = true;
  private walkTime = 0;
  private lastFootprint = 0;

  private footprints: THREE.Mesh[] = [];
  private particles: THREE.Points | null = null;
  private particleVel: Float32Array | null = null;
  private geyserPhase = 0;

  // --- Марсоход, бурение, камни ---
  mode: 'walk' | 'rover' = 'walk';
  private rover: THREE.Group | null = null;
  private roverDrill: THREE.Mesh | null = null;
  roverYaw = 0;
  roverSpeed = 0;
  drillCount = 0;
  private drillTimer = 0;
  private drillSpots: Array<{ x: number; z: number; sample: string }> = [];
  private stones: Array<{ mesh: THREE.Mesh; vel: THREE.Vector3; alive: number }> = [];
  private drillBurst: THREE.Points | null = null;

  // --- Церемонии (3D-реконструкции посадок) ---
  private ceremony: {
    kind: CeremonyKind;
    t: number;
    phase: number;
    craft: THREE.Group;
    crane?: THREE.Group;
    tethers?: THREE.LineSegments;
  } | null = null;

  constructor(def: BodyDef, qualitySegs: number) {
    this.def = def;
    this.style = styleFor(def);
    this.heightNoise = makeNoise(def.id.length * 31 + 7);
    this.group.name = `surface_${def.id}`;

    // --- Небо ---
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(2200, 32, 24),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          topColor: { value: new THREE.Color(this.style.skyTop) },
          horizonColor: { value: new THREE.Color(this.style.skyHorizon) },
          sunDir: { value: new THREE.Vector3(0.4, 0.5, 0.2).normalize() },
          isSpace: { value: this.style.skyIsSpace ? 1 : 0 },
          hazeBoost: { value: def.texture === 'venus' || def.texture === 'titan' ? 1 : 0 }
        },
        vertexShader: /* glsl */ `
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 topColor;
          uniform vec3 horizonColor;
          uniform vec3 sunDir;
          uniform float isSpace;
          uniform float hazeBoost;
          varying vec3 vDir;
          void main() {
            float h = clamp(vDir.y * 1.4, -1.0, 1.0);
            vec3 col = mix(horizonColor, topColor, smoothstep(-0.05, 0.65, h));
            float sunAmt = max(0.0, dot(normalize(vDir), normalize(sunDir)));
            // Закатное покраснение у горизонта (Марс — голубой закат!)
            if (isSpace < 0.5) {
              float nearSun = pow(sunAmt, 6.0);
              vec3 sunsetTint = hazeBoost > 0.5 ? vec3(1.0, 0.75, 0.35) : vec3(0.35, 0.55, 1.0);
              col = mix(col, sunsetTint, nearSun * 0.85);
            }
            col += vec3(1.0, 0.92, 0.78) * pow(sunAmt, 60.0) * (1.0 - isSpace * 0.4);
            gl_FragColor = vec4(col, 1.0);
          }
        `
      })
    );
    sky.frustumCulled = false;
    this.group.add(sky);

    // --- Солнце-спрайт ---
    if (this.style.sunSize > 0) {
      const spr = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: sunGlowTexture(),
          color: new THREE.Color(this.style.sunColor),
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      spr.scale.setScalar(this.style.sunSize * 26);
      spr.position.set(420, 620, 260);
      this.group.add(spr);
    }

    // --- Родительская планета в небе ---
    if (this.style.parentPlanet) {
      const pp = this.style.parentPlanet;
      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(pp.size, 32, 24),
        new THREE.MeshBasicMaterial({ color: pp.color, fog: false })
      );
      planet.position.set(-320, 380, -520);
      this.group.add(planet);
    }

    // --- Террейн с кривизной ---
    const segs = Math.max(64, qualitySegs);
    const geo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, segs, segs);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(pos.count * 3);
    const c1 = this.style.ground;
    const c2 = this.style.ground2;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const d2 = x * x + z * z;
      const h = this.rawHeight(x, z) - d2 / (2 * this.style.curvature * TERRAIN_SIZE); // кривизна горизонта
      pos.setY(i, h);
      const t = Math.min(1, Math.max(0, (this.rawHeight(x, z) + 0.3) * 1.2));
      colors[i * 3] = (c1[0] * t + c2[0] * (1 - t)) / 255;
      colors[i * 3 + 1] = (c1[1] * t + c2[1] * (1 - t)) / 255;
      colors[i * 3 + 2] = (c1[2] * t + c2[2] * (1 - t)) / 255;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    this.terrain = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: this.style.props === 'lake' ? 0.85 : 0.96,
        metalness: 0.02,
        flatShading: true
      })
    );
    this.group.add(this.terrain);

    this.buildProps();
    this.buildParticles();

    // Стартовая позиция
    this.position.set(0, this.heightAt(0, 0) + EYE_HEIGHT, 18);
    this.yaw = Math.PI;
    this.pitch = -0.06;
  }

  private rawHeight(x: number, z: number): number {
    const n = this.heightNoise;
    const big = fbm2(n, x * 0.012 + 3, z * 0.012 + 7, 4) * 9;
    const med = fbm2(n, x * 0.05 + 1, z * 0.05 + 2, 4) * 2.2;
    const small = fbm2(n, x * 0.18, z * 0.18, 3) * 0.55;
    return big + med + small - 5;
  }

  /** Высота поверхности в точке (с учётом кривизны). */
  heightAt(x: number, z: number): number {
    const d2 = x * x + z * z;
    return this.rawHeight(x, z) - d2 / (2 * this.style.curvature * TERRAIN_SIZE);
  }

  private buildProps(): void {
    const rnd = mulberry(this.def.id.length * 999);
    const s = this.style.props;

    // --- Валуны / кратеры / лёд ---
    const rockCount = s === 'geysers' || s === 'ice' ? 60 : 160;
    const rockGeo = new THREE.IcosahedronGeometry(1, 0);
    const rockMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.style.ground2[0], this.style.ground2[1], this.style.ground2[2]).multiplyScalar(1.1),
      roughness: 0.95,
      flatShading: true
    });
    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockCount);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < rockCount; i++) {
      const x = (rnd() - 0.5) * TERRAIN_SIZE * 0.92;
      const z = (rnd() - 0.5) * TERRAIN_SIZE * 0.92;
      const sc = 0.25 + Math.pow(rnd(), 2.2) * 3.2;
      dummy.position.set(x, this.heightAt(x, z) + sc * 0.24, z);
      dummy.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
      dummy.scale.set(sc, sc * (0.55 + rnd() * 0.5), sc);
      dummy.updateMatrix();
      rocks.setMatrixAt(i, dummy.matrix);
      // Крупные камни — точки интереса для бурения
      if (sc > 1.4) {
        const sampleKinds =
          this.def.id === 'mars'
            ? ['базальт, 3.2 млрд лет', 'осадочная порода — была вода!', 'железистый камень-метеорит']
            : this.def.id === 'moon'
              ? ['реголит с водяным льдом', 'базальт лунного моря', 'анортит высокогорья']
              : ['смесь льда и камня', 'соляная корка', 'замёрзший метан'];
        this.drillSpots.push({
          x,
          z,
          sample: sampleKinds[i % sampleKinds.length]
        });
      }
    }
    this.group.add(rocks);

    if (s === 'apollo') this.buildApollo(rnd);
    if (s === 'volcanoes') this.buildVolcanoes(rnd);
    if (s === 'lake') this.buildLake();
    if (s === 'geysers') this.buildGeyserVents();
    if (s === 'rocks') this.buildDustDevilMarker();

    // Марсоход на Марсе (управляемый)
    if (this.def.id === 'mars') {
      this.buildRover();
    }
  }

  /** Поставщик тайлов поверхности (по умолчанию — процедурный; можно подключить Cesium ion). */
  tileProvider: SurfaceTileProvider = new ProceduralTileProvider(7);

  /** Посадочный модуль «Аполлон». */
  private buildApollo(rnd: () => number): void {
    const lander = new THREE.Group();
    const foil = new THREE.MeshStandardMaterial({ color: 0xd8b46a, metalness: 0.85, roughness: 0.42 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x4a4a52, metalness: 0.6, roughness: 0.5 });

    const body = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.9, 2.2, 12), foil);
    body.position.y = 2.6;
    lander.add(body);
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.5, 1.9), dark);
    cabin.position.y = 4.4;
    lander.add(cabin);
    const legGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.1, 6);
    for (let i = 0; i < 4; i++) {
      const leg = new THREE.Mesh(legGeo, dark);
      const a = (i / 4) * Math.PI * 2 + 0.4;
      leg.position.set(Math.cos(a) * 2.2, 1.55, Math.sin(a) * 2.2);
      leg.rotation.z = Math.cos(a) * 0.55;
      leg.rotation.x = -Math.sin(a) * 0.55;
      lander.add(leg);
    }
    const x = -8 + rnd() * 5;
    const z = -14 + rnd() * 5;
    lander.position.set(x, this.heightAt(x, z), z);
    this.group.add(lander);
  }

  private buildVolcanoes(rnd: () => number): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0x6a4a2a, roughness: 0.9, flatShading: true });
    const lava = new THREE.MeshBasicMaterial({ color: 0xff6a22 });
    for (let i = 0; i < 6; i++) {
      const x = (rnd() - 0.5) * TERRAIN_SIZE * 0.7;
      const z = (rnd() - 0.5) * TERRAIN_SIZE * 0.7;
      const h = 8 + rnd() * 16;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(h * 0.6, h, 10, 3), mat);
      cone.position.set(x, this.heightAt(x, z) + h * 0.45, z);
      this.group.add(cone);
      const cap = new THREE.Mesh(new THREE.CircleGeometry(h * 0.14, 10), lava);
      cap.rotation.x = -Math.PI / 2;
      cap.position.set(x, this.heightAt(x, z) + h * 0.95, z);
      this.group.add(cap);
    }

    // «Блинчатые купола» — визитная карточка Венеры: сплюснутые лавовые купола
    for (let i = 0; i < 7; i++) {
      const x = (rnd() - 0.5) * TERRAIN_SIZE * 0.62;
      const z = (rnd() - 0.5) * TERRAIN_SIZE * 0.62;
      const r = 7 + rnd() * 13;
      const dome = new THREE.Mesh(
        new THREE.CylinderGeometry(r, r * 1.12, 2.2 + rnd() * 2.2, 20),
        new THREE.MeshStandardMaterial({ color: 0x9a7a4a, roughness: 0.82, flatShading: true })
      );
      dome.position.set(x, this.heightAt(x, z) + 1.1, z);
      this.group.add(dome);
      // Застывший лавовый поток — «фартук» вокруг купола
      const flow = new THREE.Mesh(
        new THREE.CircleGeometry(r * 1.45, 18),
        new THREE.MeshStandardMaterial({ color: 0x4c3820, roughness: 0.92 })
      );
      flow.rotation.x = -Math.PI / 2;
      flow.position.set(x, this.heightAt(x, z) + 0.12, z);
      this.group.add(flow);
    }
  }

  private buildLake(): void {
    // Метановое озеро — тёмное глянцевое зеркало в понижении
    const lake = new THREE.Mesh(
      new THREE.CircleGeometry(52, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0x1c1208,
        roughness: 0.12,
        metalness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.08
      })
    );
    lake.rotation.x = -Math.PI / 2;
    lake.position.set(-42, this.heightAt(-42, -30) + 0.6, -30);
    this.group.add(lake);
  }

  private buildGeyserVents(): void {
    const mat = new THREE.MeshBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.55 });
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const x = Math.cos(a) * 26;
      const z = Math.sin(a) * 26 - 20;
      const vent = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.6, 26, 8, 1, true), mat);
      vent.position.set(x, this.heightAt(x, z) + 13, z);
      this.group.add(vent);
    }
  }

  private buildDustDevilMarker(): void {
    // Марсианский пылевой вихрь: столб частиц
    const count = 240;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = Math.random() * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: 0xd8a878,
        size: 0.9,
        transparent: true,
        opacity: 0.55,
        depthWrite: false
      })
    );
    pts.position.set(38, this.heightAt(38, -20), -20);
    this.group.add(pts);
    this.dustDevil = pts;
  }

  private dustDevil: THREE.Points | null = null;

  /** Частицы гейзеров / пыли. */
  private buildParticles(): void {
    if (this.style.props !== 'geysers' && this.style.props !== 'rocks') return;
    const count = 320;
    const pos = new Float32Array(count * 3);
    this.particleVel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = Math.random() * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
      this.particleVel[i * 3 + 1] = Math.random() * 6 + 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.particles = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: this.style.props === 'geysers' ? 0xd8ecff : 0xc89868,
        size: 0.7,
        transparent: true,
        opacity: 0.7,
        depthWrite: false
      })
    );
    this.group.add(this.particles);
  }

  /** Физика прогулки, ровера, камней и церемоний. */
  update(dt: number, input: SurfaceInput, lookDX: number, lookDY: number): void {
    // Обзор
    this.yaw -= lookDX * 0.0032;
    this.pitch -= lookDY * 0.0032;
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.35, 1.35);

    if (this.ceremony) {
      this.updateCeremony(dt);
    } else if (this.mode === 'rover' && this.rover) {
      this.updateRover(dt, input);
    } else {
      this.updateWalk(dt, input);
    }

    // Бросок камня
    if (input.throwStone) this.throwStone();
    this.updateStones(dt);

    // Бурение
    if (input.action) this.tryDrill();
    this.updateDrill(dt);

    // Пылевой вихрь кружится
    if (this.dustDevil) {
      this.dustDevil.rotation.y += dt * 1.7;
      this.dustDevil.position.x += Math.sin(this.walkTime * 0.3) * dt * 1.4;
    }

    // Гейзеры / пыль
    if (this.particles && this.particleVel) {
      this.geyserPhase += dt;
      const pos = this.particles.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) + this.particleVel[i * 3 + 1] * dt;
        if (y > 34) {
          y = 0;
          pos.setX(i, (Math.random() - 0.5) * 40);
          pos.setZ(i, (Math.random() - 0.5) * 40);
        }
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }
  }

  private updateWalk(dt: number, input: SurfaceInput): void {
    const speed = (input.run ? 12 : 5.2) * (this.def.id === 'titan' ? 0.8 : 1);
    // Направления «вперёд по взгляду» и «вправо» (камера смотрит вдоль (-sin, -cos))
    const fx = -Math.sin(this.yaw);
    const fz = -Math.cos(this.yaw);
    const sx = Math.cos(this.yaw);
    const sz = -Math.sin(this.yaw);
    const vx = (fx * input.forward + sx * input.side) * speed * dt;
    const vz = (fz * input.forward + sz * input.side) * speed * dt;
    this.position.x = THREE.MathUtils.clamp(this.position.x + vx, -TERRAIN_SIZE * 0.46, TERRAIN_SIZE * 0.46);
    this.position.z = THREE.MathUtils.clamp(this.position.z + vz, -TERRAIN_SIZE * 0.46, TERRAIN_SIZE * 0.46);

    // Прыжок с реальной g тела (Титан — «взмахнуть крыльями»)
    const g = this.def.gravity;
    const onGround = this.position.y <= this.heightAt(this.position.x, this.position.z) + EYE_HEIGHT + 0.02;
    this.onGround = onGround;
    if (input.jump && onGround) {
      this.velocityY = 4.2 + (this.def.id === 'titan' ? 2.2 : 0);
      this.onGround = false;
    }
    if (!onGround || this.velocityY > 0) {
      this.velocityY -= g * dt;
      this.position.y += this.velocityY * dt;
    }
    const floor = this.heightAt(this.position.x, this.position.z) + EYE_HEIGHT;
    if (this.position.y < floor) {
      this.position.y = floor;
      this.velocityY = 0;
      this.onGround = true;
    }

    // Следы на грунте
    const moving = Math.abs(vx) + Math.abs(vz) > 0.01;
    if (moving && onGround) {
      this.walkTime += dt;
      if (this.walkTime - this.lastFootprint > 0.32) {
        this.lastFootprint = this.walkTime;
        this.addFootprint();
      }
    }
  }

  /* ----------------------------- Марсоход ----------------------------- */

  private buildRover(): void {
    const rover = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c8, metalness: 0.35, roughness: 0.55 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2c2c34, metalness: 0.5, roughness: 0.5 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xc8a050, metalness: 0.85, roughness: 0.35 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.0, 3.4), bodyMat);
    body.position.y = 1.15;
    rover.add(body);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.18, 2.6), gold);
    deck.position.y = 1.75;
    rover.add(deck);

    // Шесть колёс
    const wheelGeo = new THREE.CylinderGeometry(0.62, 0.62, 0.42, 14);
    for (const side of [-1, 1]) {
      for (const fz of [-1.25, 0, 1.25]) {
        const wheel = new THREE.Mesh(wheelGeo, dark);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(side * 1.55, 0.62, fz);
        rover.add(wheel);
      }
    }

    // Мачта с «глазами»-камерами
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1.8, 8), dark);
    mast.position.set(0, 2.7, 1.1);
    rover.add(mast);
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.5, 0.5), bodyMat);
    head.position.set(0, 3.6, 1.1);
    rover.add(head);
    for (const side of [-0.28, 0.28]) {
      const eye = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.14, 10), dark);
      eye.rotation.x = Math.PI / 2;
      eye.position.set(side, 3.6, 1.4);
      rover.add(eye);
    }

    // Солнечная панель и антенна
    const panel = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.06, 1.5), new THREE.MeshStandardMaterial({ color: 0x223a6a, metalness: 0.7, roughness: 0.3 }));
    panel.position.set(0, 1.95, -0.6);
    rover.add(panel);
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2.6), bodyMat);
    dish.position.set(-1.0, 2.2, -1.3);
    dish.rotation.x = Math.PI * 0.82;
    rover.add(dish);

    // Буровая установка
    const drill = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.1, 8), gold);
    drill.position.set(1.35, 1.2, 1.6);
    drill.rotation.x = Math.PI / 2;
    rover.add(drill);
    this.roverDrill = drill;

    rover.position.set(6, this.heightAt(6, 6) + 0.05, 6);
    this.rover = rover;
    this.roverYaw = 0;
    this.group.add(rover);
  }

  toggleRover(): void {
    if (!this.rover) return;
    if (this.mode === 'rover') {
      this.mode = 'walk';
      this.position.set(
        this.rover.position.x + 3,
        this.heightAt(this.rover.position.x + 3, this.rover.position.z) + EYE_HEIGHT,
        this.rover.position.z
      );
    } else {
      this.mode = 'rover';
      // Взгляд — по курсу ровера
      this.yaw = this.roverYaw + Math.PI;
      this.pitch = -0.08;
    }
  }

  private updateRover(dt: number, input: SurfaceInput): void {
    const rover = this.rover!;
    // Разгон, трение, повороты
    const accel = input.forward * 6.5;
    this.roverSpeed += accel * dt;
    this.roverSpeed *= Math.exp(-dt * 0.85);
    this.roverSpeed = THREE.MathUtils.clamp(this.roverSpeed, -4.5, 9);
    this.roverYaw += input.side * dt * 1.25 * Math.sign(this.roverSpeed || 1) * Math.min(1, Math.abs(this.roverSpeed) * 0.4 + 0.15);

    rover.position.x = THREE.MathUtils.clamp(
      rover.position.x + Math.sin(this.roverYaw) * this.roverSpeed * dt,
      -TERRAIN_SIZE * 0.46,
      TERRAIN_SIZE * 0.46
    );
    rover.position.z = THREE.MathUtils.clamp(
      rover.position.z + Math.cos(this.roverYaw) * this.roverSpeed * dt,
      -TERRAIN_SIZE * 0.46,
      TERRAIN_SIZE * 0.46
    );
    rover.position.y = this.heightAt(rover.position.x, rover.position.z) + 0.05;
    rover.rotation.y = this.roverYaw;

    // Камера — вид сзади-сверху, обзор мышью
    const back = 10.5;
    this.position.set(
      rover.position.x - Math.sin(this.roverYaw) * back,
      rover.position.y + 4.6,
      rover.position.z - Math.cos(this.roverYaw) * back
    );
  }

  /* ----------------------------- Бурение ----------------------------- */

  tryDrill(): void {
    if (this.drillTimer > 0) return;
    const px = this.mode === 'rover' && this.rover ? this.rover.position.x : this.position.x;
    const pz = this.mode === 'rover' && this.rover ? this.rover.position.z : this.position.z;
    const radius = this.mode === 'rover' ? 14 : 4.5;
    let best: { x: number; z: number; sample: string } | null = null;
    let bestD = radius * radius;
    for (const spot of this.drillSpots) {
      const d = (spot.x - px) ** 2 + (spot.z - pz) ** 2;
      if (d < bestD) {
        bestD = d;
        best = spot;
      }
    }
    if (!best) return;
    this.drillTimer = 2.4;
    this.pendingSample = best.sample;
  }

  private pendingSample: string | null = null;

  private updateDrill(dt: number): void {
    if (this.drillTimer <= 0) return;
    this.drillTimer -= dt;
    if (this.roverDrill) this.roverDrill.rotation.z += dt * 22;

    // Пыль из-под бура
    if (!this.drillBurst) {
      const count = 60;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 1.4;
        pos[i * 3 + 1] = Math.random() * 1.2;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      this.drillBurst = new THREE.Points(
        geo,
        new THREE.PointsMaterial({ color: 0xd8b890, size: 0.16, transparent: true, opacity: 0.85, depthWrite: false })
      );
      const px = this.mode === 'rover' && this.rover ? this.rover.position.x : this.position.x;
      const pz = this.mode === 'rover' && this.rover ? this.rover.position.z : this.position.z;
      this.drillBurst.position.set(px + 1.35, this.heightAt(px, pz) + 0.2, pz + 1.6);
      this.group.add(this.drillBurst);
    }

    if (this.drillTimer <= 0) {
      this.drillCount++;
      const sample = this.pendingSample ?? 'капля подземного льда';
      this.pendingSample = null;
      window.dispatchEvent(
        new CustomEvent('helios:drill', {
          detail: { count: this.drillCount, sample, body: this.def.name }
        })
      );
    }
  }

  /* ----------------------------- Бросок камня ----------------------------- */

  throwStone(): void {
    const dir = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    const geo = new THREE.IcosahedronGeometry(0.22, 0);
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({ color: 0x8a8078, roughness: 0.95, flatShading: true })
    );
    mesh.position.copy(this.position).addScaledVector(dir, 1.2).add(new THREE.Vector3(0, -0.35, 0));
    this.group.add(mesh);
    this.stones.push({
      mesh,
      vel: dir.multiplyScalar(9.5).add(new THREE.Vector3(0, 2.2, 0)),
      alive: 20
    });
    if (this.stones.length > 12) {
      const old = this.stones.shift()!;
      this.group.remove(old.mesh);
      old.mesh.geometry.dispose();
    }
  }

  private updateStones(dt: number): void {
    for (const s of this.stones) {
      s.alive -= dt;
      s.vel.y -= this.def.gravity * dt;
      s.mesh.position.addScaledVector(s.vel, dt);
      const floor = this.heightAt(s.mesh.position.x, s.mesh.position.z) + 0.22;
      if (s.mesh.position.y < floor) {
        s.mesh.position.y = floor;
        if (Math.abs(s.vel.y) > 0.6) {
          s.vel.y = -s.vel.y * 0.38;
          s.vel.x *= 0.62;
          s.vel.z *= 0.62;
        } else {
          s.vel.set(0, 0, 0);
        }
      }
      s.mesh.rotation.x += dt * 3;
    }
  }

  /* ----------------------------- Церемонии посадок ----------------------------- */

  /** 3D-реконструкция: посадка «Аполлона» или «небесный кран» Perseverance. */
  startCeremony(kind: CeremonyKind): void {
    if (this.ceremony) this.clearCeremony();
    if (kind === 'apollo') {
      const craft = this.buildLander();
      craft.position.set(-8, this.heightAt(-8, -14) + 58, -14);
      this.group.add(craft);
      this.ceremony = { kind, t: 0, phase: 0, craft };
    } else {
      const crane = this.buildCrane();
      const craft = this.rover ?? new THREE.Group();
      if (!this.rover) {
        // на всякий случай — хотя бы корпус
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(2.6, 1.0, 3.4),
          new THREE.MeshStandardMaterial({ color: 0xd8d2c8, roughness: 0.55 })
        );
        craft.add(body);
      }
      craft.position.set(0, this.heightAt(0, 0) + 26, 0);
      crane.position.copy(craft.position).add(new THREE.Vector3(0, 7.5, 0));
      this.group.add(crane);
      // Тросы
      const points = new Float32Array([
        -1.2, -4.2, -1.4, -1.2, -7.2, -1.4, 1.2, -4.2, -1.4, 1.2, -7.2, -1.4,
        -1.2, -4.2, 1.4, -1.2, -7.2, 1.4, 1.2, -4.2, 1.4, 1.2, -7.2, 1.4
      ]);
      const tGeo = new THREE.BufferGeometry();
      tGeo.setAttribute('position', new THREE.BufferAttribute(points, 3));
      const tethers = new THREE.LineSegments(
        tGeo,
        new THREE.LineBasicMaterial({ color: 0xd8d8d8, transparent: true, opacity: 0.9 })
      );
      crane.add(tethers);
      this.group.add(craft);
      this.ceremony = { kind, t: 0, phase: 0, craft, crane, tethers };
    }
    this.position.set(10, this.heightAt(10, 14) + EYE_HEIGHT, 14);
    this.yaw = 0.57; // взгляд на площадку посадки
    this.pitch = -0.12;
  }

  private clearCeremony(): void {
    if (!this.ceremony) return;
    const c = this.ceremony;
    // Ровер — постоянный объект мира: при посадке Perseverance он остаётся на грунте
    if (c.kind === 'apollo') {
      this.group.remove(c.craft);
    }
    if (c.crane) {
      this.group.remove(c.crane);
    }
    this.ceremony = null;
  }

  private updateCeremony(dt: number): void {
    const c = this.ceremony!;
    c.t += dt;

    if (c.kind === 'apollo') {
      // Фаза 0: снижение, фаза 1: пыль, фаза 2: стоянка
      const floorY = this.heightAt(c.craft.position.x, c.craft.position.z);
      if (c.phase === 0) {
        const targetY = floorY;
        const speed = Math.max(1.2, (c.craft.position.y - targetY) * 0.16);
        c.craft.position.y = Math.max(targetY, c.craft.position.y - speed * dt * 3.2);
        c.craft.rotation.y += dt * 0.06;
        if (c.craft.position.y <= targetY + 0.02) {
          c.phase = 1;
          c.t = 0;
          this.spawnDust(c.craft.position.x, c.craft.position.z, 2.2);
          window.dispatchEvent(
            new CustomEvent('helios:ceremony', {
              detail: { msg: '«Хьюстон, здесь База Спокойствия. „Орёл“ сел» — 20 июля 1969 года.' }
            })
          );
        }
      } else if (c.phase === 1 && c.t > 2.4) {
        c.phase = 2;
        window.dispatchEvent(
          new CustomEvent('helios:ceremony', {
            detail: { msg: 'Пыль осела. Астронавты готовятся к первому шагу: 1/6 гравитации — шаги будут прыжками!' }
          })
        );
      }
    } else {
      // «Небесный кран» Perseverance: снижение → зависание → отцепка → уход
      const floorY = this.heightAt(c.craft.position.x, c.craft.position.z) + 0.05;
      if (c.phase === 0) {
        const speed = Math.max(0.9, (c.craft.position.y - floorY) * 0.12);
        c.craft.position.y = Math.max(floorY, c.craft.position.y - speed * dt * 2.6);
        if (c.crane) c.crane.position.copy(c.craft.position).add(new THREE.Vector3(0, 7.5, 0));
        if (c.craft.position.y <= floorY + 0.05) {
          c.phase = 1;
          c.t = 0;
          this.spawnDust(c.craft.position.x, c.craft.position.z, 1.6);
          window.dispatchEvent(
            new CustomEvent('helios:ceremony', {
              detail: { msg: 'Ровер на грунте! «Небесный кран» отцепляет тросы…' }
            })
          );
        }
      } else if (c.phase === 1 && c.t > 1.8) {
        c.phase = 2;
        c.t = 0;
        if (c.tethers) c.tethers.visible = false;
        window.dispatchEvent(
          new CustomEvent('helios:ceremony', {
            detail: { msg: '✅ 7 минут ужаса закончились! Perseverance в кратере Езеро — дно древнего озера.' }
          })
        );
      } else if (c.phase === 2 && c.crane) {
        c.crane.position.y += dt * 9;
        c.crane.position.x += dt * 5;
        if (c.t > 4) this.clearCeremony();
      }
    }
  }

  private spawnDust(x: number, z: number, scale: number): void {
    const count = 120;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = x + (Math.random() - 0.5) * 2 * scale;
      pos[i * 3 + 1] = this.heightAt(x, z) + Math.random() * 0.6;
      pos[i * 3 + 2] = z + (Math.random() - 0.5) * 2 * scale;
      const a = Math.random() * Math.PI * 2;
      vel[i * 3] = Math.cos(a) * (4 + Math.random() * 6) * scale;
      vel[i * 3 + 1] = 1 + Math.random() * 3;
      vel[i * 3 + 2] = Math.sin(a) * (4 + Math.random() * 6) * scale;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0xc8b8a0, size: 0.5, transparent: true, opacity: 0.8, depthWrite: false })
    );
    this.group.add(pts);
    // Простое затухание через таймер
    const start = performance.now();
    const tick = (): void => {
      const t = (performance.now() - start) / 1800;
      const p = pts.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < p.count; i++) {
        p.setXYZ(
          i,
          p.getX(i) + vel[i * 3] * 0.016,
          p.getY(i) + vel[i * 3 + 1] * 0.016 * (1 - t * 0.7),
          p.getZ(i) + vel[i * 3 + 2] * 0.016
        );
        vel[i * 3 + 1] -= 0.06;
      }
      p.needsUpdate = true;
      (pts.material as THREE.PointsMaterial).opacity = 0.8 * (1 - t);
      if (t < 1) requestAnimationFrame(tick);
      else {
        this.group.remove(pts);
        pts.geometry.dispose();
      }
    };
    requestAnimationFrame(tick);
  }

  /** Посадочный модуль «Аполлон» для церемонии. */
  private buildLander(): THREE.Group {
    const lander = new THREE.Group();
    const foil = new THREE.MeshStandardMaterial({ color: 0xd8b46a, metalness: 0.85, roughness: 0.42 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x4a4a52, metalness: 0.6, roughness: 0.5 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.9, 2.2, 12), foil);
    body.position.y = 2.6;
    lander.add(body);
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.5, 1.9), dark);
    cabin.position.y = 4.4;
    lander.add(cabin);
    const legGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.1, 6);
    for (let i = 0; i < 4; i++) {
      const leg = new THREE.Mesh(legGeo, dark);
      const a = (i / 4) * Math.PI * 2 + 0.4;
      leg.position.set(Math.cos(a) * 2.2, 1.55, Math.sin(a) * 2.2);
      leg.rotation.z = Math.cos(a) * 0.55;
      leg.rotation.x = -Math.sin(a) * 0.55;
      lander.add(leg);
    }
    return lander;
  }

  /** «Небесный кран» с соплами вверх. */
  private buildCrane(): THREE.Group {
    const crane = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0xd8d2c8, metalness: 0.4, roughness: 0.5 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2c2c34, metalness: 0.55, roughness: 0.5 });
    const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.6, 3.2), mat);
    crane.add(hull);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as Array<[number, number]>) {
      const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.55, 1.2, 10), dark);
      nozzle.position.set(sx * 1.1, 1.3, sz * 1.1);
      crane.add(nozzle);
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.42, 2.2, 10),
        new THREE.MeshBasicMaterial({ color: 0x88c8ff, transparent: true, opacity: 0.65 })
      );
      flame.position.set(sx * 1.1, 2.6, sz * 1.1);
      flame.rotation.x = Math.PI;
      crane.add(flame);
    }
    return crane;
  }

  private addFootprint(): void {
    const geo = new THREE.PlaneGeometry(0.34, 0.62);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.28,
      depthWrite: false
    });
    const fp = new THREE.Mesh(geo, mat);
    fp.rotation.x = -Math.PI / 2;
    fp.rotation.z = -this.yaw;
    fp.position.set(
      this.position.x + Math.sin(this.yaw + Math.PI) * 0.35,
      this.heightAt(this.position.x, this.position.z) + 0.04,
      this.position.z + Math.cos(this.yaw + Math.PI) * 0.35
    );
    this.group.add(fp);
    this.footprints.push(fp);
    if (this.footprints.length > 140) {
      const old = this.footprints.shift()!;
      this.group.remove(old);
      old.geometry.dispose();
      (old.material as THREE.Material).dispose();
    }
  }

  /** Сброс на стартовую точку (при смене тела). */
  reset(): void {
    this.position.set(0, this.heightAt(0, 0) + EYE_HEIGHT, 18);
    this.yaw = 0;
    this.pitch = -0.06;
    this.velocityY = 0;
    this.mode = 'walk';
    this.roverSpeed = 0;
    this.clearCeremony();
  }

  dispose(): void {
    this.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = (m as unknown as { material?: THREE.Material | THREE.Material[] }).material;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else mat?.dispose();
    });
    this.group.clear();
  }
}

function mulberry(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sunGlowTexture(): THREE.CanvasTexture {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.16, 'rgba(255,244,214,0.85)');
  g.addColorStop(0.45, 'rgba(255,210,140,0.25)');
  g.addColorStop(1, 'rgba(255,180,90,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
