/**
 * ModeManager — диспетчер интерактивных режимов (этапы 2–4).
 * Управляет панелями, поверхностями, нырком в кольца и полётом корабля.
 */
import type { AppContext } from './context';
import { CompareWorlds } from './CompareWorlds';
import { Scanner } from './Scanner';
import { WhatIfLab } from './WhatIfLab';
import { LightSpeed } from './LightSpeed';
import { Dangers } from './Dangers';
import { LifeQuest } from './LifeQuest';
import { Spacecraft, type FlightInput } from './Spacecraft';
import { Missions } from './Missions';
import { Sandbox } from './Sandbox';
import { PhotoLab } from './PhotoLab';
import { RingDiveField } from '../render/Rings';
import { LANDABLE_IDS, bodyById } from '../data/bodies';
import type { SurfaceInput } from '../surface/SurfaceWorld';

export type AppMode =
  | 'explore'
  | 'compare'
  | 'scanner'
  | 'lightspeed'
  | 'whatif'
  | 'dangers'
  | 'lifequest'
  | 'surface'
  | 'fly'
  | 'missions'
  | 'sandbox'
  | 'photo';

export class ModeManager {
  mode: AppMode = 'explore';
  private ctx: AppContext;

  private compare: CompareWorlds;
  private scanner: Scanner;
  private whatif: WhatIfLab;
  private lightspeed: LightSpeed;
  private dangers: Dangers;
  private lifequest: LifeQuest;
  private spacecraft: Spacecraft;
  private missions: Missions;
  private sandbox: Sandbox;
  private photo: PhotoLab;

  private ringDive: RingDiveField | null = null;
  private ringDiveActive = false;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
    this.compare = new CompareWorlds(ctx);
    this.scanner = new Scanner(ctx);
    this.whatif = new WhatIfLab(ctx);
    this.lightspeed = new LightSpeed(ctx);
    this.dangers = new Dangers(ctx);
    this.lifequest = new LifeQuest(ctx);
    this.spacecraft = new Spacecraft(ctx);
    this.missions = new Missions(ctx);
    this.sandbox = new Sandbox(ctx);
    this.photo = new PhotoLab(ctx);
  }

  setMode(mode: AppMode): void {
    if (this.mode === mode) return;
    this.deactivateCurrent();
    this.mode = mode;
    switch (mode) {
      case 'explore':
        this.ctx.ui.hideModePanel();
        break;
      case 'compare':
        this.compare.activate();
        break;
      case 'scanner':
        this.scanner.activate();
        break;
      case 'lightspeed':
        this.lightspeed.activate();
        break;
      case 'whatif':
        this.whatif.activate();
        break;
      case 'dangers':
        this.dangers.activate();
        break;
      case 'lifequest':
        this.lifequest.activate();
        break;
      case 'surface':
        this.renderSurfacePanel();
        break;
      case 'fly':
        this.spacecraft.activate();
        break;
      case 'missions':
        this.missions.activate();
        break;
      case 'sandbox':
        this.sandbox.activate();
        break;
      case 'photo':
        this.photo.activate();
        break;
    }
  }

  private deactivateCurrent(): void {
    this.stopRingDive();
    switch (this.mode) {
      case 'compare':
        this.compare.deactivate();
        break;
      case 'scanner':
        this.scanner.deactivate();
        break;
      case 'lightspeed':
        this.lightspeed.deactivate();
        break;
      case 'whatif':
        this.whatif.deactivate();
        break;
      case 'dangers':
        this.dangers.deactivate();
        break;
      case 'lifequest':
        this.lifequest.deactivate();
        break;
      case 'surface':
        this.ctx.stopSurface();
        this.ctx.ui.hideModePanel();
        break;
      case 'fly':
        this.spacecraft.deactivate();
        break;
      case 'missions':
        this.missions.deactivate();
        break;
      case 'sandbox':
        this.sandbox.deactivate();
        break;
      case 'photo':
        this.photo.deactivate();
        break;
      default:
        break;
    }
    this.ctx.ui.hideModePanel();
    void this.lifequest;
  }

  /* ---------------- Посадка и кольца ---------------- */

  private renderSurfacePanel(): void {
    const landable = LANDABLE_IDS.map((id) => {
      const def = bodyById(id);
      return `<button class="btn small" data-land="${id}">👣 ${def.name}</button>`;
    }).join('');
    this.ctx.ui.showModePanel(
      '👣 Посадка и прогулка',
      'Выберите мир для посадки. WASD — ходьба, мышь — обзор, <b>Пробел</b> — прыжок (гравитация честная!). На Титане можно взлетать, как с крыльями.',
      `
      <div class="stack">${landable}</div>
      <div class="stat" style="margin-top:10px"><b>🪐 Специальные режимы</b>
        <div class="stack" style="margin-top:6px">
          <button id="ring-dive" class="btn small">🪐 Нырнуть в кольца Сатурна</button>
          <button id="jupiter-dive" class="btn small">☁️ Погружение в облака Юпитера</button>
        </div>
      </div>
      <button id="surface-close" class="btn ghost" style="margin-top:10px">Закрыть</button>
      `
    );
    for (const btn of Array.from(document.querySelectorAll('[data-land]'))) {
      btn.addEventListener('click', () => {
        this.ctx.startSurface((btn as HTMLElement).dataset.land!);
      });
    }
    document.getElementById('ring-dive')?.addEventListener('click', () => this.startRingDive());
    document.getElementById('jupiter-dive')?.addEventListener('click', () => this.jupiterDive());
    document.getElementById('surface-close')?.addEventListener('click', () => {
      this.ctx.stopSurface();
      this.stopRingDive();
      this.ctx.ui.hideModePanel();
      this.mode = 'explore';
    });
  }

  private startRingDive(): void {
    this.ctx.selectBody('saturn');
    if (!this.ringDive) {
      this.ringDive = new RingDiveField(1400, 42);
      this.ctx.scene.add(this.ringDive.mesh);
    }
    this.ringDive.mesh.visible = true;
    this.ringDiveActive = true;
    this.ctx.rig.request('RING_DIVE');
    this.ctx.rig.setDistance(this.ctx.getScale().radiusUnits(bodyById('saturn')) * 1.9);
    this.ctx.toast('🪐 «Нырнуть в кольца»: вокруг камеры — тысячи ледяных глыб на орбитах. Поверните камеру и любуйтесь!');
  }

  stopRingDive(): void {
    if (this.ringDive) this.ringDive.mesh.visible = false;
    if (this.ringDiveActive) {
      this.ringDiveActive = false;
      this.ctx.rig.request('ORBIT');
    }
  }

  private jupiterDive(): void {
    this.ctx.selectBody('jupiter');
    this.ctx.rig.setDistance(this.ctx.getScale().radiusUnits(bodyById('jupiter')) * 1.28);
    this.ctx.rig.targetElevation = 0.05;
    this.ctx.toast(
      '☁️ Погружение: давление растёт — 1 атм… 10… 1000 атмосфер. Зонд «Галилео» передавал данные до глубины 150 км, а потом разрушился. Твёрдой поверхности у Юпитера НЕТ — вы «входите» в бесконечные облака!'
    );
  }

  /* ---------------- Обновление ---------------- */

  update(dt: number, surfaceInput: SurfaceInput, flightInput: FlightInput): void {
    this.compare.update(dt);
    this.scanner.update();
    this.whatif.update(dt);
    this.lightspeed.update(dt);
    this.dangers.update(dt);
    this.lifequest.update(dt);
    this.spacecraft.update(dt, flightInput);
    this.missions.update(dt);
    this.sandbox.update(dt);
    this.photo.update(dt);
    void surfaceInput;

    if (this.ringDiveActive && this.ringDive) {
      this.ringDive.mesh.position.copy(this.ctx.camera.position);
      this.ringDive.update(dt);
    }
  }
}
