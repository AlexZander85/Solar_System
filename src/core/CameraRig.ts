/**
 * CameraRig — конечный автомат камеры с критически демпфированным движением.
 *
 * Состояния: CINEMATIC_INTRO | SYSTEM | ORBIT | CUTAWAY | RING_DIVE |
 *            SURFACE_WALK | SPACECRAFT_FLIGHT
 *
 * Все переходы target/FOV/distance идут через SpringMath.settle() —
 * никаких телепортов и «щелчков» (закон Nothing Pops).
 */
import * as THREE from 'three';
import {
  angleDelta,
  settle,
  settleV3,
  smoothstep,
  spring1,
  springV3,
  type Spring1,
  type SpringV3
} from './SpringMath';

export type CameraState =
  | 'CINEMATIC_INTRO'
  | 'SYSTEM'
  | 'ORBIT'
  | 'CUTAWAY'
  | 'RING_DIVE'
  | 'SURFACE_WALK'
  | 'SPACECRAFT_FLIGHT';

export interface PointerInput {
  dragDX: number;
  dragDY: number;
  panDX: number;
  panDY: number;
  zoom: number;
}

export interface SurfacePose {
  position: THREE.Vector3;
  yaw: number;
  pitch: number;
}

const STATE_FOV: Record<CameraState, number> = {
  CINEMATIC_INTRO: 52,
  SYSTEM: 55,
  ORBIT: 50,
  CUTAWAY: 42,
  RING_DIVE: 62,
  SURFACE_WALK: 68,
  SPACECRAFT_FLIGHT: 60
};

export class CameraRig {
  readonly camera: THREE.PerspectiveCamera;
  state: CameraState = 'SYSTEM';

  /** Сферические координаты вокруг фокуса (фокус = начало координат в floating origin). */
  private azimuth: Spring1 = spring1(Math.PI * 0.35);
  private elevation: Spring1 = spring1(0.32);
  private distance: Spring1 = spring1(120);
  private pan: SpringV3 = springV3();
  private fov: Spring1 = spring1(55);
  private roll: Spring1 = spring1(0);

  /** Желаемые (целевые) значения — к ним идут пружины. */
  targetAzimuth = Math.PI * 0.35;
  targetElevation = 0.32;
  targetDistance = 120;

  /** Ограничение минимальной дистанции: радиус * 1.02 + высота рельефа. */
  bodyRadius = 1;
  terrainHeight = 0;

  /** Внешняя поза для SURFACE_WALK / SPACECRAFT_FLIGHT. */
  surfacePose: SurfacePose = {
    position: new THREE.Vector3(),
    yaw: 0,
    pitch: 0
  };

  /** Ручное управление FOV (Фотолаборатория). */
  fovOverride: number | null = null;

  /** Программные ключи для CINEMATIC_INTRO. */
  introProgress = 0;

  private lookTarget = new THREE.Vector3();
  private lookSmooth = new THREE.Vector3();
  private tmp = new THREE.Vector3();
  minDistanceScale = 1.02;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.lookSmooth.set(0, 0, 0);
    this.applySpherical(1);
    this.camera.position.set(0, this.bodyRadius * 3, this.distance.value);
    this.camera.lookAt(0, 0, 0);
  }

  get minDistance(): number {
    return this.bodyRadius * this.minDistanceScale + this.terrainHeight;
  }

  /** Смена режима камеры — плавная, с подстройкой FOV. */
  request(state: CameraState): void {
    if (this.state === state) return;
    this.state = state;
    if (state === 'ORBIT') {
      this.targetElevation = THREE.MathUtils.clamp(this.targetElevation, -1.35, 1.35);
    }
    if (state === 'CUTAWAY') {
      this.targetElevation = THREE.MathUtils.clamp(this.targetElevation, -0.9, 0.9);
      this.targetDistance = Math.max(this.targetDistance, this.bodyRadius * 3.2);
    }
    if (state === 'RING_DIVE') {
      this.targetElevation = THREE.MathUtils.clamp(this.targetElevation, -0.45, 0.45);
      this.targetDistance = Math.min(this.targetDistance, this.bodyRadius * 6);
    }
    if (state === 'SYSTEM') {
      this.pan.value.set(0, 0, 0);
      this.pan.velocity.set(0, 0, 0);
    }
  }

  /** Установить фокус-тело (его радиус ограничивает подлёт). */
  setFocusBody(radius: number): void {
    this.bodyRadius = Math.max(radius, 1e-4);
    this.targetDistance = Math.max(this.targetDistance, this.minDistance * 1.25);
    this.distance.value = Math.max(this.distance.value, this.minDistance);
  }

  /** Кадрирование тела: дистанция = радиус * mult. */
  frameBody(radius: number, mult = 3.6, duration = 1.2): void {
    this.bodyRadius = Math.max(radius, 1e-4);
    this.targetDistance = this.bodyRadius * mult;
    this._frameSeconds = duration;
    void this._frameSeconds;
  }

  private _frameSeconds = 1.2;

  /** Ввод пользователя (в пикселях и «щелчках» колеса). */
  addInput(input: PointerInput): void {
    const speed = 0.0052 * (STATE_FOV[this.state] / 55);
    this.targetAzimuth -= input.dragDX * speed;
    this.targetElevation += input.dragDY * speed * 0.85;
    this.targetElevation = THREE.MathUtils.clamp(this.targetElevation, -1.5, 1.5);

    if (input.panDX !== 0 || input.panDY !== 0) {
      const k = this.targetDistance * 0.0016;
      this.pan.value.x -= input.panDX * k;
      this.pan.value.y += input.panDY * k;
      if (this.state === 'SYSTEM') {
        this.pan.value.set(0, 0, 0); // в обзоре панорама отключена — держим центр
      }
    }

    if (input.zoom !== 0) {
      const factor = Math.exp(input.zoom * 0.0016);
      this.targetDistance = THREE.MathUtils.clamp(
        this.targetDistance * factor,
        this.minDistance * 1.02,
        12000
      );
    }
  }

  /** Прямая установка дистанции (из UI). */
  setDistance(d: number): void {
    this.targetDistance = THREE.MathUtils.clamp(d, this.minDistance * 1.02, 12000);
  }

  update(dt: number): void {
    switch (this.state) {
      case 'SURFACE_WALK':
        this.updateSurface(dt);
        return;
      case 'SPACECRAFT_FLIGHT':
        this.updateCraft(dt);
        return;
      case 'CINEMATIC_INTRO':
        this.updateIntro(dt);
        return;
      default:
        this.updateOrbit(dt);
    }
  }

  private updateOrbit(dt: number): void {
    // Жёсткий пол: камера не проваливается сквозь кору.
    this.targetDistance = Math.max(this.targetDistance, this.minDistance * 1.02);

    // Азимут крутим свободно, elevation/distance — пружинами.
    this.azimuth.value += angleDelta(this.azimuth.value, this.targetAzimuth) * Math.min(1, dt * 6);
    this.azimuth.velocity = 0;

    settle(this.elevation, this.targetElevation, dt, 0.55);
    settle(this.distance, this.targetDistance, dt, 0.7);
    settle(this.fov, this.fovOverride ?? STATE_FOV[this.state], dt, 0.8);
    settleV3(this.pan, this.pan.value, dt, 0.5); // держим значение, гасим скорость
    this.pan.velocity.multiplyScalar(Math.exp(-dt * 4));

    this.applySpherical(1);
    this.camera.position.add(this.pan.value);

    // Плавный lookAt: чуть сглаживаем, чтобы не было микро-дребезга.
    this.lookTarget.copy(this.pan.value);
    const lag = 1 - Math.exp(-dt * 7);
    this.lookSmooth.lerp(this.lookTarget, lag);
    this.camera.lookAt(this.lookSmooth);

    this.camera.fov = this.fov.value;
    this.camera.updateProjectionMatrix();
    this.camera.rotation.z = this.roll.value;
  }

  private applySpherical(scale: number): void {
    const d = this.distance.value * scale;
    const az = this.azimuth.value;
    const el = this.elevation.value;
    this.camera.position.set(
      Math.cos(el) * Math.sin(az) * d,
      Math.sin(el) * d,
      Math.cos(el) * Math.cos(az) * d
    );
  }

  /** Поверхность: позиция/углы приходят из модуля посадки, всё через пружины. */
  private updateSurface(dt: number): void {
    const pose = this.surfacePose;
    this.tmp.copy(pose.position);
    const lag = 1 - Math.exp(-dt * 10);
    this.camera.position.lerp(this.tmp, lag);

    const targetQuat = _q1.setFromEuler(_e1.set(pose.pitch, pose.yaw, 0, 'YXZ'));
    this.camera.quaternion.slerp(targetQuat, lag);

    settle(this.fov, STATE_FOV.SURFACE_WALK, dt, 0.6);
    this.camera.fov = this.fov.value;
    this.camera.updateProjectionMatrix();
    void smoothstep;
  }

  private updateCraft(dt: number): void {
    const pose = this.surfacePose;
    const lag = 1 - Math.exp(-dt * 5);
    this.camera.position.lerp(pose.position, lag);
    const targetQuat = _q1.setFromEuler(_e1.set(pose.pitch, pose.yaw, this.roll.value, 'YXZ'));
    this.camera.quaternion.slerp(targetQuat, lag);
    settle(this.fov, STATE_FOV.SPACECRAFT_FLIGHT, dt, 0.8);
    this.camera.fov = this.fov.value;
    this.camera.updateProjectionMatrix();
  }

  /**
   * Кинематографическое вступление: progress 0..1 ведёт камеру
   * от «рядом с Солнцем» к обзору системы.
   */
  private updateIntro(dt: number): void {
    const p = THREE.MathUtils.clamp(this.introProgress, 0, 1);
    const ease = p * p * (3 - 2 * p);

    const dist = THREE.MathUtils.lerp(26, 240, ease);
    const az = THREE.MathUtils.lerp(-0.65, Math.PI * 0.35, ease);
    const el = THREE.MathUtils.lerp(0.06, 0.34, ease);

    this.distance.value = dist;
    this.azimuth.value = az;
    this.elevation.value = el;
    this.targetDistance = dist;
    this.targetAzimuth = az;
    this.targetElevation = el;

    this.applySpherical(1);
    this.camera.position.y += Math.sin(p * Math.PI) * 14;

    this.lookSmooth.lerp(_tmpLook.set(0, 0, 0), 1 - Math.exp(-dt * 4));
    this.camera.lookAt(this.lookSmooth);

    settle(this.fov, THREE.MathUtils.lerp(48, 55, ease), dt, 0.9);
    this.camera.fov = this.fov.value;
    this.camera.updateProjectionMatrix();
  }

  /** Мгновенный сброс к удобному обзору системы. */
  resetSystemView(): void {
    this.request('SYSTEM');
    this.targetAzimuth = Math.PI * 0.35;
    this.targetElevation = 0.32;
    this.targetDistance = 240;
    this.distance.value = 240;
    this.azimuth.value = Math.PI * 0.35;
    this.elevation.value = 0.32;
    this.pan.value.set(0, 0, 0);
    this.lookSmooth.set(0, 0, 0);
  }
}

const _q1 = new THREE.Quaternion();
const _e1 = new THREE.Euler();
const _tmpLook = new THREE.Vector3();
