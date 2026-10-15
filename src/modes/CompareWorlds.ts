/**
 * CompareWorlds — «Сравни Миры»: два тела рядом в честном масштабе
 * + интерактивный тест «Прыжок и Вес» с двумя космонавтами.
 */
import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import type { AppContext } from './context';
import { BODY_MAP, BODIES } from '../data/bodies';
import { formatNumber } from '../ui/UI';

export class CompareWorlds {
  readonly group = new THREE.Group();
  private ctx: AppContext;
  private idA = 'earth';
  private idB = 'jupiter';
  private spheres: Record<'a' | 'b', THREE.Mesh | null> = { a: null, b: null };
  private astro: Record<'a' | 'b', THREE.Group | null> = { a: null, b: null };
  private jumpT: Record<'a' | 'b', number> = { a: -1, b: -1 };
  private jumpHeights: Record<'a' | 'b', number> = { a: 0, b: 0 };
  private labelA: CSS2DObject | null = null;
  private labelB: CSS2DObject | null = null;
  active = false;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
    this.group.visible = false;
    this.group.name = 'CompareWorlds';
    ctx.scene.add(this.group);
  }

  activate(): void {
    this.active = true;
    this.ctx.setSystemVisible(false);
    this.group.visible = true;
    this.build();
    this.ctx.rig.request('SYSTEM');
    this.ctx.rig.setDistance(9);
    this.ctx.rig.targetDistance = 9;
    this.ctx.rig.targetElevation = 0.18;
    this.renderPanel();
    this.ctx.toast('Сравнение миров: выберите два тела и нажмите «Прыжок и Вес»!');
  }

  deactivate(): void {
    this.active = false;
    this.group.visible = false;
    this.ctx.setSystemVisible(true);
    this.ctx.ui.hideModePanel();
    this.clear();
  }

  private clear(): void {
    this.group.clear();
    this.spheres = { a: null, b: null };
    this.astro = { a: null, b: null };
    this.labelA = null;
    this.labelB = null;
  }

  private build(): void {
    this.clear();
    const defA = BODY_MAP[this.idA];
    const defB = BODY_MAP[this.idB];
    const maxR = Math.max(defA.radiusKm, defB.radiusKm);
    const sizeA = 1.6 * Math.pow(defA.radiusKm / maxR, 0.42);
    const sizeB = 1.6 * Math.pow(defB.radiusKm / maxR, 0.42);

    for (const [key, def, size, x] of [
      ['a', defA, sizeA, -3.2],
      ['b', defB, sizeB, 3.2]
    ] as Array<['a' | 'b', typeof defA, number, number]>) {
      const geo = new THREE.SphereGeometry(size, 64, 48);
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(def.color),
          roughness: 0.85,
          metalness: 0.02
        })
      );
      mesh.position.set(x, 0, 0);
      mesh.userData.radius = size;
      this.group.add(mesh);
      this.spheres[key] = mesh;

      // Космонавт
      const astro = makeAstronaut(size * 0.3);
      astro.position.set(x - size * 1.35, -size, 0);
      this.group.add(astro);
      this.astro[key] = astro;

      // Подпись
      const el = document.createElement('div');
      el.className = 'label3d big';
      el.textContent = def.name;
      const label = new CSS2DObject(el);
      label.position.set(x, size * 1.28, 0);
      this.group.add(label);
      if (key === 'a') this.labelA = label;
      else this.labelB = label;

      // Хилки тел
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(size * 1.35, size * 1.42, 64),
        new THREE.MeshBasicMaterial({ color: 0x47c6ff, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(x, -size * 1.02, 0);
      this.group.add(ring);
    }
  }

  private renderPanel(): void {
    const defA = BODY_MAP[this.idA];
    const defB = BODY_MAP[this.idB];
    const childKg = 30;
    const weightA = childKg * defA.gravity / 9.81;
    const weightB = childKg * defB.gravity / 9.81;
    const jump = (g: number) => (4.2 * 4.2) / (2 * g);

    const opts = BODIES.filter((b) => b.id !== 'sun')
      .map(
        (b) =>
          `<option value="${b.id}">${b.name}</option>`
      )
      .join('');

    this.ctx.ui.showModePanel(
      '⚖️ Сравни миры',
      'Два тела рядом — в честном соотношении размеров. Кнопка ниже заставит космонавтов прыгнуть: гравитация сама покажет разницу!',
      `
      <div class="row">
        <label class="field"><span>Мир A</span>
          <select id="cmp-a">${opts}</select></label>
        <label class="field"><span>Мир B</span>
          <select id="cmp-b">${opts}</select></label>
      </div>
      <div class="vs-grid" style="margin-top:10px">
        <div class="vs-cell"><b>${defA.name}</b></div>
        <div class="vs-cell"><b>${defB.name}</b></div>
        <div class="vs-cell">Радиус: ${formatNumber(defA.radiusKm)} км</div>
        <div class="vs-cell">Радиус: ${formatNumber(defB.radiusKm)} км</div>
        <div class="vs-cell">Масса: ${formatNumber(defA.massKg / 1e24, 2)}·10²⁴ кг</div>
        <div class="vs-cell">Масса: ${formatNumber(defB.massKg / 1e24, 2)}·10²⁴ кг</div>
        <div class="vs-cell">Тяга: ${formatNumber(defA.gravity, 2)} м/с²</div>
        <div class="vs-cell">Тяга: ${formatNumber(defB.gravity, 2)} м/с²</div>
        <div class="vs-cell">Сутки: ${formatNumber(defA.dayLengthHours / 24, 2)} дн</div>
        <div class="vs-cell">Сутки: ${formatNumber(defB.dayLengthHours / 24, 2)} дн</div>
        <div class="vs-cell">Год: ${formatNumber(defA.periodDays / 365.25, 2)} лет</div>
        <div class="vs-cell">Год: ${formatNumber(defB.periodDays / 365.25, 2)} лет</div>
        <div class="vs-cell">Температура: ${formatNumber(defA.meanTempC)} °C</div>
        <div class="vs-cell">Температура: ${formatNumber(defB.meanTempC)} °C</div>
        <div class="vs-cell">${defA.breathable ? '✅' : '❌'} Дышать: ${defA.breathable ? 'можно' : 'нельзя'}</div>
        <div class="vs-cell">${defB.breathable ? '✅' : '❌'} Дышать: ${defB.breathable ? 'можно' : 'нельзя'}</div>
        <div class="vs-cell">Вес 30 кг: <b class="win">${formatNumber(weightA, 1)} кг</b></div>
        <div class="vs-cell">Вес 30 кг: <b class="win">${formatNumber(weightB, 1)} кг</b></div>
      </div>
      <div class="stat" style="margin-top:10px">
        Прыжок с места (со скоростью 4,2 м/с):<br/>
        <b>${defA.name}</b> — ${formatNumber(jump(defA.gravity), 2)} м ·
        <b>${defB.name}</b> — ${formatNumber(jump(defB.gravity), 2)} м
      </div>
      <div class="stack" style="margin-top:10px">
        <button id="cmp-jump" class="btn accent">🦘 Прыжок и Вес — прыгнуть!</button>
        <button id="cmp-close" class="btn ghost">Закрыть режим</button>
      </div>
      <div class="verdict ok">Чем меньше тяга — тем выше прыжок и легче вес. На Луне ты весишь в 6 раз меньше!</div>
      `
    );

    const selA = document.getElementById('cmp-a') as HTMLSelectElement;
    const selB = document.getElementById('cmp-b') as HTMLSelectElement;
    selA.value = this.idA;
    selB.value = this.idB;
    selA.addEventListener('change', () => {
      this.idA = selA.value;
      this.build();
      this.renderPanel();
    });
    selB.addEventListener('change', () => {
      this.idB = selB.value;
      this.build();
      this.renderPanel();
    });
    document.getElementById('cmp-jump')?.addEventListener('click', () => this.doJump());
    document.getElementById('cmp-close')?.addEventListener('click', () => {
      this.deactivate();
      this.ctx.ui.hideModePanel();
    });
  }

  private doJump(): void {
    this.jumpT.a = 0;
    this.jumpT.b = 0;
    const gA = BODY_MAP[this.idA].gravity;
    const gB = BODY_MAP[this.idB].gravity;
    this.jumpHeights.a = (4.2 * 4.2) / (2 * gA);
    this.jumpHeights.b = (4.2 * 4.2) / (2 * gB);
  }

  update(dt: number): void {
    if (!this.active) return;
    for (const key of ['a', 'b'] as const) {
      const astro = this.astro[key];
      const sphere = this.spheres[key];
      if (!astro || !sphere) continue;
      if (this.jumpT[key] >= 0) {
        this.jumpT[key] += dt;
        const def = BODY_MAP[key === 'a' ? this.idA : this.idB];
        // Честная баллистика: h = h_max * sin²(π t / T), T = 2·v/g
        const T = (2 * 4.2) / def.gravity;
        const t = this.jumpT[key];
        if (t >= T) {
          this.jumpT[key] = -1;
          astro.position.y = -(sphere.userData.radius as number);
        } else {
          const hMax = this.jumpHeights[key];
          const scaleH = (sphere.userData.radius as number) * 0.3;
          const hUnits = (Math.sin((Math.PI * t) / T) ** 2) * hMax * (scaleH / 1.8);
          astro.position.y = -(sphere.userData.radius as number) + hUnits;
        }
      }
      astro.rotation.y += dt * 0.6;
      sphere.rotation.y += dt * 0.12;
    }
    void this.labelA;
    void this.labelB;
  }
}

function makeAstronaut(h: number): THREE.Group {
  const g = new THREE.Group();
  const suit = new THREE.MeshStandardMaterial({ color: 0xf0f2f6, roughness: 0.55, metalness: 0.12 });
  const visor = new THREE.MeshStandardMaterial({ color: 0x223044, roughness: 0.18, metalness: 0.75 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(h * 0.28, h * 0.5, 6, 12), suit);
  body.position.y = h * 0.55;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(h * 0.22, 16, 12), suit);
  head.position.y = h * 1.08;
  g.add(head);
  const face = new THREE.Mesh(new THREE.SphereGeometry(h * 0.16, 12, 10), visor);
  face.position.set(0, h * 1.08, h * 0.12);
  g.add(face);
  const backpack = new THREE.Mesh(new THREE.BoxGeometry(h * 0.34, h * 0.42, h * 0.18), suit);
  backpack.position.set(0, h * 0.62, -h * 0.3);
  g.add(backpack);
  return g;
}
