/**
 * Missions — 6 исторических миссий: интерактивные реконструкции
 * с датами, телами, пояснениями и маршрутами.
 */
import type { AppContext } from './context';
import { MissionScene, type MissionSceneId } from './MissionScene';

interface MissionStep {
  caption: string;
  bodyId?: string;
  date?: string;
  toast?: string;
  /** 3D-реконструкция события прямо на поверхности. */
  ceremony?: 'apollo' | 'perseverance';
}

interface Mission {
  id: string;
  title: string;
  craft: string;
  steps: MissionStep[];
}

const MISSIONS: Mission[] = [
  {
    id: 'apollo11',
    title: '🌙 Аполлон-11: первые люди на Луне',
    craft: 'Сатурн-5 · «Орёл»',
    steps: [
      { caption: '16 июля 1969 года. Ракета «Сатурн-5» уносит трёх астронавтов к Луне.', bodyId: 'earth', date: '1969-07-16' },
      { caption: 'Корабль «Колумбия» и лунный модуль «Орёл» входят на орбиту Луны.', bodyId: 'moon', date: '1969-07-19' },
      { caption: '«Хьюстон, здесь База Спокойствия. „Орёл“ сел» — 20 июля, кратер Спокойствия.', bodyId: 'moon', date: '1969-07-20', toast: 'Мягкая посадка! Запаса топлива хватило бы ещё на 25 секунд.', ceremony: 'apollo' },
      { caption: '«Маленький шаг для человека — гигантский скачок для человечества». Армстронг и Олдрин на грунте 2 часа 31 минуту.', bodyId: 'moon', date: '1969-07-20' },
      { caption: '24 июля 1969 года — капсула с астронавтами приводняется в Тихом океане. Миссия выполнена!', bodyId: 'earth', date: '1969-07-24' }
    ]
  },
  {
    id: 'voyager1',
    title: '🛸 Вояджер-1: великое путешествие',
    craft: 'Вояджер-1 · гравитационный бильярд',
    steps: [
      { caption: '5 сентября 1977 года — старт с Земли. Топлива не хватит до краёв системы… если не хитрить.', bodyId: 'earth', date: '1977-09-05' },
      { caption: '1979: гравитационная праща у Юпитера! Планета разгоняет зонд, как катапульта.', bodyId: 'jupiter', date: '1980-03-05', toast: 'Экономия топлива: Юпитер подарил Вояджеру 16 км/с скорости!' },
      { caption: '1980: пролёт мимо Сатурна и Титана. Кольца — крупным планом.', bodyId: 'saturn', date: '1980-11-12' },
      { caption: '1990: знаменитая фотография «Бледная голубая точка» — Земля с расстояния 6 миллиардов км.', bodyId: 'earth', date: '1990-02-14' },
      { caption: '2012: Вояджер-1 выходит в межзвёздное пространство. Его сигнал идёт до Земли более 22 часов!', bodyId: 'sun', date: '2012-08-25' }
    ]
  },
  {
    id: 'cassini',
    title: '🪐 Кассини и Гюйгенс: сквозь кольца на Титан',
    craft: 'Кассини · зонд «Гюйгенс»',
    steps: [
      { caption: '1997: старт. Чтобы долететь до Сатурна, зонд 4 года набирает скорость пращами у Венеры и Юпитера.', bodyId: 'venus', date: '1997-10-15' },
      { caption: '2004: Кассини входит на орбиту Сатурна — начинаются 13 лет открытий.', bodyId: 'saturn', date: '2004-07-01' },
      { caption: '14 января 2005 года: зонд «Гюйгенс» садится на Титан! Фотографии берега метанового озера.', bodyId: 'titan', date: '2005-01-14', toast: 'Первая в истории посадка во внешней Солнечной системе.' },
      { caption: 'Кассини находит гейзеры Энцелада и пролетает сквозь них — «нюхает» океан.', bodyId: 'enceladus', date: '2008-03-12' },
      { caption: '2017: финальный «Большой Финал» — зонд сгорает в атмосфере Сатурна, чтобы не загрязнить луны.', bodyId: 'saturn', date: '2017-09-15' }
    ]
  },
  {
    id: 'perseverance',
    title: '🤖 Perseverance: 7 минут ужаса',
    craft: 'Марсоход Perseverance · вертолёт Ingenuity',
    steps: [
      { caption: '30 июля 2020 года — старт с Земли. Впереди 470 миллионов километров.', bodyId: 'earth', date: '2020-07-30' },
      { caption: '18 февраля 2021 года: вход в атмосферу Марса со скоростью 20 000 км/ч. Связь с Землёй — только через 11 минут!', bodyId: 'mars', date: '2021-02-18' },
      { caption: 'Парашют, тепловой щит, «небесный кран»: ракетные струи зависают и опускают ровер на тросах.', bodyId: 'mars', date: '2021-02-18', toast: '«7 минут ужаса» — посадка полностью автономная: пилотировать с Земли невозможно!', ceremony: 'perseverance' },
      { caption: 'Кратер Езеро: дно древнего озера. Ровер бурит камни и ищет следы жизни.', bodyId: 'mars', date: '2021-02-18' },
      { caption: 'Ингерти — первый вертолёт на другой планете: 72 полёта в разрежённом воздухе Марса!', bodyId: 'mars', date: '2021-04-19' }
    ]
  },
  {
    id: 'parker',
    title: '☀️ Parker Solar Probe: коснувшийся Солнца',
    craft: 'Parker Solar Probe · тепловой щит',
    steps: [
      { caption: '2018: старт к Солнцу. Чтобы «упасть» на звезду, нужно тормозить орбитальный разгон Земли.', bodyId: 'sun', date: '2018-08-12' },
      { caption: 'Гравитационные пращи у Венеры уменьшают орбиту — зонд сближается с Солнцем.', bodyId: 'venus', date: '2018-10-03' },
      { caption: '2024: зонд влетает в солнечную корону! Температура вокруг — 1 000 000 °C, а щит держит 1400 °C.', bodyId: 'sun', date: '2024-12-24', toast: 'Скорость 690 000 км/ч — самый быстрый рукотворный объект в истории!' },
      { caption: 'Данные Паркера объясняют солнечный ветер и помогают предсказывать космические бури.', bodyId: 'sun', date: '2025-01-01' }
    ]
  },
  {
    id: 'clipper',
    title: '🧊 Europa Clipper: разведка океана',
    craft: 'Europa Clipper · ледяной радар',
    steps: [
      { caption: '2024: старт миссии к Европе — спутнику Юпитера со скрытым океаном.', bodyId: 'earth', date: '2024-10-14' },
      { caption: 'Зонд летит по сложной траектории с пращами у Марса и Земли.', bodyId: 'mars', date: '2025-02-01' },
      { caption: '2030: 49 пролётов мимо Европы! Радар измеряет толщину льда, спектрометр — состав гейзеров.', bodyId: 'europa', date: '2030-04-11', toast: 'Зонд не садится: он «нюхает» океан, пролетая сквозь струи.' },
      { caption: 'Главная цель: понять, есть ли в подлёдном океане условия для жизни.', bodyId: 'europa', date: '2031-01-01' }
    ]
  }
];

export class Missions {
  active = false;
  private ctx: AppContext;
  private missionIndex = 0;
  private stepIndex = 0;
  private scene: MissionScene;

  constructor(ctx: AppContext) {
    this.ctx = ctx;
    this.scene = new MissionScene(ctx.scene);
  }

  activate(): void {
    this.active = true;
    this.missionIndex = 0;
    this.stepIndex = 0;
    this.ctx.setSystemVisible(false);
    this.ctx.rig.request('SYSTEM');
    this.ctx.rig.bodyRadius = 1;
    this.ctx.rig.targetDistance = 25;
    this.ctx.rig.targetElevation = 0.22;
    this.ctx.spaces.setMode('SYSTEM_SPACE', 1);
    this.scene.setMission(this.mission.id as MissionSceneId);
    this.renderPanel();
    this.applyStep();
  }

  deactivate(): void {
    this.active = false;
    if (this.autoTimer !== null) {
      window.clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
    this.scene.setVisible(false);
    this.ctx.stopSurface();
    this.ctx.setSystemVisible(true);
    this.ctx.ui.hideModePanel();
  }

  private get mission(): Mission {
    return MISSIONS[this.missionIndex];
  }

  private applyStep(): void {
    const step = this.mission.steps[this.stepIndex];
    this.scene.setMission(this.mission.id as MissionSceneId);
    this.scene.setVisible(!step.ceremony);
    if (step.date) {
      this.ctx.setSimDate(new Date(step.date + 'T12:00:00Z'));
    }
    if (step.bodyId) {
      // В отдельной 3D-реконструкции камера кадрирует маршрут, а не
      // телепортируется к реальному шару системы.
      this.ctx.selectBody(step.bodyId, false);
    }
    if (step.ceremony) {
      this.ctx.playCeremony(step.ceremony);
    }
    if (step.toast) this.ctx.toast(step.toast);
  }

  private renderPanel(): void {
    const step = this.mission.steps[this.stepIndex];
    const missionButtons = MISSIONS.map(
      (m, i) =>
        `<button class="btn tiny ${i === this.missionIndex ? 'accent' : ''}" data-mission="${i}">${m.title}</button>`
    ).join('');

    const stepsHtml = this.mission.steps
      .map(
        (s, i) =>
          `<div class="stat" style="opacity:${i === this.stepIndex ? 1 : 0.55};border-left:3px solid ${i === this.stepIndex ? 'var(--accent)' : 'transparent'}">
             <b>Шаг ${i + 1}</b>${s.date ? ` · ${new Date(s.date + 'T12:00:00Z').toLocaleDateString('ru-RU')}` : ''}
             <div style="font-size:11.5px;color:var(--text);margin-top:5px;line-height:1.55">${s.caption}</div>
           </div>`
      )
      .join('');

    this.ctx.ui.showModePanel(
      this.mission.title,
      `Корабль: <b>${this.mission.craft}</b>. Шаг ${this.stepIndex + 1} из ${this.mission.steps.length}. Кнопки «Назад/Далее» проводят через всю миссию — с настоящими датами!`,
      `<div class="row">${missionButtons}</div>
       <div class="stack" style="margin:10px 0">
         <div class="verdict ok">${step.caption}</div>
         <div class="row">
           <button id="mis-prev" class="btn small">◀ Назад</button>
           <button id="mis-next" class="btn small accent">Далее ▶</button>
           <button id="mis-auto" class="btn small ghost">🎬 Авто</button>
         </div>
       </div>
       ${stepsHtml}
       <button id="mis-close" class="btn ghost" style="margin-top:10px">Закрыть миссии</button>`
    );

    for (const btn of Array.from(document.querySelectorAll('[data-mission]'))) {
      btn.addEventListener('click', () => {
        this.missionIndex = Number((btn as HTMLElement).dataset.mission);
        this.stepIndex = 0;
        this.applyStep();
        this.renderPanel();
      });
    }
    document.getElementById('mis-prev')?.addEventListener('click', () => {
      this.stepIndex = Math.max(0, this.stepIndex - 1);
      this.applyStep();
      this.renderPanel();
    });
    document.getElementById('mis-next')?.addEventListener('click', () => {
      this.stepIndex = Math.min(this.mission.steps.length - 1, this.stepIndex + 1);
      this.applyStep();
      this.renderPanel();
    });
    document.getElementById('mis-auto')?.addEventListener('click', () => this.runAuto());
    document.getElementById('mis-close')?.addEventListener('click', () => this.deactivate());
  }

  private autoTimer: number | null = null;

  private runAuto(): void {
    if (this.autoTimer !== null) {
      window.clearInterval(this.autoTimer);
      this.autoTimer = null;
      this.ctx.toast('Авто-режим остановлен.');
      return;
    }
    this.autoTimer = window.setInterval(() => {
      if (this.stepIndex < this.mission.steps.length - 1) {
        this.stepIndex++;
        this.applyStep();
        this.renderPanel();
      } else {
        if (this.autoTimer !== null) window.clearInterval(this.autoTimer);
        this.autoTimer = null;
        this.ctx.toast('Миссия завершена! Выберите другую — или закройте панель.');
      }
    }, 5200);
    this.ctx.toast('Авто-режим: шаги будут сменяться сами каждые 5 секунд.');
  }

  update(dt: number): void {
    if (this.active) this.scene.update(dt);
  }
}
