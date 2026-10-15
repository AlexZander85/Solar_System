/**
 * Каталог тел Солнечной системы: физические данные, климат, факты (на русском).
 * Значения соответствуют современным астрономическим измерениям.
 */

export type BodyKind = 'star' | 'planet' | 'moon' | 'dwarf';

export type TextureStyle =
  | 'sun'
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'moon'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'
  | 'titan'
  | 'io'
  | 'europa'
  | 'enceladus'
  | 'ice'
  | 'rock';

export interface BodyDef {
  id: string;
  name: string;
  kind: BodyKind;
  radiusKm: number;
  massKg: number;
  /** Ускорение свободного падения, м/с². */
  gravity: number;
  /** Сидерический период вращения, часы (отрицательный — ретроградное). */
  rotationHours: number;
  /** Наклон оси вращения, градусы. */
  axialTiltDeg: number;
  /** Орбита: вокруг кого и параметры. */
  parent: string | null;
  /** Большая полуось в а.е. (планеты) или км (спутники). */
  aAU?: number;
  aKm?: number;
  eccentricity: number;
  /** Сидерический орбитальный период, земные сутки. */
  periodDays: number;
  /** Наклонение орбиты к эклиптике, градусы. */
  inclinationDeg: number;
  /** Температура поверхности/«поверхности», °C (средняя). */
  meanTempC: number;
  atmosphere: string;
  breathable: boolean;
  /** Длина солнечных суток, часы. */
  dayLengthHours: number;
  /** Период обращения вокруг родителя, в земных годах (для спутников — дни). */
  color: string;
  texture: TextureStyle;
  hasRings?: boolean;
  hasClouds?: boolean;
  hasAtmosphere?: boolean;
  hasCityLights?: boolean;
  hasMagnetosphere?: boolean;
  /** Для режима посадки. */
  landable?: boolean;
  /** Скорость вращения облачного слоя (отличается от поверхности у гигантов). */
  cloudSpeed?: number;
  museumRadius: number;
  facts: string[];
  tags: string[];
}

export const AU_KM = 149597870.7;
export const EARTH_RADIUS_KM = 6371;

export const BODIES: BodyDef[] = [
  {
    id: 'sun',
    name: 'Солнце',
    kind: 'star',
    radiusKm: 696340,
    massKg: 1.9885e30,
    gravity: 274,
    rotationHours: 609.12,
    axialTiltDeg: 7.25,
    parent: null,
    eccentricity: 0,
    periodDays: 0,
    inclinationDeg: 0,
    meanTempC: 5505,
    atmosphere: 'Водород (73%), гелий (25%), кислород, углерод, железо',
    breathable: false,
    dayLengthHours: 609.12,
    color: '#ffb347',
    texture: 'sun',
    hasMagnetosphere: true,
    museumRadius: 18,
    facts: [
      'В Солнце помещается 1 300 000 планет размером с Землю.',
      'Свет доходит от Солнца до Земли за 8 минут 20 секунд.',
      'В ядре температура 15 000 000 °C — там водород превращается в гелий.',
      'Солнцу около 4,6 миллиарда лет, ему хватит топлива ещё на 5 миллиардов.'
    ],
    tags: ['Звезда', 'Термоядерный синтез', 'Живое Солнце']
  },
  {
    id: 'mercury',
    name: 'Меркурий',
    kind: 'planet',
    radiusKm: 2439.7,
    massKg: 3.301e23,
    gravity: 3.7,
    rotationHours: 1407.6,
    axialTiltDeg: 0.03,
    parent: 'sun',
    aAU: 0.387,
    eccentricity: 0.2056,
    periodDays: 87.97,
    inclinationDeg: 7.0,
    meanTempC: 167,
    atmosphere: 'Практически нет (экзосфера: кислород, натрий, водород)',
    breathable: false,
    dayLengthHours: 4222.6,
    color: '#a7a29c',
    texture: 'mercury',
    landable: true,
    museumRadius: 1.35,
    facts: [
      'Сутки на Меркурии длятся дольше, чем год: 176 земных суток против 88!',
      'Днём +430 °C, ночью −180 °C — самый большой перепад температур.',
      'Поверхность изрыта кратерами как наша Луна.',
      'На полюсах Меркурия есть лёд в кратерах, куда никогда не заглядывает Солнце.'
    ],
    tags: ['Кратеры', 'Лёд на полюсах', 'Посадка возможна']
  },
  {
    id: 'venus',
    name: 'Венера',
    kind: 'planet',
    radiusKm: 6051.8,
    massKg: 4.867e24,
    gravity: 8.87,
    rotationHours: 5832.5,
    axialTiltDeg: 177.4,
    parent: 'sun',
    aAU: 0.723,
    eccentricity: 0.0068,
    periodDays: 224.7,
    inclinationDeg: 3.4,
    meanTempC: 464,
    atmosphere: 'Углекислый газ (96,5%), азот, облака серной кислоты',
    breathable: false,
    dayLengthHours: 2802,
    color: '#e8c46b',
    texture: 'venus',
    hasClouds: true,
    hasAtmosphere: true,
    cloudSpeed: 2.5,
    landable: true,
    museumRadius: 2.55,
    facts: [
      'Самая горячая планета: +464 °C, хотя Меркурий ближе к Солнцу.',
      'Давление как на глубине 900 метров в океане — 92 атмосферы.',
      'Венера вращается «вверх ногами» и медленнее всех: сутки длиннее года.',
      'В облаках Венеры, на высоте 50 км, температура почти как на Земле — там ищут жизнь.'
    ],
    tags: ['Парниковый эффект', 'Серные облака', 'Облака — кандидат на жизнь']
  },
  {
    id: 'earth',
    name: 'Земля',
    kind: 'planet',
    radiusKm: 6371,
    massKg: 5.972e24,
    gravity: 9.81,
    rotationHours: 23.93,
    axialTiltDeg: 23.44,
    parent: 'sun',
    aAU: 1.0,
    eccentricity: 0.0167,
    periodDays: 365.25,
    inclinationDeg: 0,
    meanTempC: 15,
    atmosphere: 'Азот (78%), кислород (21%), аргон, углекислый газ',
    breathable: true,
    dayLengthHours: 24,
    color: '#4f9ee8',
    texture: 'earth',
    hasClouds: true,
    hasAtmosphere: true,
    hasCityLights: true,
    hasMagnetosphere: true,
    museumRadius: 2.8,
    facts: [
      'Единственная известная планета, где есть жидкая вода и жизнь.',
      'Магнитное поле Земли защищает нас от солнечной радиации — это щит жизни.',
      'Луна помогает Земле: держит наклон оси и вызывает приливы.',
      '8 минут 20 секунд — столько летит до нас солнечный свет. Мы видим Солнце в прошлом!'
    ],
    tags: ['Жизнь', 'Жидкая вода', 'Кислород', 'Магнитосфера']
  },
  {
    id: 'moon',
    name: 'Луна',
    kind: 'moon',
    radiusKm: 1737.4,
    massKg: 7.342e22,
    gravity: 1.62,
    rotationHours: 655.7,
    axialTiltDeg: 6.7,
    parent: 'earth',
    aKm: 384400,
    eccentricity: 0.0549,
    periodDays: 27.32,
    inclinationDeg: 5.145,
    meanTempC: -20,
    atmosphere: 'Практически нет (экзосфера)',
    breathable: false,
    dayLengthHours: 708.7,
    color: '#c9c5bb',
    texture: 'moon',
    landable: true,
    museumRadius: 0.95,
    facts: [
      'На Луне ты прыгнешь в 6 раз выше, чем на Земле: вес всего в 6 раз меньше!',
      'Аполлон-11: 20 июля 1969 года первые люди ступили на Луну.',
      'Следы астронавтов сохранятся миллионы лет — на Луне нет ветра и дождя.',
      'Луна удаляется от Земли на 3,8 см каждый год — как растут ногти.'
    ],
    tags: ['1/6 g', 'Аполлон-11', 'Посадка возможна']
  },
  {
    id: 'mars',
    name: 'Марс',
    kind: 'planet',
    radiusKm: 3389.5,
    massKg: 6.417e23,
    gravity: 3.71,
    rotationHours: 24.62,
    axialTiltDeg: 25.19,
    parent: 'sun',
    aAU: 1.524,
    eccentricity: 0.0934,
    periodDays: 686.98,
    inclinationDeg: 1.85,
    meanTempC: -63,
    atmosphere: 'Углекислый газ (95%), азот, аргон — давление 0,6% земного',
    breathable: false,
    dayLengthHours: 24.66,
    color: '#c1440e',
    texture: 'mars',
    hasClouds: true,
    hasAtmosphere: true,
    landable: true,
    museumRadius: 1.85,
    facts: [
      'На Марсе есть гора Олимп — в 3 раза выше Эвереста!',
      'Закаты на Марсе голубые — пыль рассеивает свет наоборот, чем на Земле.',
      'Марсоход Perseverance ищет следы древней жизни в кратере Езеро.',
      'Радиосигнал от Земли до Марса летит от 3 до 22 минут — поэтому ровером нельзя управлять джойстиком.'
    ],
    tags: ['Красная планета', 'Голубой закат', 'Ищем жизнь', 'Марсоходы']
  },
  {
    id: 'phobos',
    name: 'Фобос',
    kind: 'moon',
    radiusKm: 11.27,
    massKg: 1.06e16,
    gravity: 0.0057,
    rotationHours: 7.65,
    axialTiltDeg: 0,
    parent: 'mars',
    aKm: 9376,
    eccentricity: 0.0151,
    periodDays: 0.319,
    inclinationDeg: 1.08,
    meanTempC: -40,
    atmosphere: 'Нет',
    breathable: false,
    dayLengthHours: 7.65,
    color: '#7a7269',
    texture: 'rock',
    museumRadius: 0.28,
    facts: ['Фобос вращается так близко к Марсу, что падает на него на 2 см в год.'],
    tags: ['Астероид-спутник']
  },
  {
    id: 'deimos',
    name: 'Деймос',
    kind: 'moon',
    radiusKm: 6.2,
    massKg: 1.48e15,
    gravity: 0.003,
    rotationHours: 30.3,
    axialTiltDeg: 0,
    parent: 'mars',
    aKm: 23463,
    eccentricity: 0.0002,
    periodDays: 1.263,
    inclinationDeg: 1.79,
    meanTempC: -40,
    atmosphere: 'Нет',
    breathable: false,
    dayLengthHours: 30.3,
    color: '#8a8078',
    texture: 'rock',
    museumRadius: 0.2,
    facts: ['Деймос — крошечный спутник размером с город.'],
    tags: ['Астероид-спутник']
  },
  {
    id: 'jupiter',
    name: 'Юпитер',
    kind: 'planet',
    radiusKm: 69911,
    massKg: 1.898e27,
    gravity: 24.79,
    rotationHours: 9.93,
    axialTiltDeg: 3.13,
    parent: 'sun',
    aAU: 5.203,
    eccentricity: 0.0484,
    periodDays: 4332.6,
    inclinationDeg: 1.3,
    meanTempC: -110,
    atmosphere: 'Водород (89%), гелий (10%) — газовый гигант',
    breathable: false,
    dayLengthHours: 9.93,
    color: '#d8b48a',
    texture: 'jupiter',
    hasClouds: true,
    hasAtmosphere: true,
    hasMagnetosphere: true,
    cloudSpeed: 1.6,
    museumRadius: 9.6,
    facts: [
      'Юпитер — самая большая планета: в нём 1300 Земель.',
      'Большое Красное Пятно — гигантский ураган, который бушует уже 350 лет.',
      'У Юпитера 95 известных лун! Самые интересные — Ио, Европа, Ганимед, Каллисто.',
      'Юпитер — щит Солнечной системы: он притягивает опасные кометы.'
    ],
    tags: ['Газовый гигант', 'Большое Красное Пятно', 'Магнитосфера', '95 лун']
  },
  {
    id: 'io',
    name: 'Ио',
    kind: 'moon',
    radiusKm: 1821.6,
    massKg: 8.93e22,
    gravity: 1.8,
    rotationHours: 42.46,
    axialTiltDeg: 0,
    parent: 'jupiter',
    aKm: 421700,
    eccentricity: 0.0041,
    periodDays: 1.769,
    inclinationDeg: 0.05,
    meanTempC: -130,
    atmosphere: 'Диоксид серы (SO₂)',
    breathable: false,
    dayLengthHours: 42.46,
    color: '#e8d268',
    texture: 'io',
    museumRadius: 0.75,
    facts: [
      'Ио — самое вулканически активное тело в Солнечной системе.',
      'Приливы от Юпитера выжимают Ио, как мяч, — и недра плавятся.',
      'Вулканы Ио выбрасывают серу на сотни километров вверх.'
    ],
    tags: ['Вулканы', 'Лава', 'Экзосфера SO₂']
  },
  {
    id: 'europa',
    name: 'Европа',
    kind: 'moon',
    radiusKm: 1560.8,
    massKg: 4.80e22,
    gravity: 1.31,
    rotationHours: 85.2,
    axialTiltDeg: 0.1,
    parent: 'jupiter',
    aKm: 671100,
    eccentricity: 0.009,
    periodDays: 3.551,
    inclinationDeg: 0.47,
    meanTempC: -160,
    atmosphere: 'Кислород (разреженный)',
    breathable: false,
    dayLengthHours: 85.2,
    color: '#d8cfc0',
    texture: 'europa',
    landable: true,
    museumRadius: 0.7,
    facts: [
      'Под ледяной корой Европы скрыт океан — в нём больше воды, чем во всех земных океанах!',
      'Трещины на льду — следы приливов от Юпитера.',
      'Европа — главный кандидат на поиск внеземной жизни.'
    ],
    tags: ['Подлёдный океан', 'Жизнь?', 'Лёд']
  },
  {
    id: 'ganymede',
    name: 'Ганимед',
    kind: 'moon',
    radiusKm: 2634.1,
    massKg: 1.48e23,
    gravity: 1.43,
    rotationHours: 171.7,
    axialTiltDeg: 0.3,
    parent: 'jupiter',
    aKm: 1070400,
    eccentricity: 0.0013,
    periodDays: 7.155,
    inclinationDeg: 0.2,
    meanTempC: -163,
    atmosphere: 'Кислород (разреженный)',
    breathable: false,
    dayLengthHours: 171.7,
    color: '#b0a494',
    texture: 'rock',
    museumRadius: 1.1,
    facts: [
      'Ганимед — самый большой спутник Солнечной системы, больше Меркурия!',
      'Единственный спутник со своим магнитным полем.',
      'Под льдом Ганимеда тоже может быть океан.'
    ],
    tags: ['Крупнейший спутник', 'Магнитосфера']
  },
  {
    id: 'callisto',
    name: 'Каллисто',
    kind: 'moon',
    radiusKm: 2410.3,
    massKg: 1.08e23,
    gravity: 1.24,
    rotationHours: 400.5,
    axialTiltDeg: 0,
    parent: 'jupiter',
    aKm: 1882700,
    eccentricity: 0.0074,
    periodDays: 16.69,
    inclinationDeg: 0.19,
    meanTempC: -139,
    atmosphere: 'Углекислый газ (разреженный)',
    breathable: false,
    dayLengthHours: 400.5,
    color: '#8c8478',
    texture: 'rock',
    museumRadius: 1.0,
    facts: ['Каллисто — древнейшая поверхность Солнечной системы: 4 миллиарда лет без изменений.'],
    tags: ['Древние кратеры']
  },
  {
    id: 'saturn',
    name: 'Сатурн',
    kind: 'planet',
    radiusKm: 58232,
    massKg: 5.683e26,
    gravity: 10.44,
    rotationHours: 10.66,
    axialTiltDeg: 26.73,
    parent: 'sun',
    aAU: 9.537,
    eccentricity: 0.0539,
    periodDays: 10759,
    inclinationDeg: 2.49,
    meanTempC: -140,
    atmosphere: 'Водород (96%), гелий — газовый гигант',
    breathable: false,
    dayLengthHours: 10.66,
    color: '#e3d1a0',
    texture: 'saturn',
    hasClouds: true,
    hasAtmosphere: true,
    hasRings: true,
    hasMagnetosphere: true,
    cloudSpeed: 1.9,
    museumRadius: 8.3,
    facts: [
      'Кольца Сатурна состоят из миллиардов кусочков льда — от песчинки до дома.',
      'Плотность Сатурна меньше воды: он бы плавал в огромной ванне!',
      'На северном полюсе Сатурна — шестиугольный шторм размером с две Земли.',
      'У Сатурна 274 известных спутника.'
    ],
    tags: ['Кольца', 'Газовый гигант', 'Гексагон', '274 луны']
  },
  {
    id: 'enceladus',
    name: 'Энцелад',
    kind: 'moon',
    radiusKm: 252.1,
    massKg: 1.08e20,
    gravity: 0.113,
    rotationHours: 32.9,
    axialTiltDeg: 0,
    parent: 'saturn',
    aKm: 237948,
    eccentricity: 0.0047,
    periodDays: 1.37,
    inclinationDeg: 0.019,
    meanTempC: -201,
    atmosphere: 'Водяной пар, водород (гейзеры)',
    breathable: false,
    dayLengthHours: 32.9,
    color: '#f2f5f8',
    texture: 'enceladus',
    landable: true,
    museumRadius: 0.42,
    facts: [
      'Энцелад выбрасывает гейзеры воды в космос — они питают кольцо E Сатурна.',
      'Подо льдом прячется тёплый океан с гидротермальными источниками.',
      'Кассини «пролетел» сквозь гейзеры и нашёл органику!'
    ],
    tags: ['Гейзеры', 'Подлёдный океан', 'Жизнь?']
  },
  {
    id: 'titan',
    name: 'Титан',
    kind: 'moon',
    radiusKm: 2574.7,
    massKg: 1.345e23,
    gravity: 1.35,
    rotationHours: 382.7,
    axialTiltDeg: 0,
    parent: 'saturn',
    aKm: 1221870,
    eccentricity: 0.0288,
    periodDays: 15.95,
    inclinationDeg: 0.35,
    meanTempC: -179,
    atmosphere: 'Азот (95%), метан — давление 1,5 атмосферы',
    breathable: false,
    dayLengthHours: 382.7,
    color: '#e8a04c',
    texture: 'titan',
    hasClouds: true,
    hasAtmosphere: true,
    landable: true,
    museumRadius: 1.15,
    facts: [
      'Титан — единственное тело, кроме Земли, с реками, озёрами и морями (из жидкого метана!).',
      'Плотная атмосфера и слабая гравитация: на Титане можно «взмахнуть крыльями и полететь».',
      'Зонд «Гюйгенс» сел на Титан в 2005 году и прислал фотографии берега.'
    ],
    tags: ['Метановые озёра', 'Плотная атмосфера', 'Полёты вручную', 'Жизнь?']
  },
  {
    id: 'uranus',
    name: 'Уран',
    kind: 'planet',
    radiusKm: 25362,
    massKg: 8.681e25,
    gravity: 8.87,
    rotationHours: 17.24,
    axialTiltDeg: 97.77,
    parent: 'sun',
    aAU: 19.191,
    eccentricity: 0.0472,
    periodDays: 30687,
    inclinationDeg: 0.77,
    meanTempC: -195,
    atmosphere: 'Водород, гелий, метан (льдяной гигант)',
    breathable: false,
    dayLengthHours: 17.24,
    color: '#9fe0e8',
    texture: 'uranus',
    hasAtmosphere: true,
    hasRings: true,
    museumRadius: 5.2,
    facts: [
      'Уран лежит на боку: наклон оси 98° — он «катится» по орбите.',
      'Из-за наклона на полюсах Урана 42 года длится день, потом 42 года — ночь.',
      'В атмосфере Урана и Нептуна идут «алмазные дожди».'
    ],
    tags: ['Ледяной гигант', 'Лежит на боку', 'Алмазный дождь']
  },
  {
    id: 'neptune',
    name: 'Нептун',
    kind: 'planet',
    radiusKm: 24622,
    massKg: 1.024e26,
    gravity: 11.15,
    rotationHours: 16.11,
    axialTiltDeg: 28.32,
    parent: 'sun',
    aAU: 30.07,
    eccentricity: 0.0086,
    periodDays: 60190,
    inclinationDeg: 1.77,
    meanTempC: -200,
    atmosphere: 'Водород, гелий, метан (льдяной гигант)',
    breathable: false,
    dayLengthHours: 16.11,
    color: '#4b70dd',
    texture: 'neptune',
    hasClouds: true,
    hasAtmosphere: true,
    hasMagnetosphere: true,
    museumRadius: 5.0,
    facts: [
      'На Нептуне самые сильные ветры Солнечной системы: до 2100 км/ч.',
      'Нептун открыт «на кончике пера» — математики посчитали, где его искать.',
      'Солнечному свету нужно 4 часа 10 минут, чтобы долететь до Нептуна.'
    ],
    tags: ['Ледяной гигант', 'Суперветры', 'Дальний край']
  },
  {
    id: 'triton',
    name: 'Тритон',
    kind: 'moon',
    radiusKm: 1353.4,
    massKg: 2.14e22,
    gravity: 0.779,
    rotationHours: 141.0,
    axialTiltDeg: 0,
    parent: 'neptune',
    aKm: 354759,
    eccentricity: 0.000016,
    periodDays: 5.877,
    inclinationDeg: 157,
    meanTempC: -235,
    atmosphere: 'Азот, метан (разреженный)',
    breathable: false,
    dayLengthHours: 141,
    color: '#c8b8d8',
    texture: 'ice',
    museumRadius: 0.72,
    facts: [
      'Тритон вращается «наоборот» — значит, его поймал Нептун, а не родился рядом.',
      'На Тритоне −235 °C — самое холодное место в Солнечной системе.',
      'Вояджер-2 видел на Тритоне азотные гейзеры высотой 8 км.'
    ],
    tags: ['Ретроградная орбита', 'Гейзеры', 'Холод']
  }
];

export const BODY_MAP: Record<string, BodyDef> = Object.fromEntries(
  BODIES.map((b) => [b.id, b])
);

/** Тела, доступные для посадки. */
export const LANDABLE_IDS = BODIES.filter((b) => b.landable).map((b) => b.id);

export function bodyById(id: string): BodyDef {
  const b = BODY_MAP[id];
  if (!b) throw new Error(`Неизвестное тело: ${id}`);
  return b;
}

/** Длина солнечных суток в земных сутках. */
export function solarDayDays(b: BodyDef): number {
  return b.dayLengthHours / 24;
}

/** Год в земных годах. */
export function yearYears(b: BodyDef): number {
  return b.periodDays / 365.25;
}

/* ------------------------------------------------------------------ */
/* Масштабы сцены: «музейный наглядный» и «реальные пропорции».        */
/* ------------------------------------------------------------------ */

export interface ScaleConfig {
  id: 'museum' | 'real';
  label: string;
  /** Единица сцены в км (для реального масштаба). */
  kmPerUnit: number;
  radiusUnits(body: BodyDef): number;
  /** Радиус орбиты планеты вокруг Солнца в единицах сцены. */
  orbitUnits(body: BodyDef): number;
  /** Радиус орбиты спутника вокруг планеты. */
  moonOrbitUnits(body: BodyDef): number;
}

export const MUSEUM_SCALE: ScaleConfig = {
  id: 'museum',
  label: 'Наглядный музейный',
  kmPerUnit: 20000,
  radiusUnits: (b) => (b.kind === 'star' ? 18 : b.museumRadius),
  orbitUnits: (b) => {
    const a = b.aAU ?? 1;
    return 46 * Math.pow(a, 0.62);
  },
  moonOrbitUnits: (b) => {
    const parent = b.parent ? BODY_MAP[b.parent] : null;
    const base = parent ? MUSEUM_SCALE.radiusUnits(parent) : 10;
    return base * (2.2 + 0.35 * Math.log10((b.aKm ?? 1e5) / 1e4));
  }
};

export const REAL_SCALE: ScaleConfig = {
  id: 'real',
  label: 'Реальные пропорции',
  kmPerUnit: 2e6,
  radiusUnits: (b) => b.radiusKm / 2e6,
  orbitUnits: (b) => ((b.aAU ?? 1) * AU_KM) / 2e6,
  moonOrbitUnits: (b) => (b.aKm ?? 1e5) / 2e6
};

export function scaleConfig(id: 'museum' | 'real'): ScaleConfig {
  return id === 'real' ? REAL_SCALE : MUSEUM_SCALE;
}
