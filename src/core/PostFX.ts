/**
 * PostFX — Selective Bloom (селективное свечение).
 * Свечение получают только объекты на слое BLOOM_LAYER (1):
 * Солнце, корона, протуберанцы, сияния, огни городов, двигатели.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export const BLOOM_LAYER = 1;

const darkenShader = {
  uniforms: {
    baseTexture: { value: null },
    bloomTexture: { value: null },
    bloomStrength: { value: 1.0 }
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D baseTexture;
    uniform sampler2D bloomTexture;
    uniform float bloomStrength;
    varying vec2 vUv;
    void main() {
      vec4 base = texture2D(baseTexture, vUv);
      vec4 bloom = texture2D(bloomTexture, vUv);
      gl_FragColor = base + bloom * bloomStrength;
    }
  `
};

export class PostFX {
  readonly composer: EffectComposer;
  private bloomComposer: EffectComposer;
  private finalComposer: EffectComposer;
  private bloomPass: UnrealBloomPass;
  private finalPass: ShaderPass;
  private darkMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  private materialsCache = new Map<string, THREE.Material | THREE.Material[]>();
  private bloomLayer = new THREE.Layers();
  enabled = true;

  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    camera: THREE.PerspectiveCamera
  ) {
    this.bloomLayer.set(BLOOM_LAYER);

    const size = renderer.getSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, {
      type: THREE.HalfFloatType,
      samples: 4
    });

    this.composer = new EffectComposer(renderer, rt);
    this.composer.addPass(new RenderPass(scene, camera));

    this.bloomComposer = new EffectComposer(renderer);
    this.bloomComposer.renderToScreen = false;
    this.bloomComposer.addPass(new RenderPass(scene, camera));
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 1.0, 0.62, 0.12);
    this.bloomComposer.addPass(this.bloomPass);

    this.finalComposer = new EffectComposer(renderer);
    this.finalComposer.addPass(new RenderPass(scene, camera));
    this.finalPass = new ShaderPass(
      new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone(darkenShader.uniforms),
        vertexShader: darkenShader.vertexShader,
        fragmentShader: darkenShader.fragmentShader,
        defines: {}
      }),
      'baseTexture'
    );
    this.finalPass.needsSwap = true;
    this.finalComposer.addPass(this.finalPass);
    this.finalComposer.addPass(new OutputPass());

    this.finalPass.material.uniforms['bloomTexture'].value =
      this.bloomComposer.renderTarget2.texture;
  }

  setBloomStrength(v: number): void {
    this.bloomPass.strength = v;
    this.finalPass.material.uniforms['bloomStrength'].value = this.enabled ? 1.0 : 0.0;
  }

  setEnabled(on: boolean): void {
    this.enabled = on;
  }

  setSize(w: number, h: number): void {
    this.composer.setSize(w, h);
    this.bloomComposer.setSize(w, h);
    this.finalComposer.setSize(w, h);
    this.bloomPass.resolution.set(w, h);
  }

  /** Затемнить всё, что не светится (на время bloom-прохода). */
  private darkenNonBloomed(obj: THREE.Object3D): void {
    if ((obj as THREE.Mesh).isMesh && !this.bloomLayer.test(obj.layers)) {
      this.materialsCache.set(obj.uuid, (obj as THREE.Mesh).material);
      (obj as THREE.Mesh).material = this.darkMaterial;
    }
  }

  private restoreMaterial(obj: THREE.Object3D): void {
    const m = this.materialsCache.get(obj.uuid);
    if (m) {
      (obj as THREE.Mesh).material = m;
      this.materialsCache.delete(obj.uuid);
    }
  }

  render(): void {
    if (!this.enabled) {
      this.finalPass.material.uniforms['bloomStrength'].value = 0;
      this.finalComposer.render();
      return;
    }

    const oldBackground = this.scene.background;
    this.scene.traverse((o) => this.darkenNonBloomed(o));
    this.scene.background = null;
    const oldClear = this.renderer.getClearColor(new THREE.Color());
    const oldAlpha = this.renderer.getClearAlpha();
    this.renderer.setClearColor(0x000000, 0);
    this.bloomComposer.render();
    this.renderer.setClearColor(oldClear, oldAlpha);
    this.scene.background = oldBackground;

    this.scene.traverse((o) => this.restoreMaterial(o));
    this.finalPass.material.uniforms['bloomStrength'].value = 1;
    this.finalComposer.render();
  }
}
