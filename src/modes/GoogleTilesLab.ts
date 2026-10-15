/**
 * GoogleTilesLab — UI и жизненный цикл Google 3D Tiles.
 * Ключ не попадает в git: его можно передать через форму или сохранить только
 * в localStorage браузера. Earth использует официальный Google root, а URL
 * Луны/Марса задаётся проектом, который предоставляет соответствующие тайлы.
 */
import type { AppContext } from './context';
import {
  Google3DTilesProvider,
  type GeoAnchor,
  type GoogleTileBody,
  type TileCoordinateSystem
} from '../surface/Google3DTilesProvider';

const KEY_STORAGE = 'heliosphere.google.maps.apiKey';

export class GoogleTilesLab {
  active = false;
  private ctx: AppContext;
  private provider: Google3DTilesProvider | null = null;
  private body: GoogleTileBody = 'earth';
  private savedKey = '';

  constructor(ctx: AppContext) {
    this.ctx = ctx;
    const envKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
    try {
      this.savedKey = window.localStorage.getItem(KEY_STORAGE) ?? envKey ?? '';
    } catch {
      this.savedKey = envKey ?? '';
    }
  }

  activate(): void {
    this.active = true;
    this.ctx.setSystemVisible(false);
    this.prepareCamera();
    this.renderPanel();
    this.ctx.toast('3D-карты: укажите API key и загрузите локальный участок поверхности.');
  }

  deactivate(): void {
    this.active = false;
    this.stopProvider();
    this.ctx.setSystemVisible(true);
    this.ctx.rig.request('ORBIT');
    this.ctx.spaces.setMode('ORBIT_LOCAL_SPACE', 1);
    this.ctx.ui.hideModePanel();
  }

  update(): void {
    if (this.active && this.provider) this.provider.update(this.ctx.camera);
  }

  private prepareCamera(): void {
    this.ctx.rig.request('ORBIT');
    this.ctx.rig.bodyRadius = 1;
    this.ctx.rig.targetAzimuth = Math.PI * 0.35;
    this.ctx.rig.targetElevation = 0.35;
    this.ctx.rig.targetDistance = 1200;
    this.ctx.spaces.setMode('SURFACE_PATCH_SPACE', 1);
  }

  private renderPanel(): void {
    this.ctx.ui.showModePanel(
      '🗺️ Google 3D Tiles',
      'Загрузите настоящий 3D-рельеф в локальную сцену. Ключ нужен для запросов Google Maps Platform и остаётся в браузере. Earth имеет официальный Photorealistic root; для Луны и Марса укажите URL набора, доступного вашему проекту.',
      `<label class="field"><span>Мир</span>
        <select id="gt-body">
          <option value="earth">🌍 Земля · Google Photorealistic</option>
          <option value="moon">🌙 Луна · пользовательский tileset</option>
          <option value="mars">🔴 Марс · пользовательский tileset</option>
        </select>
      </label>
      <label class="field"><span>Google Maps API key</span>
        <input id="gt-key" type="password" autocomplete="off" placeholder="AIza…" />
      </label>
      <label class="check"><input id="gt-save" type="checkbox" /> Сохранить ключ только в этом браузере</label>
      <label class="field"><span>URL root.json (для Earth можно оставить пустым)</span>
        <input id="gt-url" type="url" placeholder="https://…/root.json" /></label>
      <div class="row">
        <label class="field"><span>Широта, °</span><input id="gt-lat" type="number" value="40.7128" step="0.0001" /></label>
        <label class="field"><span>Долгота, °</span><input id="gt-lon" type="number" value="-74.0060" step="0.0001" /></label>
      </div>
      <label class="field"><span>Координаты тайлов</span>
        <select id="gt-coords"><option value="ecef">ECEF → локальный ENU</option><option value="local">Уже локальные</option></select>
      </label>
      <label class="field"><span>Детализация (SSE)</span><input id="gt-sse" type="number" value="12" min="2" max="80" step="1" /></label>
      <div class="row" style="margin-top:10px">
        <button id="gt-load" class="btn accent">⬇ Загрузить 3D-тайлы</button>
        <button id="gt-stop" class="btn ghost">Остановить</button>
      </div>
      <div id="gt-status" class="stat" style="margin-top:9px">Нет активного набора.</div>
      <div class="verdict ok" style="margin-top:9px">
        <b>Важно:</b> Photorealistic 3D Tiles Google сейчас покрывает Землю. Для Луны и Марса каркас уже готов, но нужен отдельный Google/OGC tileset и разрешение его владельца — приложение не подменяет отсутствие данных.
      </div>
      <button id="gt-close" class="btn ghost" style="margin-top:10px">Закрыть 3D-карты</button>`
    );

    const bodySelect = document.getElementById('gt-body') as HTMLSelectElement;
    const keyInput = document.getElementById('gt-key') as HTMLInputElement;
    const saveInput = document.getElementById('gt-save') as HTMLInputElement;
    const urlInput = document.getElementById('gt-url') as HTMLInputElement;
    const latInput = document.getElementById('gt-lat') as HTMLInputElement;
    const lonInput = document.getElementById('gt-lon') as HTMLInputElement;
    const coordsInput = document.getElementById('gt-coords') as HTMLSelectElement;
    const sseInput = document.getElementById('gt-sse') as HTMLInputElement;
    keyInput.value = this.savedKey;
    bodySelect.value = this.body;
    this.setAnchorDefaults(this.body, latInput, lonInput, coordsInput);

    bodySelect.addEventListener('change', () => {
      this.body = bodySelect.value as GoogleTileBody;
      this.setAnchorDefaults(this.body, latInput, lonInput, coordsInput);
      urlInput.value = '';
    });
    document.getElementById('gt-load')?.addEventListener('click', () => {
      const key = keyInput.value.trim();
      if (saveInput.checked && key) {
        try {
          window.localStorage.setItem(KEY_STORAGE, key);
          this.savedKey = key;
        } catch {
          this.ctx.toast('Браузер запретил localStorage — ключ будет жить только до перезагрузки.');
        }
      }
      const anchor: GeoAnchor = {
        latitude: Number(latInput.value) || 0,
        longitude: Number(lonInput.value) || 0,
        height: 0
      };
      this.startProvider({
        apiKey: key,
        body: this.body,
        tilesetUrl: urlInput.value.trim() || undefined,
        anchor,
        coordinateSystem: coordsInput.value as TileCoordinateSystem,
        maxScreenSpaceError: Number(sseInput.value) || 12
      });
    });
    document.getElementById('gt-stop')?.addEventListener('click', () => this.stopProvider());
    document.getElementById('gt-close')?.addEventListener('click', () => this.deactivate());
  }

  private startProvider(options: ConstructorParameters<typeof Google3DTilesProvider>[0]): void {
    this.stopProvider();
    this.prepareCamera();
    this.provider = new Google3DTilesProvider({
      ...options,
      onStatus: (_status, message) => {
        const status = document.getElementById('gt-status');
        if (status) status.textContent = message;
      }
    });
    this.ctx.scene.add(this.provider.group);
    const provider = this.provider;
    void provider
      .load()
      .then(() => {
        if (this.provider === provider) this.ctx.toast('3D-тайлы готовы. Приближайте камеру: дочерние уровни подгрузятся сами.');
      })
      .catch(() => {
        // Подробная причина уже выведена в gt-status, родительский мир не ломаем.
      });
  }

  private stopProvider(): void {
    if (!this.provider) return;
    this.ctx.scene.remove(this.provider.group);
    this.provider.dispose();
    this.provider = null;
  }

  private setAnchorDefaults(body: GoogleTileBody, lat: HTMLInputElement, lon: HTMLInputElement, coords: HTMLSelectElement): void {
    if (body === 'earth') {
      lat.value = '40.7128';
      lon.value = '-74.0060';
      coords.value = 'ecef';
    } else {
      lat.value = '0';
      lon.value = '0';
      coords.value = 'local';
    }
  }
}
