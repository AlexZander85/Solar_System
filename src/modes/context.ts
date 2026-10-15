/**
 * AppContext — общий контекст для интерактивных режимов и лабораторий.
 */
import * as THREE from 'three';
import type { CameraRig } from '../core/CameraRig';
import type { SpaceManager } from '../core/SpaceManager';
import type { PostFX } from '../core/PostFX';
import type { QualityManager } from '../core/QualityManager';
import type { Sun } from '../render/Sun';
import type { UI } from '../ui/UI';
import type { BodyDef, ScaleConfig } from '../data/bodies';

export interface AppContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  rig: CameraRig;
  spaces: SpaceManager;
  postfx: PostFX;
  quality: QualityManager;
  sun: Sun;
  ui: UI;
  getScale(): ScaleConfig;
  getSimJD(): number;
  setSimDate(d: Date): void;
  selectBody(id: string, frame?: boolean): void;
  focusBodyId(): string;
  bodyDef(id: string): BodyDef;
  /** Доступ к 3D-объекту тела (для экспериментов и песочницы). */
  bodyObject(id: string): { group: THREE.Group; spinBoost: number } | null;
  bodyScenePos(id: string, out: THREE.Vector3): THREE.Vector3;
  toast(msg: string): void;
  /** Пространство тел системы (скрыть/показать для «отдельных сцен» режимов). */
  setSystemVisible(v: boolean): void;
  startSurface(bodyId: string): void;
  stopSurface(): void;
}
