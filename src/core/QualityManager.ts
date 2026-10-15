/**
 * QualityManager — профили производительности Low/Medium/High/Ultra.
 */
import * as THREE from 'three';

export type QualityPreset = 'low' | 'medium' | 'high' | 'ultra';

export interface QualitySettings {
  preset: QualityPreset;
  maxDpr: number;
  bloom: boolean;
  bloomStrength: number;
  stars: number;
  cloudShadows: boolean;
  ringMicro: boolean;
  terrainRocks: number;
  terrainSegs: number;
  planetSegs: number;
  atmosLayers: boolean;
  shadows: boolean;
}

const PRESETS: Record<QualityPreset, QualitySettings> = {
  low: {
    preset: 'low', maxDpr: 1.0, bloom: false, bloomStrength: 0.7,
    stars: 1200, cloudShadows: false, ringMicro: false,
    terrainRocks: 120, terrainSegs: 48, planetSegs: 32,
    atmosLayers: false, shadows: false
  },
  medium: {
    preset: 'medium', maxDpr: 1.5, bloom: true, bloomStrength: 0.85,
    stars: 2600, cloudShadows: true, ringMicro: false,
    terrainRocks: 350, terrainSegs: 72, planetSegs: 64,
    atmosLayers: true, shadows: true
  },
  high: {
    preset: 'high', maxDpr: 2.0, bloom: true, bloomStrength: 1.0,
    stars: 4200, cloudShadows: true, ringMicro: true,
    terrainRocks: 700, terrainSegs: 112, planetSegs: 96,
    atmosLayers: true, shadows: true
  },
  ultra: {
    preset: 'ultra', maxDpr: 2.0, bloom: true, bloomStrength: 1.15,
    stars: 6500, cloudShadows: true, ringMicro: true,
    terrainRocks: 1400, terrainSegs: 160, planetSegs: 128,
    atmosLayers: true, shadows: true
  }
};

export class QualityManager {
  settings: QualitySettings = { ...PRESETS.high };
  private listeners: Array<(s: QualitySettings) => void> = [];

  setPreset(preset: QualityPreset): void {
    this.settings = { ...PRESETS[preset] };
    this.listeners.forEach((fn) => fn(this.settings));
  }

  onChange(fn: (s: QualitySettings) => void): void {
    this.listeners.push(fn);
  }

  /** DPR с ограничением по профилю. */
  resolveDpr(deviceDpr: number): number {
    return Math.min(deviceDpr, this.settings.maxDpr);
  }

  applyRenderer(renderer: THREE.WebGLRenderer): void {
    renderer.setPixelRatio(this.resolveDpr(window.devicePixelRatio || 1));
    renderer.shadowMap.enabled = this.settings.shadows;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }
}

export const QUALITY_LABELS: Record<QualityPreset, string> = {
  low: 'Мобильная — без постпроцессинга, DPR 1.0',
  medium: 'Средняя',
  high: 'Высокая',
  ultra: 'Ультра — максимум деталей'
};
