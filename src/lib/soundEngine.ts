// Web Audio API Sound Synthesizer for Buddhist Temple
// No external MP3 files needed - 100% offline, crystal clear and realistic!

class TempleSoundEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Tiếng Chuông Đại Hồng Chung (Ngân vang sâu thẳm)
  playBell(pitch = 220) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.8, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 6.0);
    masterGain.connect(this.ctx.destination);

    // Chuông gồm nhiều bồi âm (Harmonics of a Buddhist Temple Bell)
    const partials = [
      { freqRatio: 1.0, gain: 0.7, decay: 6.0 },
      { freqRatio: 1.21, gain: 0.5, decay: 4.8 },
      { freqRatio: 1.48, gain: 0.4, decay: 3.5 },
      { freqRatio: 2.02, gain: 0.35, decay: 2.8 },
      { freqRatio: 2.76, gain: 0.25, decay: 2.0 },
      { freqRatio: 4.12, gain: 0.15, decay: 1.2 },
    ];

    partials.forEach((p) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const pGain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch * p.freqRatio, now);

      pGain.gain.setValueAtTime(p.gain, now);
      pGain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

      osc.connect(pGain);
      pGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + p.decay);
    });

    // Thêm tiếng chạm dùi chuông (Bell strike thud)
    const strikeOsc = this.ctx.createOscillator();
    const strikeGain = this.ctx.createGain();
    strikeOsc.type = "triangle";
    strikeOsc.frequency.setValueAtTime(110, now);
    strikeGain.gain.setValueAtTime(0.4, now);
    strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    strikeOsc.connect(strikeGain);
    strikeGain.connect(masterGain);
    strikeOsc.start(now);
    strikeOsc.stop(now + 0.16);
  }

  // Tiếng Mõ Tụng Kinh (Gõ mõ gỗ giòn trầm)
  playMo() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "triangle";
    // Mõ gỗ thường có tần số trầm ấm tụng kinh
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(580, now);
    filter.Q.setValueAtTime(4, now);

    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);

    // Sub-click gỗ gõ
    const click = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    click.type = "square";
    click.frequency.setValueAtTime(1200, now);
    clickGain.gain.setValueAtTime(0.2, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    click.connect(clickGain);
    clickGain.connect(this.ctx.destination);
    click.start(now);
    click.stop(now + 0.04);
  }

  // Tiếng Khánh / Chuông Gia Trì (Thanh tao, bái lễ)
  playChantBell() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now); // nốt A5 thanh tao

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 3.3);
  }

  // Tiếng Hạt Tràng Chạm Nhẹ (Lần chuỗi niệm Phật)
  playBeadClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(750 + Math.random() * 80, now);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Tiếng Chuông Gió Phong Linh Thơ Mộng (Thả hoa đăng / cầu duyên)
  playWindChime() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [1046.5, 1174.66, 1318.51, 1567.98, 1760.0]; // C6, D6, E6, G6, A6 (Ngũ cung)
    const note = notes[Math.floor(Math.random() * notes.length)];
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(note, now);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 2.5);
  }

  // Tiếng Lắc Ống Xăm (Thẻ tre va vào nhau cọc cạch)
  playShakeTube() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(280 + Math.random() * 120, now);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // Tiếng Quẻ Rơi (Thẻ tre rơi trúng bệ)
  playFortuneDrop() {
    this.playShakeTube();
    setTimeout(() => {
      this.playChantBell();
    }, 150);
  }

  // Bật / Tắt Âm Thanh
  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

export const sound = new TempleSoundEngine();

