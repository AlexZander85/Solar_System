/**
 * MissionScene — маленькие, но настоящие 3D-реконструкции всех шести миссий.
 *
 * Это отдельная локальная сцена: у каждой миссии есть носитель, маршрут,
 * ключевые тела и анимация этапа. Посадочные сцены Аполлона и Perseverance
 * дополнительно передаются SurfaceWorld, остальные четыре не превращаются в
 * текстовую карточку — Voyager, Cassini, Parker и Clipper тоже летают в 3D.
 */
import * as THREE from 'three';

export type MissionSceneId = 'apollo11' | 'voyager1' | 'cassini' | 'perseverance' | 'parker' | 'clipper';

interface ScenePreset {
  id: MissionSceneId;
  sunRadius: number;
  nodes: Array<{ position: THREE.Vector3; radius: number; color: number; name: string; ring?: boolean }>;
  route: THREE.Vector3[];
  craftStart: THREE.Vector3;
  craftEnd: THREE.Vector3;
}

const PRESETS: Record<MissionSceneId, Omit<ScenePreset, 'id'>> = {
  apollo11: {
    sunRadius: 1.1,
    nodes: [
      { position: new THREE.Vector3(-8, 0, 0), radius: 0.55, color: 0x4c9ee8, name: 'Земля' },
      { position: new THREE.Vector3(8, 0, 0), radius: 0.26, color: 0xb8b4aa, name: 'Луна' }
    ],
    route: [new THREE.Vector3(-8, 0, 0), new THREE.Vector3(-2, 1.2, 0), new THREE.Vector3(8, 0, 0)],
    craftStart: new THREE.Vector3(-8, 0.7, 0),
    craftEnd: new THREE.Vector3(8, 0.5, 0)
  },
  voyager1: {
    sunRadius: 1.25,
    nodes: [
      { position: new THREE.Vector3(-5, 0, 0), radius: 0.32, color: 0x4c9ee8, name: 'Земля' },
      { position: new THREE.Vector3(0, 0, -2), radius: 1.25, color: 0xd0a878, name: 'Юпитер' },
      { position: new THREE.Vector3(5, 0, 1), radius: 0.95, color: 0xe0c99a, name: 'Сатурн', ring: true }
    ],
    route: [new THREE.Vector3(-5, 0, 0), new THREE.Vector3(-1.7, 0.9, 1.5), new THREE.Vector3(0, 0, -2), new THREE.Vector3(5, 0, 1), new THREE.Vector3(11, 2, 2)],
    craftStart: new THREE.Vector3(-5, 0.65, 0),
    craftEnd: new THREE.Vector3(11, 2, 2)
  },
  cassini: {
    sunRadius: 1.2,
    nodes: [
      { position: new THREE.Vector3(-7, 0, 0), radius: 0.32, color: 0x4c9ee8, name: 'Земля' },
      { position: new THREE.Vector3(-2, 0, 0), radius: 0.42, color: 0xe5c45f, name: 'Венера' },
      { position: new THREE.Vector3(5, 0, 0), radius: 1.05, color: 0xe3d1a0, name: 'Сатурн', ring: true },
      { position: new THREE.Vector3(6.6, -0.9, 0.5), radius: 0.2, color: 0xe8a04c, name: 'Титан' }
    ],
    route: [new THREE.Vector3(-7, 0, 0), new THREE.Vector3(-2, 0, 0), new THREE.Vector3(0, 1.3, 2), new THREE.Vector3(5, 0, 0), new THREE.Vector3(6.6, -0.9, 0.5)],
    craftStart: new THREE.Vector3(-7, 0.7, 0),
    craftEnd: new THREE.Vector3(6.6, -0.4, 0.5)
  },
  perseverance: {
    sunRadius: 1.1,
    nodes: [
      { position: new THREE.Vector3(-7, 0, 0), radius: 0.55, color: 0x4c9ee8, name: 'Земля' },
      { position: new THREE.Vector3(7, 0, 0), radius: 0.38, color: 0xc1440e, name: 'Марс' }
    ],
    route: [new THREE.Vector3(-7, 0, 0), new THREE.Vector3(-2, 1.8, 0), new THREE.Vector3(7, 0, 0)],
    craftStart: new THREE.Vector3(-7, 0.7, 0),
    craftEnd: new THREE.Vector3(7, 0.45, 0)
  },
  parker: {
    sunRadius: 1.65,
    nodes: [
      { position: new THREE.Vector3(-6.5, 0, 0), radius: 0.38, color: 0xe5c45f, name: 'Венера' },
      { position: new THREE.Vector3(7, 0, 0), radius: 0.55, color: 0x4c9ee8, name: 'Земля' }
    ],
    route: [new THREE.Vector3(7, 0, 0), new THREE.Vector3(-1, 1.7, 0), new THREE.Vector3(-6.5, 0.5, 0), new THREE.Vector3(0.3, 0.2, 0)],
    craftStart: new THREE.Vector3(7, 0.7, 0),
    craftEnd: new THREE.Vector3(0.3, 0.22, 0)
  },
  clipper: {
    sunRadius: 1.2,
    nodes: [
      { position: new THREE.Vector3(-7, 0, 0), radius: 0.32, color: 0x4c9ee8, name: 'Земля' },
      { position: new THREE.Vector3(5, 0, -1), radius: 1.18, color: 0xd0a878, name: 'Юпитер' },
      { position: new THREE.Vector3(7, -1, -1), radius: 0.23, color: 0xd8cfc0, name: 'Европа' }
    ],
    route: [new THREE.Vector3(-7, 0, 0), new THREE.Vector3(-2, -1.2, 1.3), new THREE.Vector3(1, 1.2, 2), new THREE.Vector3(5, 0, -1), new THREE.Vector3(7, -1, -1)],
    craftStart: new THREE.Vector3(-7, 0.7, 0),
    craftEnd: new THREE.Vector3(7, -0.5, -1)
  }
};

export class MissionScene {
  readonly group = new THREE.Group();
  private craft = new THREE.Group();
  private route: THREE.Vector3[] = [];
  private start = new THREE.Vector3();
  private end = new THREE.Vector3();
  private elapsed = 0;
  private t = 0;
  private activeId: MissionSceneId | null = null;

  constructor(scene: THREE.Scene) {
    this.group.name = 'Mission3DReconstruction';
    this.group.visible = false;
    scene.add(this.group);
  }

  setMission(id: MissionSceneId): void {
    if (this.activeId === id && this.group.children.length > 0) return;
    this.clear();
    const preset = { ...PRESETS[id], id };
    this.activeId = id;
    this.route = preset.route.map((point) => point.clone());
    this.start.copy(preset.craftStart);
    this.end.copy(preset.craftEnd);
    this.buildScene(preset);
    this.group.visible = true;
  }

  setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  update(dt: number): void {
    if (!this.activeId || !this.group.visible || this.route.length < 2) return;
    this.elapsed += dt;
    this.t = (this.elapsed * 0.07) % 1;
    const point = samplePolyline(this.route, this.t, _point);
    this.craft.position.copy(point);
    const ahead = samplePolyline(this.route, Math.min(1, this.t + 0.015), _ahead);
    this.craft.lookAt(ahead);
    this.craft.rotation.z += dt * 0.55;
    const pulse = 1 + Math.sin(this.elapsed * 5.2) * 0.08;
    const nearEnd = point.distanceTo(this.end) < 0.35;
    this.craft.scale.setScalar(pulse * (nearEnd ? 0.82 : 1));
  }

  dispose(): void {
    this.clear();
    this.group.removeFromParent();
  }

  private buildScene(preset: ScenePreset): void {
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(preset.sunRadius, 32, 20),
      new THREE.MeshBasicMaterial({ color: 0xffbd62 })
    );
    star.name = 'мини-Солнце';
    this.group.add(star);
    const glow = new THREE.PointLight(0xffd6a0, 1.7, 80);
    this.group.add(glow);

    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(preset.route),
      new THREE.LineDashedMaterial({ color: 0x62d7ff, dashSize: 0.3, gapSize: 0.2, transparent: true, opacity: 0.7 })
    );
    line.computeLineDistances();
    this.group.add(line);

    for (const node of preset.nodes) {
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(node.radius, 32, 20),
        new THREE.MeshStandardMaterial({ color: node.color, roughness: 0.75 })
      );
      body.position.copy(node.position);
      this.group.add(body);
      if (node.ring) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(node.radius * 1.3, node.radius * 2.05, 64),
          new THREE.MeshBasicMaterial({ color: 0xd8c79e, transparent: true, opacity: 0.82, side: THREE.DoubleSide })
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.copy(node.position);
        this.group.add(ring);
      }
      const label = makeLabel(node.name);
      label.position.copy(node.position).add(new THREE.Vector3(0, node.radius * 1.5, 0));
      this.group.add(label);
    }

    this.craft = buildCraft(preset.id);
    this.craft.position.copy(this.start);
    this.group.add(this.craft);
    const caption = makeLabel(captionFor(preset.id));
    caption.position.set(0, -4.2, 0);
    this.group.add(caption);
  }

  private clear(): void {
    for (const child of this.group.children) {
      child.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const material = (mesh as unknown as { material?: THREE.Material | THREE.Material[] }).material;
        if (Array.isArray(material)) material.forEach((m) => m.dispose());
        else material?.dispose();
      });
    }
    this.group.clear();
    this.elapsed = 0;
    this.t = 0;
  }
}

function samplePolyline(points: THREE.Vector3[], t: number, out: THREE.Vector3): THREE.Vector3 {
  if (points.length === 1) return out.copy(points[0]);
  const scaled = THREE.MathUtils.clamp(t, 0, 1) * (points.length - 1);
  const index = Math.min(points.length - 2, Math.floor(scaled));
  return out.lerpVectors(points[index], points[index + 1], scaled - index);
}

function makeLabel(text: string): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 80;
  const context = canvas.getContext('2d')!;
  context.font = 'bold 26px sans-serif';
  context.fillStyle = '#dff6ff';
  context.textAlign = 'center';
  context.fillText(text, 256, 45);
  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.scale.set(4.4, 0.7, 1);
  return sprite;
}

function buildCraft(id: MissionSceneId): THREE.Group {
  const craft = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xd6dde8, metalness: 0.65, roughness: 0.32 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x263348, metalness: 0.55, roughness: 0.4 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd8b65c, metalness: 0.82, roughness: 0.3 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.7, 10), bodyMat);
  body.rotation.z = Math.PI / 2;
  craft.add(body);

  if (id === 'apollo11') {
    craft.add(new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.32, 8), goldMat));
  } else if (id === 'perseverance') {
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.22, 0.34), goldMat);
    craft.add(box);
    for (const x of [-0.22, 0.22]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 10), darkMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, -0.16, 0);
      craft.add(wheel);
    }
  } else {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.02, 0.18), new THREE.MeshBasicMaterial({ color: 0x3e8bc0 }));
    panel.position.y = 0.22;
    craft.add(panel);
    const antenna = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.18, 16), darkMat);
    antenna.rotation.x = Math.PI / 2;
    antenna.position.x = -0.24;
    craft.add(antenna);
  }

  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.08, 0.45, 8),
    new THREE.MeshBasicMaterial({ color: 0x6bd7ff, transparent: true, opacity: 0.75 })
  );
  flame.rotation.z = -Math.PI / 2;
  flame.position.x = -0.54;
  craft.add(flame);
  return craft;
}

function captionFor(id: MissionSceneId): string {
  switch (id) {
    case 'apollo11': return 'Аполлон-11 · Земля → Луна';
    case 'voyager1': return 'Вояджер-1 · гравитационный бильярд';
    case 'cassini': return 'Кассини · пращи и Титан';
    case 'perseverance': return 'Perseverance · 7 минут ужаса';
    case 'parker': return 'Parker · тепловой щит в короне';
    case 'clipper': return 'Europa Clipper · радар подо льдом';
  }
}

const _point = new THREE.Vector3();
const _ahead = new THREE.Vector3();
