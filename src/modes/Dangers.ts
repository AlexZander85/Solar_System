/**
 * Dangers — «Опасности космоса»: солнечная буря, полярное сияние,
 * гейзеры Энцелада, вулканы Ио. Каждое явление — настоящая анимация в сцене.
 */
import * as THREE from 'three';
import type { AppContext } from './context';
import { Burst } from '../core/SpringMath';

interface DangerEvent {
  id: string;
  title: string;
  desc: string;
  run(): void;
}

export class Dangers {
  active = false;
  private ctx: AppContext;
  private stormParticles: THREE.Points | null = null;
  private stormVel: Float32Array | null = null;
  private stormLife = new Burst(0.3, 6);
  private geyserParticles: THREE.Points | null = null;
  private geyserLife = new Burst(0.4, 5);
  private ioGlow: THREE.Sprite | null = null;
  private ioLife = new Burst(0.2, 4);
  private auroraBoost = 0;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
  }

  activate(): void {
    this.active = true;
    this.renderPanel();
    this.ctx.toast('Опасности космоса: запускайте явления и смотрите, как космос «показывает характер».');
  }

  deactivate(): void {
    this.active = false;
    this.cleanup();
    this.ctx.ui.hideModePanel();
  }

  private cleanup(): void {
    for (const p of [this.stormParticles, this.geyserParticles]) {
      if (p) {
        this.ctx.scene.remove(p);
        p.geometry.dispose();
        (p.material as THREE.Material).dispose();
      }
    }
    this.stormParticles = null;
    this.geyserParticles = null;
    if (this.ioGlow) {
      this.ctx.scene.remove(this.ioGlow);
      (this.ioGlow.material as THREE.Material).dispose();
      this.ioGlow = null;
    }
    this.auroraBoost = 0;
  }

  get events(): DangerEvent[] {
    return [
      {
        id: 'solar-storm',
        title: '☀️ Солнечная буря (CME)',
        desc: 'Солнце выбрасывает миллиарды тонн плазмы. Если она попадёт в Землю — авроры, сбои связи и радиация. Наша магнитосфера отводит удар!',
        run: () => this.runSolarStorm()
      },
      {
        id: 'aurora',
        title: '🌌 Полярное сияние',
        desc: 'Солнечные частицы влетают в атмосферу у полюсов и заставляют кислород светиться зелёным, а азот — красным. Это «щит Земли» в действии!',
        run: () => this.runAurora()
      },
      {
        id: 'geysers',
        title: '💦 Гейзеры Энцелада',
        desc: 'Маленький ледяной спутник Сатурна бьёт фонтанами воды в космос! Струи уходят на сотни километров и питают кольцо E.',
        run: () => this.runGeysers()
      },
      {
        id: 'io-volcano',
        title: '🌋 Вулканы Ио',
        desc: 'Приливные силы Юпитера выжимают Ио, как мяч, и её недра плавятся. Вулканы выбрасывают серу на 300 км вверх — это рекорд Солнечной системы!',
        run: () => this.runIoVolcano()
      }
    ];
  }

  private renderPanel(): void {
    const items = this.events
      .map(
        (e) => `
        <div class="stat">
          <b>${e.title}</b>
          <div style="font-size:11px;color:var(--muted);margin:6px 0 8px;line-height:1.55">${e.desc}</div>
          <button class="btn small accent" data-danger="${e.id}">Запустить явление</button>
        </div>`
      )
      .join('');
    this.ctx.ui.showModePanel(
      '☄️ Опасности космоса',
      'Космос прекрасен, но суров. Каждая кнопка запускает настоящее явление прямо в сцене.',
      `${items}<button id="danger-close" class="btn ghost" style="margin-top:10px">Закрыть</button>`
    );
    for (const btn of Array.from(document.querySelectorAll('[data-danger]'))) {
      btn.addEventListener('click', () => {
        this.events.find((e) => e.id === (btn as HTMLElement).dataset.danger)?.run();
      });
    }
    document.getElementById('danger-close')?.addEventListener('click', () => this.deactivate());
  }

  private runSolarStorm(): void {
    this.ctx.sun.triggerFlare();
    this.stormLife.trigger();
    this.ctx.selectBody('earth');
    if (!this.stormParticles) {
      const count = 500;
      const pos = new Float32Array(count * 3);
      this.stormVel = new Float32Array(count * 3);
      const sunPos = new THREE.Vector3();
      this.ctx.bodyScenePos('sun', sunPos);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = sunPos.x;
        pos[i * 3 + 1] = sunPos.y;
        pos[i * 3 + 2] = sunPos.z;
        const dir = new THREE.Vector3().randomDirection();
        const speed = 14 + Math.random() * 30;
        this.stormVel[i * 3] = dir.x * speed;
        this.stormVel[i * 3 + 1] = dir.y * speed;
        this.stormVel[i * 3 + 2] = dir.z * speed;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      this.stormParticles = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          color: 0xffa040,
          size: 0.5,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      this.ctx.scene.add(this.stormParticles);
    }
    this.auroraBoost = 1;
    this.ctx.toast('Солнечная буря! Поток плазмы мчится к планетам. Ауроры усиливаются — магнитосфера работает.');
  }

  private runAurora(): void {
    this.auroraBoost = 1;
    this.ctx.selectBody('earth');
    this.ctx.toast('Полярное сияние: зелёный кислород и красный азот танцуют у полюсов.');
  }

  private runGeysers(): void {
    this.geyserLife.trigger();
    this.ctx.selectBody('enceladus');
    const pos = new THREE.Vector3();
    this.ctx.bodyScenePos('enceladus', pos);
    const r = this.ctx.getScale().radiusUnits(this.ctx.bodyDef('enceladus'));
    if (!this.geyserParticles) {
      const count = 360;
      const p = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        p[i * 3] = Math.cos(a) * r * 0.4;
        p[i * 3 + 1] = -r * 0.9 + Math.random() * r * 0.3;
        p[i * 3 + 2] = Math.sin(a) * r * 0.4;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
      this.geyserParticles = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          color: 0xcfeaff,
          size: 0.22,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      this.ctx.scene.add(this.geyserParticles);
    }
    this.geyserParticles.position.copy(pos);
    this.ctx.toast('Гейзеры! Вода бьёт из-под льда и улетает в космос — Кассини пролетал сквозь эти струи.');
  }

  private runIoVolcano(): void {
    this.ioLife.trigger();
    this.ctx.selectBody('io');
    const pos = new THREE.Vector3();
    this.ctx.bodyScenePos('io', pos);
    const r = this.ctx.getScale().radiusUnits(this.ctx.bodyDef('io'));
    if (!this.ioGlow) {
      this.ioGlow = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex(),
          color: 0xff6a22,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      this.ctx.scene.add(this.ioGlow);
    }
    this.ioGlow.position.copy(pos);
    this.ioGlow.scale.setScalar(r * 5);
    this.ctx.toast('Ио извергается! Сера летит на сотни километров — самая вулканическая «лампочка» системы.');
  }

  update(dt: number): void {
    if (!this.active && this.stormLife.value === 0 && this.geyserLife.value === 0) return;

    // Солнечная буря: частицы разлетаются от Солнца
    if (this.stormParticles && this.stormVel) {
      const pos = this.stormParticles.geometry.attributes.position as THREE.BufferAttribute;
      const sunPos = new THREE.Vector3();
      this.ctx.bodyScenePos('sun', sunPos);
      for (let i = 0; i < pos.count; i++) {
        pos.setXYZ(
          i,
          pos.getX(i) + this.stormVel[i * 3] * dt,
          pos.getY(i) + this.stormVel[i * 3 + 1] * dt,
          pos.getZ(i) + this.stormVel[i * 3 + 2] * dt
        );
      }
      pos.needsUpdate = true;
      const life = this.stormLife.update(dt);
      (this.stormParticles.material as THREE.PointsMaterial).opacity = 0.85 * life;
    }

    // Гейзеры: струи вверх-вниз
    if (this.geyserParticles) {
      const pos = this.geyserParticles.geometry.attributes.position as THREE.BufferAttribute;
      const r = this.ctx.getScale().radiusUnits(this.ctx.bodyDef('enceladus'));
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) + dt * (8 + (i % 7)) * r * 0.14;
        if (y > r * 1.4) {
          y = -r * 0.9;
          const a = Math.random() * Math.PI * 2;
          pos.setX(i, Math.cos(a) * r * 0.4);
          pos.setZ(i, Math.sin(a) * r * 0.4);
        }
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
      const life = this.geyserLife.update(dt);
      (this.geyserParticles.material as THREE.PointsMaterial).opacity = 0.85 * life;
    }

    // Вспышка Ио
    if (this.ioGlow) {
      const life = this.ioLife.update(dt);
      (this.ioGlow.material as THREE.SpriteMaterial).opacity = life * 0.95;
      const r = this.ctx.getScale().radiusUnits(this.ctx.bodyDef('io'));
      this.ioGlow.scale.setScalar(r * 5 * (0.7 + life * 0.6));
      if (life <= 0) {
        this.ctx.scene.remove(this.ioGlow);
        (this.ioGlow.material as THREE.Material).dispose();
        this.ioGlow = null;
      }
    }

    if (this.auroraBoost > 0) this.auroraBoost = Math.max(0, this.auroraBoost - dt * 0.06);
  }
}

function glowTex(): THREE.CanvasTexture {
  const size = 96;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,220,160,1)');
  g.addColorStop(0.35, 'rgba(255,110,40,0.5)');
  g.addColorStop(1, 'rgba(255,60,20,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}
