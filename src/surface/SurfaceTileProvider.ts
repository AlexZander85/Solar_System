/**
 * SurfaceTileProvider — чистый интерфейс поставщика тайлов поверхности.
 *
 * Позволяет ОПЦИОНАЛЬНО подключить Cesium ion 3D Tiles (или любой другой
 * источник тайлов) вместо процедурного террейна, не трогая остальной движок.
 *
 * Пример подключения Cesium ion:
 * ```ts
 * class CesiumIonTileProvider implements SurfaceTileProvider {
 *   constructor(private token: string, private assetId: number) {}
 *   async loadTile(x: number, y: number, level: number): Promise<SurfaceTile | null> {
 *     const url = `https://api.cesium.com/v1/assets/${this.assetId}/tileset.json`;
 *     // загрузка 3D Tiles тайла через 3DTilesRendererJS / ion REST API
 *     ...
 *   }
 *   unloadTile(tile: SurfaceTile): void { /* освободить геометрию и текстуры *\/ }
 * }
 * ```
 */
import * as THREE from 'three';

export interface SurfaceTile {
  /** Целочисленные координаты тайла (как у Cesium quadtree). */
  x: number;
  y: number;
  level: number;
  /** Готовая к добавлению в сцену геометрия тайла. */
  object: THREE.Object3D;
  /** Глобальные размеры тайла в метрах. */
  bounds: { west: number; south: number; east: number; north: number; minHeight: number; maxHeight: number };
}

export interface SurfaceTileProvider {
  /** Загрузить тайл. null — тайла нет (дыра в данных). */
  loadTile(x: number, y: number, level: number): Promise<SurfaceTile | null>;
  /** Освободить ресурсы тайла. */
  unloadTile(tile: SurfaceTile): void;
  /** Рекомендуемый уровень детализации для заданного расстояния камеры (м). */
  recommendLevel(cameraDistanceM: number): number;
}

/**
 * Процедурный поставщик — реализация по умолчанию (используется SurfaceWorld).
 * Синтезирует локальный террейн из шума — работает без сети и токенов.
 */
export class ProceduralTileProvider implements SurfaceTileProvider {
  constructor(private seed = 0) {}

  async loadTile(x: number, y: number, level: number): Promise<SurfaceTile | null> {
    const size = 320 / Math.pow(2, level); // размер тайла в метрах
    const geo = new THREE.PlaneGeometry(size, size, 32, 32);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i) + x * size;
      const pz = pos.getZ(i) + y * size;
      const h =
        Math.sin(px * 0.021 + this.seed) * Math.cos(pz * 0.019 - this.seed) * 4 +
        Math.sin(px * 0.087) * Math.cos(pz * 0.071) * 1.2;
      pos.setY(i, h);
    }
    geo.computeVertexNormals();
    const object = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({ color: 0x9a9288, roughness: 0.95, flatShading: true })
    );
    object.position.set(x * size, 0, y * size);
    return {
      x,
      y,
      level,
      object,
      bounds: {
        west: x * size,
        south: y * size,
        east: (x + 1) * size,
        north: (y + 1) * size,
        minHeight: -8,
        maxHeight: 8
      }
    };
  }

  unloadTile(tile: SurfaceTile): void {
    tile.object.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = (m as unknown as { material?: THREE.Material }).material;
      mat?.dispose();
    });
  }

  recommendLevel(cameraDistanceM: number): number {
    if (cameraDistanceM < 80) return 4;
    if (cameraDistanceM < 300) return 3;
    if (cameraDistanceM < 1200) return 2;
    return 1;
  }
}
