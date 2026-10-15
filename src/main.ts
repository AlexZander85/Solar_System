/**
 * ГЕЛИОСФЕРА: Космическая Одиссея — главный модуль.
 * Связывает движок (CameraRig, SpaceManager, PostFX, QualityManager),
 * эфемериды, живое Солнце, планеты, интерфейс и режимы.
 */
import * as THREE from 'three';
import './styles.css';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { CameraRig } from './core/CameraRig';
import { SpaceManager } from './core/SpaceManager';
import { PostFX } from './core/PostFX';
import { QualityManager, type QualityPreset } from './core/QualityManager';
import { AmbientAudio } from './core/AmbientAudio';
import { settle, spring1 } from './core/SpringMath';
import {
  AU_KM,
  BODIES,
  BODY_MAP,
  bodyById,
  scaleConfig,
  type BodyDef,
  type ScaleConfig
} from './data/bodies';
import {
  bodyWorldPositionKm,
  dateFromJD,
  julianDay,
  nextEclipse,
  planetPositionAU
} from './data/ephemeris';
import { Sun, type SunViewMode } from './render/Sun';
import { PlanetBody } from './render/Planet';
import { Starfield } from './render/Starfield';
import { CutawayView, cutawayCaption } from './render/Cutaway';
import { UI } from './ui/UI';
import { CinematicIntro } from './intro/CinematicIntro';
import { SurfaceWorld } from './surface/SurfaceWorld';
import { ModeManager, type AppMode } from './modes/ModeManager';
import type { AppContext } from './modes/context';
import type { SurfaceInput } from './surface/SurfaceWorld';
import type { FlightInput } from './modes/Spacecraft';

/* ============================== Инициализация ============================== */

const canvas = document.getElementById('viewport') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance'
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.setClearColor(0x000000, 1);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 20000);
camera.position.set(0, 30, 240);

// Слой 3D-выносок (русские подписи слоёв недр, сравнение миров)
const labelRenderer = new CSS2DRenderer();
labelRenderer.domElement.id = 'label-layer';
document.getElementById('app')!.appendChild(labelRenderer.domElement);

const quality = new QualityManager();
const spaces = new SpaceManager();
scene.add(spaces.root);

const rig = new CameraRig(camera);
const postfx = new PostFX(renderer, scene, camera);
const starfield = new Starfield(quality.settings.stars);
scene.add(starfield.group);

let scale: ScaleConfig = scaleConfig('museum');
let sunRadius = scale.radiusUnits(bodyById('sun'));
const sun = new Sun(sunRadius);
spaces.root.add(sun.group);

// Мягкая подсветка, чтобы ночная сторона не была абсолютно чёрной
scene.add(new THREE.AmbientLight(0x223355, 0.16));

/* ============================== Состояние приложения ============================== */

interface AppBody {
  def: BodyDef;
  planet: PlanetBody;
  worldPosKm: THREE.Vector3;
  scenePos: THREE.Vector3;
}

const appBodies = new Map<string, AppBody>();
let simDate = new Date();
let simJD = julianDay(simDate);
let simSpeed = 1 / 86400; // суток в секунду (реальное время)
let lastSpeed = 1 / 86400;
let simPlaying = true;
let selectedId = 'earth';
let focusId = 'sun';
let sunMode: SunViewMode = 'visible';

const cutaway = new CutawayView();
scene.add(cutaway.group);

const orbitLines = new Map<string, THREE.Line>();
const orbitGroup = new THREE.Group();
orbitGroup.name = 'OrbitLines';
spaces.root.add(orbitGroup);

const exposureSpring = spring1(1.05);
const tmpV = new THREE.Vector3();
const tmpV2 = new THREE.Vector3();
const tmpV3 = new THREE.Vector3();
const sunWorld = new THREE.Vector3();
const camWorld = new THREE.Vector3();
const forwardV = new THREE.Vector3();
const toSunV = new THREE.Vector3();

/* ============================== Построение тел ============================== */

function buildBodies(): void {
  for (const def of BODIES) {
    if (def.id === 'sun') continue;
    const planet = new PlanetBody(def, {
      radiusUnits: scale.radiusUnits(def),
      qualitySegs: quality.settings.planetSegs,
      cloudShadows: quality.settings.cloudShadows,
      withRings: true
    });
    spaces.root.add(planet.group);
    appBodies.set(def.id, {
      def,
      planet,
      worldPosKm: new THREE.Vector3(),
      scenePos: new THREE.Vector3()
    });
  }
}

function clearBodies(): void {
  for (const [, ab] of appBodies) {
    ab.planet.dispose();
    spaces.root.remove(ab.planet.group);
  }
  appBodies.clear();
}

/* ============================== Линии орбит ============================== */

function buildOrbitLines(): void {
  for (const line of orbitLines.values()) {
    line.removeFromParent();
    line.geometry.dispose();
    (line.material as THREE.Material).dispose();
  }
  orbitLines.clear();

  for (const def of BODIES) {
    if (def.id === 'sun') continue;
    const points: THREE.Vector3[] = [];
    const parent = def.parent ? BODY_MAP[def.parent] : null;

    if (def.parent === 'sun' || !parent) {
      const segs = 220;
      const period = Math.max(def.periodDays, 1);
      const aAU = def.aAU ?? 1;
      for (let i = 0; i <= segs; i++) {
        const jd = simJD + (i / segs) * period;
        planetPositionAU(def.id, jd, tmpV);
        const distAU = tmpV.length();
        if (scale.id === 'real') {
          points.push(tmpV.clone().multiplyScalar(AU_KM / scale.kmPerUnit));
        } else {
          const dir = tmpV.clone().normalize();
          const rad = scale.orbitUnits(def) * (distAU / Math.max(aAU, 1e-6));
          points.push(dir.multiplyScalar(rad));
        }
      }
    } else {
      const segs = 96;
      const r = scale.moonOrbitUnits(def);
      const inc = THREE.MathUtils.degToRad(def.inclinationDeg + 12);
      for (let i = 0; i <= segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(a) * r,
            Math.sin(a) * r * Math.sin(inc),
            Math.sin(a) * r * Math.cos(inc)
          )
        );
      }
    }

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(def.color).lerp(new THREE.Color(0x88aaff), 0.35),
      transparent: true,
      opacity: def.kind === 'moon' ? 0.1 : 0.2,
      depthWrite: false
    });
    const line = new THREE.Line(geo, mat);
    orbitLines.set(def.id, line);
    // Орбиты спутников привязываем к родителю, чтобы кольцо летело вместе с планетой
    const parentAb = def.parent ? appBodies.get(def.parent) : null;
    if (parentAb && def.parent !== 'sun') {
      parentAb.planet.group.add(line);
    } else {
      orbitGroup.add(line);
    }
  }
}

/* ============================== Эфемериды в сцену ============================== */

function updatePositions(): void {
  sun.group.position.set(0, 0, 0);

  for (const [, ab] of appBodies) {
    const { def } = ab;
    bodyWorldPositionKm(def, simJD, tmpV); // абсолютные км
    ab.worldPosKm.copy(tmpV);

    if (def.parent && def.parent !== 'sun') {
      const parentDef = BODY_MAP[def.parent];
      const parentAb = appBodies.get(def.parent);
      if (parentAb) {
        bodyWorldPositionKm(parentDef, simJD, tmpV2); // км родителя
        tmpV.sub(tmpV2); // относительный вектор, км
        if (scale.id === 'real') {
          tmpV.multiplyScalar(1 / scale.kmPerUnit);
        } else {
          tmpV.normalize().multiplyScalar(scale.moonOrbitUnits(def));
        }
        tmpV.add(parentAb.scenePos);
      }
    } else if (scale.id === 'museum') {
      const distAU = tmpV.length() / AU_KM;
      const dir = tmpV.normalize();
      tmpV.copy(dir).multiplyScalar(scale.orbitUnits(def) * (distAU / Math.max(def.aAU ?? 1, 1e-6)));
    } else {
      tmpV.multiplyScalar(1 / scale.kmPerUnit);
    }

    ab.scenePos.copy(tmpV);
    ab.planet.group.position.copy(tmpV);
  }

  // Floating origin: центр фокус-тела = (0,0,0)
  const focusAb = appBodies.get(focusId);
  if (focusAb) {
    spaces.applyFocus(focusAb.scenePos);
  } else {
    spaces.applyFocus(tmpV3.set(0, 0, 0));
  }
}

/* ============================== Камера: авто-пространства ============================== */

function updateSpaceMode(): void {
  if (
    rig.state === 'SURFACE_WALK' ||
    rig.state === 'SPACECRAFT_FLIGHT' ||
    rig.state === 'CINEMATIC_INTRO'
  ) {
    return;
  }
  const focusDef = bodyById(focusId);
  const r = scale.radiusUnits(focusDef);
  rig.bodyRadius = r;

  if (spaces.mode === 'SYSTEM_SPACE' && rig.targetDistance < r * 14) {
    spaces.setMode('ORBIT_LOCAL_SPACE', r);
    if (rig.state !== 'CUTAWAY' && rig.state !== 'RING_DIVE') rig.request('ORBIT');
  } else if (spaces.mode === 'ORBIT_LOCAL_SPACE' && rig.targetDistance > r * 30) {
    spaces.setMode('SYSTEM_SPACE', r);
    if (rig.state !== 'CUTAWAY' && rig.state !== 'RING_DIVE') rig.request('SYSTEM');
  }
}

function systemViewDistance(): number {
  return scale.id === 'real' ? 2400 : 240;
}

/* ============================== Выбор тел ============================== */

function selectBody(id: string, frame = true): void {
  if (!BODY_MAP[id]) return;
  selectedId = id;
  focusId = id;
  ui.selectBody(id);
  ui.showInfo(bodyById(id));

  const def = bodyById(id);
  const r = scale.radiusUnits(def);
  rig.setFocusBody(r);
  if (frame) {
    rig.frameBody(r, id === 'sun' ? 3.0 : 3.8);
    rig.targetElevation = 0.35;
    rig.targetAzimuth = Math.PI * 0.32;
  }

  closeCutaway();

  spaces.setMode(rig.targetDistance < r * 14 ? 'ORBIT_LOCAL_SPACE' : 'SYSTEM_SPACE', r);
}

function closeCutaway(): void {
  if (!cutaway.active) return;
  const parent = cutaway.group.parent;
  cutaway.close();
  if (parent) parent.remove(cutaway.group);
  ui.setCutawayCaption(null);
  ui.setCutawayButton(false);
}

function toggleCutaway(): void {
  const def = bodyById(selectedId);
  const r = scale.radiusUnits(def);
  const parent = selectedId === 'sun' ? sun.group : appBodies.get(selectedId)?.planet.tiltGroup;
  if (!parent) return;

  const opened = cutaway.toggle(def, r, parent);
  if (opened) {
    rig.request('CUTAWAY');
    rig.targetDistance = Math.max(rig.targetDistance, r * 3.1);
    ui.setCutawayCaption(`<h3>${def.name}: что внутри</h3>${cutawayCaption(def)}`);
    ui.setCutawayButton(true);
    spaces.setMode('ORBIT_LOCAL_SPACE', r);
  } else {
    rig.request('ORBIT');
    ui.setCutawayCaption(null);
    ui.setCutawayButton(false);
  }
}

/* ============================== Аудио и вступление ============================== */

const audio = new AmbientAudio();
let intro: CinematicIntro;

/* ============================== UI ============================== */

const ui = new UI({
  onSelectBody: (id) => selectBody(id),
  onToggleCutaway: () => toggleCutaway(),
  onQuality: (q: QualityPreset) => {
    quality.setPreset(q);
    quality.applyRenderer(renderer);
    postfx.setEnabled(quality.settings.bloom);
    postfx.setBloomStrength(quality.settings.bloomStrength);
    starfield.setStarCount(quality.settings.stars);
    for (const [, ab] of appBodies) ab.planet.setLOD(1);
    ui.toast(`Графика: ${q}. Качество применено.`);
  },
  onScale: (s) => {
    if (intro.isActive) intro.skip();
    scale = scaleConfig(s);
    const newSunRadius = scale.radiusUnits(bodyById('sun'));
    sun.group.scale.setScalar(newSunRadius / sunRadius);
    sunRadius = newSunRadius;

    clearBodies();
    buildBodies();
    buildOrbitLines();
    selectBody(selectedId, true);

    ui.toast(
      s === 'real'
        ? 'Реальные пропорции: планеты почти невидимы — так и есть в космосе!'
        : 'Наглядный музейный масштаб: всё видно сразу.'
    );
  },
  onSunMode: () => {
    sunMode = sunMode === 'visible' ? 'sdo' : 'visible';
    sun.setViewMode(sunMode);
    ui.setSunModeLabel(sunMode === 'sdo');
    ui.toast(
      sunMode === 'sdo'
        ? 'УФ-фильтр SDO: видна магнитная плазма при 1 000 000 °C.'
        : 'Кинематографический видимый свет.'
    );
  },
  onAudioToggle: async () => {
    const on = await audio.toggle();
    ui.setAudioState(on);
  },
  onIntro: () => {
    closeCutaway();
    intro.start();
  },
  onIntroSkip: () => {
    intro.skip();
  },
  onDateChange: (d) => {
    simDate = d;
    simJD = julianDay(simDate);
    ui.setDate(simDate);
  },
  onSpeedChange: (daysPerSec) => {
    lastSpeed = daysPerSec;
    if (simPlaying) simSpeed = daysPerSec;
  },
  onPlayPause: () => {
    simPlaying = !simPlaying;
    simSpeed = simPlaying ? lastSpeed : 0;
  },
  onModeChange: (mode) => {
    modeManager.setMode(mode as AppMode);
  },
  onBirthday: () => {
    const input = window.prompt('Введите вашу дату рождения (ГГГГ-ММ-ДД):', '2012-06-01');
    if (!input) return;
    const d = new Date(input);
    if (isNaN(d.getTime())) {
      ui.toast('Не удалось разобрать дату. Попробуйте формат ГГГГ-ММ-ДД.');
      return;
    }
    simDate = d;
    simJD = julianDay(d);
    ui.setDate(d);
    ui.toast(`Машина времени: ${d.toLocaleDateString('ru-RU')}. Так выглядела Солнечная система в ваш день рождения!`);
  },
  onDatePreset: (dateISO) => {
    const d = new Date(dateISO.includes('T') ? dateISO : dateISO + 'T12:00:00Z');
    if (isNaN(d.getTime())) return;
    simDate = d;
    simJD = julianDay(d);
    ui.setDate(d);
    const eclipse = nextEclipse(d);
    ui.toast(`Дата: ${d.toLocaleDateString('ru-RU')}. Ближайшее затмение: ${eclipse.label}`);
  }
});

intro = new CinematicIntro(rig, ui, sun, () => {
  rig.resetSystemView();
  rig.targetDistance = systemViewDistance();
  rig.setDistance(systemViewDistance());
  focusId = 'sun';
  selectBody('earth', false);
  ui.toast('Добро пожаловать в «Гелиосферу»! Выберите тело слева или вращайте камеру мышью.');
});

/* ============================== Поверхность (SURFACE_PATCH_SPACE) ============================== */

let surfaceWorld: SurfaceWorld | null = null;

function setSystemVisible(v: boolean): void {
  spaces.root.visible = v;
}

function startSurface(bodyId: string): void {
  stopSurface();
  const def = bodyById(bodyId);
  surfaceWorld = new SurfaceWorld(def, quality.settings.terrainSegs);
  scene.add(surfaceWorld.group);
  setSystemVisible(false);
  spaces.setMode('SURFACE_PATCH_SPACE', scale.radiusUnits(def));
  rig.request('SURFACE_WALK');
  rig.terrainHeight = 2.2;
  selectedId = bodyId;
  focusId = bodyId;
  ui.selectBody(bodyId);
  ui.showInfo(def);
  ui.toast(`Посадка: ${def.name}. WASD — шаг, мышь — осмотреться, Пробел — прыжок с честной гравитацией!`);
}

function stopSurface(): void {
  if (!surfaceWorld) return;
  scene.remove(surfaceWorld.group);
  surfaceWorld.dispose();
  surfaceWorld = null;
  setSystemVisible(true);
  rig.terrainHeight = 0;
  if (rig.state === 'SURFACE_WALK') {
    rig.request('ORBIT');
    const r = scale.radiusUnits(bodyById(focusId));
    spaces.setMode('ORBIT_LOCAL_SPACE', r);
  }
}

/* ============================== Контекст и режимы ============================== */

const appContext: AppContext = {
  scene,
  camera,
  renderer,
  rig,
  spaces,
  postfx,
  quality,
  sun,
  ui,
  getScale: () => scale,
  getSimJD: () => simJD,
  setSimDate: (d) => {
    simDate = d;
    simJD = julianDay(d);
    ui.setDate(d);
  },
  selectBody: (id, frame = true) => selectBody(id, frame),
  focusBodyId: () => focusId,
  bodyDef: (id) => bodyById(id),
  bodyObject: (id) => appBodies.get(id)?.planet ?? null,
  bodyScenePos: (id, out) => {
    if (id === 'sun') return out.copy(sun.group.position);
    const ab = appBodies.get(id);
    return ab ? out.copy(ab.scenePos) : out.set(0, 0, 0);
  },
  toast: (msg) => ui.toast(msg),
  setSystemVisible,
  startSurface,
  stopSurface
};

const modeManager = new ModeManager(appContext);

/* ============================== Ввод ============================== */

const pointer = { down: false, button: 0, x: 0, y: 0 };
const keys = new Set<string>();
const lookAcc = { dx: 0, dy: 0 };
let jumpPressed = false;

canvas.addEventListener('pointerdown', (e) => {
  pointer.down = true;
  pointer.button = e.button;
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  canvas.classList.add('dragging');
  canvas.setPointerCapture(e.pointerId);
});

canvas.addEventListener('pointermove', (e) => {
  if (!pointer.down) return;
  const dx = e.clientX - pointer.x;
  const dy = e.clientY - pointer.y;
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  // В режиме прогулки/полёта мышь — обзор, иначе — орбитальная камера
  if (surfaceWorld || modeManager.mode === 'fly') {
    lookAcc.dx += dx;
    lookAcc.dy += dy;
  } else if (pointer.button === 2) {
    rig.addInput({ dragDX: 0, dragDY: 0, panDX: dx, panDY: dy, zoom: 0 });
  } else {
    rig.addInput({ dragDX: dx, dragDY: dy, panDX: 0, panDY: 0, zoom: 0 });
  }
});

canvas.addEventListener('pointerup', (e) => {
  pointer.down = false;
  canvas.classList.remove('dragging');
  canvas.releasePointerCapture(e.pointerId);
});

canvas.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault();
    if (surfaceWorld) return;
    rig.addInput({ dragDX: 0, dragDY: 0, panDX: 0, panDY: 0, zoom: e.deltaY });
  },
  { passive: false }
);

canvas.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('keydown', (e) => {
  const tag = (e.target as HTMLElement | null)?.tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
  keys.add(e.code);

  if (e.code === 'Space') {
    e.preventDefault();
    if (surfaceWorld) jumpPressed = true;
    else if (modeManager.mode === 'explore') toggleCutaway();
    return;
  }
  const digitMap: Record<string, string> = {
    Digit1: 'sun',
    Digit2: 'mercury',
    Digit3: 'venus',
    Digit4: 'earth',
    Digit5: 'mars',
    Digit6: 'jupiter',
    Digit7: 'saturn',
    Digit8: 'uranus',
    Digit9: 'neptune'
  };
  if (digitMap[e.code] && modeManager.mode === 'explore') {
    selectBody(digitMap[e.code]);
    return;
  }
  if (e.code === 'KeyR' && modeManager.mode === 'explore') {
    rig.resetSystemView();
    rig.targetDistance = systemViewDistance();
    rig.setDistance(systemViewDistance());
    focusId = 'sun';
    ui.toast('Вид сброшен к обзору системы.');
    return;
  }
  if (e.code === 'KeyM') {
    void audio.toggle().then((on) => ui.setAudioState(on));
  }
});

window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
});

function readSurfaceInput(): SurfaceInput {
  const fwd = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
  const side = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
  const input: SurfaceInput = {
    forward: fwd,
    side,
    jump: jumpPressed,
    run: keys.has('ShiftLeft') || keys.has('ShiftRight')
  };
  jumpPressed = false;
  return input;
}

function readFlightInput(): FlightInput {
  return {
    thrust: (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0),
    strafe: (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0),
    lift: (keys.has('Space') ? 1 : 0) - (keys.has('ControlLeft') ? 1 : 0),
    pitch: -lookAcc.dy * 0.05,
    yaw: -lookAcc.dx * 0.05,
    roll: (keys.has('KeyE') ? 1 : 0) - (keys.has('KeyQ') ? 1 : 0),
    parachute: keys.has('KeyP')
  };
}

/* ============================== Ресайз ============================== */

function onResize(): void {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  postfx.setSize(w, h);
  labelRenderer.setSize(w, h);
}
window.addEventListener('resize', onResize);

/* ============================== Главный цикл ============================== */

const clock = new THREE.Clock();
let dateSyncAcc = 0;

function animate(): void {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);

  // Модельное время: сутки в секунду
  if (simPlaying && simSpeed !== 0) {
    simJD += simSpeed * dt;
    simDate = dateFromJD(simJD);
    dateSyncAcc += dt;
    if (dateSyncAcc > 0.5) {
      dateSyncAcc = 0;
      ui.setDate(simDate);
    }
  }

  updatePositions();

  sun.group.getWorldPosition(sunWorld);
  camera.getWorldPosition(camWorld);
  sun.update(dt);

  for (const [, ab] of appBodies) {
    ab.planet.update(dt, sunWorld, camWorld, simJD);
  }

  updateSpaceMode();

  // Прогулка по поверхности: мир обновляется, поза идёт в камеру
  if (surfaceWorld) {
    surfaceWorld.update(dt, readSurfaceInput(), lookAcc.dx, lookAcc.dy);
    rig.surfacePose.position.copy(surfaceWorld.position);
    rig.surfacePose.yaw = surfaceWorld.yaw;
    rig.surfacePose.pitch = surfaceWorld.pitch;
  }

  modeManager.update(dt, readSurfaceInput(), readFlightInput());
  lookAcc.dx = 0;
  lookAcc.dy = 0;

  rig.update(dt);
  spaces.update(dt);
  spaces.updateCamera(camera, dt);

  // Автоэкспозиция: если Солнце в кадре — приглушаем, чтобы не выжечь экран
  // (в Фотолаборатории экспозицию задаёт фотограф)
  if (modeManager.mode !== 'photo') {
    forwardV.set(0, 0, -1).applyQuaternion(camera.quaternion);
    toSunV.copy(sunWorld).sub(camWorld).normalize();
    const sunInView = Math.max(0, forwardV.dot(toSunV));
    const dist = camWorld.distanceTo(sunWorld);
    const distFactor = THREE.MathUtils.clamp(
      (scale.radiusUnits(bodyById('sun')) * 22) / Math.max(dist, 1e-3),
      0.25,
      1.4
    );
    const targetExposure = 1.05 - Math.pow(sunInView, 8) * 0.5 * distFactor;
    settle(exposureSpring, targetExposure, dt, 1.4);
    renderer.toneMappingExposure = exposureSpring.value;
  }

  starfield.follow(camWorld);

  if (intro.isActive) intro.update(dt);
  cutaway.update(dt);

  postfx.render();
  labelRenderer.render(scene, camera);
}

/* ============================== Запуск ============================== */

async function boot(): Promise<void> {
  ui.setLoadingProgress(0.15);
  buildBodies();
  ui.setLoadingProgress(0.55);
  buildOrbitLines();
  ui.setLoadingProgress(0.8);

  quality.applyRenderer(renderer);
  postfx.setBloomStrength(quality.settings.bloomStrength);
  onResize();

  selectBody('earth', false);
  rig.resetSystemView();
  rig.targetDistance = systemViewDistance();
  rig.setDistance(systemViewDistance());
  focusId = 'sun'; // вступление снимает Солнце — держим фокус на нём
  spaces.setMode('SYSTEM_SPACE', sunRadius);

  ui.setLoadingProgress(1);
  await new Promise((r) => setTimeout(r, 350));
  ui.hideLoading();

  animate();
  intro.start();
}

void boot();
