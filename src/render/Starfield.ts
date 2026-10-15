/**
 * Starfield — процедурное звёздное небо, следующее за камерой.
 * Количество звёзд зависит от профиля качества.
 */
import * as THREE from 'three';

export class Starfield {
  readonly group = new THREE.Group();
  private points: THREE.Points | null = null;
  private count: number;

  constructor(count = 4200) {
    this.count = count;
    this.build();
    this.group.name = 'Starfield';
  }

  private build(): void {
    const positions = new Float32Array(this.count * 3);
    const colors = new Float32Array(this.count * 3);
    const sizes = new Float32Array(this.count);
    const color = new THREE.Color();
    for (let i = 0; i < this.count; i++) {
      // Равномерно на сфере
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      const r = 9000;
      positions[i * 3] = s * Math.cos(theta) * r;
      positions[i * 3 + 1] = u * r;
      positions[i * 3 + 2] = s * Math.sin(theta) * r;

      // Температура звезды: от голубых к красным
      const t = Math.random();
      if (t > 0.92) color.setHSL(0.6, 0.7, 0.78); // голубые гиганты
      else if (t > 0.7) color.setHSL(0.12, 0.45, 0.86); // жёлтые
      else if (t > 0.4) color.setHSL(0.08, 0.35, 0.82); // оранжевые
      else color.setHSL(0.02, 0.25, 0.9); // красные/белые
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      sizes[i] = Math.random() < 0.06 ? 3.4 + Math.random() * 2.4 : 1.1 + Math.random() * 1.6;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 2.2,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.group.add(this.points);
    this.group.add(this.makeMilkyWay());
  }

  /** Туманность Млечного Пути — мягкая полоса. */
  private makeMilkyWay(): THREE.Mesh {
    const geo = new THREE.SphereGeometry(9200, 32, 24);
    const mat = new THREE.MeshBasicMaterial({
      map: milkyWayTexture(),
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.42,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.z = 0.6;
    return mesh;
  }

  setStarCount(count: number): void {
    if (count === this.count) return;
    this.count = count;
    if (this.points) {
      this.group.remove(this.points);
      this.points.geometry.dispose();
      (this.points.material as THREE.Material).dispose();
    }
    this.build();
  }

  /** Держать небо в позиции камеры (вращение остаётся мировым). */
  follow(cameraPos: THREE.Vector3): void {
    this.group.position.copy(cameraPos);
  }
}

function milkyWayTexture(): THREE.CanvasTexture {
  const w = 512;
  const h = 256;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, w, h);
  // Полоса Млечного Пути
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * w;
    const y = h * 0.5 + (Math.random() - 0.5) * h * 0.24 + Math.sin((x / w) * Math.PI * 2) * h * 0.06;
    const r = 24 + Math.random() * 80;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const a = 0.028 + Math.random() * 0.05;
    g.addColorStop(0, `rgba(160, 180, 255, ${a})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // Пылевые тёмные тени
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * w;
    const y = h * 0.5 + (Math.random() - 0.5) * h * 0.18;
    const r = 18 + Math.random() * 46;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(0,0,0,0.16)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
