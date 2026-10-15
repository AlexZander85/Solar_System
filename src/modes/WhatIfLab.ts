/**
 * WhatIfLab — лаборатория «Что если?»: эксперименты с законами физики.
 * Каждый сценарий реально меняет сцену и показывает последствия.
 */
import * as THREE from 'three';
import type { AppContext } from './context';

export interface WhatIfScenario {
  id: string;
  title: string;
  desc: string;
  apply(): void;
  revert(): void;
}

export class WhatIfLab {
  active = false;
  private ctx: AppContext;
  private current: string | null = null;

  // Сохранённые значения для отката
  private savedAtmosphere: number | null = null;
  private jupiterGlow: THREE.Sprite | null = null;
  private marsOverride = false;
  private earthSpinSaved: number | null = null;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
  }

  activate(): void {
    this.active = true;
    this.renderPanel();
    this.ctx.toast('Лаборатория «Что если?»: выберите эксперимент — и увидите, что станет с миром.');
  }

  deactivate(): void {
    this.active = false;
    this.revertAll();
    this.ctx.ui.hideModePanel();
  }

  private revertAll(): void {
    if (this.current) {
      this.scenarios.find((s) => s.id === this.current)?.revert();
      this.current = null;
    }
  }

  get scenarios(): WhatIfScenario[] {
    return [
      {
        id: 'no-atmosphere',
        title: '🌍 Убрать атмосферу Земли',
        desc: 'Небо становится чёрным даже днём, исчезают закаты. Без воздушной «шубы» днём +120 °C, ночью −150 °C. Океаны сначала закипают, потом замерзают. Озоновый щит исчезает — УФ-свет убивает всё живое на поверхности.',
        apply: () => this.applyNoAtmosphere(),
        revert: () => this.revertNoAtmosphere()
      },
      {
        id: 'mars-terra',
        title: '🔴 Подвинуть Марс на орбиту Земли',
        desc: 'Тепло топит полярные шапки: вода выходит в кратеры, появляются древние океаны. Плотная углекислая атмосфера создаёт парниковый эффект — Марс становится тёплым. Но магнитного поля нет — ветер медленно сдувает атмосферу обратно.',
        apply: () => this.applyMarsTerra(),
        revert: () => this.revertMarsTerra()
      },
      {
        id: 'fast-spin',
        title: '💨 Раскрутить Землю в 10 раз быстрее',
        desc: 'Сутки длятся 2 часа 24 минуты! Центробежная сила сплющивает планету у полюсов. Ураганы дуют по всей планете, а кора не выдерживает — вулканы и землетрясения повсюду.',
        apply: () => this.applyFastSpin(),
        revert: () => this.revertFastSpin()
      },
      {
        id: 'heavy-jupiter',
        title: '⭐ Увеличить массу Юпитера в 80 раз',
        desc: 'В ядре зажигается термоядерный синтез — Юпитер вспыхивает как красный карлик! Теперь в системе две звезды, а его луны получают свет и тепло. Европа подсвечивается двумя солнцами сразу.',
        apply: () => this.applyHeavyJupiter(),
        revert: () => this.revertHeavyJupiter()
      }
    ];
  }

  private renderPanel(): void {
    const items = this.scenarios
      .map(
        (s) => `
        <div class="stat">
          <b>${s.title}</b>
          <div style="font-size:11px;color:var(--muted);margin:6px 0 8px;line-height:1.55">${s.desc}</div>
          <button class="btn small ${this.current === s.id ? 'on' : ''}" data-whatif="${s.id}">
            ${this.current === s.id ? '✓ Активно — сбросить' : 'Запустить эксперимент'}
          </button>
        </div>`
      )
      .join('');
    this.ctx.ui.showModePanel(
      '🧪 Что если?',
      'Настоящая лаборатория: сломаем законы физики и посмотрим, что будет. Эксперименты видны прямо в сцене!',
      `${items}<button id="whatif-close" class="btn ghost" style="margin-top:10px">Закрыть лабораторию</button>`
    );
    for (const btn of Array.from(document.querySelectorAll('[data-whatif]'))) {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.whatif!;
        const sc = this.scenarios.find((s) => s.id === id)!;
        if (this.current === id) {
          sc.revert();
          this.current = null;
          this.ctx.toast('Эксперимент сброшен. Законы физики снова в силе.');
        } else {
          this.revertAll();
          sc.apply();
          this.current = id;
          this.ctx.toast(`Эксперимент «${sc.title}» запущен!`);
        }
        this.renderPanel();
      });
    }
    document.getElementById('whatif-close')?.addEventListener('click', () => this.deactivate());
  }

  /* ---------------- Эксперименты ---------------- */

  private applyNoAtmosphere(): void {
    // Гасим атмосферные оболочки Земли (аддитивные сферы свечения)
    const earthRoot = this.findBodyRoot('earth');
    if (earthRoot) {
      earthRoot.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const mat = mesh.material as THREE.Material & { transparent: boolean; opacity: number };
        if (mat && mat.transparent && mat.blending === THREE.AdditiveBlending) {
          if (this.savedAtmosphere === null) this.savedAtmosphere = mat.opacity;
          mat.opacity = 0;
        }
      });
    }
    this.ctx.toast('Атмосфера исчезла: небо чёрное, закатов нет, температура скачет от +120 до −150 °C.');
  }

  private revertNoAtmosphere(): void {
    const earthRoot = this.findBodyRoot('earth');
    if (earthRoot && this.savedAtmosphere !== null) {
      earthRoot.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const mat = mesh.material as THREE.Material & { transparent: boolean; opacity: number };
        if (mat && mat.transparent && mat.blending === THREE.AdditiveBlending) {
          mat.opacity = this.savedAtmosphere!;
        }
      });
    }
    this.savedAtmosphere = null;
  }

  private applyMarsTerra(): void {
    this.marsOverride = true;
    this.ctx.selectBody('mars');
    this.ctx.toast('Марс на орбите Земли: шапки тают, в кратерах — океаны, небо розовеет от пара.');
  }

  private revertMarsTerra(): void {
    this.marsOverride = false;
    // Позицию вернёт штатный расчёт эфемерид на следующем кадре
  }

  private applyFastSpin(): void {
    const earthRoot = this.findBodyRoot('earth');
    if (earthRoot) {
      // Сплющивание: масштаб по Y
      earthRoot.scale.y = 0.82;
    }
    const earth = this.ctx.bodyObject('earth');
    if (earth) {
      this.earthSpinSaved = earth.spinBoost;
      earth.spinBoost = 10;
    }
    this.ctx.selectBody('earth');
    this.ctx.toast('Земля раскручена: сутки 2 ч 24 мин, планета сплюснута, ураганы повсюду!');
  }

  private revertFastSpin(): void {
    const earthRoot = this.findBodyRoot('earth');
    if (earthRoot) earthRoot.scale.y = 1;
    const earth = this.ctx.bodyObject('earth');
    if (earth && this.earthSpinSaved !== null) {
      earth.spinBoost = this.earthSpinSaved;
      this.earthSpinSaved = null;
    }
  }

  private applyHeavyJupiter(): void {
    const pos = new THREE.Vector3();
    this.ctx.bodyScenePos('jupiter', pos);
    const r = this.ctx.getScale().radiusUnits(this.ctx.bodyDef('jupiter'));
    const spr = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: 0xff7a3c,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    spr.scale.setScalar(r * 6);
    spr.position.copy(pos);
    this.jupiterGlow = spr;
    this.ctx.scene.add(spr);
    this.ctx.sun.triggerFlare();
    this.ctx.selectBody('jupiter');
    this.ctx.toast('Юпитер вспыхнул красным карликом! В системе теперь две звезды.');
  }

  private revertHeavyJupiter(): void {
    if (this.jupiterGlow) {
      this.ctx.scene.remove(this.jupiterGlow);
      (this.jupiterGlow.material as THREE.Material).dispose();
      this.jupiterGlow = null;
    }
  }

  private findBodyRoot(id: string): THREE.Object3D | null {
    let found: THREE.Object3D | null = null;
    this.ctx.spaces.root.traverse((o) => {
      if (o.name === id && !found) found = o;
    });
    return found;
  }

  update(_dt: number): void {
    if (!this.active) return;

    // «Подвинуть Марс на орбиту Земли»: реально переносим тело на радиус земной орбиты
    if (this.marsOverride) {
      const mars = this.ctx.bodyObject('mars');
      if (mars) {
        const p = mars.group.position;
        const dir = p.clone().normalize();
        const earthLikeR =
          this.ctx.getScale().id === 'real'
            ? 149597870.7 / this.ctx.getScale().kmPerUnit
            : 46; // музейный радиус орбиты Земли
        if (dir.lengthSq() > 1e-8) mars.group.position.copy(dir.multiplyScalar(earthLikeR));
      }
    }

    if (this.jupiterGlow) {
      const pos = new THREE.Vector3();
      this.ctx.bodyScenePos('jupiter', pos);
      this.jupiterGlow.position.copy(pos);
      const k = 1 + Math.sin(performance.now() * 0.002) * 0.06;
      const r = this.ctx.getScale().radiusUnits(this.ctx.bodyDef('jupiter'));
      this.jupiterGlow.scale.setScalar(r * 6 * k);
    }
  }
}

function glowTexture(): THREE.CanvasTexture {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,240,200,1)');
  g.addColorStop(0.25, 'rgba(255,130,60,0.55)');
  g.addColorStop(1, 'rgba(255,60,20,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}
