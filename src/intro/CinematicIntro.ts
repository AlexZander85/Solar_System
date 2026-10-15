/**
 * CinematicIntro — «Кинематографическое Вступление»:
 * темнота → вспышка Солнца → отлёт камеры → орбиты и «голубая точка».
 */
import * as THREE from 'three';
import type { CameraRig } from '../core/CameraRig';
import type { Sun } from '../render/Sun';
import type { UI } from '../ui/UI';
import { burst } from '../core/SpringMath';

interface Cue {
  t: number;
  text: string;
}

const CUES: Cue[] = [
  { t: 0.2, text: 'Тьма. Космосу 13,8 миллиарда лет…' },
  { t: 2.6, text: 'И вспыхивает звезда — наше Солнце.' },
  { t: 6.0, text: 'Вокруг него выстраиваются орбиты восьми планет.' },
  { t: 9.5, text: 'Голубая точка. Наш дом во Вселенной.' }
];

export const INTRO_DURATION = 15;

export class CinematicIntro {
  private elapsed = 0;
  private active = false;
  private cueIndex = -1;
  private finished = true;

  constructor(
    private rig: CameraRig,
    private ui: UI,
    private sun: Sun,
    private onDone: () => void
  ) {}

  get isActive(): boolean {
    return this.active;
  }

  start(): void {
    this.elapsed = 0;
    this.cueIndex = -1;
    this.active = true;
    this.finished = false;
    this.rig.request('CINEMATIC_INTRO');
    this.rig.introProgress = 0;
    this.ui.showIntroOverlay();
    this.ui.setIntroCaption('');
  }

  skip(): void {
    if (!this.active) return;
    this.finish();
  }

  private finish(): void {
    this.active = false;
    if (!this.finished) {
      this.finished = true;
      this.ui.hideIntroOverlay();
      this.onDone();
    }
  }

  update(dt: number): void {
    if (!this.active) return;
    this.elapsed += dt;
    const p = Math.min(1, this.elapsed / INTRO_DURATION);
    this.rig.introProgress = p;

    // Солнце «загорается» вспышкой в первые секунды
    const ignition = burst(this.elapsed - 1.2, 1.6, 6.5);
    this.sun.light.intensity = 2.6 * Math.min(1, ignition * 1.15);
    if (this.elapsed > 1.35 && this.elapsed - dt <= 1.35) this.sun.triggerFlare();

    // Титры
    let cueText = this.cueIndex >= 0 ? CUES[this.cueIndex].text : '';
    for (let i = CUES.length - 1; i >= 0; i--) {
      if (this.elapsed >= CUES[i].t) {
        if (this.cueIndex !== i) this.cueIndex = i;
        cueText = CUES[i].text;
        break;
      }
    }
    this.ui.setIntroCaption(cueText);
    if (this.elapsed > 9.5) this.ui.showIntroTitle();

    if (p >= 1) this.finish();
  }
}

/** Плавное затухание прозрачности материала (для «проявления» орбит). */
export function fadeMaterial(mat: THREE.Material, to: number, dt: number, halfLife = 0.6): void {
  const t = mat as THREE.Material & { opacity: number; transparent: boolean };
  t.transparent = true;
  t.opacity += (to - t.opacity) * (1 - Math.exp(-Math.LN2 * dt / halfLife));
}
