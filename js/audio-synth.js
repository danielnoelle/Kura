/**
 * KURA (蔵) — Native Web Audio Kiln Frequency Synthesizer
 * Generates an organic, subtle ambient warmth of 72-hour pine embers
 * and acoustic tactile clicks for artifact tray interactions.
 * Zero external audio files required.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.KilnAudio = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  let audioCtx = null;
  let masterGain = null;
  let isPlaying = false;
  let noiseNode = null;
  let droneOsc = null;
  let crackleInterval = null;

  const isSupported = () => {
    return typeof window !== 'undefined' && (Boolean(window.AudioContext) || Boolean(window.webkitAudioContext));
  };

  const getOrCreateContext = () => {
    if (!isSupported()) return null;
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.06, audioCtx.currentTime); // gentle warmth
      masterGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  };

  const startSynthesis = () => {
    stopSynthesis(); // defensively clear prior nodes and intervals
    const ctx = getOrCreateContext();
    if (!ctx) return;

    // 1. Low-frequency warm resonant drone (55Hz / A1)
    droneOsc = ctx.createOscillator();
    droneOsc.type = 'triangle';
    droneOsc.frequency.setValueAtTime(55, ctx.currentTime);

    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(140, ctx.currentTime);

    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.04, ctx.currentTime);

    droneOsc.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(masterGain);
    droneOsc.start();

    // 2. Soft continuous air draught noise
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.08;
    }

    noiseNode = ctx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(320, ctx.currentTime);
    noiseFilter.Q.setValueAtTime(1.5, ctx.currentTime);

    noiseNode.connect(noiseFilter);
    noiseFilter.connect(masterGain);
    noiseNode.start();

    // 3. Periodic subtle ember pops (random micro-clicks)
    crackleInterval = setInterval(() => {
      if (!isPlaying || !ctx || ctx.state !== 'running') return;
      if (Math.random() > 0.4) {
        const popOsc = ctx.createOscillator();
        const popGain = ctx.createGain();
        popOsc.type = 'sine';
        popOsc.frequency.setValueAtTime(600 + Math.random() * 800, ctx.currentTime);
        popGain.gain.setValueAtTime(0.025, ctx.currentTime);
        popGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

        popOsc.connect(popGain);
        popGain.connect(masterGain);
        popOsc.start();
        popOsc.stop(ctx.currentTime + 0.04);
      }
    }, 280);
  };

  const stopSynthesis = () => {
    if (crackleInterval) {
      clearInterval(crackleInterval);
      crackleInterval = null;
    }
    if (droneOsc) {
      try { droneOsc.stop(); } catch (e) {}
      droneOsc = null;
    }
    if (noiseNode) {
      try { noiseNode.stop(); } catch (e) {}
      noiseNode = null;
    }
  };

  const playArtifactClick = () => {
    if (!isSupported()) return;
    try {
      const ctx = getOrCreateContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch (e) {
      // safe fallback
    }
  };

  const toggle = (forceState) => {
    const nextState = forceState !== undefined ? Boolean(forceState) : !isPlaying;
    if (nextState === isPlaying) {
      return getState();
    }
    isPlaying = nextState;

    if (isPlaying) {
      startSynthesis();
    } else {
      stopSynthesis();
    }

    return getState();
  };

  const getState = () => {
    return {
      isPlaying,
      isSupported: isSupported()
    };
  };

  return {
    toggle,
    playArtifactClick,
    getState,
    isSupported
  };
});
