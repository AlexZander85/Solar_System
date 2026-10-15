/**
 * PhotoLab — «Фотолаборатория (Космический телескоп)»:
 * свободная камера, настройки снимка, поиск затмений, экспорт без UI.
 */
import type { AppContext } from './context';
import { nextEclipse } from '../data/ephemeris';

export class PhotoLab {
  active = false;
  private ctx: AppContext;
  private savedExposure = 1.05;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
  }

  activate(): void {
    this.active = true;
    this.savedExposure = this.ctx.renderer.toneMappingExposure;
    this.ctx.rig.fovOverride = this.ctx.camera.fov;
    this.renderPanel();
    this.ctx.toast('Фотолаборатория: кадрируйте, настраивайте свет и снимайте! UI можно скрыть для чистого кадра.');
  }

  deactivate(): void {
    this.active = false;
    this.ctx.renderer.toneMappingExposure = this.savedExposure;
    this.ctx.rig.fovOverride = null;
    document.getElementById('app')!.classList.remove('photo-clean');
    this.ctx.ui.showShell();
    this.ctx.ui.hideModePanel();
  }

  private renderPanel(): void {
    this.ctx.ui.showModePanel(
      '📸 Фотолаборатория',
      'Вы — космический фотограф. Настройте фокус и свет, найдите красивый ракурс и сохраните снимок.',
      `
      <label class="field"><span>Фокусное расстояние (FOV)</span>
        <input type="range" id="ph-fov" min="18" max="95" value="${Math.round(this.ctx.camera.fov)}" /></label>
      <label class="field"><span>Экспозиция</span>
        <input type="range" id="ph-exp" min="30" max="220" value="${Math.round(this.ctx.renderer.toneMappingExposure * 100)}" /></label>
      <div class="stack" style="margin-top:10px">
        <button id="ph-eclipse" class="btn">🌘 Найти ближайшее затмение</button>
        <button id="ph-clean" class="btn">🖼 Чистый кадр (скрыть интерфейс)</button>
        <button id="ph-shot" class="btn accent">📸 Сохранить снимок</button>
      </div>
      <div class="verdict ok" style="margin-top:10px">
        <b>Советы фотографа:</b> зум на Солнце приглушает экспозицию автоматически. Снимайте терминатор —
        линию рассвета — там самый красивый свет. Затмения — главный трофей!
      </div>
      <button id="ph-close" class="btn ghost" style="margin-top:10px">Выйти из лаборатории</button>
      `
    );

    (document.getElementById('ph-fov') as HTMLInputElement).addEventListener('input', (e) => {
      const fov = Number((e.target as HTMLInputElement).value);
      this.ctx.rig.fovOverride = fov;
      this.ctx.camera.fov = fov;
      this.ctx.camera.updateProjectionMatrix();
    });
    (document.getElementById('ph-exp') as HTMLInputElement).addEventListener('input', (e) => {
      this.ctx.renderer.toneMappingExposure = Number((e.target as HTMLInputElement).value) / 100;
    });
    document.getElementById('ph-eclipse')?.addEventListener('click', () => {
      const e = nextEclipse(new Date());
      this.ctx.setSimDate(new Date(e.date));
      this.ctx.selectBody('moon');
      this.ctx.toast(`Машина времени переключилась на: ${e.label}. Уловите тень Луны на Солнце!`);
    });
    document.getElementById('ph-clean')?.addEventListener('click', () => {
      document.getElementById('app')!.classList.toggle('photo-clean');
      this.ctx.toast('Интерфейс скрыт/показан. Снимок будет без UI.');
    });
    document.getElementById('ph-shot')?.addEventListener('click', () => this.shoot());
    document.getElementById('ph-close')?.addEventListener('click', () => this.deactivate());
  }

  /** Сохранение кадра без интерфейса (canvas → PNG). */
  private shoot(): void {
    const app = document.getElementById('app')!;
    const hadClean = app.classList.contains('photo-clean');
    app.classList.add('photo-clean');
    // Рендер уже в canvas — снимаем текущий кадр
    try {
      const url = this.ctx.renderer.domElement.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `heliosphere_${Date.now()}.png`;
      a.click();
      this.ctx.toast('📸 Снимок сохранён! Ищите файл в загрузках.');
    } catch {
      this.ctx.toast('Не удалось сохранить снимок в этом браузере.');
    }
    if (!hadClean) app.classList.remove('photo-clean');
  }

  update(_dt: number): void {
    /* камера управляется общим CameraRig */
  }
}
