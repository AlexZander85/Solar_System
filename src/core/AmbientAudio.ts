/**
 * AmbientAudio — процедурный «звук космоса» на WebAudio (без ассетов):
 * глубокий дрон, медленные волны и редкие «звёздные» всплески.
 */
export class AmbientAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private nodes: AudioNode[] = [];
  private playing = false;
  private timer: number | null = null;

  get isPlaying(): boolean {
    return this.playing;
  }

  async toggle(): Promise<boolean> {
    if (this.playing) this.stop();
    else await this.start();
    return this.playing;
  }

  async start(): Promise<void> {
    if (this.playing) return;
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new Ctx();
    await this.ctx.resume();

    this.master = this.ctx.createGain();
    this.master.gain.value = 0.0;
    this.master.connect(this.ctx.destination);
    this.master.gain.linearRampToValueAtTime(0.11, this.ctx.currentTime + 3);

    // Низкий дрон
    for (const [freq, gain] of [[46, 0.5], [69, 0.22], [92, 0.14], [138, 0.07]] as Array<[number, number]>) {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const g = this.ctx.createGain();
      g.gain.value = gain;
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 0.03 + Math.random() * 0.07;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = gain * 0.45;
      lfo.connect(lfoGain).connect(g.gain);
      osc.connect(g).connect(this.master);
      osc.start();
      lfo.start();
      this.nodes.push(osc, lfo, g, lfoGain);
    }

    // Фильтрованный «космический ветер»
    const noiseBuf = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuf;
    noise.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 240;
    filter.Q.value = 0.6;
    const ng = this.ctx.createGain();
    ng.gain.value = 0.05;
    noise.connect(filter).connect(ng).connect(this.master);
    noise.start();
    this.nodes.push(noise, filter, ng);

    // Редкие «звёздные» всплески
    this.timer = window.setInterval(() => {
      if (!this.ctx || !this.master || !this.playing) return;
      if (Math.random() > 0.55) return;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      const base = 320 + Math.random() * 720;
      osc.frequency.value = base;
      osc.frequency.exponentialRampToValueAtTime(base * 0.55, this.ctx.currentTime + 1.6);
      const g = this.ctx.createGain();
      g.gain.value = 0;
      g.gain.linearRampToValueAtTime(0.028, this.ctx.currentTime + 0.4);
      g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.2);
      osc.connect(g).connect(this.master);
      osc.start();
      osc.stop(this.ctx.currentTime + 2.3);
    }, 4200);

    this.playing = true;
  }

  stop(): void {
    if (!this.playing) return;
    this.playing = false;
    if (this.timer !== null) window.clearInterval(this.timer);
    this.timer = null;
    if (this.master && this.ctx) {
      this.master.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.1);
      const ctx = this.ctx;
      const nodes = this.nodes;
      window.setTimeout(() => {
        for (const n of nodes) {
          const src = n as OscillatorNode & AudioBufferSourceNode;
          try {
            src.stop?.();
          } catch {
            /* уже остановлен */
          }
          n.disconnect();
        }
        void ctx.close();
      }, 1300);
    }
    this.nodes = [];
    this.ctx = null;
    this.master = null;
  }
}
