/**
 * Процедурные PBR-текстуры планет: альбедо, нормали, шероховатость,
 * эмиссия (ночные огня, лава), карта высот (displacement) и облака.
 * Всё синтезируется в CanvasTexture без внешних ассетов.
 */
import * as THREE from 'three';
import type { TextureStyle } from '../data/bodies';

/* --------------------------- Шум --------------------------- */

function hash2(ix: number, iy: number, seed: number): number {
  let h = (ix * 374761393 + iy * 668265263 + seed * 1442695041) | 0;
  h = (h ^ (h >>> 13)) | 0;
  h = Math.imul(h, 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

function valueNoise(x: number, y: number, seed: number, periodX: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  const x0 = ((ix % periodX) + periodX) % periodX;
  const x1 = (x0 + 1) % periodX;
  const a = hash2(x0, iy, seed);
  const b = hash2(x1, iy, seed);
  const c = hash2(x0, iy + 1, seed);
  const d = hash2(x1, iy + 1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number, seed: number, periodX: number, octaves = 5): number {
  let amp = 0.5;
  let freq = 1;
  let sum = 0;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += amp * valueNoise(x * freq, y * freq, seed + o * 17, Math.round(periodX * freq));
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
}

function ridged(x: number, y: number, seed: number, periodX: number, octaves = 4): number {
  let amp = 0.5;
  let freq = 1;
  let sum = 0;
  for (let o = 0; o < octaves; o++) {
    const n = valueNoise(x * freq, y * freq, seed + o * 31, Math.round(periodX * freq));
    sum += amp * (1 - Math.abs(n * 2 - 1));
    amp *= 0.5;
    freq *= 2;
  }
  return sum;
}

/* --------------------- Вспомогательное --------------------- */

function makeCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  return [c, ctx];
}

function toTexture(canvas: HTMLCanvasElement, srgb: boolean): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 4;
  return t;
}

export interface TextureSet {
  map: THREE.CanvasTexture;
  normalMap: THREE.CanvasTexture | null;
  roughnessMap: THREE.CanvasTexture | null;
  emissiveMap: THREE.CanvasTexture | null;
  displacementMap: THREE.CanvasTexture | null;
  cloudMap: THREE.CanvasTexture | null;
  cloudAlphaMap: THREE.CanvasTexture | null;
}

interface Painter {
  /** Цвет пикселя (r,g,b 0..255) по координатам и данным. */
  (u: number, v: number, out: Uint8ClampedArray, i: number): void;
}

interface BuildOpts {
  width: number;
  height: number;
  paint: Painter;
  heightFn?: (u: number, v: number) => number;
  roughFn?: (u: number, v: number, h: number) => number;
  emissiveFn?: (u: number, v: number, h: number) => [number, number, number] | null;
  clouds?: boolean | 'haze';
  normalStrength?: number;
  seed?: number;
  post?: (ctx: CanvasRenderingContext2D, w: number, h: number) => void;
}

function buildSet(opts: BuildOpts): TextureSet {
  const { width: W, height: H } = opts;
  const seed = opts.seed ?? 7;

  // --- Карта альбедо ---
  const [colorCanvas, colorCtx] = makeCanvas(W, H);
  const img = colorCtx.createImageData(W, H);
  const data = img.data;
  for (let y = 0; y < H; y++) {
    const v = y / H;
    for (let x = 0; x < W; x++) {
      const u = x / W;
      opts.paint(u, v, data, (y * W + x) * 4);
    }
  }
  colorCtx.putImageData(img, 0, 0);
  if (opts.post) opts.post(colorCtx, W, H);

  // --- Карта высот ---
  const heights = new Float32Array(W * H);
  if (opts.heightFn) {
    for (let y = 0; y < H; y++) {
      const v = y / H;
      for (let x = 0; x < W; x++) {
        heights[y * W + x] = opts.heightFn(x / W, v);
      }
    }
  } else {
    for (let i = 0; i < W * H; i++) heights[i] = 0.5;
  }

  // --- Нормали (sobel по высотам) ---
  let normalTex: THREE.CanvasTexture | null = null;
  let dispTex: THREE.CanvasTexture | null = null;
  {
    const [hCanvas, hCtx] = makeCanvas(W, H);
    const hImg = hCtx.createImageData(W, H);
    for (let i = 0; i < W * H; i++) {
      const h = heights[i];
      hImg.data[i * 4] = hImg.data[i * 4 + 1] = hImg.data[i * 4 + 2] = h * 255;
      hImg.data[i * 4 + 3] = 255;
    }
    hCtx.putImageData(hImg, 0, 0);
    dispTex = toTexture(hCanvas, false);

    const [nCanvas, nCtx] = makeCanvas(W, H);
    const nImg = nCtx.createImageData(W, H);
    const s = opts.normalStrength ?? 2.2;
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const xl = heights[y * W + ((x - 1 + W) % W)];
        const xr = heights[y * W + ((x + 1) % W)];
        const yu = heights[Math.max(0, y - 1) * W + x];
        const yd = heights[Math.min(H - 1, y + 1) * W + x];
        let nx = (xl - xr) * s * 32;
        let ny = (yu - yd) * s * 32;
        const nz = 1;
        const len = Math.hypot(nx, ny, nz);
        nx /= len;
        ny /= len;
        const i = (y * W + x) * 4;
        nImg.data[i] = (nx * 0.5 + 0.5) * 255;
        nImg.data[i + 1] = (ny * 0.5 + 0.5) * 255;
        nImg.data[i + 2] = (nz * 0.5 + 0.5) * 255;
        nImg.data[i + 3] = 255;
      }
    }
    nCtx.putImageData(nImg, 0, 0);
    normalTex = toTexture(nCanvas, false);
  }

  // --- Шероховатость ---
  let roughTex: THREE.CanvasTexture | null = null;
  if (opts.roughFn) {
    const [rCanvas, rCtx] = makeCanvas(W, H);
    const rImg = rCtx.createImageData(W, H);
    for (let y = 0; y < H; y++) {
      const v = y / H;
      for (let x = 0; x < W; x++) {
        const u = x / W;
        const r = opts.roughFn(u, v, heights[y * W + x]);
        const i = (y * W + x) * 4;
        rImg.data[i] = rImg.data[i + 1] = rImg.data[i + 2] = r * 255;
        rImg.data[i + 3] = 255;
      }
    }
    rCtx.putImageData(rImg, 0, 0);
    roughTex = toTexture(rCanvas, false);
  }

  // --- Эмиссия ---
  let emissiveTex: THREE.CanvasTexture | null = null;
  if (opts.emissiveFn) {
    const [eCanvas, eCtx] = makeCanvas(W, H);
    const eImg = eCtx.createImageData(W, H);
    for (let y = 0; y < H; y++) {
      const v = y / H;
      for (let x = 0; x < W; x++) {
        const u = x / W;
        const rgb = opts.emissiveFn(u, v, heights[y * W + x]);
        const i = (y * W + x) * 4;
        if (rgb) {
          eImg.data[i] = rgb[0];
          eImg.data[i + 1] = rgb[1];
          eImg.data[i + 2] = rgb[2];
        }
        eImg.data[i + 3] = 255;
      }
    }
    eCtx.putImageData(eImg, 0, 0);
    emissiveTex = toTexture(eCanvas, true);
  }

  // --- Облака ---
  let cloudMap: THREE.CanvasTexture | null = null;
  let cloudAlpha: THREE.CanvasTexture | null = null;
  if (opts.clouds) {
    const [cCanvas, cCtx] = makeCanvas(W, H);
    const cImg = cCtx.createImageData(W, H);
    const haze = opts.clouds === 'haze';
    for (let y = 0; y < H; y++) {
      const v = y / H;
      for (let x = 0; x < W; x++) {
        const u = x / W;
        const lat = Math.abs(v - 0.5) * 2;
        const warp = fbm(u * 6 + 3, v * 6, seed + 90, 6, 4);
        const n = fbm(u * 7 + warp * 1.6, v * 10 + warp, seed + 41, 7, 5);
        let density = haze ? Math.pow(n, 1.2) * 0.85 : Math.max(0, n - (haze ? 0.3 : 0.46 - lat * 0.12)) * 2.4;
        density = Math.min(1, Math.max(0, density));
        const i = (y * W + x) * 4;
        const bright = haze ? 235 : 255;
        cImg.data[i] = bright;
        cImg.data[i + 1] = haze ? 180 : 250;
        cImg.data[i + 2] = haze ? 120 : 255;
        cImg.data[i + 3] = density * 255;
      }
    }
    cCtx.putImageData(cImg, 0, 0);
    cloudMap = toTexture(cCanvas, true);
    cloudAlpha = cloudMap;
  }

  return {
    map: toTexture(colorCanvas, true),
    normalMap: normalTex,
    roughnessMap: roughTex,
    emissiveMap: emissiveTex,
    displacementMap: dispTex,
    cloudMap,
    cloudAlphaMap: cloudAlpha
  };
}

/* --------------------- Палитры и стили --------------------- */

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function mixRGB(c1: number[], c2: number[], t: number): [number, number, number] {
  return [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];
}

const cache = new Map<string, TextureSet>();

export function buildTextureSet(style: TextureStyle, hi = true): TextureSet {
  const key = `${style}_${hi ? 'hi' : 'lo'}`;
  const found = cache.get(key);
  if (found) return found;

  const W = hi ? (style === 'rock' ? 640 : 1024) : 512;
  const H = W / 2;
  const set = buildStyle(style, W, H);
  cache.set(key, set);
  return set;
}

function buildStyle(style: TextureStyle, W: number, H: number): TextureSet {
  switch (style) {
    case 'mercury':
    case 'moon':
    case 'rock':
      return rockyStyle(style, W, H);
    case 'mars':
      return marsStyle(W, H);
    case 'earth':
      return earthStyle(W, H);
    case 'venus':
      return venusStyle(W, H);
    case 'jupiter':
      return gasGiantStyle('jupiter', W, H);
    case 'saturn':
      return gasGiantStyle('saturn', W, H);
    case 'uranus':
      return gasGiantStyle('uranus', W, H);
    case 'neptune':
      return gasGiantStyle('neptune', W, H);
    case 'io':
      return ioStyle(W, H);
    case 'europa':
      return europaStyle(W, H);
    case 'enceladus':
      return enceladusStyle(W, H);
    case 'titan':
      return titanStyle(W, H);
    case 'ice':
      return iceStyle(W, H);
    default:
      return rockyStyle('rock', W, H);
  }
}

/* ------------------------- Стили ------------------------- */

function rockyStyle(kind: 'mercury' | 'moon' | 'rock', W: number, H: number): TextureSet {
  const base = kind === 'moon' ? [168, 164, 156] : kind === 'mercury' ? [150, 145, 138] : [122, 112, 100];
  const dark = kind === 'moon' ? [92, 90, 86] : [78, 74, 68];
  const seed = kind === 'moon' ? 11 : kind === 'mercury' ? 23 : 37;

  const craters: Array<{ u: number; v: number; r: number }> = [];
  for (let i = 0; i < 220; i++) {
    craters.push({
      u: hash2(i * 7, 3, seed),
      v: 0.06 + hash2(i * 13, 91, seed) * 0.88,
      r: 0.004 + Math.pow(hash2(i * 17, 5, seed), 2.4) * 0.06
    });
  }

  // Растеризация кратеров в карту высот (только bbox каждого кратера)
  const hgrid = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    const v = y / H;
    for (let x = 0; x < W; x++) {
      const u = x / W;
      hgrid[y * W + x] =
        fbm(u * 16, v * 16, seed + 3, 16, 5) * 0.55 + fbm(u * 48, v * 48, seed, 48, 3) * 0.25 + 0.1;
    }
  }
  for (const c of craters) {
    const rPx = c.r * W * 1.35;
    const cx = c.u * W;
    const cy = c.v * H;
    const x0 = Math.max(0, Math.floor(cx - rPx));
    const x1 = Math.min(W - 1, Math.ceil(cx + rPx));
    const y0 = Math.max(0, Math.floor(cy - rPx * 0.5));
    const y1 = Math.min(H - 1, Math.ceil(cy + rPx * 0.5));
    for (let y = y0; y <= y1; y++) {
      const v = y / H;
      for (let x = x0; x <= x1; x++) {
        const u = x / W;
        const du = Math.min(Math.abs(u - c.u), 1 - Math.abs(u - c.u));
        const dv = (v - c.v) * 0.5;
        const dist = Math.sqrt(du * du + dv * dv);
        if (dist < c.r * 1.3) {
          const t = dist / c.r;
          hgrid[y * W + x] +=
            t < 0.85 ? -0.22 * (1 - t * t) : 0.18 * (1 - Math.abs(t - 0.92) / 0.2);
        }
      }
    }
  }

  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 3.0,
    paint: (u, v, out, i) => {
      const n = fbm(u * 14, v * 14, seed, 14, 5);
      const n2 = fbm(u * 40, v * 40, seed + 5, 40, 3);
      const mare = smooth01(0.42, 0.62, n); // тёмные «моря»
      const rgb = mixRGB(base, dark, mare * 0.75 + n2 * 0.25);
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => {
      const x = Math.min(W - 1, Math.max(0, Math.round(u * W)));
      const y = Math.min(H - 1, Math.max(0, Math.round(v * H)));
      return Math.min(1, Math.max(0, hgrid[y * W + x]));
    },
    roughFn: () => 0.92,
    post: (ctx) => {
      // Кратеры рисуем градиентами: дно темнее, вал светлее
      for (const c of craters) {
        const cx = c.u * W;
        const cy = c.v * H;
        const rp = c.r * W;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, 0.5);
        // Вал
        const rim = ctx.createRadialGradient(0, 0, rp * 0.72, 0, 0, rp * 1.12);
        rim.addColorStop(0, 'rgba(0,0,0,0)');
        rim.addColorStop(0.62, 'rgba(255,255,255,0.16)');
        rim.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = rim;
        ctx.fillRect(-rp * 1.2, -rp * 1.2, rp * 2.4, rp * 2.4);
        // Дно
        const floor = ctx.createRadialGradient(0, 0, 0, 0, 0, rp * 0.82);
        floor.addColorStop(0, 'rgba(0,0,0,0.3)');
        floor.addColorStop(0.75, 'rgba(0,0,0,0.16)');
        floor.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = floor;
        ctx.fillRect(-rp, -rp, rp * 2, rp * 2);
        ctx.restore();
      }
    }
  });
}

function marsStyle(W: number, H: number): TextureSet {
  const seed = 51;
  const rust = [193, 108, 62];
  const dark = [110, 58, 38];
  const bright = [222, 158, 110];
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 2.6,
    clouds: true,
    paint: (u, v, out, i) => {
      const n = fbm(u * 8, v * 8, seed, 8, 5);
      const albedo = fbm(u * 3.5 + 10, v * 5, seed + 9, 4, 4);
      let rgb = mixRGB(rust, dark, smooth01(0.35, 0.7, albedo));
      rgb = mixRGB(rgb, bright, smooth01(0.55, 0.85, n) * 0.55);

      // Полярные шапки
      const lat = Math.abs(v - 0.5) * 2;
      const cap = smooth01(0.82, 0.93, lat + n * 0.06);
      rgb = mixRGB(rgb, [235, 238, 242], cap);

      // Тёмные «моря» Марса (Сиртисоподобные)
      const syrt = fbm(u * 2.2 + 4, v * 3.2, seed + 21, 3, 3);
      if (syrt > 0.6 && v > 0.25 && v < 0.72) rgb = mixRGB(rgb, [82, 48, 36], smooth01(0.6, 0.75, syrt));

      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => {
      let h = fbm(u * 7, v * 7, seed + 2, 7, 5);
      // Гора Олимп
      const du = Math.min(Math.abs(u - 0.32), 1 - Math.abs(u - 0.32));
      const dv = v - 0.32;
      const d = Math.sqrt(du * du + dv * dv);
      if (d < 0.09) h += (1 - d / 0.09) * 0.9;
      // Долина Маринер
      if (v > 0.55 && v < 0.62 && u > 0.1 && u < 0.55) h -= 0.22;
      return Math.min(1, Math.max(0, h));
    },
    roughFn: (_u, v) => 0.88 - Math.abs(v - 0.5) * 0.1
  });
}

function earthStyle(W: number, H: number): TextureSet {
  const seed = 77;
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 2.0,
    clouds: true,
    paint: (u, v, out, i) => {
      const lat = (v - 0.5) * 2;
      const h = fbm(u * 5.2, v * 5.2, seed, 6, 6);
      const detail = fbm(u * 18, v * 18, seed + 4, 18, 4);
      const landMask = smooth01(0.52, 0.58, h + detail * 0.12 - Math.abs(lat) * 0.1);

      // Океан
      const depth = smooth01(0.2, 0.55, h + detail * 0.1);
      let rgb = mixRGB([12, 42, 96], [28, 92, 168], depth);

      // Суша
      const dry = smooth01(0.45, 0.75, fbm(u * 9 + 20, v * 9, seed + 8, 9, 4));
      const veg = [46, 110, 52];
      const sand = [168, 148, 92];
      let land = mixRGB(veg, sand, dry * 0.75 + detail * 0.25);
      // Горы
      land = mixRGB(land, [122, 108, 92], smooth01(0.62, 0.85, detail + h * 0.3) * 0.7);
      rgb = mixRGB(rgb, land, landMask);

      // Ледяные шапки
      const cap = smooth01(0.78, 0.9, Math.abs(lat) + detail * 0.1);
      rgb = mixRGB(rgb, [236, 242, 248], cap);

      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => {
      const lat = (v - 0.5) * 2;
      const h = fbm(u * 5.2, v * 5.2, seed, 6, 6);
      const detail = fbm(u * 18, v * 18, seed + 4, 18, 4);
      const landMask = smooth01(0.52, 0.58, h + detail * 0.12 - Math.abs(lat) * 0.1);
      return 0.32 + landMask * (0.35 + detail * 0.45);
    },
    roughFn: (u, v) => {
      const lat = (v - 0.5) * 2;
      const h = fbm(u * 5.2, v * 5.2, seed, 6, 6);
      const landMask = smooth01(0.52, 0.58, h - Math.abs(lat) * 0.1);
      // Океан блестит (низкая шероховатость), суша — матовая
      return lerp(0.18, 0.9, landMask);
    },
    emissiveFn: (u, v) => {
      const lat = (v - 0.5) * 2;
      const h = fbm(u * 5.2, v * 5.2, seed, 6, 6);
      const landMask = smooth01(0.52, 0.58, h - Math.abs(lat) * 0.1);
      if (landMask < 0.4) return null;
      // «Города» — кластеры точек в умеренных широтах
      const city = fbm(u * 60, v * 60, seed + 99, 60, 2);
      const temperate = 1 - smooth01(0.55, 0.85, Math.abs(lat));
      if (city > 0.72 && temperate > 0.25 && hash2(Math.floor(u * 400), Math.floor(v * 400), 5) > 0.35) {
        return [255, 196, 96];
      }
      return null;
    }
  });
}

function venusStyle(W: number, H: number): TextureSet {
  const seed = 88;
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 0.7,
    clouds: 'haze',
    paint: (u, v, out, i) => {
      const warp = fbm(u * 4, v * 7, seed, 4, 4);
      const swirl = fbm(u * 9 + warp * 2.2, v * 13 + warp * 1.2, seed + 2, 9, 5);
      const lat = Math.abs(v - 0.5) * 2;
      let rgb = mixRGB([214, 168, 84], [242, 214, 140], swirl);
      rgb = mixRGB(rgb, [186, 132, 62], smooth01(0.4, 0.8, lat + swirl * 0.2) * 0.45);
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => fbm(u * 6, v * 6, seed + 6, 6, 5) * 0.7 + 0.15,
    roughFn: () => 0.85
  });
}

function gasGiantStyle(kind: 'jupiter' | 'saturn' | 'uranus' | 'neptune', W: number, H: number): TextureSet {
  const palettes: Record<string, number[][]> = {
    jupiter: [[196, 152, 118], [238, 218, 190], [170, 110, 82], [252, 240, 222]],
    saturn: [[222, 196, 138], [245, 230, 188], [200, 168, 112], [250, 240, 210]],
    uranus: [[158, 216, 220], [188, 232, 234], [130, 196, 206], [210, 240, 242]],
    neptune: [[62, 92, 210], [92, 122, 226], [42, 62, 160], [120, 150, 238]]
  };
  const seed = kind === 'jupiter' ? 101 : kind === 'saturn' ? 202 : kind === 'uranus' ? 303 : 404;
  const pal = palettes[kind];
  const bandFreq = kind === 'jupiter' ? 14 : kind === 'saturn' ? 11 : 7;
  const turbulence = kind === 'jupiter' ? 1.0 : kind === 'saturn' ? 0.6 : 0.25;

  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 0.35,
    paint: (u, v, out, i) => {
      const warp = (fbm(u * 3, v * 6, seed, 3, 4) - 0.5) * turbulence;
      const band = Math.sin((v + warp * 0.08) * Math.PI * bandFreq + fbm(u * 5, v * 10, seed + 3, 5, 3) * 2.4);
      const t = band * 0.5 + 0.5;
      const idx = t > 0.66 ? 1 : t > 0.33 ? 0 : 2;
      let rgb = mixRGB(pal[idx], pal[3], smooth01(0.75, 0.95, t) * 0.7);
      rgb = mixRGB(rgb, pal[2], smooth01(0.25, 0.05, t) * 0.6);

      // Вихри
      const storm = fbm(u * 8 + 50, v * 16, seed + 11, 8, 4);
      if (storm > 0.72) rgb = mixRGB(rgb, pal[2], (storm - 0.72) * 1.6);

      // Большое Красное Пятно
      if (kind === 'jupiter') {
        const du = Math.min(Math.abs(u - 0.68), 1 - Math.abs(u - 0.68));
        const dv = (v - 0.62) * 2.1;
        const d = Math.sqrt(du * du * 2.4 + dv * dv);
        if (d < 0.085) {
          const swirlIn = 0.5 + 0.5 * Math.sin(Math.atan2(dv, du * 1.6) * 3 + d * 90);
          rgb = mixRGB([188, 86, 48], [218, 118, 72], swirlIn * smooth01(0.085, 0.0, d));
        }
      }
      // Гексагон Сатурна
      if (kind === 'saturn') {
        const du = u - 0.5;
        const dv = v - 0.085;
        const ang = Math.atan2(dv, du * 2);
        const rr = Math.sqrt(du * du * 4 + dv * dv);
        const hexR = 0.052 * (1 + 0.12 * Math.cos(ang * 6));
        if (rr < hexR * 1.25) {
          const edge = Math.abs(rr - hexR) < 0.006 ? 1 : 0;
          rgb = mixRGB(rgb, [210, 170, 110], edge * 0.8 + smooth01(hexR * 1.15, hexR * 0.4, rr) * 0.25);
        }
      }
      // Тёмное пятно Нептуна
      if (kind === 'neptune') {
        const du = Math.min(Math.abs(u - 0.35), 1 - Math.abs(u - 0.35));
        const dv = (v - 0.42) * 2;
        const d = Math.sqrt(du * du * 3 + dv * dv);
        if (d < 0.07) rgb = mixRGB(rgb, [22, 32, 96], smooth01(0.07, 0.0, d) * 0.75);
      }

      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => {
      const warp = (fbm(u * 3, v * 6, seed, 3, 4) - 0.5) * turbulence;
      return 0.5 + Math.sin((v + warp * 0.08) * Math.PI * bandFreq) * 0.12;
    },
    roughFn: () => (kind === 'uranus' || kind === 'neptune' ? 0.72 : 0.8)
  });
}

function ioStyle(W: number, H: number): TextureSet {
  const seed = 611;
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 1.8,
    paint: (u, v, out, i) => {
      const n = fbm(u * 10, v * 10, seed, 10, 5);
      let rgb = mixRGB([226, 202, 96], [188, 148, 52], n);
      const volc = fbm(u * 16 + 3, v * 16, seed + 4, 16, 3);
      if (volc > 0.68) rgb = mixRGB(rgb, [42, 28, 22], smooth01(0.68, 0.85, volc));
      // Вулканические кольца
      for (let k = 0; k < 14; k++) {
        const cu = hash2(k * 31, 17, seed);
        const cv = 0.1 + hash2(k * 47, 29, seed) * 0.8;
        const du = Math.min(Math.abs(u - cu), 1 - Math.abs(u - cu));
        const dv = (v - cv) * 0.5;
        const d = Math.sqrt(du * du + dv * dv);
        if (d < 0.035) rgb = mixRGB(rgb, [232, 82, 32], smooth01(0.035, 0.012, d) * 0.85);
      }
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => fbm(u * 12, v * 12, seed + 2, 12, 5) * 0.8 + 0.1,
    roughFn: () => 0.88,
    emissiveFn: (u, v) => {
      const volc = fbm(u * 16 + 3, v * 16, seed + 4, 16, 3);
      return volc > 0.72 ? [255, 110, 40] : null;
    }
  });
}

function europaStyle(W: number, H: number): TextureSet {
  const seed = 622;
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 1.2,
    paint: (u, v, out, i) => {
      const n = fbm(u * 6, v * 6, seed, 6, 5);
      let rgb = mixRGB([214, 198, 172], [238, 230, 212], n);
      // Линейные трещины
      const crack = ridged(u * 10 + fbm(u * 3, v * 3, seed + 1, 3, 3) * 4, v * 3, seed + 2, 10, 3);
      if (crack > 0.72) rgb = mixRGB(rgb, [156, 108, 84], smooth01(0.72, 0.95, crack) * 0.8);
      const cap = smooth01(0.8, 0.95, Math.abs(v - 0.5) * 2);
      rgb = mixRGB(rgb, [246, 246, 248], cap);
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => {
      const crack = ridged(u * 10, v * 3, seed + 2, 10, 3);
      return 0.5 + (crack - 0.5) * 0.35 + fbm(u * 8, v * 8, seed, 8, 4) * 0.18;
    },
    roughFn: () => 0.55
  });
}

function enceladusStyle(W: number, H: number): TextureSet {
  const seed = 633;
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 1.4,
    paint: (u, v, out, i) => {
      const n = fbm(u * 8, v * 8, seed, 8, 4);
      let rgb = mixRGB([228, 236, 244], [250, 252, 255], n);
      // «Тигровые полосы» у южного полюса
      if (v > 0.72) {
        const stripe = ridged(u * 14, (v - 0.72) * 8, seed + 3, 14, 2);
        if (stripe > 0.62) rgb = mixRGB(rgb, [120, 190, 230], smooth01(0.62, 0.9, stripe));
      }
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => {
      const base = fbm(u * 9, v * 9, seed, 9, 4) * 0.5 + 0.25;
      const stripe = v > 0.72 ? ridged(u * 14, (v - 0.72) * 8, seed + 3, 14, 2) : 0;
      return base - stripe * 0.28;
    },
    roughFn: () => 0.4
  });
}

function titanStyle(W: number, H: number): TextureSet {
  const seed = 644;
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 1.1,
    clouds: 'haze',
    paint: (u, v, out, i) => {
      const n = fbm(u * 5, v * 8, seed, 5, 5);
      let rgb = mixRGB([196, 118, 42], [232, 168, 82], n);
      // Тёмные «моря» метана у полюсов и экваториальные дюны
      const lat = Math.abs(v - 0.5) * 2;
      const sea = smooth01(0.72, 0.9, lat + n * 0.15);
      rgb = mixRGB(rgb, [72, 48, 28], sea * 0.85);
      const dunes = Math.sin(u * 90 + fbm(u * 4, v * 6, seed + 2, 4, 3) * 8) * 0.5 + 0.5;
      rgb = mixRGB(rgb, [162, 96, 38], dunes * 0.16);
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => fbm(u * 6, v * 8, seed + 1, 6, 4) * 0.6 + 0.2,
    roughFn: () => 0.8
  });
}

function iceStyle(W: number, H: number): TextureSet {
  const seed = 655;
  return buildSet({
    width: W,
    height: H,
    seed,
    normalStrength: 1.5,
    paint: (u, v, out, i) => {
      const n = fbm(u * 7, v * 7, seed, 7, 5);
      let rgb = mixRGB([196, 184, 214], [232, 228, 242], n);
      const cap = smooth01(0.75, 0.92, Math.abs(v - 0.5) * 2 + n * 0.1);
      rgb = mixRGB(rgb, [242, 244, 250], cap);
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    },
    heightFn: (u, v) => fbm(u * 9, v * 9, seed, 9, 5) * 0.7 + 0.15,
    roughFn: () => 0.5
  });
}

function smooth01(a: number, b: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a || 1e-6)));
  return t * t * (3 - 2 * t);
}
