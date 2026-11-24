let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playTone(
  freq: number,
  duration = 0.14,
  type: OscillatorType = 'triangle',
  volume = 0.08,
  delay = 0,
): void {
  try {
    const ctx = getCtx();
    if (!ctx) return;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  } catch {
    // Ignore audio context errors when blocked
  }
}

export function playCollectChime(enabled: boolean): void {
  if (!enabled) return;
  playTone(523.25, 0.12, 'triangle', 0.09, 0);
  playTone(659.25, 0.14, 'triangle', 0.09, 0.07);
  playTone(783.99, 0.22, 'sine', 0.1, 0.14);
}

export function playSelectClick(enabled: boolean): void {
  if (!enabled) return;
  playTone(440, 0.07, 'sine', 0.05, 0);
}

export function playVictoryFanfare(enabled: boolean): void {
  if (!enabled) return;
  playTone(523.25, 0.12, 'triangle', 0.09, 0);
  playTone(659.25, 0.12, 'triangle', 0.09, 0.09);
  playTone(783.99, 0.12, 'triangle', 0.09, 0.18);
  playTone(1046.5, 0.35, 'triangle', 0.11, 0.27);
}
