import { useCallback, useRef, useState } from 'react';

export default function useSound() {
  const [soundOn, setSoundOn] = useState(false);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);

  const ensureAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.0001;
    masterGain.connect(ctx.destination);
    audioCtxRef.current = ctx;
    masterGainRef.current = masterGain;
  }, []);

  const tick = useCallback(() => {
    const audioCtx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    if (!soundOn || !audioCtx || !masterGain) return;

    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'sine';
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.06, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.09);
    o.connect(g);
    g.connect(masterGain);
    o.start();
    o.stop(audioCtx.currentTime + 0.1);
  }, [soundOn]);

  const whoosh = useCallback(() => {
    const audioCtx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    if (!soundOn || !audioCtx || !masterGain) return;

    const bufferSize = audioCtx.sampleRate * 0.3;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const src = audioCtx.createBufferSource();
    src.buffer = buffer;
    const filt = audioCtx.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.value = 900;
    const g = audioCtx.createGain();
    g.gain.value = 0.05;
    src.connect(filt);
    filt.connect(g);
    g.connect(masterGain);
    src.start();
  }, [soundOn]);

  const toggleSound = useCallback(async () => {
    ensureAudio();
    const audioCtx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    if (audioCtx?.state === 'suspended') {
      await audioCtx.resume();
    }

    setSoundOn((prev) => {
      const next = !prev;
      if (masterGain) {
        masterGain.gain.setTargetAtTime(next ? 0.9 : 0.0001, audioCtx.currentTime, 0.05);
      }
      return next;
    });
  }, [ensureAudio]);

  return { soundOn, toggleSound, tick, whoosh, ensureAudio };
}
