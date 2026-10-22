// Ribbit Quest music: small looping tunes composed on the fly with Web Audio.
// Each world gets a soft, slow theme; battles and bosses are faster and busier, but still quiet.
(() => {
  "use strict";

  const SCALES = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixo: [0, 2, 4, 5, 7, 9, 10]
  };

  // prog: chord per bar, as scale degrees (0 = I). rest: how sparse the melody is. swing: lilt on off-beats.
  const TRACKS = {
    hub: { bpm: 84, meter: 4, key: 72, scale: "major", prog: [0, 5, 3, 4, 0, 5, 3, 4], lead: "bell", bass: "soft", drums: "", pad: true, rest: 0.35, swing: 0.14, cutoff: 3000, vol: 0.8, seed: 3 },
    ethics: { bpm: 76, meter: 4, key: 77, scale: "major", prog: [3, 0, 1, 4, 3, 0, 5, 4], lead: "bell", bass: "soft", drums: "", pad: true, rest: 0.45, swing: 0.12, cutoff: 2800, vol: 0.8, seed: 11 },
    assess: { bpm: 80, meter: 4, key: 69, scale: "dorian", prog: [0, 3, 0, 6, 0, 3, 5, 4], lead: "pluck", bass: "soft", drums: "", pad: true, rest: 0.4, swing: 0.1, cutoff: 2800, vol: 0.85, seed: 19 },
    interv: { bpm: 96, meter: 4, key: 67, scale: "major", prog: [0, 4, 5, 3, 0, 4, 3, 4], lead: "pluck", bass: "walk", drums: "shaker", pad: false, rest: 0.3, swing: 0.16, cutoff: 3200, vol: 0.8, seed: 23 },
    human: { bpm: 72, meter: 3, key: 74, scale: "lydian", prog: [0, 1, 0, 4, 0, 1, 5, 4], lead: "flute", bass: "soft", drums: "", pad: true, rest: 0.35, swing: 0, cutoff: 2700, vol: 0.62, seed: 31 },
    isle: { bpm: 88, meter: 4, key: 75, scale: "mixo", prog: [0, 6, 3, 0, 0, 6, 3, 4], lead: "pluck", bass: "walk", drums: "shaker", pad: true, rest: 0.35, swing: 0.15, cutoff: 3000, vol: 0.8, seed: 41 },
    battle: { bpm: 126, meter: 4, key: 69, scale: "minor", prog: [0, 5, 2, 6, 0, 5, 3, 4], lead: "pluck", bass: "drive", drums: "battle", pad: false, rest: 0.22, swing: 0, cutoff: 4000, vol: 0.95, seed: 53 },
    boss: { bpm: 138, meter: 4, key: 62, scale: "minor", prog: [0, 0, 5, 5, 3, 3, 4, 4], lead: "square", bass: "drive", drums: "boss", pad: true, rest: 0.15, swing: 0, cutoff: 4400, vol: 1, seed: 67 }
  };
  const VOL = 0.55;

  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  // Turn a track description into a list of events per eighth-note step (one loop of 8 bars).
  function compose(t) {
    const rand = rng(t.seed), sc = SCALES[t.scale], spb = t.meter * 2, bars = t.prog.length, total = bars * spb;
    const pitch = (deg, base) => base + 12 * Math.floor(deg / 7) + sc[((deg % 7) + 7) % 7];
    const steps = Array.from({ length: total }, () => []);

    // Melody: two rhythms, used for alternating 2-bar phrases, so the tune repeats with variation.
    const rhythms = [0, 1].map(() => {
      const r = [];
      for (let s = 0; s < spb * 2; s++) r.push(s === 0 || rand() < (s % 2 ? 0.42 - t.rest * 0.4 : 0.95 - t.rest));
      return r;
    });
    const mel = [];
    let prev = 2;
    for (let b = 0; b < bars; b += 2) {
      const rh = rhythms[(b / 2) % 2];
      for (let s = 0; s < spb * 2; s++) {
        const bar = b + Math.floor(s / spb);
        if (!rh[s] || bar >= bars) continue;
        const c = t.prog[bar], tones = [c % 7, (c + 2) % 7, (c + 4) % 7];
        let deg;
        if (s % 2 === 0) {
          // strong beats land on a chord tone near the last note, and usually move
          const cands = [];
          for (let k = -2; k <= 7; k++) if (tones.includes(((k % 7) + 7) % 7)) cands.push(k);
          cands.sort((x, y) => Math.abs(x - prev) - Math.abs(y - prev) || rand() - 0.5);
          deg = cands[0] === prev && cands[1] !== undefined && rand() < 0.65 ? cands[1] : cands[0];
        } else deg = Math.max(-2, Math.min(7, prev + (rand() < 0.5 ? -1 : 1)));
        mel.push({ at: bar * spb + (s % spb), deg });
        prev = deg;
      }
    }
    if (mel.length) mel[mel.length - 1].deg = 0;
    mel.forEach((n, i) => {
      const next = i + 1 < mel.length ? mel[i + 1].at : total;
      steps[n.at].push({ v: "lead", lead: t.lead, f: hz(pitch(n.deg, t.key)), len: Math.max(1, Math.min(4, next - n.at)) });
    });

    for (let bar = 0; bar < bars; bar++) {
      const c = t.prog[bar], at = bar * spb, low = t.key - 24;
      const root = hz(pitch(c, low)), third = hz(pitch(c + 2, low)), fifth = hz(pitch(c + 4, low));
      if (t.bass === "soft") {
        steps[at].push({ v: "bass", f: root, len: t.meter === 3 ? 4 : 3 });
        steps[at + (t.meter === 3 ? 4 : 4)].push({ v: "bass", f: fifth, len: 2 });
      } else if (t.bass === "walk") {
        [root, third, fifth, third, root, fifth].slice(0, t.meter).forEach((f, k) => steps[at + k * 2].push({ v: "bass", f, len: 2 }));
      } else if (t.bass === "drive") {
        for (let s = 0; s < spb; s++) steps[at + s].push({ v: "bass", f: s % 2 ? root * 2 : root, len: 1 });
      }
      if (t.pad) steps[at].push({ v: "pad", fs: [c, c + 2, c + 4].map(d => hz(pitch(d, t.key - 12))), len: spb });
      for (let s = 0; s < spb; s++) {
        if (t.drums === "shaker" && s % 2) steps[at + s].push({ v: "shaker" });
        if (t.drums === "battle") {
          steps[at + s].push({ v: "hat", accent: s % 2 === 1 });
          if (s === 0 || s === 4) steps[at + s].push({ v: "kick" });
        }
        if (t.drums === "boss") {
          steps[at + s].push({ v: "hat", accent: s % 2 === 1 });
          if (s % 2 === 0) steps[at + s].push({ v: "kick" });
          if (s === 2 || s === 6) steps[at + s].push({ v: "snare" });
        }
      }
    }
    return { steps, total, stepDur: 60 / t.bpm / 2 };
  }

  // ---------- instruments ----------
  function env(g, time, peak, attack, hold, release) {
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(peak, time + attack);
    g.gain.setValueAtTime(peak, time + attack + hold);
    g.gain.exponentialRampToValueAtTime(0.0001, time + attack + hold + release);
    return time + attack + hold + release;
  }
  function tone(c, dest, type, f, time, peak, attack, hold, release) {
    const o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.value = f;
    o.connect(g).connect(dest);
    o.start(time);
    o.stop(env(g, time, peak, attack, hold, release) + 0.02);
  }
  function noiseHit(c, dest, noise, time, kind, freq, peak, decay) {
    const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = noise;
    f.type = kind;
    f.frequency.value = freq;
    s.connect(f).connect(g).connect(dest);
    env(g, time, peak, 0.002, 0, decay);
    s.start(time, Math.random() * 0.5);
    s.stop(time + decay + 0.05);
  }

  function playEvent(c, dest, noise, ev, time, sd) {
    const dur = (ev.len || 1) * sd;
    switch (ev.v) {
      case "lead":
        if (ev.lead === "bell") {
          tone(c, dest, "sine", ev.f, time, 0.11, 0.004, 0, Math.max(0.5, dur * 1.6));
          tone(c, dest, "sine", ev.f * 2, time, 0.025, 0.004, 0, 0.35);
        } else if (ev.lead === "pluck") tone(c, dest, "triangle", ev.f, time, 0.1, 0.004, 0, 0.25 + dur * 0.6);
        else if (ev.lead === "flute") tone(c, dest, "sine", ev.f, time, 0.085, 0.06, dur * 0.7, 0.25);
        else tone(c, dest, "square", ev.f, time, 0.03, 0.008, dur * 0.5, 0.12);
        break;
      case "bass":
        tone(c, dest, "triangle", ev.f, time, 0.13, 0.01, dur * 0.6, 0.2);
        break;
      case "pad":
        for (const f of ev.fs) tone(c, dest, "sine", f, time, 0.022, 0.5, Math.max(0.1, dur - 1), 0.9);
        break;
      case "shaker":
        noiseHit(c, dest, noise, time, "highpass", 6000, 0.012, 0.06);
        break;
      case "hat":
        noiseHit(c, dest, noise, time, "highpass", 8000, ev.accent ? 0.022 : 0.012, 0.04);
        break;
      case "snare":
        noiseHit(c, dest, noise, time, "bandpass", 1800, 0.035, 0.12);
        break;
      case "kick": {
        const o = c.createOscillator(), g = c.createGain();
        o.frequency.setValueAtTime(130, time);
        o.frequency.exponentialRampToValueAtTime(45, time + 0.12);
        o.connect(g).connect(dest);
        o.start(time);
        o.stop(env(g, time, 0.2, 0.003, 0, 0.16) + 0.02);
        break;
      }
      default:
    }
  }

  // ---------- mixing ----------
  function makeOut(c) {
    const master = c.createGain(), soften = c.createBiquadFilter();
    soften.type = "lowpass";
    soften.frequency.value = 6000;
    soften.connect(master).connect(c.destination);
    const noise = c.createBuffer(1, c.sampleRate, c.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return { master, input: soften, noise };
  }
  function trackBus(c, t, input) {
    const bus = c.createGain(), lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = t.cutoff;
    lp.Q.value = 0.4;
    bus.connect(lp).connect(input);
    return bus;
  }
  const swingAt = (t, step, sd) => (step % 2 ? t.swing * sd : 0);

  const tunes = {};
  const tune = name => tunes[name] || (tunes[name] = compose(TRACKS[name]));

  let ctx = null, out = null, cur = null, wanted = null, enabled = true, timer = 0, level = 0.7;
  // Slider 0..1; 0.7 is the mix the levels were measured at. Squared, so the slider feels even to the ear.
  const gainFor = v => VOL * Math.pow(v / 0.7, 2);

  function start(name) {
    const t = TRACKS[name];
    if (!t || !ctx) return;
    const now = ctx.currentTime;
    if (cur) {
      const old = cur.bus;
      old.gain.cancelScheduledValues(now);
      old.gain.setValueAtTime(old.gain.value, now);
      old.gain.linearRampToValueAtTime(0.0001, now + 0.8);
      setTimeout(() => old.disconnect(), 3000);
    }
    const bus = trackBus(ctx, t, out.input);
    bus.gain.setValueAtTime(0.0001, now);
    bus.gain.linearRampToValueAtTime(t.vol, now + 1.2);
    cur = { name, t, tune: tune(name), bus, step: 0, next: now + 0.15 };
  }

  function tick() {
    if (!ctx || !cur || ctx.state !== "running") return;
    const now = ctx.currentTime;
    if (cur.next < now - 0.3) cur.next = now + 0.05;   // fell behind (tab was asleep): skip ahead quietly
    const sd = cur.tune.stepDur;
    while (cur.next < now + 0.15) {
      for (const ev of cur.tune.steps[cur.step]) playEvent(ctx, cur.bus, out.noise, ev, cur.next + swingAt(cur.t, cur.step, sd), sd);
      cur.next += sd;
      cur.step = (cur.step + 1) % cur.tune.total;
    }
  }

  // Must be called from a tap or key press: browsers only allow sound after one.
  function unlock() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
      out = makeOut(ctx);
      out.master.gain.value = enabled ? gainFor(level) : 0;
      timer = setInterval(tick, 40);
    }
    if (ctx.state === "suspended" && !document.hidden) ctx.resume();
    if (enabled && wanted && !cur) start(wanted);
  }

  function play(name) {
    wanted = name;
    if (!ctx || !enabled || (cur && cur.name === name)) return;
    start(name);
  }

  function setVolume(v) {
    level = Math.max(0, Math.min(1, Number(v) || 0));
    enabled = level > 0.001;
    if (!ctx) return;
    const now = ctx.currentTime, g = out.master.gain;
    g.cancelScheduledValues(now);
    g.setValueAtTime(Math.max(0.0001, g.value), now);
    g.linearRampToValueAtTime(enabled ? gainFor(level) : 0.0001, now + 0.15);
    if (enabled) { if (!cur || cur.name !== wanted) start(wanted); }
    else setTimeout(() => { if (!enabled && cur) { cur.bus.disconnect(); cur = null; } }, 600);
  }

  document.addEventListener("visibilitychange", () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend();
    else if (enabled) ctx.resume();
  });

  // Renders a few seconds of a track offline and reports its level, for checking the mix.
  async function measure(name, seconds) {
    const t = TRACKS[name], tn = tune(name), sr = 22050, len = seconds || 12;
    const oc = new OfflineAudioContext(1, Math.ceil(sr * len), sr);
    const o = makeOut(oc);
    o.master.gain.value = VOL;
    const bus = trackBus(oc, t, o.input);
    bus.gain.value = t.vol;
    for (let time = 0.05, step = 0; time < len; time += tn.stepDur, step = (step + 1) % tn.total)
      for (const ev of tn.steps[step]) playEvent(oc, bus, o.noise, ev, time + swingAt(t, step, tn.stepDur), tn.stepDur);
    const data = (await oc.startRendering()).getChannelData(0);
    let peak = 0, sum = 0;
    for (const v of data) { peak = Math.max(peak, Math.abs(v)); sum += v * v; }
    return { peak: +peak.toFixed(3), rms: +Math.sqrt(sum / data.length).toFixed(4) };
  }

  window.RQ_MUSIC = {
    unlock, play, setVolume, measure,
    get now() { return { track: cur && cur.name, wanted, enabled, level, gain: ctx ? +out.master.gain.value.toFixed(3) : null, state: ctx && ctx.state }; },
    tracks: Object.keys(TRACKS)
  };
})();
