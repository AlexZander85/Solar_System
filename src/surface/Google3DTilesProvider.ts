/**
 * Google3DTilesProvider — безопасный слой загрузки OGC 3D Tiles / glTF.
 *
 * Важные границы API:
 * - ключ приходит из VITE_GOOGLE_MAPS_API_KEY или вводится пользователем и
 *   никогда не записывается в репозиторий;
 * - Photorealistic 3D Tiles Google официально отдаёт Землю. Для Луны и Марса
 *   предусмотрены те же адаптер, кэш, ENU/ECEF-преобразование и API-key
 *   транспорт, но нужен URL набора тайлов, доступный вашему проекту Google;
 * - родительский тайл остаётся видимым, пока ребёнок не загрузился — закон
 *   Nothing Pops выполняется и для сетевых данных;
 * - explicit children и базовый QUADTREE implicit tiling поддерживаются без
 *   скачивания всего глобуса целиком.
 */
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export type GoogleTileBody = 'earth' | 'moon' | 'mars';
export type TileCoordinateSystem = 'ecef' | 'local';
export type GoogleTilesStatus = 'idle' | 'loading' | 'ready' | 'error' | 'unsupported';

export interface GeoAnchor {
  latitude: number;
  longitude: number;
  height: number;
}

export interface Google3DTilesOptions {
  apiKey: string;
  body: GoogleTileBody;
  /** Empty for Earth selects Google's default root.json. */
  tilesetUrl?: string;
  anchor?: GeoAnchor;
  coordinateSystem?: TileCoordinateSystem;
  maxScreenSpaceError?: number;
  maxDepth?: number;
  maxTiles?: number;
  onStatus?: (status: GoogleTilesStatus, message: string) => void;
}

interface TileContent {
  uri?: string;
  url?: string;
}

interface TileBoundingVolume {
  sphere?: number[];
  box?: number[];
  region?: number[];
}

interface TileJson {
  geometricError?: number;
  refine?: 'ADD' | 'REPLACE';
  transform?: number[];
  boundingVolume?: TileBoundingVolume;
  content?: TileContent;
  children?: TileJson[];
  implicitTiling?: { subdivisionScheme?: string; subtreeLevels?: number; subtrees?: { uri?: string; url?: string } };
}

interface TilesetJson {
  asset?: { version?: string; tilesetVersion?: string };
  geometricError?: number;
  root: TileJson;
}

interface TileNode {
  json: TileJson;
  baseUrl: string;
  depth: number;
  transform: THREE.Matrix4;
  children: TileNode[];
  object: THREE.Group | null;
  loading: boolean;
  failed: boolean;
  lastUsed: number;
  selected: boolean;
  hasImplicitChildren: boolean;
  implicitTemplate?: string;
  level: number;
  x: number;
  y: number;
}

const GOOGLE_EARTH_ROOT = 'https://tile.googleapis.com/v1/3dtiles/root.json';
const EARTH_ANCHOR: GeoAnchor = { latitude: 40.7128, longitude: -74.006, height: 0 };

/** URL по умолчанию. У Google Photorealistic Tiles сейчас есть официальный Earth root. */
export function defaultGoogleTilesetUrl(body: GoogleTileBody): string | null {
  return body === 'earth' ? GOOGLE_EARTH_ROOT : null;
}

/** Публичный ECEF → локальный ENU-преобразователь для будущих поставщиков высот. */
export function ecefToLocalMatrix(anchor: GeoAnchor): THREE.Matrix4 {
  const lat = THREE.MathUtils.degToRad(anchor.latitude);
  const lon = THREE.MathUtils.degToRad(anchor.longitude);
  const sinLat = Math.sin(lat);
  const cosLat = Math.cos(lat);
  const sinLon = Math.sin(lon);
  const cosLon = Math.cos(lon);

  // WGS84: единица здесь важнее миллиметровой точности — это локальный патч.
  const a = 6378137;
  const e2 = 6.69437999014e-3;
  const n = a / Math.sqrt(1 - e2 * sinLat * sinLat);
  const origin = new THREE.Vector3(
    (n + anchor.height) * cosLat * cosLon,
    (n + anchor.height) * cosLat * sinLon,
    (n * (1 - e2) + anchor.height) * sinLat
  );
  const east = new THREE.Vector3(-sinLon, cosLon, 0);
  const up = new THREE.Vector3(cosLat * cosLon, cosLat * sinLon, sinLat);
  // В Three.js камера смотрит по -Z, поэтому север направлен в -Z.
  const northDown = new THREE.Vector3(-sinLat * cosLon, -sinLat * sinLon, cosLat).negate();
  return new THREE.Matrix4().set(
    east.x, east.y, east.z, -east.dot(origin),
    up.x, up.y, up.z, -up.dot(origin),
    northDown.x, northDown.y, northDown.z, -northDown.dot(origin),
    0, 0, 0, 1
  );
}

/** Add the key without ever printing it in a status message. */
function withApiKey(input: string, apiKey: string): string {
  const url = new URL(input, window.location.href);
  if (apiKey && !url.searchParams.has('key')) url.searchParams.set('key', apiKey);
  return url.toString();
}

function resolveUrl(input: string, baseUrl: string, apiKey: string): string {
  return withApiKey(new URL(input, baseUrl).toString(), apiKey);
}

function matrixFromTransform(transform?: number[]): THREE.Matrix4 {
  const matrix = new THREE.Matrix4();
  if (transform && transform.length === 16) matrix.fromArray(transform);
  return matrix;
}

function cloneMaterial(material: THREE.Material): THREE.Material {
  return material.clone();
}

function disposeObject(root: THREE.Object3D): void {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (mesh.geometry) geometries.add(mesh.geometry);
    const material = (mesh as unknown as { material?: THREE.Material | THREE.Material[] }).material;
    const list = Array.isArray(material) ? material : material ? [material] : [];
    for (const item of list) {
      materials.add(item);
      for (const value of Object.values(item)) {
        if (value instanceof THREE.Texture) textures.add(value);
      }
    }
  });
  geometries.forEach((geometry) => geometry.dispose());
  textures.forEach((texture) => texture.dispose());
  materials.forEach((material) => material.dispose());
}

function extractPayload(data: ArrayBuffer): ArrayBuffer {
  const magic = new TextDecoder().decode(new Uint8Array(data, 0, Math.min(4, data.byteLength)));
  if (magic !== 'b3dm' && magic !== 'i3dm') return data;
  const view = new DataView(data);
  const featureJsonLength = view.getUint32(12, true);
  const featureBinaryLength = view.getUint32(16, true);
  const batchJsonLength = view.getUint32(20, true);
  const batchBinaryLength = view.getUint32(24, true);
  const headerSize = magic === 'b3dm' ? 28 : 32;
  const payloadOffset = headerSize + featureJsonLength + featureBinaryLength + batchJsonLength + batchBinaryLength;
  return data.slice(payloadOffset);
}

function boundingSphere(node: TileNode, coordinateSystem: TileCoordinateSystem, anchor: GeoAnchor): { center: THREE.Vector3; radius: number } | null {
  const volume = node.json.boundingVolume;
  if (!volume) return null;
  const center = new THREE.Vector3();
  let radius = 1;
  if (volume.sphere && volume.sphere.length >= 4) {
    center.fromArray(volume.sphere);
    radius = Math.max(volume.sphere[3], 1);
  } else if (volume.box && volume.box.length >= 12) {
    center.fromArray(volume.box);
    const halfX = new THREE.Vector3(volume.box[3], volume.box[4], volume.box[5]);
    const halfY = new THREE.Vector3(volume.box[6], volume.box[7], volume.box[8]);
    const halfZ = new THREE.Vector3(volume.box[9], volume.box[10], volume.box[11]);
    radius = halfX.length() + halfY.length() + halfZ.length();
  } else if (volume.region && volume.region.length >= 6) {
    const [west, south, east, north, minHeight, maxHeight] = volume.region;
    const lon = (west + east) * 0.5;
    const lat = (south + north) * 0.5;
    const anchorForRegion = {
      latitude: THREE.MathUtils.radToDeg(lat),
      longitude: THREE.MathUtils.radToDeg(lon),
      height: (minHeight + maxHeight) * 0.5
    };
    const local = ecefToLocalMatrix(anchorForRegion);
    // Inverse of local ENU matrix maps local origin back to ECEF.
    center.set(0, 0, 0).applyMatrix4(local.clone().invert());
    radius = Math.max(50, Math.abs(east - west) * 6378137 + Math.abs(north - south) * 6378137);
    if (coordinateSystem === 'local') center.set(0, 0, 0);
    void anchor;
  }
  center.applyMatrix4(node.transform);
  if (coordinateSystem === 'ecef') center.applyMatrix4(ecefToLocalMatrix(anchor));
  return { center, radius };
}

function applyImplicitTemplate(uri: string, level: number, x: number, y: number): string {
  return uri
    .replaceAll('{level}', String(level))
    .replaceAll('{x}', String(x))
    .replaceAll('{y}', String(y))
    .replaceAll('{z}', String(level));
}

function splitRegion(region: number[], childIndex: number): number[] {
  const [west, south, east, north, minHeight, maxHeight] = region;
  const midLon = (west + east) * 0.5;
  const midLat = (south + north) * 0.5;
  const eastHalf = (childIndex & 1) !== 0;
  const northHalf = (childIndex >> 1) !== 0;
  return [
    eastHalf ? midLon : west,
    northHalf ? midLat : south,
    eastHalf ? east : midLon,
    northHalf ? north : midLat,
    minHeight,
    maxHeight
  ];
}

export class Google3DTilesProvider {
  readonly group = new THREE.Group();
  readonly options: Required<Pick<Google3DTilesOptions, 'maxScreenSpaceError' | 'maxDepth' | 'maxTiles'>> & Google3DTilesOptions;
  status: GoogleTilesStatus = 'idle';
  message = 'Ожидается API-ключ и URL набора тайлов.';

  private loader = new GLTFLoader();
  private rootNode: TileNode | null = null;
  private nodes = new Set<TileNode>();
  private frame = 0;
  private disposed = false;
  private coordinateMatrix = new THREE.Matrix4();
  private coordinateSystem: TileCoordinateSystem;
  private anchor: GeoAnchor;
  private loading = 0;

  constructor(options: Google3DTilesOptions) {
    this.options = {
      ...options,
      maxScreenSpaceError: options.maxScreenSpaceError ?? 12,
      maxDepth: options.maxDepth ?? 14,
      maxTiles: options.maxTiles ?? 96
    };
    this.coordinateSystem = options.coordinateSystem ?? (options.body === 'earth' ? 'ecef' : 'local');
    this.anchor = options.anchor ?? EARTH_ANCHOR;
    this.group.name = `Google3DTiles_${options.body}`;
    this.group.matrixAutoUpdate = false;
    this.coordinateMatrix = this.coordinateSystem === 'ecef' ? ecefToLocalMatrix(this.anchor) : new THREE.Matrix4();
    this.group.matrix.copy(this.coordinateMatrix);
    this.group.updateMatrixWorld(true);
    this.loader.setMeshoptDecoder(MeshoptDecoder);
  }

  async load(): Promise<void> {
    if (this.disposed) throw new Error('Поставщик 3D-тайлов уже освобождён.');
    if (!this.options.apiKey.trim()) {
      this.setStatus('error', 'Google Maps API key не задан. Вставьте ключ в панели 3D-карт.');
      throw new Error(this.message);
    }
    const source = this.options.tilesetUrl?.trim() || defaultGoogleTilesetUrl(this.options.body);
    if (!source) {
      this.setStatus(
        'unsupported',
        `${bodyName(this.options.body)}: у Google нет стандартного Photorealistic root.json. Укажите URL набора 3D Tiles с доступом по этому ключу.`
      );
      throw new Error(this.message);
    }

    this.setStatus('loading', `Подключаем ${bodyName(this.options.body)}. Ключ используется только в запросах к тайлам…`);
    try {
      const url = withApiKey(source, this.options.apiKey.trim());
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const json = (await response.json()) as TilesetJson;
      if (!json.root) throw new Error('В ответе нет root тайла. Проверьте URL набора.');
      const baseUrl = new URL('.', url).toString();
      this.rootNode = this.createNode(json.root, baseUrl, new THREE.Matrix4(), 0);
      if (json.root.implicitTiling) {
        this.setStatus('ready', 'Корневой tileset загружен. Включён QUADTREE-адаптер implicit tiling; доступность уточняется ответами content.');
      } else {
        this.setStatus('ready', 'Корневой tileset загружен. Данные уточняются по расстоянию до камеры.');
      }
      await this.loadNodeContent(this.rootNode);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Неизвестная ошибка загрузки.';
      this.setStatus('error', `Не удалось загрузить 3D-тайлы: ${message}`);
      throw error;
    }
  }

  /** Вызывается каждый кадр только в режиме 3D-карт. */
  update(camera: THREE.Camera): void {
    if (!this.rootNode || this.disposed) return;
    this.frame++;
    this.group.updateMatrixWorld(true);
    camera.getWorldPosition(_cameraPosition);
    this.nodes.forEach((node) => { node.selected = false; });
    this.selectNode(this.rootNode, 0);
    this.evictUnused();
  }

  dispose(): void {
    this.disposed = true;
    for (const node of this.nodes) {
      if (node.object) disposeObject(node.object);
    }
    this.nodes.clear();
    this.rootNode = null;
    this.group.clear();
    this.setStatus('idle', '3D-тайлы отключены.');
  }

  private createNode(
    json: TileJson,
    baseUrl: string,
    parentTransform: THREE.Matrix4,
    depth: number,
    implicit?: { template: string; level: number; x: number; y: number }
  ): TileNode {
    const node: TileNode = {
      json,
      baseUrl,
      depth,
      level: implicit?.level ?? depth,
      x: implicit?.x ?? 0,
      y: implicit?.y ?? 0,
      transform: parentTransform.clone().multiply(matrixFromTransform(json.transform)), 
      children: [],
      object: null,
      loading: false,
      failed: false,
      lastUsed: 0,
      selected: false,
      hasImplicitChildren: Boolean(json.implicitTiling) || Boolean(implicit),
      implicitTemplate: implicit?.template ?? (json.implicitTiling ? json.content?.uri ?? json.content?.url : undefined)
    };
    this.nodes.add(node);
    node.children = (json.children ?? []).map((child) => this.createNode(child, baseUrl, node.transform, depth + 1));
    return node;
  }

  private selectNode(node: TileNode, depth: number): void {
    if (depth > this.options.maxDepth) return;
    node.lastUsed = this.frame;
    let children = node.children;
    const sphere = boundingSphere(node, this.coordinateSystem, this.anchor);
    const distance = sphere ? Math.max(1, _cameraPosition.distanceTo(sphere.center) - sphere.radius) : 1000;
    const projectedError = ((node.json.geometricError ?? 0) / distance) * 900;
    if (node.hasImplicitChildren && children.length === 0 && projectedError > this.options.maxScreenSpaceError) {
      this.expandImplicitChildren(node);
      children = node.children;
    }
    const shouldRefine = children.length > 0 && projectedError > this.options.maxScreenSpaceError;

    if (shouldRefine) {
      let readyChild = false;
      for (const child of children) {
        this.selectNode(child, depth + 1);
        if (child.object && !child.failed) readyChild = true;
      }
      if (node.object) {
        // REPLACE скрывает родителя только после готовности ребёнка.
        node.object.visible = node.json.refine !== 'REPLACE' || !readyChild;
        node.selected = node.object.visible;
      }
    } else {
      node.selected = true;
      if (node.object) node.object.visible = true;
      else if (!node.loading && !node.failed) void this.loadNodeContent(node);
    }
  }

  /**
   * Минимальный QUADTREE implicit-tile adapter. Availability из .subtree
   * проверяется ответом content (404 оставляет родителя), поэтому каркас
   * работает и с наборами без explicit children и не подделывает отсутствующие
   * данные. Полный bitstream availability можно добавить без смены публичного API.
   */
  private expandImplicitChildren(node: TileNode): void {
    const template = node.implicitTemplate;
    if (!template || node.level >= this.options.maxDepth) return;
    const region = node.json.boundingVolume?.region;
    for (let childIndex = 0; childIndex < 4; childIndex++) {
      const childX = node.x * 2 + (childIndex & 1);
      const childY = node.y * 2 + (childIndex >> 1);
      const childJson: TileJson = {
        geometricError: Math.max(0, (node.json.geometricError ?? 0) * 0.5),
        refine: node.json.refine ?? 'REPLACE',
        content: { uri: template },
        boundingVolume: region ? { region: splitRegion(region, childIndex) } : node.json.boundingVolume
      };
      node.children.push(
        this.createNode(childJson, node.baseUrl, node.transform, node.depth + 1, {
          template,
          level: node.level + 1,
          x: childX,
          y: childY
        })
      );
    }
    node.hasImplicitChildren = false;
  }

  private async loadNodeContent(node: TileNode): Promise<void> {
    if (node.loading || node.failed || !node.json.content || this.disposed) return;
    const contentUri = node.json.content.uri ?? node.json.content.url;
    if (!contentUri) return;
    node.loading = true;
    this.loading++;
    try {
      const expandedUri = applyImplicitTemplate(contentUri, node.level, node.x, node.y);
      const url = resolveUrl(expandedUri, node.baseUrl, this.options.apiKey.trim());
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.arrayBuffer();
      const payload = extractPayload(data);
      const first = new TextDecoder().decode(new Uint8Array(payload, 0, Math.min(1, payload.byteLength)));
      if (first === '{') {
        // Nested tileset.json — оставляем его в том же quadtree.
        const nested = JSON.parse(new TextDecoder().decode(payload)) as TilesetJson;
        if (nested.root) {
          const base = new URL('.', url).toString();
          const nestedRoot = this.createNode(nested.root, base, node.transform, node.depth + 1);
          node.children.push(nestedRoot);
        }
      } else {
        const gltf: GLTF = await this.loader.parseAsync(payload, new URL('.', url).toString());
        const object = gltf.scene ?? gltf.scenes[0];
        if (!object) throw new Error('glTF не содержит scene.');
        const tileObject = new THREE.Group();
        tileObject.name = `tile_${node.depth}_${this.nodes.size}`;
        tileObject.matrixAutoUpdate = false;
        tileObject.matrix.copy(node.transform);
        tileObject.add(object);
        object.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = false;
            mesh.receiveShadow = true;
            mesh.frustumCulled = true;
            if (Array.isArray(mesh.material)) mesh.material = mesh.material.map(cloneMaterial);
            else if (mesh.material) mesh.material = cloneMaterial(mesh.material);
          }
        });
        this.group.add(tileObject);
        node.object = tileObject;
        tileObject.visible = node.selected;
      }
    } catch (error) {
      node.failed = true;
      const message = error instanceof Error ? error.message : 'ошибка контента';
      this.setStatus('error', `Тайл не загрузился (${message}). Родительский уровень оставлен видимым.`);
    } finally {
      node.loading = false;
      this.loading--;
    }
  }

  private evictUnused(): void {
    const loaded = Array.from(this.nodes).filter((node) => node.object);
    if (loaded.length <= this.options.maxTiles) return;
    loaded
      .filter((node) => !node.selected && !node.loading)
      .sort((a, b) => a.lastUsed - b.lastUsed)
      .slice(0, loaded.length - this.options.maxTiles)
      .forEach((node) => {
        if (node.object) {
          this.group.remove(node.object);
          disposeObject(node.object);
          node.object = null;
        }
      });
  }

  private setStatus(status: GoogleTilesStatus, message: string): void {
    this.status = status;
    this.message = message;
    this.options.onStatus?.(status, message);
  }
}

function bodyName(body: GoogleTileBody): string {
  return body === 'earth' ? 'Землю' : body === 'moon' ? 'Луну' : 'Марс';
}

const _cameraPosition = new THREE.Vector3();
