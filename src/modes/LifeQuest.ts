/**
 * LifeQuest — образовательный квест «Где искать жизнь?».
 * Пять кандидатов и три условия жизни: жидкая среда + энергия + органика.
 */
import type { AppContext } from './context';

interface Candidate {
  id: string;
  bodyId: string;
  name: string;
  place: string;
  conditions: {
    liquid: { ok: boolean; text: string };
    energy: { ok: boolean; text: string };
    organics: { ok: boolean; text: string };
  };
  verdict: string;
}

const CANDIDATES: Candidate[] = [
  {
    id: 'venus',
    bodyId: 'venus',
    name: '☁️ Венера',
    place: 'Облака на высоте 50 км',
    conditions: {
      liquid: { ok: true, text: 'Капли серной кислоты с добавкой воды — жидкая среда есть, но «не наша».' },
      energy: { ok: true, text: 'Солнечный свет сверху — энергии достаточно.' },
      organics: { ok: false, text: 'Органику пока не нашли, но ищут активно.' }
    },
    verdict: 'Кандидат «на грани»: условия суровые, но в облаках прохладно (+30 °C) и есть вода. Миссия «ИнВенера» уже в пути!'
  },
  {
    id: 'ancient-mars',
    bodyId: 'mars',
    name: '🏜 Древний Марс',
    place: 'Кратер Езеро, озёрные отложения',
    conditions: {
      liquid: { ok: true, text: 'Млрд лет назад здесь были озёра и реки — теперь высохло.' },
      energy: { ok: true, text: 'Солнце светит, вулканы грели изнутри.' },
      organics: { ok: true, text: 'Марсоход Curiosity нашёл органические молекулы в глине!' }
    },
    verdict: 'Все три условия БЫЛИ выполнены! Именно поэтому Perseverance ищет здесь окаменелые следы микробов.'
  },
  {
    id: 'europa',
    bodyId: 'europa',
    name: '🧊 Европа',
    place: 'Подледный океан Юпитера',
    conditions: {
      liquid: { ok: true, text: 'Океан солёной воды толщиной до 100 км — больше, чем во всех земных!' },
      energy: { ok: true, text: 'Приливы от Юпитера греют недра, как в гидротермальных источниках.' },
      organics: { ok: false, text: 'Органику доставляют кометы — вероятна, но не подтверждена.' }
    },
    verdict: 'Самый сильный кандидат! Миссия Europa Clipper уже летит проверять океан снаружи.'
  },
  {
    id: 'enceladus',
    bodyId: 'enceladus',
    name: '💦 Энцелад',
    place: 'Гейзеры южного полюса Сатурна',
    conditions: {
      liquid: { ok: true, text: 'Тёплый океан под льдом — гейзеры доставляют его прямо к нам!' },
      energy: { ok: true, text: 'Гидротермальные источники на дне — энергия и тепло.' },
      organics: { ok: true, text: 'Кассини нашёл в гейзерах сложные органические молекулы!' }
    },
    verdict: 'ВСЕ три условия выполнены! Самое доступное место для поиска жизни: не надо бурить лёд — океан сам прилетает.'
  },
  {
    id: 'titan',
    bodyId: 'titan',
    name: '🟠 Титан',
    place: 'Метановые озёра и криовулканы',
    conditions: {
      liquid: { ok: true, text: 'Жидкий метан на поверхности + возможный водяной океан под льдом.' },
      energy: { ok: true, text: 'Солнце, химия атмосферы, криовулканы — источники энергии есть.' },
      organics: { ok: true, text: 'Титан — «фабрика органики»: там полно сложных молекул!' }
    },
    verdict: 'Все три условия выполнены, но жизнь тут была бы «иная» — на метане вместо воды. Проверит миссия Dragonfly!'
  }
];

export class LifeQuest {
  active = false;
  private ctx: AppContext;
  private found = new Set<string>();

  constructor(ctx: AppContext) {
    this.ctx = ctx;
  }

  activate(): void {
    this.active = true;
    this.renderPanel();
    this.ctx.toast('Квест «Где искать жизнь?»: проверьте три условия жизни на пяти мирах!');
  }

  deactivate(): void {
    this.active = false;
    this.ctx.ui.hideModePanel();
  }

  private renderPanel(): void {
    const cards = CANDIDATES.map((c) => {
      const okCount = [c.conditions.liquid, c.conditions.energy, c.conditions.organics].filter((x) => x.ok).length;
      const opened = this.found.has(c.id);
      return `
        <div class="stat">
          <b>${c.name}</b> <span style="color:var(--muted);font-size:10px">— ${c.place}</span>
          <div class="bar-wrap"><div class="bar-fill" style="width:${(okCount / 3) * 100}%"></div></div>
          <div style="font-size:10.5px;color:var(--muted);margin:5px 0">Условий жизни: ${okCount} из 3</div>
          ${
            opened
              ? `<div class="verdict ${okCount === 3 ? 'ok' : 'no'}">
                   ${c.conditions.liquid.ok ? '✅' : '❌'} Жидкая среда: ${c.conditions.liquid.text}<br/>
                   ${c.conditions.energy.ok ? '✅' : '❌'} Энергия: ${c.conditions.energy.text}<br/>
                   ${c.conditions.organics.ok ? '✅' : '❌'} Органика: ${c.conditions.organics.text}
                   <div style="margin-top:7px">${c.verdict}</div>
                 </div>`
              : ''
          }
          <div class="row" style="margin-top:6px">
            <button class="btn tiny" data-life-open="${c.id}">${opened ? 'Скрыть' : 'Проверить условия'}</button>
            <button class="btn tiny ghost" data-life-go="${c.id}">📍 Лететь туда</button>
          </div>
        </div>`;
    }).join('');

    const score = CANDIDATES.filter((c) => {
      const okCount = [c.conditions.liquid, c.conditions.energy, c.conditions.organics].filter((x) => x.ok).length;
      return okCount === 3;
    }).length;

    this.ctx.ui.showModePanel(
      '🧬 Где искать жизнь?',
      'Жизни нужны три вещи: <b>жидкая среда</b>, <b>источник энергии</b> и <b>органика</b>. Проверьте кандидатов — где все три условия вместе?',
      `${cards}
       <div class="verdict ok">Полный набор (3 из 3) у ${score} кандидатов. Учёные считают Европу и Энцелад лучшими шансами — и уже строят миссии!</div>
       <button id="life-close" class="btn ghost" style="margin-top:10px">Закрыть квест</button>`
    );

    for (const btn of Array.from(document.querySelectorAll('[data-life-open]'))) {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.lifeOpen!;
        if (this.found.has(id)) this.found.delete(id);
        else this.found.add(id);
        this.renderPanel();
      });
    }
    for (const btn of Array.from(document.querySelectorAll('[data-life-go]'))) {
      btn.addEventListener('click', () => {
        const c = CANDIDATES.find((x) => x.id === (btn as HTMLElement).dataset.lifeGo)!;
        this.ctx.selectBody(c.bodyId);
        this.ctx.toast(`${c.name}: ${c.place}. ${c.verdict}`);
      });
    }
    document.getElementById('life-close')?.addEventListener('click', () => this.deactivate());
  }

  update(_dt: number): void {
    /* квест — интерфейсный */
  }
}
