/**
 * UI — русскоязычный интерфейс: панель тел, карточка, тайм-машина,
 * режимы, подсказки и всплывающие сообщения.
 */
import { BODIES, BODY_MAP, type BodyDef } from '../data/bodies';
import type { QualityPreset } from '../core/QualityManager';

export interface AppHandlers {
  onSelectBody(id: string): void;
  onToggleCutaway(): void;
  onQuality(q: QualityPreset): void;
  onScale(s: 'museum' | 'real'): void;
  onSunMode(): void;
  onAudioToggle(): void;
  onIntro(): void;
  onIntroSkip(): void;
  onDateChange(d: Date): void;
  onSpeedChange(daysPerSec: number): void;
  onPlayPause(): void;
  onModeChange(mode: string): void;
  onBirthday(): void;
  onDatePreset(dateISO: string): void;
}

export function formatNumber(n: number, digits = 0): string {
  if (!isFinite(n)) return '—';
  return n.toLocaleString('ru-RU', { maximumFractionDigits: digits, minimumFractionDigits: 0 });
}

export function formatMass(kg: number): string {
  const exp = Math.floor(Math.log10(kg));
  const mant = kg / Math.pow(10, exp);
  return `${mant.toFixed(2)}·10^${exp} кг`;
}

export function formatDuration(hours: number): string {
  const h = Math.abs(hours);
  if (h < 48) return `${formatNumber(h, 1)} ч`;
  return `${formatNumber(h / 24, 1)} сут`;
}

export function formatPeriod(days: number): string {
  if (days < 1) return `${formatNumber(days * 24, 1)} ч`;
  if (days < 900) return `${formatNumber(days, 1)} сут`;
  return `${formatNumber(days / 365.25, 2)} года`;
}

export function formatDistanceAU(aAU?: number, aKm?: number): string {
  if (aAU !== undefined) return `${formatNumber(aAU, 3)} а.е.`;
  if (aKm !== undefined) return `${formatNumber(aKm, 0)} км`;
  return '—';
}

const KIND_LABEL: Record<string, string> = {
  star: 'Звезда',
  planet: 'Планета',
  moon: 'Спутник',
  dwarf: 'Карликовая планета'
};

export class UI {
  private handlers: AppHandlers;
  private toastTimer: number | null = null;
  private speedLabel = document.getElementById('tl-speed-label')!;
  private dateInput = document.getElementById('tl-date') as HTMLInputElement;
  private speedInput = document.getElementById('tl-speed') as HTMLInputElement;
  private playBtn = document.getElementById('tl-play') as HTMLButtonElement;
  private modePanel = document.getElementById('mode-panel')!;
  private toastEl = document.getElementById('toast')!;
  private playing = true;

  constructor(handlers: AppHandlers) {
    this.handlers = handlers;
    this.wireStatic();
    this.populateBodyList();
    const today = new Date();
    this.dateInput.value = today.toISOString().slice(0, 10);
    this.setSpeedFromSlider();
  }

  /* ---------------- Каркас ---------------- */

  showShell(): void {
    for (const id of ['topbar', 'modes-bar', 'body-panel', 'timeline', 'cutaway-bar']) {
      document.getElementById(id)?.classList.remove('hidden');
    }
  }

  setLoadingProgress(p: number): void {
    const fill = document.querySelector('.loading-fill') as HTMLElement | null;
    if (fill) fill.style.width = `${Math.round(p * 100)}%`;
  }

  hideLoading(): void {
    const el = document.getElementById('loading');
    if (!el) return;
    el.classList.add('fading');
    window.setTimeout(() => el.classList.add('hidden'), 1300);
  }

  /* ---------------- Список тел ---------------- */

  populateBodyList(): void {
    const list = document.getElementById('body-list')!;
    list.innerHTML = '';
    for (const b of BODIES) {
      if (b.id === 'phobos' || b.id === 'deimos' || b.id === 'callisto' || b.id === 'ganymede') continue;
      const li = document.createElement('li');
      li.dataset.id = b.id;
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.style.background = b.color;
      li.appendChild(dot);
      const name = document.createElement('span');
      name.textContent = b.name;
      li.appendChild(name);
      if (b.kind === 'moon') {
        const sub = document.createElement('span');
        sub.className = 'sub';
        sub.textContent = 'спутник';
        li.appendChild(sub);
      }
      li.addEventListener('click', () => this.handlers.onSelectBody(b.id));
      list.appendChild(li);
    }
  }

  selectBody(id: string): void {
    const list = document.getElementById('body-list')!;
    for (const li of Array.from(list.children) as HTMLElement[]) {
      li.classList.toggle('active', li.dataset.id === id);
    }
  }

  /* ---------------- Карточка тела ---------------- */

  showInfo(def: BodyDef): void {
    const card = document.getElementById('info-card')!;
    const content = document.getElementById('info-content')!;
    card.classList.remove('hidden');

    const tags = def.tags
      .map((t) => {
        const warn = /нет|радиац|опасн/i.test(t);
        const good = /жизнь|вода|кислород|дышать/i.test(t);
        return `<span class="info-tag ${warn ? 'warn' : good ? 'good' : ''}">${t}</span>`;
      })
      .join('');

    content.innerHTML = `
      <h2>${def.name}</h2>
      <div class="info-type">${KIND_LABEL[def.kind] ?? def.kind}</div>
      <div class="info-grid">
        <div class="info-cell"><div class="k">Радиус</div><div class="v">${formatNumber(def.radiusKm)} км</div></div>
        <div class="info-cell"><div class="k">Масса</div><div class="v">${formatMass(def.massKg)}</div></div>
        <div class="info-cell"><div class="k">Сила тяжести</div><div class="v">${formatNumber(def.gravity, 2)} м/с² (${formatNumber(def.gravity / 9.81, 2)} g)</div></div>
        <div class="info-cell"><div class="k">Сутки</div><div class="v">${formatDuration(def.dayLengthHours)}</div></div>
        <div class="info-cell"><div class="k">Год</div><div class="v">${formatPeriod(def.periodDays)}</div></div>
        <div class="info-cell"><div class="k">Температура</div><div class="v">${formatNumber(def.meanTempC)} °C</div></div>
        <div class="info-cell"><div class="k">Орбита</div><div class="v">${formatDistanceAU(def.aAU, def.aKm)}</div></div>
        <div class="info-cell"><div class="k">Наклон оси</div><div class="v">${formatNumber(def.axialTiltDeg, 1)}°</div></div>
      </div>
      <div class="info-cell"><div class="k">Атмосфера</div><div class="v">${def.atmosphere}</div></div>
      <div class="info-cell" style="margin-top:7px"><div class="k">Можно дышать?</div>
        <div class="v">${def.breathable ? '✅ Да!' : '❌ Нет'}</div></div>
      <div class="info-facts"><ul>${def.facts.map((f) => `<li>${f}</li>`).join('')}</ul></div>
      <div class="info-tags">${tags}</div>
    `;
    document.getElementById('info-content')!.querySelectorAll('.info-facts ul').forEach((ul) => {
      (ul as HTMLElement).style.padding = '0';
      (ul as HTMLElement).style.margin = '0';
    });
  }

  hideInfo(): void {
    document.getElementById('info-card')?.classList.add('hidden');
  }

  /* ---------------- Тайм-машина ---------------- */

  private wireStatic(): void {
    document.getElementById('info-close')?.addEventListener('click', () => this.hideInfo());

    this.dateInput.addEventListener('change', () => {
      const d = new Date(this.dateInput.value + 'T12:00:00Z');
      if (!isNaN(d.getTime())) this.handlers.onDateChange(d);
    });
    this.speedInput.addEventListener('input', () => this.setSpeedFromSlider());
    this.playBtn.addEventListener('click', () => {
      this.playing = !this.playing;
      this.playBtn.textContent = this.playing ? '⏸ Пауза' : '▶ Играть';
      this.handlers.onPlayPause();
    });
    document.getElementById('tl-today')?.addEventListener('click', () => {
      const now = new Date();
      this.setDate(now);
      this.handlers.onDateChange(now);
    });
    document.getElementById('tl-back')?.addEventListener('click', () => {
      this.speedInput.value = String(Math.max(-5, Number(this.speedInput.value) - 1));
      this.setSpeedFromSlider();
    });
    document.getElementById('tl-fwd')?.addEventListener('click', () => {
      this.speedInput.value = String(Math.min(5, Number(this.speedInput.value) + 1));
      this.setSpeedFromSlider();
    });

    for (const btn of Array.from(document.querySelectorAll('.date-btn'))) {
      btn.addEventListener('click', () => {
        const el = btn as HTMLElement;
        if (el.dataset.birthday) {
          this.handlers.onBirthday();
        } else if (el.dataset.date) {
          this.handlers.onDatePreset(el.dataset.date);
        }
      });
    }

    document.getElementById('quality-select')?.addEventListener('change', (e) => {
      this.handlers.onQuality((e.target as HTMLSelectElement).value as QualityPreset);
    });
    document.getElementById('scale-select')?.addEventListener('change', (e) => {
      this.handlers.onScale((e.target as HTMLSelectElement).value as 'museum' | 'real');
    });
    document.getElementById('btn-sun-mode')?.addEventListener('click', () => this.handlers.onSunMode());
    document.getElementById('btn-audio')?.addEventListener('click', () => this.handlers.onAudioToggle());
    document.getElementById('btn-intro')?.addEventListener('click', () => this.handlers.onIntro());
    document.getElementById('intro-skip')?.addEventListener('click', () => this.handlers.onIntroSkip());
    document.getElementById('btn-help')?.addEventListener('click', () =>
      document.getElementById('help-modal')?.classList.remove('hidden')
    );
    document.getElementById('help-close')?.addEventListener('click', () =>
      document.getElementById('help-modal')?.classList.add('hidden')
    );
    document.getElementById('help-modal')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) document.getElementById('help-modal')?.classList.add('hidden');
    });

    document.getElementById('btn-cutaway')?.addEventListener('click', () => this.handlers.onToggleCutaway());

    for (const btn of Array.from(document.querySelectorAll('.mode-btn'))) {
      btn.addEventListener('click', () => {
        for (const b of Array.from(document.querySelectorAll('.mode-btn'))) b.classList.remove('active');
        btn.classList.add('active');
        this.handlers.onModeChange((btn as HTMLElement).dataset.mode ?? 'explore');
      });
    }
  }

  private setSpeedFromSlider(): void {
    const t = Number(this.speedInput.value);
    const daysPerSec =
      t === 0 ? 1 / 86400 : Math.sign(t) * Math.pow(10, -4.9366 + Math.abs(t) * 1.6998);
    this.speedLabel.textContent = this.describeSpeed(daysPerSec);
    this.handlers.onSpeedChange(daysPerSec);
  }

  describeSpeed(daysPerSec: number): string {
    const d = Math.abs(daysPerSec);
    const sign = daysPerSec < 0 ? '⟲ ' : '';
    if (d < 2 / 86400) return `${sign}1 сек/сек`;
    if (d < 1.5 / 24) return `${sign}${formatNumber(d * 1440, 0)} мин/сек`;
    if (d < 1.5) return `${sign}${formatNumber(d * 24, 1)} ч/сек`;
    if (d < 400) return `${sign}${formatNumber(d, 1)} сут/сек`;
    return `${sign}${formatNumber(d / 365.25, 1)} года/сек`;
  }

  setDate(d: Date): void {
    this.dateInput.value = d.toISOString().slice(0, 10);
  }

  setAudioState(on: boolean): void {
    const btn = document.getElementById('btn-audio');
    if (btn) btn.textContent = on ? 'Звук: вкл' : 'Звук: выкл';
  }

  setSunModeLabel(sdo: boolean): void {
    const btn = document.getElementById('btn-sun-mode');
    if (btn) btn.textContent = sdo ? 'Солнце: УФ-фильтр SDO' : 'Солнце: видимый свет';
  }

  /* ---------------- Вступление ---------------- */

  showIntroOverlay(): void {
    const el = document.getElementById('intro-overlay');
    el?.classList.remove('hidden', 'fading');
    document.querySelector('.intro-content')?.classList.add('visible');
    document.getElementById('topbar')?.classList.add('hidden');
    document.getElementById('modes-bar')?.classList.add('hidden');
    document.getElementById('body-panel')?.classList.add('hidden');
    document.getElementById('timeline')?.classList.add('hidden');
    document.getElementById('cutaway-bar')?.classList.add('hidden');
  }

  setIntroCaption(text: string): void {
    const el = document.getElementById('intro-caption');
    if (el) el.textContent = text;
  }

  showIntroTitle(): void {
    const content = document.querySelector('.intro-content') as HTMLElement | null;
    if (content) content.classList.add('visible');
  }

  hideIntroOverlay(): void {
    const el = document.getElementById('intro-overlay');
    if (!el) return;
    el.classList.add('fading');
    window.setTimeout(() => {
      el.classList.add('hidden');
      el.classList.remove('fading');
      this.showShell();
    }, 1200);
  }

  /* ---------------- Разрез недр ---------------- */

  setCutawayCaption(html: string | null): void {
    const el = document.getElementById('cutaway-caption');
    if (!el) return;
    if (!el) return;
    if (html === null) {
      el.classList.add('hidden');
    } else {
      el.innerHTML = html;
      el.classList.remove('hidden');
    }
  }

  setCutawayButton(open: boolean): void {
    const btn = document.getElementById('btn-cutaway');
    if (btn) {
      btn.textContent = open ? 'Закрыть разрез' : 'Вскрыть недра (Пробел)';
      btn.classList.toggle('on', open);
    }
  }

  /* ---------------- Режимы ---------------- */

  showModePanel(title: string, desc: string, bodyHtml: string): void {
    this.modePanel.innerHTML = `
      <h3>${title}</h3>
      <div class="mode-desc">${desc}</div>
      ${bodyHtml}
    `;
    this.modePanel.classList.remove('hidden');
  }

  hideModePanel(): void {
    this.modePanel.classList.add('hidden');
    this.modePanel.innerHTML = '';
  }

  get modePanelElement(): HTMLElement {
    return this.modePanel;
  }

  /* ---------------- Уведомления ---------------- */

  toast(msg: string, ms = 3800): void {
    this.toastEl.textContent = msg;
    this.toastEl.classList.remove('hidden');
    if (this.toastTimer !== null) window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => {
      this.toastEl.classList.add('hidden');
    }, ms);
  }
}

export { BODY_MAP };
export type { BodyDef };
