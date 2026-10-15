/**
 * Scanner — «Спектральный Сканер»: визор камеры в 5 спектрах.
 * Видимый свет · Инфракрасный (тепловая карта) · Радар (пробивает облака) ·
 * Магнитометр (магнитосферы) · Подповерхностный сонар (лёд и океаны).
 */
import * as THREE from 'three';
import type { AppContext } from './context';

export type Spectrum = 'visible' | 'infrared' | 'radar' | 'magnetometer' | 'sonar';

const SPECTRUM_LABEL: Record<Spectrum, string> = {
  visible: '👁 Видимый свет',
  infrared: '🔥 Инфракрасный (тепловая карта)',
  radar: '📡 Радар (пробивает облака)',
  magnetometer: '🧲 Магнитометр',
  sonar: '🌊 Подповерхностный сонар'
};

const SPECTRUM_DESC: Record<Spectrum, string> = {
  visible: 'Обычный свет — каким его видит глаз. Поверхность, облака, цвета.',
  infrared: 'Тепловое излучение: тёплое светится ярко. Лава Ио и вулканы Венеры — «горячие точки».',
  radar: 'Радар пронизывает облака Венеры и Титана: оболочка облаков становится прозрачной, видна поверхность.',
  magnetometer: 'Магнитные поля: появляются силовые линии и радиационные пояса вокруг Земли, Юпитера и Сатурна.',
  sonar: 'Подповерхностный сонар: видны скрытые океаны под льдом Европы и Энцелада и лёд в кратерах.'
};

const FILTER_CSS: Record<Spectrum, string> = {
  visible: 'none',
  infrared: 'sepia(1) saturate(3.2) hue-rotate(-25deg) contrast(1.15) brightness(1.05)',
  radar: 'grayscale(1) contrast(1.55) brightness(1.12)',
  magnetometer: 'hue-rotate(210deg) saturate(1.7) contrast(1.12)',
  sonar: 'hue-rotate(150deg) saturate(1.35) brightness(1.08) contrast(1.08)'
};

export class Scanner {
  active = false;
  spectrum: Spectrum = 'visible';

  private ctx: AppContext;
  private savedCloudOpacity = new Map<THREE.Mesh, number>();
  private fieldLines: THREE.Group = new THREE.Group();
  private subShells: THREE.Group = new THREE.Group();

  constructor(ctx: AppContext) {
    this.ctx = ctx;
    this.fieldLines.visible = false;
    this.subShells.visible = false;
    ctx.scene.add(this.fieldLines);
    ctx.scene.add(this.subShells);
    this.buildFieldLines();
    this.buildSubShells();
  }

  activate(): void {
    this.active = true;
    this.setSpectrum('infrared');
    this.renderPanel();
    this.ctx.toast('Спектральный сканер включён. Переключайте спектры — планеты «расскажут» о себе больше!');
  }

  deactivate(): void {
    this.active = false;
    this.setSpectrum('visible');
    this.fieldLines.visible = false;
    this.subShells.visible = false;
    this.ctx.renderer.domElement.style.filter = 'none';
    this.ctx.ui.hideModePanel();
    this.restoreClouds();
  }

  setSpectrum(s: Spectrum): void {
    this.spectrum = s;
    this.ctx.renderer.domElement.style.filter = FILTER_CSS[s];

    // Облака: радар делает их прозрачными
    if (s === 'radar') {
      this.ctx.scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && mat.transparent && mat.map && !this.savedCloudOpacity.has(mesh)) {
          this.savedCloudOpacity.set(mesh, mat.opacity);
          mat.opacity = Math.min(mat.opacity, 0.12);
        }
      });
    } else {
      this.restoreClouds();
    }

    this.fieldLines.visible = s === 'magnetometer';
    this.subShells.visible = s === 'sonar';

    // Тепловизор: подсветить «горячие» тела
    this.ctx.scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (!mat || !mat.emissiveMap) return;
      mat.emissiveIntensity = s === 'infrared' ? 1.8 : 0.9;
    });

    this.renderPanel();
    this.ctx.toast(SPECTRUM_DESC[s]);
  }

  private restoreClouds(): void {
    for (const [mesh, opacity] of this.savedCloudOpacity) {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (mat) mat.opacity = opacity;
    }
    this.savedCloudOpacity.clear();
  }

  /** Силовые линии магнитосфер (модели диполя). */
  private buildFieldLines(): void {
    const mat = new THREE.MeshBasicMaterial({
      color: 0x55aaff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    for (const [id, scale, lines] of [
      ['earth', 2.6, 6],
      ['jupiter', 7.2, 8],
      ['saturn', 6.2, 6]
    ] as Array<[string, number, number]>) {
      const anchor = new THREE.Group();
      anchor.name = `field_${id}`;
      anchor.userData.bodyId = id;
      anchor.userData.baseRadius = scale;
      for (let i = 0; i < lines; i++) {
        const tilt = (i / lines) * Math.PI - Math.PI / 2;
        const torus = new THREE.Mesh(new THREE.TorusGeometry(scale, scale * 0.018, 8, 64), mat);
        torus.rotation.x = Math.PI / 2 + tilt * 0.72;
        torus.rotation.y = tilt * 0.5;
        anchor.add(torus);
        // Радиационный пояс
        const belt = new THREE.Mesh(
          new THREE.TorusGeometry(scale * 0.62, scale * 0.1, 8, 48),
          new THREE.MeshBasicMaterial({
            color: 0xff66ff,
            transparent: true,
            opacity: 0.12,
            blending: THREE.AdditiveBlending,
            depthWrite: false
          })
        );
        belt.rotation.x = Math.PI / 2;
        if (i === 0) anchor.add(belt);
      }
      this.fieldLines.add(anchor);
    }
  }

  /** Скрытые подповерхностные слои для сонара. */
  private buildSubShells(): void {
    for (const [id, color, frac] of [
      ['europa', 0x2a7fd8, 0.72],
      ['enceladus', 0x2a7fd8, 0.62],
      ['ganymede', 0x2a7fd8, 0.5],
      ['titan', 0x2858b8, 0.58],
      ['moon', 0x8899cc, 0.2],
      ['mercury', 0x8899cc, 0.22]
    ] as Array<[string, number, number]>) {
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 24),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.38,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      shell.name = `sub_${id}`;
      shell.userData.bodyId = id;
      shell.userData.frac = frac;
      shell.userData.baseRadius = 1;
      this.subShells.add(shell);
    }
  }

  /** Привязка помощников к мировым позициям тел. */
  update(): void {
    if (!this.active) return;
    const pos = new THREE.Vector3();
    const place = (anchor: THREE.Object3D) => {
      const id = anchor.userData.bodyId as string;
      const def = this.ctx.bodyDef(id);
      const r = this.ctx.getScale().radiusUnits(def);
      this.ctx.bodyScenePos(id, pos);
      anchor.position.copy(pos);
      const base = anchor.name.startsWith('field_') ? r : r * (anchor.userData.frac as number);
      anchor.scale.setScalar(base / (anchor.userData.baseRadius as number || 1));
    };
    this.fieldLines.children.forEach(place);
    this.subShells.children.forEach(place);
  }

  renderPanel(): void {
    const buttons = (Object.keys(SPECTRUM_LABEL) as Spectrum[])
      .map(
        (s) =>
          `<button class="btn small ${s === this.spectrum ? 'accent' : ''}" data-spec="${s}">${SPECTRUM_LABEL[s]}</button>`
      )
      .join('');
    this.ctx.ui.showModePanel(
      '🔬 Спектральный сканер',
      'Наведите камеру на тело и переключайте спектр. Каждый «режим зрения» показывает то, чего не видит глаз.',
      `<div class="stack">${buttons}</div>
       <div class="verdict ok" style="margin-top:10px">${SPECTRUM_DESC[this.spectrum]}</div>
       <button id="scan-close" class="btn ghost" style="margin-top:10px">Закрыть сканер</button>`
    );
    for (const btn of Array.from(document.querySelectorAll('[data-spec]'))) {
      btn.addEventListener('click', () => {
        this.setSpectrum((btn as HTMLElement).dataset.spec as Spectrum);
      });
    }
    document.getElementById('scan-close')?.addEventListener('click', () => {
      this.deactivate();
    });
  }
}
