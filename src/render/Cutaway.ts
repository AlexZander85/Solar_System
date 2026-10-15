/**
 * CutawayView — «Вскрыть недра»: передние секторы планеты на каскадных
 * пружинах (stagger 0.035s, stiffness 64, damping 14.2) раздвигаются,
 * обнажая 3D-слои от коры до ядра с русскими выносками.
 */
import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import type { BodyDef } from '../data/bodies';

interface LayerSpec {
  name: string;
  radiusFrac: number;
  color: number;
  emissive: number;
  labelClass: string;
}

interface WedgeState {
  mesh: THREE.Mesh;
  baseRotY: number;
  delay: number;
  t: number;
  v: number;
  openSign: number;
}

const STIFFNESS = 64;
const DAMPING = 14.2;
const STAGGER = 0.035;
const WEDGES = 3;

function layersFor(def: BodyDef): LayerSpec[] {
  switch (def.texture) {
    case 'sun':
      return [
        { name: 'Термоядерное ядро', radiusFrac: 0.28, color: 0xfff2c8, emissive: 3.2, labelClass: 'core' },
        { name: 'Радиативная зона', radiusFrac: 0.55, color: 0xffb866, emissive: 1.4, labelClass: 'mantle' },
        { name: 'Конвективная зона', radiusFrac: 0.82, color: 0xff8c33, emissive: 0.9, labelClass: 'mantle' },
        { name: 'Фотосфера', radiusFrac: 0.985, color: 0xff6a1a, emissive: 0.55, labelClass: '' }
      ];
    case 'jupiter':
    case 'saturn':
      return [
        { name: 'Каменное ядро', radiusFrac: 0.18, color: 0xc9a07a, emissive: 0.7, labelClass: 'core' },
        { name: 'Металлический водород', radiusFrac: 0.52, color: 0xe8b878, emissive: 0.5, labelClass: 'mantle' },
        { name: 'Молекулярный водород', radiusFrac: 0.86, color: 0xd8c8a8, emissive: 0.25, labelClass: '' },
        { name: 'Облачные слои', radiusFrac: 0.985, color: 0xe8d8b8, emissive: 0.12, labelClass: '' }
      ];
    case 'uranus':
    case 'neptune':
      return [
        { name: 'Каменное ядро', radiusFrac: 0.22, color: 0x8a7a9a, emissive: 0.6, labelClass: 'core' },
        { name: 'Мантия: «алмазный дождь»', radiusFrac: 0.72, color: 0x5a7ac8, emissive: 0.55, labelClass: 'mantle' },
        { name: 'Ледяная мантия (метан, аммиак)', radiusFrac: 0.9, color: 0x7ac8d8, emissive: 0.25, labelClass: '' },
        { name: 'Атмосфера', radiusFrac: 0.985, color: 0x9ad8e8, emissive: 0.12, labelClass: '' }
      ];
    case 'europa':
    case 'enceladus':
    case 'ice':
      return [
        { name: 'Каменное ядро', radiusFrac: 0.3, color: 0xa08878, emissive: 0.6, labelClass: 'core' },
        { name: 'Подледный океан', radiusFrac: 0.62, color: 0x2a7fd8, emissive: 1.1, labelClass: 'mantle' },
        { name: 'Ледяная кора', radiusFrac: 0.985, color: 0xd8ecf8, emissive: 0.15, labelClass: '' }
      ];
    case 'titan':
      return [
        { name: 'Каменное ядро', radiusFrac: 0.32, color: 0x8a6a4a, emissive: 0.55, labelClass: 'core' },
        { name: 'Подповерхностный океан', radiusFrac: 0.6, color: 0x2858b8, emissive: 1.0, labelClass: 'mantle' },
        { name: 'Ледяная кора', radiusFrac: 0.92, color: 0xc8b898, emissive: 0.15, labelClass: '' },
        { name: 'Азотно-метановая атмосфера', radiusFrac: 0.985, color: 0xe8a04c, emissive: 0.1, labelClass: '' }
      ];
    case 'earth':
      return [
        { name: 'Внутреннее ядро', radiusFrac: 0.22, color: 0xffe8b0, emissive: 2.4, labelClass: 'core' },
        { name: 'Внешнее ядро — жидкое динамо', radiusFrac: 0.48, color: 0xff9833, emissive: 1.3, labelClass: 'core' },
        { name: 'Мантия', radiusFrac: 0.86, color: 0xd8581c, emissive: 0.55, labelClass: 'mantle' },
        { name: 'Кора', radiusFrac: 0.985, color: 0x8a7458, emissive: 0.12, labelClass: '' }
      ];
    case 'venus':
    case 'mars':
    case 'mercury':
    case 'moon':
    case 'rock':
    case 'io':
    default:
      return [
        { name: 'Ядро', radiusFrac: 0.3, color: 0xffc878, emissive: 1.2, labelClass: 'core' },
        { name: 'Мантия', radiusFrac: 0.78, color: 0xd85a24, emissive: 0.5, labelClass: 'mantle' },
        { name: 'Кора', radiusFrac: 0.985, color: 0x9a8878, emissive: 0.12, labelClass: '' }
      ];
  }
}

export function cutawayCaption(def: BodyDef): string {
  switch (def.texture) {
    case 'sun':
      return 'В ядре Солнца при 15 000 000 °C водород сливается в гелий — это термоядерный синтез. Энергия миллионы лет пробивается сквозь радиативную и конвективную зоны, прежде чем улететь к нам как свет.';
    case 'earth':
      return 'Жидкое внешнее ядро из расплавленного железа вращается и создаёт магнитное поле — «динамо». Оно отклоняет солнечный ветер и защищает нашу атмосферу. Внутреннее ядро твёрдое, как сталь, хотя и горячее поверхности Солнца.';
    case 'jupiter':
    case 'saturn':
      return 'Под облаками водород сжимается так, что становится металлическим — электропроводной жидкостью. Она и порождает гигантское магнитное поле. Твёрдой «поверхности» для посадки у газового гиганта нет.';
    case 'uranus':
    case 'neptune':
      return 'В мантии ледяных гигантов вода, метан и аммиак под чудовищным давлением. Учёные считают, что там идут «алмазные дожди»: метан распадается, и углерод превращается в алмазы, падающие к ядру.';
    case 'europa':
    case 'enceladus':
    case 'ice':
      return 'Ледяная кора скрывает тёплый океан жидкой воды! Гейзеры выбивают его наружу — мы можем «попробовать» этот океан, не буря лёд. Одно из самых вероятных мест обитания жизни.';
    case 'titan':
      return 'Под ледяной корой Титана может скрываться океан воды с аммиаком, а сверху — метановые озёра. Жидкая среда есть, энергия есть, органика есть — три условия жизни!';
    case 'mars':
      return 'У Марса маленькое железное ядро и тонкая кора. Магнитное поле исчезло миллиарды лет назад — и солнечный ветер унёс большую часть атмосферы. Красная планета была тёплой и влажной!';
    case 'moon':
      return 'Ядро Луны маленькое и частично расплавленное. Мантия остыла — вулканов нет. Зато реголит хранит водяной лёд в полярных кратерах.';
    default:
      return `Разрез ${def.name}: ${def.atmosphere}. Внутри — ядро, мантия и кора, как у всех каменных планет.`;
  }
}

export class CutawayView {
  readonly group = new THREE.Group();
  active = false;
  private bodyId: string | null = null;
  private wedges: WedgeState[] = [];
  private labels: CSS2DObject[] = [];
  private shells: THREE.Mesh[] = [];
  private magnetLines: THREE.Object3D[] = [];
  private elapsed = 0;
  private hidden: Array<{ obj: THREE.Object3D; visible: boolean }> = [];

  constructor() {
    this.group.visible = false;
    this.group.name = 'Cutaway';
  }

  /** Включить/выключить разрез для тела. parent — группа тела (tiltGroup). */
  toggle(def: BodyDef, radius: number, parent: THREE.Object3D): boolean {
    if (this.active && this.bodyId === def.id) {
      this.close();
      return false;
    }
    this.close();
    this.build(def, radius, parent);
    this.active = true;
    this.bodyId = def.id;
    this.group.visible = true;
    return true;
  }

  private build(def: BodyDef, radius: number, parent: THREE.Object3D): void {
    this.elapsed = 0;
    this.wedges = [];
    this.labels = [];
    this.shells = [];
    this.magnetLines = [];

    // Прячем стандартные меши тела (lod, облака)
    parent.traverse((o) => {
      if ((o as THREE.Mesh).isMesh && o.visible) {
        this.hidden.push({ obj: o, visible: o.visible });
        o.visible = false;
      }
    });

    parent.add(this.group);

    // --- Внутренние слои ---
    const layers = layersFor(def);
    // Рисуем от внешнего к внутреннему, чтобы глубина была корректной
    for (let i = layers.length - 1; i >= 0; i--) {
      const L = layers[i];
      const geo = new THREE.SphereGeometry(radius * L.radiusFrac, 48, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: L.color,
        emissive: new THREE.Color(L.emissive > 1 ? L.color : 0xff5500),
        emissiveIntensity: L.emissive,
        roughness: 0.72,
        metalness: L.name.includes('ядро') ? 0.55 : 0.08,
        transparent: L.radiusFrac > 0.95,
        opacity: L.radiusFrac > 0.95 ? 0.32 : 1
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.renderOrder = i;
      this.shells.push(mesh);
      this.group.add(mesh);

      // Выноска
      const el = document.createElement('div');
      el.className = `label3d ${L.labelClass}`;
      el.textContent = L.name;
      const label = new CSS2DObject(el);
      const angle = -0.7 + i * 0.45;
      label.position.set(
        Math.cos(angle) * radius * L.radiusFrac * 1.12,
        radius * (0.22 + i * 0.1),
        Math.sin(angle) * radius * L.radiusFrac * 1.12
      );
      this.labels.push(label);
      this.group.add(label);
    }

    // --- Магнитосфера (линии динамо) ---
    if (def.hasMagnetosphere) {
      const lineMat = new THREE.MeshBasicMaterial({
        color: def.id === 'earth' ? 0x55aaff : 0xc866ff,
        transparent: true,
        opacity: 0.38,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      for (let i = 0; i < 3; i++) {
        const torus = new THREE.Mesh(
          new THREE.TorusGeometry(radius * (1.35 + i * 0.28), radius * 0.012, 8, 64),
          lineMat
        );
        torus.rotation.x = Math.PI / 2 + (i - 1) * 0.5;
        torus.rotation.y = i * 0.7;
        this.magnetLines.push(torus);
        this.group.add(torus);
      }
    }

    // --- Три сектора-«корки» на каскадных пружинах ---
    const phiStep = (Math.PI * 2) / WEDGES;
    for (let i = 0; i < WEDGES; i++) {
      const geo = new THREE.SphereGeometry(
        radius * 1.001,
        48,
        32,
        i * phiStep,
        phiStep * 0.985
      );
      const mat = new THREE.MeshStandardMaterial({
        color: def.color,
        roughness: 0.85,
        metalness: 0.05,
        transparent: true,
        opacity: 0.98
      });
      const mesh = new THREE.Mesh(geo, mat);
      this.wedges.push({
        mesh,
        baseRotY: 0,
        delay: i * STAGGER,
        t: 0,
        v: 0,
        openSign: i === 0 ? 1 : i === 1 ? -1 : 1
      });
      this.group.add(mesh);
    }
  }

  close(): void {
    if (this.bodyId) {
      // Вернуть меши
      for (const h of this.hidden) h.obj.visible = h.visible;
    }
    this.hidden = [];
    this.group.clear();
    this.active = false;
    this.bodyId = null;
    this.wedges = [];
    this.labels = [];
    this.shells = [];
    this.magnetLines = [];
    this.group.visible = false;
  }

  update(dt: number): void {
    if (!this.active) return;
    this.elapsed += dt;

    // Каскадные пружины: stiffness 64, damping 14.2, задержка шага 0.035s
    for (const w of this.wedges) {
      const localT = this.elapsed - w.delay;
      const target = localT < 0 ? 0 : 1;
      const steps = 2;
      const h = Math.min(dt, 0.05) / steps;
      for (let s = 0; s < steps; s++) {
        const accel = STIFFNESS * (target - w.t) - DAMPING * w.v;
        w.v += accel * h;
        w.t += w.v * h;
      }
      const open = THREE.MathUtils.clamp(w.t, -0.15, 1.1);
      w.mesh.rotation.y = w.baseRotY + open * w.openSign * 0.85;
      const dir = open * w.openSign;
      w.mesh.position.set(dir * this.groupScale() * 0.55, open * 0.18, dir * 0.25);
    }

    // Плавное появление слоёв
    const reveal = THREE.MathUtils.smoothstep(this.elapsed, 0.12, 0.7);
    for (const shell of this.shells) {
      const mat = shell.material as THREE.MeshStandardMaterial;
      if (mat.transparent) mat.opacity = 0.32 * reveal + 0.06;
    }
    for (const line of this.magnetLines) {
      line.rotation.z += dt * 0.25;
    }
    for (const label of this.labels) {
      const el = label.element as HTMLElement;
      el.style.opacity = String(reveal);
    }
  }

  private groupScale(): number {
    if (this.shells.length === 0) return 1;
    this.shells[0].geometry.computeBoundingSphere();
    return this.shells[0].geometry.boundingSphere?.radius ?? 1;
  }

  get currentBodyId(): string | null {
    return this.bodyId;
  }
}
