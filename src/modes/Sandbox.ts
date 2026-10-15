/**
 * Sandbox — «Построй свою систему».
 *
 * В песочнице используется настоящий симплектический N-тел интегратор:
 * координаты хранятся в а.е., скорости — в а.е./год, а шаг Verlet сохраняет
 * энергию заметно лучше, чем покадровое «вращение по кругу». Масса Солнца и
 * взаимное притяжение созданных планет учитываются в каждом подшаге.
 */
import * as THREE from 'three';
import type { AppContext } from './context';
import { Rings } from '../render/Rings';
import { AU_KM } from '../data/bodies';

const SOLAR_MASS_E24 = 1.9885e6;
const MU_SUN = 4 * Math.PI * Math.PI; // а.е.³ / год²
const SIM_YEARS_PER_SECOND = 0.08;
const INTEGRATION_STEP_YEARS = 1 / 720;

interface CustomPlanet {
  name: string;
  mesh: THREE.Group;
  rings: Rings | null;
  orbitLine: THREE.Line | null;
  aAU: number;
  massE24: number;
  sizeKm: number;
  massSolar: number;
  radiusUnits: number;
  positionAU: THREE.Vector3;
  velocityAUYear: THREE.Vector3;
  accelerationAUYear2: THREE.Vector3;
  initialAngle: number;
  minSeparationAU: number;
}

export class Sandbox {
  active = false;
  private ctx: AppContext;
  private planets: CustomPlanet[] = [];
  private counter = 0;
  private elapsedYears = 0;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
  }

  activate(): void {
    this.active = true;
    this.renderPanel();
    this.ctx.toast('Песочница: создайте тела — их орбиты теперь считаются N-тел интегратором.');
  }

  deactivate(): void {
    this.active = false;
    for (const p of this.planets) this.removePlanet(p);
    this.planets = [];
    this.ctx.ui.hideModePanel();
  }

  private removePlanet(p: CustomPlanet): void {
    this.ctx.spaces.root.remove(p.mesh);
    if (p.rings) p.rings.dispose();
    if (p.orbitLine) {
      p.orbitLine.removeFromParent();
      p.orbitLine.geometry.dispose();
      (p.orbitLine.material as THREE.Material).dispose();
    }
    p.mesh.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const material = (mesh as unknown as { material?: THREE.Material | THREE.Material[] }).material;
      if (Array.isArray(material)) material.forEach((m) => m.dispose());
      else material?.dispose();
    });
  }

  private renderPanel(): void {
    this.ctx.ui.showModePanel(
      '🛠️ Построй свою систему',
      'Придумайте планету: задайте расстояние от Солнца, размер, массу, наклон и кольца. Орбита считается настоящим N-тел методом, а не рисуется по кругу.',
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
        <b>Как это работает:</b> Солнце притягивает каждую планету, а планеты ещё и тянут друг друга.
        Симплектический Verlet делает маленькие шаги и не «рисует» стабильность из воздуха.
      </div>
      <button id="sb-close" class="btn ghost" style="margin-top:10px">Закрыть песочницу</button>
      `
    );

    document.getElementById('sb-add')?.addEventListener('click', () => this.addPlanet());
    document.getElementById('sb-clear')?.addEventListener('click', () => {
      for (const p of this.planets) this.removePlanet(p);
      this.planets = [];
      this.ctx.toast('Песочница очищена.');
      this.renderPanel();
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
    const orbitR = this.renderRadius(aAU);
    const angle = Math.random() * Math.PI * 2;
    const positionAU = new THREE.Vector3(Math.cos(angle) * aAU, 0, Math.sin(angle) * aAU);
    const velocityAUYear = new THREE.Vector3(-Math.sin(angle), 0, Math.cos(angle)).multiplyScalar(
      Math.sqrt(MU_SUN / aAU)
    );

    const group = new THREE.Group();
    group.name = `sandbox_${name}`;
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(radiusUnits, 48, 32),
      new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.05 })
    );
    mesh.castShadow = scale.id !== 'real';
    mesh.receiveShadow = scale.id !== 'real';
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

    const planet: CustomPlanet = {
      name,
      mesh: group,
      rings,
      orbitLine,
      aAU,
      massE24,
      sizeKm,
      massSolar: massE24 / SOLAR_MASS_E24,
      radiusUnits,
      positionAU,
      velocityAUYear,
      accelerationAUYear2: new THREE.Vector3(),
      initialAngle: angle,
      minSeparationAU: Infinity
    };
    this.planets.push(planet);
    this.writeScenePosition(planet);
    this.refreshResult(planet);
    this.ctx.toast(`Планета «${name}» добавлена в N-тел систему (${this.planets.length} тел).`);
  }

  /** Симплектический velocity-Verlet с мягким радиусом столкновения. */
  private integrate(dt: number): void {
    const total = Math.min(dt, 0.12) * SIM_YEARS_PER_SECOND;
    const steps = Math.max(1, Math.ceil(total / INTEGRATION_STEP_YEARS));
    const h = total / steps;
    for (let step = 0; step < steps; step++) {
      this.computeAccelerations();
      for (const p of this.planets) p.velocityAUYear.addScaledVector(p.accelerationAUYear2, h * 0.5);
      for (const p of this.planets) p.positionAU.addScaledVector(p.velocityAUYear, h);
      this.computeAccelerations();
      for (const p of this.planets) p.velocityAUYear.addScaledVector(p.accelerationAUYear2, h * 0.5);
      this.elapsedYears += h;
    }
  }

  private computeAccelerations(): void {
    for (const p of this.planets) {
      const r2 = Math.max(p.positionAU.lengthSq(), 0.0025);
      const invR3 = 1 / (Math.sqrt(r2) * r2);
      p.accelerationAUYear2.copy(p.positionAU).multiplyScalar(-MU_SUN * invR3);
    }
    for (let i = 0; i < this.planets.length; i++) {
      const a = this.planets[i];
      for (let j = i + 1; j < this.planets.length; j++) {
        const b = this.planets[j];
        const delta = _delta.copy(b.positionAU).sub(a.positionAU);
        const dist = Math.max(delta.length(), 0.025);
        const invR3 = 1 / (dist * dist * dist);
        a.accelerationAUYear2.addScaledVector(delta, MU_SUN * b.massSolar * invR3);
        b.accelerationAUYear2.addScaledVector(delta, -MU_SUN * a.massSolar * invR3);
        a.minSeparationAU = Math.min(a.minSeparationAU, dist);
        b.minSeparationAU = Math.min(b.minSeparationAU, dist);
      }
    }
  }

  private writeScenePosition(p: CustomPlanet): void {
    const out = _scenePos;
    const radius = Math.max(p.positionAU.length(), 0.01);
    out.copy(p.positionAU).normalize();
    if (this.ctx.getScale().id === 'real') out.multiplyScalar(AU_KM / this.ctx.getScale().kmPerUnit);
    else out.multiplyScalar(46 * Math.pow(radius, 0.62));
    p.mesh.position.copy(out);
  }

  private renderRadius(aAU: number): number {
    return this.ctx.getScale().id === 'real'
      ? (aAU * AU_KM) / this.ctx.getScale().kmPerUnit
      : 46 * Math.pow(aAU, 0.62);
  }

  private refreshResult(last: CustomPlanet): void {
    const result = document.getElementById('sb-result');
    if (!result) return;
    const neighbour = this.planets.find((p) => p !== last && Math.abs(p.positionAU.length() - last.positionAU.length()) < Math.max(p.positionAU.length(), last.positionAU.length()) * 0.35);
    const encounter = Number.isFinite(last.minSeparationAU) && last.minSeparationAU < Math.max(last.positionAU.length(), 0.2) * 0.22;
    const verdict = neighbour || encounter
      ? `<div class="verdict no">⚠ Взаимодействие сильное: N-тел интегратор покажет сближение в реальном времени. Соседние орбиты могут обменяться энергией или столкнуться.</div>`
      : `<div class="verdict ok">✅ Начальная конфигурация спокойная: ${last.name} получила круговую скорость. Но наблюдайте за соседями — гравитация может изменить орбиту.</div>`;
    const g = (6.674e-11 * (last.massE24 * 1e24)) / Math.pow(last.sizeKm * 1000, 2);
    const weight30 = 30 * (g / 9.81);
    const a = Math.max(last.positionAU.length(), 0.01);
    const climate = a < 0.5 ? '🥵 Слишком жарко' : a <= 1.6 ? '🌤 Возможна жидкая вода' : a <= 4 ? '❄️ Холодно' : '🥶 Ледяная пустыня';
    result.innerHTML = `${verdict}
      <div class="stat" style="margin-top:8px">
        <b>Приборы планеты «${last.name}»</b><br/>
        Тяга на поверхности: <b>${g.toFixed(2)} м/с²</b> (${(g / 9.81).toFixed(2)} g)<br/>
        Ребёнок 30 кг весит тут: <b>${weight30.toFixed(1)} кг</b><br/>
        Большая полуось сейчас: <b>${a.toFixed(3)} а.е.</b> · Климат: ${climate}<br/>
        <span class="muted">Интегрировано: ${this.elapsedYears.toFixed(3)} земных лет · шаг Verlet ${INTEGRATION_STEP_YEARS.toFixed(5)} года</span>
      </div>`;
  }

  update(dt: number): void {
    if (!this.active || this.planets.length === 0) return;
    this.integrate(dt);
    for (const p of this.planets) {
      this.writeScenePosition(p);
      p.mesh.rotation.y += dt * 0.2;
    }
    const last = this.planets[this.planets.length - 1];
    if (last && Math.floor(this.elapsedYears * 10) % 3 === 0) this.refreshResult(last);
  }
}

const _delta = new THREE.Vector3();
const _scenePos = new THREE.Vector3();
