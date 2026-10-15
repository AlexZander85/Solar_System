/**
 * SpaceManager — три семантических пространства и Floating Origin.
 *
 *  1. SYSTEM_SPACE        — обзор системы, near 0.1 / far 20000
 *  2. ORBIT_LOCAL_SPACE   — центр тела = (0,0,0), near 0.01 / far 500
 *  3. SURFACE_PATCH_SPACE — посадка, near 0.1 / far 50000
 *
 * Floating origin: корневая группа системы сдвигается так, что фокус-тело
 * всегда лежит в начале координат — устраняет дрожание float32 и Z-fighting.
 */
import * as THREE from 'three';
import { settle, settleV3, spring1, springV3, type Spring1 } from './SpringMath';

export type SpaceMode = 'SYSTEM_SPACE' | 'ORBIT_LOCAL_SPACE' | 'SURFACE_PATCH_SPACE';

export interface SpaceFov {
  near: number;
  far: number;
}

const SPACE_CAM: Record<SpaceMode, SpaceFov> = {
  SYSTEM_SPACE: { near: 0.1, far: 20000 },
  ORBIT_LOCAL_SPACE: { near: 0.01, far: 500 },
  SURFACE_PATCH_SPACE: { near: 0.1, far: 50000 }
};

export class SpaceManager {
  mode: SpaceMode = 'SYSTEM_SPACE';
  /** root содержит всё тела системы; его позиция = -focusWorld (floating origin). */
  readonly root = new THREE.Group();
  /** Мировая (эфемеридная) позиция текущего фокуса. */
  readonly focusWorld = new THREE.Vector3();

  private focusTarget = new THREE.Vector3();
  private focusSmooth = springV3();
  private near: Spring1 = spring1(0.1);
  private far: Spring1 = spring1(20000);
  private targetNear = 0.1;
  private targetFar = 20000;
  /** Радиус фокус-тела — для динамического near в ORBIT_LOCAL_SPACE. */
  focusRadius = 1;

  constructor() {
    this.root.name = 'SystemRoot';
  }

  setMode(mode: SpaceMode, focusRadius = 1): void {
    this.mode = mode;
    this.focusRadius = focusRadius;
    const cam = SPACE_CAM[mode];
    this.targetFar = cam.far;
    // near адаптируется к размеру тела, чтобы камера не срезала кору планеты.
    this.targetNear =
      mode === 'ORBIT_LOCAL_SPACE'
        ? Math.min(cam.near, Math.max(focusRadius * 0.2, 1e-4))
        : cam.near;
  }

  /**
   * Плавающий центр координат: тело фокуса всегда в (0,0,0).
   * Смещение идёт пружиной — при смене тела камера «летит», а не телепортируется.
   */
  applyFocus(focusWorld: THREE.Vector3): void {
    this.focusTarget.copy(focusWorld);
    this.focusWorld.copy(focusWorld);
  }

  /** Продвижение плавающего центра (вызывать до отрисовки). */
  update(dt: number): void {
    settleV3(this.focusSmooth, this.focusTarget, dt, 0.55);
    this.root.position.set(-this.focusSmooth.value.x, -this.focusSmooth.value.y, -this.focusSmooth.value.z);
  }

  /** Приведение near/far к текущему режиму — динамические границы пирамиды отсечения. */
  updateCamera(camera: THREE.PerspectiveCamera, dt: number): void {
    settle(this.near, this.targetNear, dt, 0.45);
    settle(this.far, this.targetFar, dt, 0.6);
    camera.near = Math.max(this.near.value, 1e-5);
    camera.far = Math.max(this.far.value, camera.near * 10);
    camera.updateProjectionMatrix();
  }

  /** Мгновенный сброс (используется при телепортах и смене масштаба). */
  snap(): void {
    this.near.value = this.targetNear;
    this.near.velocity = 0;
    this.far.value = this.targetFar;
    this.far.velocity = 0;
    this.focusSmooth.value.copy(this.focusTarget);
    this.focusSmooth.velocity.set(0, 0, 0);
  }
}
