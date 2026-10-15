/**
 * Sandbox — «Построй свою систему»: добавьте свою планету,
 * настройте орбиту, массу, наклон и кольца, проверьте стабильность.
 */
import * as THREE from 'three';
import type { AppContext } from './context';
import { Rings } from '../render/Rings';

interface CustomPlanet {
  name: string;
  mesh: THREE.Group;
  rings: Rings | null;
  orbitLine: THREE.Line | null;
  aAU: number;
  radiusUnits: number;
  angle: number;
  speed: number;
  tilt: number;
}

export class Sandbox {
  active = false;
  private ctx: AppContext;
  private planets: CustomPlanet[] = [];
  private counter = 0;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
  }

  activate(): void {
    this.active = true;
    this.renderPanel();
    this.ctx.toast('Песочница: создайте свою планету и проверьте, уживётся ли она с другими!');
  }

  deactivate(): void {
    this.active = false;
    for (const p of this.planets) this.removePlanet(p);
    this.planets = [];
    this.ctx.ui.hideModePanel();
  }

  private removePlanet(p: CustomPlanet): void {
    this.ctx.spaces.root.remove(p.mesh);
    if (p.orbitLine) {
      p.orbitLine.removeFromParent();
      p.orbitLine.geometry.dispose();
      (p.orbitLine.material as THREE.Material).dispose();
    }
  }

  private renderPanel(): void {
    this.ctx.ui.showModePanel(
      '🛠️ Построй свою систему',
      'Придумайте планету: задайте расстояние от Солнца, размер, наклон оси и кольца. Система сразу проверит, стабильна ли орбита.',
      `
      <label class="field"><span>Название</span>
        <input type="text" id="sb-name" value="Новая планета" /></label>
      <label class="field"><span>Цвет</span>
        <input type="color" id="sb-color" value="#7fb8ff" /></label>
      <label class="field"><span>Расстояние (а.е.)</span>
        <input type="number" id="sb-dist" value="2.2" step="0.1" min="0.2" max="40" /></label>
      <label class="field"><span>Размер (км)</span>
        <input type="number" id="sb-size" value="8000" step="100" min="100" max="200000" /></label>
      <label class="field"><span>Масса (10²⁴ кг)</span>
        <input type="number" id="sb-mass" value="6" step="0.1" min="0.001" max="20000" /></label>
      <label class="field"><span>Наклон оси (°)</span>
        <input type="number" id="sb-tilt" value="15" step="1" min="0" max="90" /></label>
      <label class="check"><input type="checkbox" id="sb-rings" /> Добавить кольца</label>
      <div class="stack" style="margin-top:10px">
        <button id="sb-add" class="btn accent">🌍 Создать планету</button>
        <button id="sb-clear" class="btn ghost">Очистить песочницу</button>
      </div>
      <div id="sb-result"></div>
      <div class="verdict ok" style="margin-top:10px">
        <b>Закон стабильности:</b> планеты не любят соседей ближе, чем в 2 раза по расстоянию.
        Если орбиты «пересекаются» — система рано или поздно развалится, как это случилось с поясом астероидов.
      </div>
      <button id="sb-close" class="btn ghost" style="margin-top:10px">Закрыть песочницу</button>
      `
    );

    document.getElementById('sb-add')?.addEventListener('click', () => this.addPlanet());
    document.getElementById('sb-clear')?.addEventListener('click', () => {
      for (const p of this.planets) this.removePlanet(p);
      this.planets = [];
      this.ctx.toast('Песочница очищена.');
    });
    document.getElementById('sb-close')?.addEventListener('click', () => this.deactivate());
  }

  private addPlanet(): void {
    const name = (document.getElementById('sb-name') as HTMLInputElement).value || `Планета ${++this.counter}`;
    const color = (document.getElementById('sb-color') as HTMLInputElement).value;
    const aAU = Math.max(0.2, Number((document.getElementById('sb-dist') as HTMLInputElement).value) || 2);
    const sizeKm = Math.max(100, Number((document.getElementById('sb-size') as HTMLInputElement).value) || 8000);
    const tilt = Number((document.getElementById('sb-tilt') as HTMLInputElement).value) || 0;
    const massE24 = Math.max(0.001, Number((document.getElementById('sb-mass') as HTMLInputElement).value) || 6);
    const withRings = (document.getElementById('sb-rings') as HTMLInputElement).checked;

    const scale = this.ctx.getScale();
    const radiusUnits = scale.id === 'real' ? sizeKm / scale.kmPerUnit : Math.max(0.4, Math.pow(sizeKm / 6371, 0.72) * 1.6);
    const orbitR = scale.id === 'real' ? (aAU * 149597870.7) / scale.kmPerUnit : 46 * Math.pow(aAU, 0.62);

    const group = new THREE.Group();
    group.name = `sandbox_${name}`;
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(radiusUnits, 48, 32),
      new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.05 })
    );
    mesh.rotation.z = THREE.MathUtils.degToRad(tilt);
    group.add(mesh);
    this.ctx.spaces.root.add(group);

    let rings: Rings | null = null;
    if (withRings) {
      rings = new Rings({
        innerRadius: radiusUnits * 1.35,
        outerRadius: radiusUnits * 2.2,
        planetRadius: radiusUnits,
        color: 0xd8c8a8,
        opacity: 0.85
      });
      rings.mesh.rotation.z = THREE.MathUtils.degToRad(tilt);
      group.add(rings.mesh);
    }

    // Линия орбиты
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * orbitR, 0, Math.sin(a) * orbitR));
    }
    const orbitLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.3 })
    );
    this.ctx.spaces.root.add(orbitLine);

    const speed = 1 / Math.sqrt(Math.max(aAU, 0.2)); // третий закон Кеплера (нормированный)
    this.planets.push({
      name,
      mesh: group,
      rings,
      orbitLine,
      aAU,
      radiusUnits,
      angle: Math.random() * Math.PI * 2,
      speed,
      tilt
    });

    // Проверка стабильности, гравитации и климата
    const neighbours = this.planets.filter((p) => p !== this.planets[this.planets.length - 1]);
    const tooClose = neighbours.find((p) => Math.abs(p.aAU - aAU) < Math.max(p.aAU, aAU) * 0.5);
    // g = G·M/R² — ускорение на поверхности, м/с²
    const g = (6.674e-11 * (massE24 * 1e24)) / Math.pow(sizeKm * 1000, 2);
    const weight30 = 30 * (g / 9.81);
    // Климат: зона обитаемости зависит от расстояния до звезды
    const climate =
      aAU < 0.5
        ? '🥵 Слишком жарко: вода выкипит, как на Венере.'
        : aAU <= 1.6
          ? '🌤 Зона обитаемости: возможна жидкая вода и мягкий климат!'
          : aAU <= 4
            ? '❄️ Холодно: вода замёрзнет, как на Марсе.'
            : '🥶 Ледяная пустыня, как у Нептуна.';
    const result = document.getElementById('sb-result');
    if (result) {
      result.innerHTML = `
        ${
          tooClose
            ? `<div class="verdict no">⚠ Орбита нестабильна: рядом «${tooClose.name}» (${tooClose.aAU.toFixed(2)} а.е.). Через миллионы лет они столкнутся или одна будет выброшена!</div>`
            : `<div class="verdict ok">✅ Орбита стабильна! «${name}» (${aAU.toFixed(2)} а.е.) спокойно обращается вокруг Солнца. Год длится ${Math.pow(aAU, 1.5).toFixed(2)} земных лет.</div>`
        }
        <div class="stat" style="margin-top:8px">
          <b>Приборы планеты «${name}»</b><br/>
          Тяга на поверхности: <b>${g.toFixed(2)} м/с²</b> (${(g / 9.81).toFixed(2)} g)<br/>
          Ребёнок 30 кг весит тут: <b>${weight30.toFixed(1)} кг</b><br/>
          Климат: ${climate}
        </div>`;
    }
    this.ctx.toast(`Планета «${name}» создана! Спутники орбит: ${this.planets.length}`);
  }

  update(dt: number): void {
    if (!this.active) return;
    for (const p of this.planets) {
      p.angle += dt * p.speed * 0.12;
      const scale = this.ctx.getScale();
      const orbitR = scale.id === 'real' ? (p.aAU * 149597870.7) / scale.kmPerUnit : 46 * Math.pow(p.aAU, 0.62);
      p.mesh.position.set(Math.cos(p.angle) * orbitR, 0, Math.sin(p.angle) * orbitR);
      p.mesh.rotation.y += dt * 0.2;
    }
  }
}
