/**
 * Spacecraft — режим «Стань космонавтом»: полёт корабля с тягой,
 * гравитацией, гравитационной пращей и посадкой с парашютом.
 */
import * as THREE from 'three';
import type { AppContext } from './context';

export interface FlightInput {
  thrust: number; // -1..1
  strafe: number;
  lift: number;
  pitch: number;
  yaw: number;
  roll: number;
  parachute: boolean;
}

export class Spacecraft {
  active = false;
  readonly group = new THREE.Group();

  private ctx: AppContext;
  private velocity = new THREE.Vector3();
  private fuel = 100;
  private landed = false;
  private crashed = false;
  private engineGlow: THREE.Sprite;
  private trail: THREE.Vector3[] = [];
  private trailLine: THREE.Line | null = null;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
    this.group.name = 'Spacecraft';
    this.buildShip();
    this.engineGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: engineTexture(),
        color: 0x66c8ff,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    this.engineGlow.scale.setScalar(1.4);
    this.engineGlow.layers.enable(1); // selective bloom: only двигатель светится
    this.engineGlow.position.set(0, 0, -1.6);
    this.group.add(this.engineGlow);
    this.group.visible = false;
    ctx.scene.add(this.group);
  }

  private buildShip(): void {
    const hull = new THREE.MeshStandardMaterial({ color: 0xd8dde8, metalness: 0.65, roughness: 0.35 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2c3444, metalness: 0.5, roughness: 0.5 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xd8b45a, metalness: 0.9, roughness: 0.3 });

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.72, 2.6, 12), hull);
    body.rotation.x = Math.PI / 2;
    this.group.add(body);

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.1, 12), hull);
    nose.rotation.x = Math.PI / 2;
    nose.position.z = 1.85;
    this.group.add(nose);

    const window = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 10), dark);
    window.position.set(0, 0.3, 0.95);
    this.group.add(window);

    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.08, 1.0), gold);
      wing.position.set(side * 1.15, 0, -0.3);
      wing.rotation.z = side * -0.18;
      this.group.add(wing);
      const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 0.9, 10), dark);
      engine.rotation.x = Math.PI / 2;
      engine.position.set(side * 1.15, 0, -1.05);
      this.group.add(engine);
    }
  }

  activate(): void {
    this.active = true;
    this.landed = false;
    this.crashed = false;
    this.fuel = 100;
    this.velocity.set(0, 0, 0);
    this.group.visible = true;
    this.group.position.set(0, 0, 14);
    this.group.rotation.set(0, 0, 0);
    this.ctx.rig.request('SPACECRAFT_FLIGHT');
    this.ctx.rig.surfacePose.position.copy(this.group.position).add(new THREE.Vector3(0, 3.2, -9));
    this.renderPanel();
    this.ctx.toast('Вы за штурвалом! W — тяга, мышь — поворот, P — парашют. Удачи, космонавт!');
  }

  deactivate(): void {
    this.active = false;
    this.group.visible = false;
    this.trail = [];
    if (this.trailLine) {
      this.ctx.scene.remove(this.trailLine);
      this.trailLine.geometry.dispose();
      (this.trailLine.material as THREE.Material).dispose();
      this.trailLine = null;
    }
    this.ctx.rig.request('ORBIT');
    this.ctx.ui.hideModePanel();
  }

  private renderPanel(): void {
    this.ctx.ui.showModePanel(
      '🚀 Стань космонавтом',
      'Управление кораблём: тяга, инерция и гравитация — всё честно. Попробуйте сесть или уйти на гравитационную пращу!',
      `
      <div class="stat"><b>Управление</b><br/>
        W / ↑ — тяга вперёд · S / ↓ — реверс<br/>
        A / D — боковой импульс · Shift — ускорение<br/>
        Мышь — ориентация · P — парашют</div>
      <div class="stat" style="margin-top:8px"><b>Приборы</b>
        <div class="bar-wrap"><div id="fuel-bar" class="bar-fill" style="width:100%"></div></div>
        <div id="flight-status" style="font-size:11px;color:var(--muted);margin-top:6px">Топливо 100% · Полёт нормальный</div>
      </div>
      <div class="verdict ok">💡 <b>Гравитационная праща:</b> подлетите к планете «по касательной» — она ускорит вас сама, как Вояджер у Сатурна!</div>
      <button id="slingshot" class="btn small" style="margin-top:8px">⚡ Тренажёр пращи: сброс у Юпитера</button>
      <button id="ship-close" class="btn ghost" style="margin-top:10px">Завершить полёт</button>
      `
    );
    document.getElementById('ship-close')?.addEventListener('click', () => this.deactivate());
    document.getElementById('slingshot')?.addEventListener('click', () => this.slingshot());
  }

  /** Тренажёр: корабль на гиперболе мимо Юпитера — гравитация сделает всё сама. */
  private slingshot(): void {
    this.ctx.selectBody('jupiter');
    const r = this.ctx.getScale().radiusUnits(this.ctx.bodyDef('jupiter'));
    this.group.position.set(0, r * 0.9, r * 5.2);
    this.velocity.set(-7.5, 0, -2.2);
    this.landed = false;
    this.crashed = false;
    this.ctx.toast('⚡ Праща запущена: смотрите, как гравитация Юпитера «ловит» корабль и швыряет прочь — именно так летел Вояджер!');
  }

  update(dt: number, input: FlightInput): void {
    if (!this.active) return;

    const gBody = this.ctx.bodyDef(this.currentBodyId());
    const g = gBody.gravity * 0.06; // игровая константа для визуальной орбиты
    const pos = this.group.position;

    // Ориентация
    this.group.rotation.x += input.pitch * dt * 1.6;
    this.group.rotation.y += input.yaw * dt * 1.6;
    this.group.rotation.z += input.roll * dt * 1.6;

    // Тяга вперёд — по оси корабля
    if (input.thrust !== 0 && this.fuel > 0 && !this.landed) {
      const dir = new THREE.Vector3(0, 0, 1).applyQuaternion(this.group.quaternion);
      this.velocity.addScaledVector(dir, input.thrust * dt * 6.2);
      this.fuel = Math.max(0, this.fuel - Math.abs(input.thrust) * dt * 2.4);
    }
    if (input.strafe !== 0 && this.fuel > 0 && !this.landed) {
      const dir = new THREE.Vector3(1, 0, 0).applyQuaternion(this.group.quaternion);
      this.velocity.addScaledVector(dir, input.strafe * dt * 3.2);
      this.fuel = Math.max(0, this.fuel - Math.abs(input.strafe) * dt * 1.2);
    }
    if (input.lift !== 0 && this.fuel > 0 && !this.landed) {
      const dir = new THREE.Vector3(0, 1, 0).applyQuaternion(this.group.quaternion);
      this.velocity.addScaledVector(dir, input.lift * dt * 3.2);
      this.fuel = Math.max(0, this.fuel - Math.abs(input.lift) * dt * 1.2);
    }

    // Гравитация к центру (фокус-тело в начале координат)
    const r = Math.max(pos.length(), 1e-3);
    const accel = pos.clone().multiplyScalar(-g / (r * r) * 60);
    this.velocity.addScaledVector(accel, dt);

    // Парашют
    if (input.parachute) {
      this.velocity.multiplyScalar(Math.exp(-dt * 1.6));
    }

    pos.addScaledVector(this.velocity, dt);

    // Посадка / крушение
    const bodyR = this.ctx.getScale().radiusUnits(gBody) * 1.02;
    if (r < bodyR) {
      pos.setLength(bodyR);
      const speed = this.velocity.length();
      if (speed > 3.2 && !input.parachute) {
        this.crashed = true;
        this.landed = false;
        this.velocity.set(0, 0, 0);
        this.ctx.toast('💥 Жёсткая посадка! В следующий раз включайте парашют (клавиша P) раньше.');
      } else {
        this.landed = true;
        this.velocity.set(0, 0, 0);
        this.ctx.toast('🎯 Мягкая посадка! Вы — настоящий космонавт.');
      }
    }

    // След двигателя
    this.trail.push(pos.clone());
    if (this.trail.length > 220) this.trail.shift();
    if (this.trail.length > 2 && !this.landed) {
      if (!this.trailLine) {
        const geo = new THREE.BufferGeometry().setFromPoints(this.trail);
        this.trailLine = new THREE.Line(
          geo,
          new THREE.LineBasicMaterial({ color: 0x66c8ff, transparent: true, opacity: 0.5 })
        );
        this.ctx.scene.add(this.trailLine);
      } else {
        this.trailLine.geometry.setFromPoints(this.trail);
      }
    }

    // Свечение двигателя
    const thrusting = Math.abs(input.thrust) > 0.05 && this.fuel > 0;
    (this.engineGlow.material as THREE.SpriteMaterial).opacity = thrusting ? 0.95 : 0.12;
    this.engineGlow.scale.setScalar(thrusting ? 1.4 + Math.random() * 0.5 : 0.7);

    // Камера-чейз
    const camOffset = new THREE.Vector3(0, 3.4, -9.5).applyQuaternion(this.group.quaternion);
    this.ctx.rig.surfacePose.position.copy(pos).add(camOffset);
    this.ctx.rig.surfacePose.yaw = this.group.rotation.y + Math.PI;
    this.ctx.rig.surfacePose.pitch = -0.28 - this.group.rotation.x * 0.4;

    // Приборы
    const fuelBar = document.getElementById('fuel-bar');
    const status = document.getElementById('flight-status');
    if (fuelBar) fuelBar.style.width = `${this.fuel}%`;
    if (status) {
      status.textContent = this.crashed
        ? '⚠ Авария'
        : this.landed
          ? '✅ Посадка завершена'
          : `Топливо ${Math.round(this.fuel)}% · Скорость ${this.velocity.length().toFixed(1)} м/с`;
    }
  }

  private currentBodyId(): string {
    return this.ctx.focusBodyId();
  }
}

function engineTexture(): THREE.CanvasTexture {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(100,200,255,0.6)');
  g.addColorStop(1, 'rgba(40,120,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}
