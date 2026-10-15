/**
 * Эфемериды — реальные гелиоцентрические положения тел на любую дату.
 *
 * Планеты: приближённые элементы JPL (Standish, действительны для 1800–2050).
 * Луна: усечённая лунная теория Шлителя (точность ~2 угловые минуты).
 */
import * as THREE from 'three';
import { AU_KM, BODY_MAP, EARTH_RADIUS_KM, type BodyDef } from './bodies';

/** Юлианский день по UTC-дате. */
export function julianDay(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

export function dateFromJD(jd: number): Date {
  return new Date((jd - 2440587.5) * 86400000);
}

/** Элементы JPL: [a, e, I, L, ϖ, Ω] и их вековые скорости. */
interface Elements {
  a: [number, number];
  e: [number, number];
  I: [number, number];
  L: [number, number];
  peri: [number, number];
  node: [number, number];
}

const PLANET_ELEMENTS: Record<string, Elements> = {
  mercury: {
    a: [0.38709927, 0.00000037],
    e: [0.20563593, 0.00001906],
    I: [7.00497902, -0.00594749],
    L: [252.2503235, 149472.67411175],
    peri: [77.45779628, 0.16047689],
    node: [48.33076593, -0.12534081]
  },
  venus: {
    a: [0.72333566, 0.0000039],
    e: [0.00677672, -0.00004107],
    I: [3.39467605, -0.0007889],
    L: [181.9790995, 58517.81538729],
    peri: [131.60246718, 0.00268329],
    node: [76.67984255, -0.27769418]
  },
  earth: {
    a: [1.00000261, 0.00000562],
    e: [0.01671123, -0.00004392],
    I: [-0.00001531, -0.01294668],
    L: [100.46457166, 35999.37244981],
    peri: [102.93768193, 0.32327364],
    node: [0.0, 0.0]
  },
  mars: {
    a: [1.52371034, 0.00001847],
    e: [0.0933941, 0.00007882],
    I: [1.84969142, -0.00813131],
    L: [-4.55343205, 19140.30268499],
    peri: [-23.94362959, 0.44441088],
    node: [49.55953891, -0.29257343]
  },
  jupiter: {
    a: [5.202887, -0.00011607],
    e: [0.04838624, -0.00013253],
    I: [1.30439695, -0.00183714],
    L: [34.39644051, 3034.74612775],
    peri: [14.72847983, 0.21252668],
    node: [100.47390909, 0.20469106]
  },
  saturn: {
    a: [9.53667594, -0.0012506],
    e: [0.05386179, -0.00050991],
    I: [2.48599187, 0.00193609],
    L: [49.95424423, 1222.49362201],
    peri: [92.59887831, -0.41897216],
    node: [113.66242448, -0.28867794]
  },
  uranus: {
    a: [19.18916464, -0.00196176],
    e: [0.04725744, -0.00004397],
    I: [0.77263783, -0.00242939],
    L: [313.23810451, 428.48202785],
    peri: [170.9542763, 0.40805281],
    node: [74.01692503, 0.04240589]
  },
  neptune: {
    a: [30.06992276, 0.00026291],
    e: [0.00859048, 0.00005105],
    I: [1.77004347, 0.00035372],
    L: [-55.12002969, 218.45945325],
    peri: [44.96476227, -0.32241464],
    node: [131.78422574, -0.00508664]
  }
};

const DEG = Math.PI / 180;

function solveKepler(Mdeg: number, e: number): number {
  let E = (Mdeg * DEG) + e * Math.sin(Mdeg * DEG);
  for (let i = 0; i < 12; i++) {
    const dM = Mdeg * DEG - (E - e * Math.sin(E));
    const dE = dM / (1 - e * Math.cos(E));
    E += dE;
    if (Math.abs(dE) < 1e-9) break;
  }
  return E;
}

function mod360(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

/** Гелиоцентрическое положение планеты (а.е., эклиптика J2000). */
export function planetPositionAU(planetId: string, jd: number, out = new THREE.Vector3()): THREE.Vector3 {
  const el = PLANET_ELEMENTS[planetId];
  if (!el) return out.set(0, 0, 0);
  const T = (jd - 2451545.0) / 36525;

  const a = el.a[0] + el.a[1] * T;
  const e = el.e[0] + el.e[1] * T;
  const I = (el.I[0] + el.I[1] * T) * DEG;
  const L = el.L[0] + el.L[1] * T;
  const peri = el.peri[0] + el.peri[1] * T;
  const node = (el.node[0] + el.node[1] * T) * DEG;

  const M = mod360(L - peri) * DEG;
  const E = solveKepler(mod360(L - peri), e);
  const omega = peri * DEG - node;

  const xp = a * (Math.cos(E) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);

  const cO = Math.cos(omega);
  const sO = Math.sin(omega);
  const cN = Math.cos(node);
  const sN = Math.sin(node);
  const cI = Math.cos(I);
  const sI = Math.sin(I);

  out.x = (cO * cN - sO * sN * cI) * xp + (-sO * cN - cO * sN * cI) * yp;
  out.y = (cO * sN + sO * cN * cI) * xp + (-sO * sN + cO * cN * cI) * yp;
  out.z = (sO * sI) * xp + (cO * sI) * yp;
  void M;
  return out;
}

/**
 * Положение Луны относительно Земли (км, эклиптика).
 * Усечённая теория Шлителя + главные возмущения.
 */
export function moonPositionKm(jd: number, out = new THREE.Vector3()): THREE.Vector3 {
  const d = jd - 2451543.5; // дни от 2000 Jan 0.0

  const N = 125.1228 - 0.0529538083 * d;
  const i = 5.1454;
  const w = 318.0634 + 0.1643573223 * d;
  const a = 60.2666; // земные радиусы
  const e = 0.0549;
  const M = 115.3654 + 13.0649929509 * d;

  // Солнечная долгота и аномалия (для возмущений)
  const ws = 282.9404 + 0.0000470935 * d;
  const Ms = 356.047 + 0.9856002585 * d;
  const Ls = Ms + ws;
  const Lm = N + w + M;
  const D = Lm - Ls; // элонгация
  const F = Lm - N; // аргумент широты

  // Главные периодические возмущения (в градусах)
  const evection = 1.2739 * Math.sin((2 * D - M) * DEG);
  const variation = 0.6583 * Math.sin(2 * D * DEG);
  const annualEq = -0.1858 * Math.sin(Ms * DEG);
  const mprime = M + evection + variation + annualEq;

  const E = solveKepler(mod360(mprime), e);
  const xp = a * (Math.cos(E) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);

  // Долгота в орбите
  const v = Math.atan2(yp, xp) / DEG;
  const r = Math.sqrt(xp * xp + yp * yp);
  void F;

  const xv = r * Math.cos((v + w) * DEG);
  const yv = r * Math.sin((v + w) * DEG);

  // Переход к эклиптическим координатам
  const Nr = N * DEG;
  const ir = i * DEG;
  const xeclip = xv * Math.cos(Nr) - yv * Math.sin(Nr) * Math.cos(ir);
  const yeclip = xv * Math.sin(Nr) + yv * Math.cos(Nr) * Math.cos(ir);
  const zeclip = yv * Math.sin(ir);

  const km = EARTH_RADIUS_KM;
  return out.set(xeclip * km, yeclip * km, zeclip * km);
}

/**
 * Мировое положение тела в км (гелиоцентрическая эклиптика, ось X на восходящий узел).
 * Для спутников — положение родителя + орбита вокруг него.
 */
const _parent = new THREE.Vector3();
const _rel = new THREE.Vector3();

export function bodyWorldPositionKm(body: BodyDef, jd: number, out = new THREE.Vector3()): THREE.Vector3 {
  if (body.id === 'sun') return out.set(0, 0, 0);

  if (body.parent === 'earth' && body.id === 'moon') {
    // Абсолютное положение: Земля + геоцентрическая орбита Луны
    bodyWorldPositionKm(BODY_MAP['earth'], jd, _parent);
    moonPositionKm(jd, _rel);
    return out.copy(_parent).add(_rel);
  }

  if (body.parent && body.parent !== 'sun') {
    const parent = BODY_MAP[body.parent];
    bodyWorldPositionKm(parent, jd, _parent);
    moonOrbitKm(body, jd, _rel);
    return out.copy(_parent).add(_rel);
  }

  // Планета вокруг Солнца
  planetPositionAU(body.id, jd, out);
  return out.multiplyScalar(AU_KM);
}

/**
 * Простая кеплерова орбита спутника вокруг родителя (для визуализации).
 * Фаза подобрана так, чтобы движение выглядело естественно.
 */
function moonOrbitKm(body: BodyDef, jd: number, out: THREE.Vector3): THREE.Vector3 {
  const a = body.aKm ?? 1e5;
  const e = body.eccentricity;
  const inc = body.inclinationDeg * DEG;
  const period = Math.max(body.periodDays, 0.05);
  const phase0 = hashString(body.id) % 360;

  const M = ((jd / period) * 360 + phase0) * DEG;
  const E = solveKepler(mod360(M / DEG), e);
  const xp = a * (Math.cos(E) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);

  // Лёгкий наклон плоскости орбиты + вытянутая долгота узла
  const node = (hashString(body.id + 'n') % 360) * DEG;
  const cN = Math.cos(node);
  const sN = Math.sin(node);
  const cI = Math.cos(inc);
  const sI = Math.sin(inc);

  out.x = (cN * xp - sN * cI * yp);
  out.y = (sN * xp + cN * cI * yp);
  out.z = sI * yp;
  return out;
}

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/* ------------------------------------------------------------------ */
/* Исторические даты и затмения                                        */
/* ------------------------------------------------------------------ */

export interface DatePreset {
  id: string;
  label: string;
  date: string; // ISO
}

export const DATE_PRESETS: DatePreset[] = [
  { id: 'apollo11', label: '20 июля 1969 — высадка Аполлона-11', date: '1969-07-20T20:17:00Z' },
  { id: 'voyager1', label: '5 сентября 1977 — старт Вояджера-1', date: '1977-09-05T12:56:00Z' },
  { id: 'perseverance', label: '18 февраля 2021 — посадка Perseverance', date: '2021-02-18T20:55:00Z' },
  { id: 'eclipse2026', label: '12 августа 2026 — солнечное затмение', date: '2026-08-12T17:46:00Z' },
  { id: 'eclipse2027', label: '2 августа 2027 — полное затмение', date: '2027-08-02T10:07:00Z' },
  { id: 'eclipse2028', label: '22 июля 2028 — затмение в Австралии', date: '2028-07-22T02:56:00Z' }
];

/** Ближайшее солнечное затмение после указанной даты. */
export function nextEclipse(from: Date): DatePreset {
  const upcoming = DATE_PRESETS.filter((p) => p.id.startsWith('eclipse') && new Date(p.date) > from);
  if (upcoming.length > 0) return upcoming[0];
  return DATE_PRESETS.find((p) => p.id === 'eclipse2028')!;
}

/** Расстояние между телами в км на дату. */
export function distanceKm(idA: string, idB: string, jd: number): number {
  const a = bodyWorldPositionKm(BODY_MAP[idA], jd, new THREE.Vector3());
  const b = bodyWorldPositionKm(BODY_MAP[idB], jd, new THREE.Vector3());
  return a.distanceTo(b);
}

/** Время прохождения света между телами, в секундах. */
export const LIGHT_SPEED_KM_S = 299792.458;

export function lightTimeSeconds(idA: string, idB: string, jd: number): number {
  return distanceKm(idA, idB, jd) / LIGHT_SPEED_KM_S;
}
