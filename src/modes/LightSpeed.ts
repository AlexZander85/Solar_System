/**
 * LightSpeed — «Путешествие со скоростью света» и «Задержка радиосвязи».
 * Фотонный импульс между телами + мини-игра с марсоходом.
 */
import * as THREE from 'three';
import type { AppContext } from './context';
import { LIGHT_SPEED_KM_S, dateFromJD, lightTimeSeconds } from '../data/ephemeris';
import { formatNumber } from '../ui/UI';

interface Route {
  id: string;
  from: string;
  to: string;
  label: string;
}

const ROUTES: Route[] = [
  { id: 'sun-earth', from: 'sun', to: 'earth', label: 'Солнце → Земля' },
  { id: 'earth-moon', from: 'earth', to: 'moon', label: 'Земля → Луна' },
  { id: 'earth-mars', from: 'earth', to: 'mars', label: 'Земля → Марс' },
  { id: 'sun-neptune', from: 'sun', to: 'neptune', label: 'Солнце → Нептун' }
];

function fmtTime(sec: number): string {
  if (sec < 60) return `${formatNumber(sec, 1)} с`;
  if (sec < 3600) return `${formatNumber(sec / 60, 1)} мин`;
  return `${formatNumber(sec / 3600, 2)} ч`;
}

export class LightSpeed {
  active = false;
  private ctx: AppContext;

  private photon: THREE.Sprite | null = null;
  private trail: THREE.Line | null = null;
  private flyFrom = new THREE.Vector3();
  private flyTo = new THREE.Vector3();
  private flyT = -1;
  private flyDuration = 1;
  private flyRealSeconds = 0;
  private onArrive: (() => void) | null = null;

  // Ровер
  private roverState: 'idle' | 'waiting' | 'turned' = 'idle';
  private roverTimer = 0;
  private roverDelay = 0;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
  }

  activate(): void {
    this.active = true;
    this.renderPanel();
    this.ctx.toast('Скорость света: 300 000 км/с — но и она медленна на масштабах системы!');
  }

  deactivate(): void {
    this.active = false;
    this.stopPhoton();
    this.ctx.ui.hideModePanel();
  }

  private stopPhoton(): void {
    if (this.photon) {
      this.ctx.scene.remove(this.photon);
      (this.photon.material as THREE.Material).dispose();
      this.photon = null;
    }
    if (this.trail) {
      this.ctx.scene.remove(this.trail);
      this.trail.geometry.dispose();
      (this.trail.material as THREE.Material).dispose();
      this.trail = null;
    }
    this.flyT = -1;
    this.onArrive = null;
  }

  /** Запуск фотонного импульса (с ускорением для наглядности). */
  launch(routeId: string, timeScale: number, onArrive?: () => void): void {
    const route = ROUTES.find((r) => r.id === routeId);
    if (!route) return;
    this.stopPhoton();

    const jd = this.ctx.getSimJD();
    const distKm = lightTimeSeconds(route.from, route.to, jd) * LIGHT_SPEED_KM_S;
    this.flyRealSeconds = lightTimeSeconds(route.from, route.to, jd);
    this.flyDuration = Math.min(6, Math.max(1.4, this.flyRealSeconds / timeScale));
    this.onArrive = onArrive ?? null;

    this.ctx.bodyScenePos(route.from, this.flyFrom);
    this.ctx.bodyScenePos(route.to, this.flyTo);

    // Трасса
    const geo = new THREE.BufferGeometry().setFromPoints([this.flyFrom.clone(), this.flyTo.clone()]);
    this.trail = new THREE.Line(
      geo,
      new THREE.LineDashedMaterial({
        color: 0x66ddff,
        transparent: true,
        opacity: 0.45,
        dashSize: 0.6,
        gapSize: 0.45
      })
    );
    this.trail.computeLineDistances();
    this.ctx.scene.add(this.trail);

    // Фотон
    this.photon = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: photonTexture(),
        color: 0x99eeff,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    this.photon.scale.setScalar(Math.max(0.6, distKm / 1e8));
    this.ctx.scene.add(this.photon);
    this.flyT = 0;
    this.ctx.toast(`Импульс: ${route.label} · ${fmtTime(this.flyRealSeconds)} в реальном времени (в кадре ускорено ×${formatNumber(timeScale, 0)}).`);
    this.renderPanel();
  }

  /** Мини-игра: команда марсоходу с честной задержкой. */
  sendRoverCommand(): void {
    const jd = this.ctx.getSimJD();
    this.roverDelay = lightTimeSeconds('earth', 'mars', jd);
    this.roverState = 'waiting';
    this.roverTimer = 0;
    this.launch('earth-mars', Math.max(1, this.roverDelay / 4), () => {
      this.roverState = 'turned';
      this.ctx.toast('Марсоход получил команду и повернул направо! 📡');
      this.renderPanel();
    });
    this.renderPanel();
    this.ctx.toast(`Команда «Повернуть направо» отправлена. Сигнал идёт ${fmtTime(this.roverDelay)}. Подождите — ровер не может ответить мгновенно!`);
  }

  renderPanel(): void {
    const jd = this.ctx.getSimJD();
    const dateStr = dateFromJD(jd).toLocaleDateString('ru-RU');
    const routeRows = ROUTES.map((r) => {
      const t = lightTimeSeconds(r.from, r.to, jd);
      return `<div class="stat"><b>${r.label}</b> — ${fmtTime(t)}
        <button class="btn tiny" data-route="${r.id}" style="float:right">Запустить</button></div>`;
    }).join('');

    const roverStatus =
      this.roverState === 'waiting'
        ? `<div class="verdict no">📡 Сигнал в пути… Ровер пока НЕ повернул. Таково терпение инженеров NASA!</div>`
        : this.roverState === 'turned'
          ? `<div class="verdict ok">✅ Ровер повернул. Полный цикл «команда → действие» занял ${fmtTime(this.roverDelay * 2)}.</div>`
          : `<div class="verdict ok">Нажмите кнопку — и увидите, почему марсоходами нельзя управлять джойстиком.</div>`;

    this.ctx.ui.showModePanel(
      '⚡ Скорость света и радиосвязь',
      `Дата: ${dateStr}. Свет летит 299 792 км/с, но расстояния огромны. Выберите маршрут — фотонный импульс покажет путь.`,
      `${routeRows}
       <div class="stat" style="margin-top:8px"><b>📡 Мини-игра «Марсоход»</b>
         <div style="font-size:11px;color:var(--muted);margin:6px 0">Отправьте команду «Повернуть направо» роверу в кратере Езеро.</div>
         <button id="rover-cmd" class="btn small accent">Отправить команду роверу</button>
       </div>
       ${roverStatus}
       <button id="ls-close" class="btn ghost" style="margin-top:10px">Закрыть режим</button>`
    );

    for (const btn of Array.from(document.querySelectorAll('[data-route]'))) {
      btn.addEventListener('click', () => this.launch((btn as HTMLElement).dataset.route!, 40));
    }
    document.getElementById('rover-cmd')?.addEventListener('click', () => this.sendRoverCommand());
    document.getElementById('ls-close')?.addEventListener('click', () => this.deactivate());
  }

  update(dt: number): void {
    if (!this.active && this.flyT < 0) return;
    if (this.flyT >= 0 && this.photon) {
      this.flyT += dt / this.flyDuration;
      const t = Math.min(1, this.flyT);
      this.photon.position.lerpVectors(this.flyFrom, this.flyTo, t);
      const k = 1 + Math.sin(t * Math.PI * 8) * 0.12;
      this.photon.scale.setScalar(this.photon.scale.x * 0.92 + 0.08 * Math.max(0.5, k));
      if (t >= 1) {
        const cb = this.onArrive;
        this.stopPhoton();
        cb?.();
      }
    }
    if (this.roverState === 'waiting') {
      this.roverTimer += dt;
    }
  }
}

function photonTexture(): THREE.CanvasTexture {
  const size = 96;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.3, 'rgba(140,230,255,0.8)');
  g.addColorStop(1, 'rgba(80,180,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}
