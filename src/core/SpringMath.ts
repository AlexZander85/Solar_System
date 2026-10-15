/**
 * SpringMath — ядро анимации «Nothing Pops».
 * Критически демпфированная пружина settle() и гладкая огибающая burst().
 */
import * as THREE from 'three';

export interface Spring1 {
  value: number;
  velocity: number;
}

export interface SpringV3 {
  value: THREE.Vector3;
  velocity: THREE.Vector3;
}

export function spring1(value = 0): Spring1 {
  return { value, velocity: 0 };
}

export function springV3(value?: THREE.Vector3): SpringV3 {
  return { value: value ? value.clone() : new THREE.Vector3(), velocity: new THREE.Vector3() };
}

/**
 * Критически демпфированная пружина: state плавно приходит к target.
 * @param seconds — характерное время установления (больше = мягче).
 * Интегрируется 4 подшага за кадр — непрерывная скорость без рывков.
 */
export function settle(state: Spring1, target: number, dt: number, seconds: number): void {
  const steps = 4;
  const h = Math.min(dt, 0.1) / steps;
  const omega = 2 / Math.max(seconds, 1e-4);
  const omega2 = omega * omega;
  for (let i = 0; i < steps; i++) {
    const x = state.value - target;
    const accel = -omega2 * x - 2 * omega * state.velocity;
    state.velocity += accel * h;
    state.value += state.velocity * h;
  }
  if (Math.abs(state.value - target) < 1e-7 && Math.abs(state.velocity) < 1e-6) {
    state.value = target;
    state.velocity = 0;
  }
}

/** Версия settle для THREE.Vector3 — те же 4 подшага. */
export function settleV3(state: SpringV3, target: THREE.Vector3, dt: number, seconds: number): void {
  const steps = 4;
  const h = Math.min(dt, 0.1) / steps;
  const omega = 2 / Math.max(seconds, 1e-4);
  const omega2 = omega * omega;
  for (let i = 0; i < steps; i++) {
    const x = _tmpV.copy(state.value).sub(target);
    const accel = _tmpA.copy(x).multiplyScalar(-omega2).addScaledVector(state.velocity, -2 * omega);
    state.velocity.addScaledVector(accel, h);
    state.value.addScaledVector(state.velocity, h);
  }
  if (state.value.distanceToSquared(target) < 1e-12 && state.velocity.lengthSq() < 1e-12) {
    state.value.copy(target);
    state.velocity.set(0, 0, 0);
  }
}

const _tmpV = new THREE.Vector3();
const _tmpA = new THREE.Vector3();

/**
 * Гладкая огибающая вспышки: плавный подъём rise, экспоненциальное затухание fall.
 * Используется для солнечных выбросов, ударов метеоритов, включения двигателей.
 */
export function burst(age: number, rise: number, fall: number): number {
  if (age <= 0) return 0;
  const r = Math.max(rise, 1e-4);
  const f = Math.max(fall, 1e-4);
  const up = smoothstep(0, r, age);
  const down = Math.exp(-Math.max(0, age - r) / f);
  return up * down;
}

/** Стандартный smoothstep из GLSL. */
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0 || 1e-9), 0, 1);
  return t * t * (3 - 2 * t);
}

/** Плавное приближение (не пружина, а «медленный лаг») — удобно для выставок. */
export function approach(current: number, target: number, dt: number, halfLife: number): number {
  const k = 1 - Math.exp(-Math.LN2 * dt / Math.max(halfLife, 1e-4));
  return current + (target - current) * k;
}

/** Ограничение скорости изменения (насыщение) — чтобы камера не «щёлкала». */
export function rateLimit(prev: number, next: number, maxDelta: number): number {
  return prev + THREE.MathUtils.clamp(next - prev, -maxDelta, maxDelta);
}

/** Разница углов с учётом перехода через ±π. */
export function angleDelta(from: number, to: number): number {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export class Burst {
  age = Infinity;
  rise: number;
  fall: number;

  constructor(rise = 0.25, fall = 0.9) {
    this.rise = rise;
    this.fall = fall;
  }

  trigger(): void {
    this.age = 0;
  }

  update(dt: number): number {
    if (this.age === Infinity) return 0;
    this.age += dt;
    const v = burst(this.age, this.rise, this.fall);
    if (v < 0.002) this.age = Infinity;
    return v;
  }

  get value(): number {
    return this.age === Infinity ? 0 : burst(this.age, this.rise, this.fall);
  }
}
