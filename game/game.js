// Ribbit Quest: a cozy top-down adventure where answering ASWB-style questions wins battles and opens the way.
(() => {
  "use strict";

  const Q = window.RIBBIT_Q || [];
  const MAPS = window.RQ_MAPS;
  const ART = window.RQ_ART;
  const MUSIC = window.RQ_MUSIC || { play() {}, unlock() {}, setVolume() {} };
  const BY_ID = {};
  Q.forEach(q => { BY_ID[q.id] = q; });

  const CATS = {
    ethics: { name: "Values & Ethics", c: "lotus", world: "Lotus Lagoon" },
    assess: { name: "Assessment & Planning", c: "pond", world: "Lookout Lake" },
    interv: { name: "Intervention & Practice", c: "leaf", world: "Helping Grove" },
    human: { name: "Human Development & Diversity", c: "grape", world: "Lifespan Meadow" }
  };
  const FOES = { blob: "Boundary Blob", slug: "Assumption Slug", beetle: "Quick-Fix Beetle", moth: "Myth Moth" };
  const FOE_OF = { ethics: ["blob"], assess: ["slug"], interv: ["beetle"], human: ["moth"], isle: ["blob", "slug", "beetle", "moth"] };
  const BOSSES = {
    crab: { name: "Boundary Crab", hp: 5, cat: "ethics",
      hello: ["Pinch pinch! Boundaries? Never heard of 'em!", "Let's see if you know where the lines are."],
      bye: ["Okay, okay! Boundaries matter.", "Take this Golden Lily. You earned it."] },
    turtle: { name: "Snap Judgment Turtle", hp: 5, cat: "assess",
      hello: ["Snap! I decide in a second. Who needs an assessment?", "Prove me wrong, frog."],
      bye: ["Fine. Next time I'll gather more information first.", "Here's your Golden Lily."] },
    fox: { name: "Quick-Fix Fox", hp: 5, cat: "interv",
      hello: ["Why explore feelings when I can fix everything right now?", "Show me a better way, if you can."],
      bye: ["Maybe starting where the client is works better.", "The Golden Lily is yours."] },
    caterpillar: { name: "Skipper the Caterpillar", hp: 5, cat: "human",
      hello: ["Stages? I'm skipping straight to butterfly!", "Unless you can teach me something..."],
      bye: ["Maybe I'll grow one stage at a time.", "Here, a Golden Lily for you!"] },
    toad: { name: "The Great Exam Toad", hp: 8, cat: null,
      hello: ["RIBBIT. I am the Great Exam Toad.", "Four Golden Lilies. Impressive. Now show me everything you've learned!"],
      bye: ["Ribbit... You are ready, Gabi.", "Go show Friday what a well-studied frog can do."] }
  };
  const RULES = [
    "Read the question line first. FIRST, NEXT, BEST and MOST change the answer.",
    "Safety first. A risk to someone's life or safety beats everything else.",
    "Assess before you act, unless someone is in danger right now.",
    "Start where the client is: their words, their priorities, their pace.",
    "Clients decide unless there's serious, foreseeable, imminent harm.",
    "Pick the least restrictive option that still keeps people safe.",
    "Sudden change? Rule out medical causes first.",
    "Colleague problem? Talk to them first, then go up the chain.",
    "Answer for the ideal agency, not the one you've worked in.",
    "Two answers look right? Pick the one that has to happen first."
  ];
  const NEWT_HELLO = [
    "Gabi! There you are.",
    "The Great Exam Toad wakes on Friday, and only a frog with all four Golden Lilies can face him.",
    "Each world tests one part of the exam. Win battles and solve puzzles by answering questions.",
    "A wrong answer costs a heart, but you always see why. That's the real treasure.",
    "Tap where you want to go, and tap things to talk or use them.",
    "Springs heal you and save your spot. Off you hop!"
  ];

  const $ = id => document.getElementById(id);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  // Wire a control if the page has it; a page/script mismatch then can't stop the whole game from loading.
  const on = (id, type, fn, opts) => { const el = $(id); if (el) el.addEventListener(type, fn, opts); };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  };

  // ---------- saved game ----------
  const KEY = "ribbit-quest-v1";
  const PRACTICE_KEY = "gabi-ribbit-review-v1";
  let G = null;
  let started = false;
  let lastSave = 0;

  function fresh() {
    const [x, y] = MAPS.hub.start;
    return {
      v: 1, map: "hub", x, y, face: "down", hearts: 3, level: 1, xp: 0, flies: 5,
      items: { snack: 1, tea: 1 }, lilies: {}, bosses: {}, puzzles: {}, chests: {}, qs: {}, met: {},
      check: { map: "hub", x, y }, musicVol: 0.7, sfxVol: 0.8, stats: { answered: 0, right: 0, won: false }
    };
  }
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "null");
      if (s && s.v === 1 && MAPS[s.map]) {
        const g = Object.assign(fresh(), s);
        // older saves had on/off switches instead of volume levels
        if (s.musicVol == null && s.music === false) g.musicVol = 0;
        if (s.sfxVol == null && s.sound === false) g.sfxVol = 0;
        delete g.music;
        delete g.sound;
        return g;
      }
    } catch (e) { /* storage blocked: start fresh */ }
    return null;
  }
  function save(soft) {
    if (!started) return;
    const now = performance.now();
    if (soft && now - lastSave < 2000) return;
    lastSave = now;
    try { localStorage.setItem(KEY, JSON.stringify(G)); } catch (e) { /* not saved this time */ }
  }

  // Practice mode keeps its own "missed" list; both modes share it.
  function importPractice() {
    try {
      const raw = JSON.parse(localStorage.getItem(PRACTICE_KEY) || "null");
      (raw && Array.isArray(raw.missed) ? raw.missed : []).forEach(id => {
        if (!BY_ID[id]) return;
        if (G.qs[id]) G.qs[id].last = 0;
        else G.qs[id] = { n: 0, r: 0, last: 0 };
      });
    } catch (e) { /* nothing to import */ }
  }
  function record(q, ok) {
    const s = G.qs[q.id] || (G.qs[q.id] = { n: 0, r: 0, last: 0 });
    s.n++;
    if (ok) s.r++;
    s.last = ok ? 1 : 0;
    G.stats.answered++;
    if (ok) G.stats.right++;
    try {
      const raw = JSON.parse(localStorage.getItem(PRACTICE_KEY) || "null") || { best: {}, missed: [], session: null };
      const missed = new Set(Array.isArray(raw.missed) ? raw.missed : []);
      if (ok) missed.delete(q.id); else missed.add(q.id);
      raw.missed = Array.from(missed);
      localStorage.setItem(PRACTICE_KEY, JSON.stringify(raw));
    } catch (e) { /* practice mode just won't see this answer */ }
  }

  const maxHearts = () => Math.min(8, 3 + Math.floor((G.level - 1) / 2));
  const needXP = lv => 30 + lv * 15;
  const lilyCount = () => Object.keys(CATS).filter(k => G.lilies[k]).length;
  const mastered = cat => Q.filter(q => (!cat || q.cat === cat) && G.qs[q.id] && G.qs[q.id].last === 1).length;

  function gainXP(n) {
    G.xp += n;
    let up = false;
    while (G.xp >= needXP(G.level)) {
      G.xp -= needXP(G.level);
      G.level++;
      up = true;
    }
    if (up) {
      G.hearts = maxHearts();
      sfx("level");
      toast(`Level up! You're level ${G.level}.`);
    }
    hud();
  }

  // Missed questions come back first, then ones she hasn't seen, then the least practiced.
  const recent = [];
  function pickQuestion(cat) {
    const pool = Q.filter(q => !cat || q.cat === cat);
    const notRecent = pool.filter(q => !recent.includes(q.id));
    const list = notRecent.length ? notRecent : pool;
    const score = q => { const s = G.qs[q.id]; return !s ? 1 : s.last === 0 ? 0 : 2 + s.r; };
    const best = Math.min(...list.map(score));
    const q = pick(list.filter(x => score(x) === best));
    recent.push(q.id);
    if (recent.length > 8) recent.shift();
    return q;
  }

  // ---------- the map in play ----------
  let M = null;
  const P = { x: 0, y: 0, rx: 0, ry: 0, fx: 0, fy: 0, face: "down", moving: false, t: 0, path: [], goal: null, invuln: 0 };
  const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
  const STEP = 150;
  const WALK = new Set(["grass", "flower", "path", "pad", "bridge", "sand"]);
  const held = [];

  const tileAt = (x, y) => (x < 0 || y < 0 || x >= M.w || y >= M.h ? "edge" : M.t[y * M.w + x]);
  const walkable = t => WALK.has(t) || (t === "gold" && lilyCount() >= 4);
  function thingAt(x, y) {
    for (const e of M.things) if (!e.gone && e.x === x && e.y === y) return e;
    return null;
  }
  const solid = e => !(e.type === "warp" || (e.type === "gate" && e.open));
  function free(x, y) {
    if (!walkable(tileAt(x, y))) return false;
    const e = thingAt(x, y);
    return !e || !solid(e);
  }
  const propAt = (x, y) => M.props.find(p => x >= p.x && x < p.x + p.w && y >= p.y && y < p.y + p.h) || null;
  const dirTo = (x, y) => {
    const dx = x - P.x, dy = y - P.y;
    return Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up";
  };

  function enterMap(id, x, y, face, quiet) {
    const def = MAPS[id];
    M = { id, def, w: def.w, h: def.h, t: def.t.slice(), props: def.props, theme: ART.theme(def.theme), bdir: [], things: [] };
    for (const src of def.things) {
      if (src.type === "start") continue;
      const e = Object.assign({}, src, { key: `${id}:${src.type}:${src.x}:${src.y}`, rx: src.x, ry: src.y, hx: src.x, hy: src.y });
      if (e.type === "chest" && G.chests[e.key]) e.open = true;
      if (e.type === "boss" && G.bosses[e.boss]) e.gone = true;
      if (e.type === "stone" && G.puzzles[e.key]) e.lit = true;
      if (e.type === "bramble" && G.puzzles[e.key]) e.gone = true;
      if (e.type === "owl" && G.puzzles.owl) { e.x = e.rx = e.perch[0]; e.y = e.ry = e.perch[1]; }
      if (e.type === "enemy") { e.foe = pick(FOE_OF[id] || FOE_OF.isle); e.timer = 600 + Math.random() * 1500; e.seed = Math.random() * 6; }
      M.things.push(e);
    }
    if (def.pads) def.pads.slice(0, G.puzzles.pads || 0).forEach(([px, py]) => { M.t[py * M.w + px] = "pad"; });
    updateGate();
    for (let yy = 0; yy < M.h; yy++)
      for (let xx = 0; xx < M.w; xx++)
        if (M.t[yy * M.w + xx] === "bridge") M.bdir[yy * M.w + xx] = tileAt(xx - 1, yy) !== "water" || tileAt(xx + 1, yy) !== "water" ? "h" : "v";
    Object.assign(P, { x, y, rx: x, ry: y, fx: x, fy: y, face: face || "down", moving: false, path: [], goal: null });
    held.length = 0;
    G.map = id; G.x = x; G.y = y; G.face = P.face;
    save();
    MUSIC.play(id);
    if (!quiet) banner(def.name, def.sub);
  }

  function updateGate() {
    const gate = M.things.find(t => t.type === "gate");
    if (!gate) return false;
    const was = !!gate.open;
    gate.open = M.things.filter(t => t.type === "stone").every(t => t.lit);
    return gate.open && !was;
  }

  // ---------- moving around ----------
  function tryStep(dir) {
    P.face = dir;
    const [dx, dy] = DIRS[dir];
    const nx = P.x + dx, ny = P.y + dy;
    const e = thingAt(nx, ny);
    if (e && (e.type === "enemy" || e.type === "boss")) {
      if (e.type === "boss" || P.invuln <= 0) encounter(e);
      return false;
    }
    if (!free(nx, ny)) return false;
    P.fx = P.x; P.fy = P.y; P.x = nx; P.y = ny;
    P.moving = true;
    P.t = 0;
    return true;
  }

  function arrived() {
    G.x = P.x; G.y = P.y; G.face = P.face;
    save(true);
    const e = thingAt(P.x, P.y);
    if (e && e.type === "warp") {
      sfx("warp");
      enterMap(e.to, e.at[0], e.at[1], e.face);
      return;
    }
    if (!P.path.length && P.goal) {
      const g = P.goal;
      P.goal = null;
      reach(g);
    }
  }

  function reach(g) {
    if (g.ent) {
      if (g.ent.gone) return;
      g.x = g.ent.x;
      g.y = g.ent.y;
    }
    if (Math.abs(g.x - P.x) + Math.abs(g.y - P.y) === 1) {
      P.face = dirTo(g.x, g.y);
      interact(g.x, g.y);
      return;
    }
    if (g.ent && g.tries > 0) goTo(g.x, g.y, g.ent, g.tries - 1);   // a critter moved: follow it a little
  }

  function findPath(sx, sy, isGoal) {
    const W = M.w, H = M.h, prev = new Int32Array(W * H).fill(-1), seen = new Uint8Array(W * H);
    const start = sy * W + sx, queue = [start];
    seen[start] = 1;
    for (let i = 0; i < queue.length; i++) {
      const cur = queue[i], cx = cur % W, cy = (cur / W) | 0;
      if (i > 0 && isGoal(cx, cy)) {
        const out = [];
        for (let k = cur; k !== start; k = prev[k]) out.unshift([k % W, (k / W) | 0]);
        return out;
      }
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = cx + dx, ny = cy + dy, n = ny * W + nx;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H || seen[n] || !free(nx, ny)) continue;
        const e = thingAt(nx, ny);
        if (e && e.type === "warp" && !isGoal(nx, ny)) continue;
        seen[n] = 1;
        prev[n] = cur;
        queue.push(n);
      }
    }
    return null;
  }

  // Walk next to something and use it.
  function goTo(x, y, ent, tries) {
    const target = { x, y, ent, tries: tries == null ? 4 : tries };
    if (Math.abs(x - P.x) + Math.abs(y - P.y) === 1) { P.path = []; reach(target); return true; }
    const path = findPath(P.x, P.y, (cx, cy) => Math.abs(cx - x) + Math.abs(cy - y) === 1);
    if (!path) return false;
    P.path = path;
    P.goal = target;
    return true;
  }

  function followPath() {
    const [nx, ny] = P.path[0];
    const dir = dirTo(nx, ny);
    if (!free(nx, ny)) {
      const e = thingAt(nx, ny);
      P.path = [];
      if (e && e.type === "enemy") tryStep(dir);
      else if (P.goal) { const g = P.goal; P.goal = null; reach(g); }
      return;
    }
    P.path.shift();
    tryStep(dir);
  }

  function updateEnemies(dt) {
    for (const e of M.things) {
      if (e.type !== "enemy" || e.gone) continue;
      if (e.moving) {
        e.t += dt;
        const k = Math.min(1, e.t / 260);
        e.rx = e.fx + (e.x - e.fx) * k;
        e.ry = e.fy + (e.y - e.fy) * k;
        if (k >= 1) e.moving = false;
        continue;
      }
      if (e.stun > 0) { e.stun -= dt; continue; }
      e.timer -= dt;
      if (e.timer > 0) continue;
      e.timer = 700 + Math.random() * 1200;
      const dist = Math.abs(e.x - P.x) + Math.abs(e.y - P.y);
      let dir = pick(["up", "down", "left", "right"]);
      if (dist <= 4 && Math.random() < 0.55) {
        const ddx = P.x - e.x, ddy = P.y - e.y;
        dir = Math.abs(ddx) > Math.abs(ddy) ? (ddx > 0 ? "right" : "left") : ddy > 0 ? "down" : "up";
      }
      const [dx, dy] = DIRS[dir], nx = e.x + dx, ny = e.y + dy;
      if (nx === P.x && ny === P.y) {
        if (!P.moving && P.invuln <= 0 && !busy()) encounter(e);
        continue;
      }
      if (Math.abs(nx - e.hx) > 3 || Math.abs(ny - e.hy) > 3) continue;
      if (!walkable(tileAt(nx, ny)) || thingAt(nx, ny)) continue;
      e.fx = e.x; e.fy = e.y; e.x = nx; e.y = ny;
      e.face = dir;
      e.moving = true;
      e.t = 0;
    }
  }

  function update(dt) {
    if (busy()) return;
    P.invuln = Math.max(0, P.invuln - dt);
    if (P.moving) {
      P.t += dt;
      const k = Math.min(1, P.t / STEP);
      P.rx = P.fx + (P.x - P.fx) * k;
      P.ry = P.fy + (P.y - P.fy) * k;
      if (k >= 1) { P.moving = false; arrived(); }
    }
    if (!P.moving && !busy()) {
      if (P.path.length) followPath();
      else if (held.length) tryStep(held[held.length - 1]);
    }
    if (!busy()) updateEnemies(dt);
  }

  // ---------- using things ----------
  function interact(x, y) {
    const e = thingAt(x, y);
    if (e) {
      switch (e.type) {
        case "sign": return say(e.lines);
        case "npc": return e.who === "newt" ? talkNewt() : shop();
        case "spring": return useSpring();
        case "chest": return openChest(e);
        case "bell": return ringBell();
        case "stone": return readStone(e);
        case "gate": return e.open ? null : say(["The Lookout Gate is locked.", "Light all three Clue Stones to open it."]);
        case "bramble": return cutBramble(e);
        case "owl": return askOwl(e);
        case "portal": return usePortal(e);
        case "enemy":
        case "boss": return encounter(e);
        default: return null;
      }
    }
    const pr = propAt(x, y);
    if (pr) return pr.type === "shop" ? shop() : say(["Home sweet home.", "Your adventure saves itself as you go."], { who: "frog", name: "Gabi" });
    return null;
  }

  async function talkNewt() {
    const as = { who: "newt", name: "Professor Newt" };
    if (!G.met.newt) {
      G.met.newt = true;
      save();
      return say(NEWT_HELLO, as);
    }
    if (G.stats.won) return say(["You beat the Great Exam Toad!", "Friday doesn't stand a chance, Gabi."], as);
    if (lilyCount() >= 4) return say(["The golden bridge is up!", "The Great Exam Toad waits on the isle in the pond."], as);
    return say(["Professor's tip:", pick(RULES)], as);
  }

  async function shop() {
    const as = { who: "snail", name: "Shelly" };
    const choice = await say(["Hi hon! Want a snack for the road?"], Object.assign({
      choices: [
        { label: `Hint Snack · 6 flies (you have ${G.items.snack})`, value: "snack" },
        { label: `Lily Tea · 4 flies (you have ${G.items.tea})`, value: "tea" },
        { label: "Just looking", value: "" }
      ]
    }, as));
    if (!choice) return say(["Come back anytime!"], as);
    const price = choice === "snack" ? 6 : 4;
    if (G.flies < price) return say(["Oh! You need a few more flies, hon.", "Critters and chests drop them."], as);
    G.flies -= price;
    G.items[choice]++;
    save();
    hud();
    sfx("chest");
    return say([choice === "snack" ? "One Hint Snack! In a battle, it takes away a wrong answer." : "One Lily Tea! Sip it in a battle to heal two hearts."], as);
  }

  async function useSpring() {
    G.hearts = maxHearts();
    G.check = { map: M.id, x: P.x, y: P.y };
    save();
    hud();
    sfx("heal");
    return say(["The spring sparkles.", "Hearts restored and progress saved!"]);
  }

  async function openChest(e) {
    if (e.open) return say(["Empty. You already found this one."]);
    e.open = true;
    G.chests[e.key] = true;
    let msg;
    if (e.snack) { G.items.snack += e.snack; msg = `You found ${e.snack === 1 ? "a Hint Snack" : e.snack + " Hint Snacks"}!`; }
    else { G.flies += e.flies || 8; msg = `You found ${e.flies || 8} flies!`; }
    save();
    hud();
    sfx("chest");
    return say([msg]);
  }

  async function ringBell() {
    const pads = M.def.pads, n = G.puzzles.pads || 0;
    if (n >= pads.length) return say(["All the lily pads are up.", "The island is waiting!"]);
    const res = await battle({ kind: "puzzle", name: "Lotus Bell", art: "bell", cat: "ethics", line: `Answer right to raise lily pad ${n + 1} of ${pads.length}.` });
    if (res === "win") {
      G.puzzles.pads = n + 1;
      const [px, py] = pads[n];
      M.t[py * M.w + px] = "pad";
      gainXP(10);
      save();
      sfx("chest");
      return say([n + 1 >= pads.length ? "The last lily pad rises. The way to the island is open!" : "Ding! A lily pad rises from the water."]);
    }
    if (res === "fail") return say(["Clunk. The bell needs a right answer.", "Read the why and try again!"]);
    return null;
  }

  async function readStone(e) {
    if (e.lit) return say(["This Clue Stone is already glowing."]);
    const res = await battle({ kind: "puzzle", name: "Clue Stone", art: "stone", cat: "assess", line: "Answer right to light this Clue Stone." });
    if (res === "win") {
      e.lit = true;
      G.puzzles[e.key] = true;
      gainXP(10);
      save();
      sfx("chest");
      const lit = M.things.filter(t => t.type === "stone" && t.lit).length;
      return say([updateGate() ? "All three stones glow. The Lookout Gate creaks open!" : `The stone glows! ${lit} of 3 lit.`]);
    }
    if (res === "fail") return say(["The stone stays dark.", "Come back and try again."]);
    return null;
  }

  async function cutBramble(e) {
    const res = await battle({ kind: "puzzle", name: "Bramble", art: "bramble", cat: "interv", line: "Answer right to clear this bramble." });
    if (res === "win") {
      e.gone = true;
      G.puzzles[e.key] = true;
      gainXP(10);
      save();
      sfx("chest");
      const left = M.things.filter(t => t.type === "bramble" && !t.gone).length;
      return say([left ? `Snip! ${left} bramble${left > 1 ? "s" : ""} to go.` : "The last bramble falls. The Quick-Fix Fox is just ahead!"]);
    }
    if (res === "fail") return say(["The thorns hold tight.", "Try again!"]);
    return null;
  }

  async function askOwl(e) {
    const as = { who: "owl", name: "Wise Owl" };
    if (G.puzzles.owl) return say(["Hoo! You've proven yourself. The bridge is yours."], as);
    await say(["Hoo! To cross my bridge, answer three questions in a row.", "Miss one and we start over. Ready?"], as);
    const res = await battle({ kind: "owl", name: "Wise Owl", art: "owl", cat: "human", need: 3, line: "Three in a row to cross!" });
    if (res === "win") {
      G.puzzles.owl = true;
      e.x = e.rx = e.perch[0];
      e.y = e.ry = e.perch[1];
      gainXP(20);
      save();
      sfx("chest");
      return say(["Three in a row! Hoo-ray!", "The bridge is open."], as);
    }
    if (res === "fail") return say(["Hoo. Streak broken.", "Rest a moment and try again!"], as);
    return null;
  }

  async function usePortal(e) {
    if (e.to === "isle" && lilyCount() < 4) return say(["A golden glow...", "It needs all four Golden Lilies."]);
    sfx("warp");
    enterMap(e.to, e.at[0], e.at[1], e.face);
    return null;
  }

  // ---------- battles ----------
  async function encounter(e) {
    if (busy() || e.gone) return;
    P.path = [];
    P.goal = null;
    held.length = 0;
    if (e.type === "boss") { await bossFight(e); return; }
    const name = FOES[e.foe];
    const res = await battle({ kind: "enemy", name, art: e.foe, cat: M.def.cat, hp: 2, hurt: true, line: `A ${name} hops out!` });
    if (res === "win") {
      e.gone = true;
      const flies = 2 + Math.floor(Math.random() * 3);
      G.flies += flies;
      gainXP(10);
      let extra = "";
      if (Math.random() < 0.15) { G.items.snack++; extra = " and a Hint Snack"; }
      toast(`+${flies} flies${extra}`);
    } else if (res === "flee") {
      e.stun = 3500;
      P.invuln = 1800;
    } else if (res === "lose") await faint();
    save();
    hud();
  }

  async function bossFight(e) {
    const b = BOSSES[e.boss];
    const as = { who: e.boss, name: b.name };
    MUSIC.play("boss");
    await say(b.hello, as);
    const res = await battle({ kind: "boss", name: b.name, art: e.boss, cat: b.cat, hp: b.hp, hurt: true, line: `Boss battle! Get ${b.hp} right to win.` });
    if (res === "win") {
      e.gone = true;
      G.bosses[e.boss] = true;
      if (b.cat) G.lilies[b.cat] = true;
      G.flies += 15;
      gainXP(e.boss === "toad" ? 100 : 40);
      save();
      hud();
      sfx("win");
      await say(b.bye, as);
      if (e.boss === "toad") { G.stats.won = true; save(); ending(); return; }
      const n = lilyCount();
      await say([`You got the Golden Lily of ${CATS[b.cat].name}!`, n >= 4 ? "That's all four! A golden bridge has appeared in Home Pond." : `${4 - n} more to go.`], { who: "frog", name: "Gabi" });
    } else if (res === "lose") await faint();
    else if (res === "flee") P.invuln = 1800;
  }

  async function faint() {
    sfx("faint");
    await say(["Gabi got a little overwhelmed and hops back to the last spring.", "Every wrong answer is a lesson. You've got this!"], { who: "frog", name: "Gabi" });
    G.hearts = maxHearts();
    enterMap(G.check.map, G.check.x, G.check.y, "down");
    hud();
  }

  let B = null;

  function battle(cfg) {
    return new Promise(resolve => {
      B = Object.assign({ hp: 1, hurt: false, need: 0 }, cfg, { left: cfg.hp || 1, streak: 0, resolve });
      $("b-face").innerHTML = ART.svg[B.art] || "";
      $("b-name").textContent = B.name;
      $("b-me").innerHTML = ART.frogInline("Gabi", "idle");
      $("b-line").textContent = B.line || "";
      $("b-flee").textContent = B.kind === "enemy" || B.kind === "boss" ? "Hop away" : "Not now";
      $("b-tea").hidden = !B.hurt;
      $("battle").hidden = false;
      if (B.kind === "enemy" || B.kind === "boss") MUSIC.play(B.kind === "boss" ? "boss" : "battle");
      nextQuestion();
    });
  }

  function battleBars() {
    const pips = $("b-hp");
    let html = "";
    if (B.kind === "enemy" || B.kind === "boss") for (let i = 0; i < B.hp; i++) html += `<i class="${i < B.left ? "on" : ""}"></i>`;
    if (B.kind === "owl") for (let i = 0; i < B.need; i++) html += `<i class="${i < B.streak ? "on gold" : ""}"></i>`;
    pips.innerHTML = html;
    pips.hidden = !html;
    let hearts = "";
    if (B.hurt) for (let i = 0; i < maxHearts(); i++) hearts += i < G.hearts ? ART.icon.heart : ART.icon.heartEmpty;
    $("b-hearts").innerHTML = hearts;
  }

  function fillAsk(el, text) {
    el.textContent = "";
    text.split(/\b(FIRST|NEXT|BEST|MOST|STRONGEST|LEAST|NOT)\b/).forEach((part, n) => {
      if (n % 2) {
        const m = document.createElement("mark");
        m.textContent = part;
        el.appendChild(m);
      } else if (part) el.appendChild(document.createTextNode(part));
    });
  }

  function nextQuestion() {
    const q = pickQuestion(B.cat);
    B.q = q;
    B.picked = null;
    B.gone = [];
    $("b-chip").textContent = CATS[q.cat].name;
    $("b-chip").dataset.c = CATS[q.cat].c;
    $("b-text").textContent = q.text;
    fillAsk($("b-ask"), q.ask);
    const box = $("b-opts");
    box.textContent = "";
    shuffle([0, 1, 2, 3]).forEach((orig, pos) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "opt";
      b.dataset.orig = String(orig);
      b.innerHTML = '<span class="letter"></span><span class="opt-body"><span class="opt-text"></span>' +
        '<span class="note" hidden><span class="tag" hidden></span><span class="note-text"></span></span></span>';
      b.querySelector(".letter").textContent = "ABCD"[pos];
      b.querySelector(".opt-text").textContent = q.opts[orig][0];
      b.querySelector(".note-text").textContent = q.opts[orig][1];
      b.addEventListener("click", () => answer(orig));
      box.appendChild(b);
    });
    $("b-why").hidden = true;
    $("b-tip").hidden = true;
    $("b-next").hidden = true;
    $("b-flee").hidden = false;
    $("b-snack").hidden = false;
    battleItems();
    battleBars();
    setMood($("b-me"), "idle");
    $("battle").scrollTop = 0;
  }

  function battleItems() {
    $("b-snack-n").textContent = G.items.snack;
    $("b-tea-n").textContent = G.items.tea;
    const wrongLeft = B.q ? [0, 1, 2, 3].filter(o => o !== B.q.c && !B.gone.includes(o)).length : 0;
    $("b-snack").disabled = G.items.snack <= 0 || B.picked !== null || wrongLeft <= 1;
    $("b-tea").disabled = G.items.tea <= 0 || G.hearts >= maxHearts();
  }

  function answer(orig) {
    if (!B || B.picked !== null || B.gone.includes(orig)) return;
    B.picked = orig;
    const q = B.q, ok = orig === q.c;
    record(q, ok);
    let line;
    if (ok) {
      sfx("right");
      setMood($("b-me"), "happy");
      if (B.kind === "owl") { B.streak++; line = B.streak >= B.need ? "Hoo! Three in a row!" : `Hoo! That's ${B.streak} in a row.`; }
      else if (B.kind === "puzzle") line = "That's right!";
      else {
        B.left--;
        line = B.left > 0 ? `Hit! ${B.name} is down to ${B.left} heart${B.left === 1 ? "" : "s"}.` : "That's the winning hit!";
        bump($("b-face"));
      }
      gainXP(5);
    } else {
      sfx("wrong");
      setMood($("b-me"), "oops");
      if (B.hurt) {
        G.hearts = Math.max(0, G.hearts - 1);
        bump($("b-me"));
        line = G.hearts > 0 ? "Ouch! You lost a heart." : "Oh no, that was your last heart.";
      } else if (B.kind === "owl") line = "Hoo... streak broken.";
      else line = "Not quite. Read the why, then try again.";
    }
    $("b-line").textContent = line;
    $$("#b-opts .opt").forEach(b => {
      const o = Number(b.dataset.orig), tag = b.querySelector(".tag"), note = b.querySelector(".note");
      b.setAttribute("aria-disabled", "true");
      if (o === q.c) { b.classList.add("right"); tag.hidden = false; tag.textContent = "Best answer"; note.hidden = false; }
      else if (o === orig) { b.classList.add("wrong"); tag.hidden = false; tag.textContent = "Your pick"; note.hidden = false; }
    });
    $("b-why").hidden = false;
    $("b-tip-text").textContent = q.tip;
    $("b-tip").hidden = false;
    $("b-flee").hidden = true;
    $("b-snack").hidden = true;
    $("b-next").hidden = false;
    $("b-next").textContent = nextLabel();
    battleItems();
    battleBars();
    hud();
    save();
    $("b-next").focus({ preventScroll: true });
  }

  function nextLabel() {
    const ok = B.picked === B.q.c;
    if (B.kind === "puzzle") return "Continue";
    if (B.kind === "owl") return !ok || B.streak >= B.need ? "Continue" : "Next question";
    if (B.left <= 0) return "Victory!";
    if (G.hearts <= 0) return "Continue";
    return "Next question";
  }

  function cont() {
    if (!B || B.picked === null) return;
    const ok = B.picked === B.q.c;
    if (B.kind === "puzzle") return finish(ok ? "win" : "fail");
    if (B.kind === "owl") {
      if (!ok) return finish("fail");
      return B.streak >= B.need ? finish("win") : nextQuestion();
    }
    if (B.left <= 0) return finish("win");
    if (G.hearts <= 0) return finish("lose");
    return nextQuestion();
  }

  function finish(res) {
    const done = B.resolve;
    B = null;
    $("battle").hidden = true;
    MUSIC.play(M.id);
    done(res);
  }

  function setMood(holder, mood) {
    const f = holder.querySelector(".frog");
    if (!f) return;
    f.setAttribute("data-mood", "idle");
    void f.getBoundingClientRect();
    f.setAttribute("data-mood", mood);
  }

  function bump(el) {
    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
  }

  on("b-next", "click", cont);
  on("b-flee", "click", () => { if (B) finish("flee"); });
  on("b-why", "click", () => {
    $$("#b-opts .note").forEach(n => { n.hidden = false; });
    $("b-why").hidden = true;
  });
  on("b-snack", "click", () => {
    if (!B || B.picked !== null || G.items.snack <= 0) return;
    const wrong = [0, 1, 2, 3].filter(o => o !== B.q.c && !B.gone.includes(o));
    if (wrong.length <= 1) return;
    const o = pick(wrong);
    B.gone.push(o);
    G.items.snack--;
    const btn = $("b-opts").querySelector(`[data-orig="${o}"]`);
    btn.classList.add("gone");
    btn.setAttribute("aria-disabled", "true");
    battleItems();
    hud();
    save();
  });
  on("b-tea", "click", () => {
    if (!B || !B.hurt || G.items.tea <= 0 || G.hearts >= maxHearts()) return;
    G.items.tea--;
    G.hearts = Math.min(maxHearts(), G.hearts + 2);
    sfx("heal");
    battleItems();
    battleBars();
    hud();
    save();
    if (B.picked !== null) $("b-next").textContent = nextLabel();
  });

  // ---------- dialog ----------
  let D = null;

  function say(lines, opts) {
    return new Promise(resolve => {
      D = { lines: [].concat(lines), i: 0, opts: opts || {}, resolve, at: performance.now() };
      const who = D.opts.who;
      $("dlg-face").innerHTML = who === "frog" ? ART.frogInline("Gabi") : who ? ART.svg[who] || "" : "";
      $("dlg-face").hidden = !who;
      $("dlg-name").textContent = D.opts.name || "";
      $("dlg-name").hidden = !D.opts.name;
      showLine();
      $("dialog").hidden = false;
    });
  }

  function showLine() {
    $("dlg-text").textContent = D.lines[D.i];
    const box = $("dlg-choices");
    box.textContent = "";
    const asking = D.i === D.lines.length - 1 && D.opts.choices;
    if (asking) {
      D.opts.choices.forEach(ch => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "btn mini";
        b.textContent = ch.label;
        b.addEventListener("click", ev => { ev.stopPropagation(); closeDialog(ch.value); });
        box.appendChild(b);
      });
    }
    box.hidden = !asking;
    $("dlg-more").hidden = !!asking;
  }

  function advance() {
    if (!D || performance.now() - D.at < 200) return;
    if (D.i < D.lines.length - 1) {
      D.i++;
      D.at = performance.now();
      showLine();
      return;
    }
    if (!D.opts.choices) closeDialog();
  }

  function closeDialog(value) {
    const done = D.resolve;
    D = null;
    $("dialog").hidden = true;
    done(value);
  }

  on("dialog", "click", advance);

  // ---------- heads-up display ----------
  function hud() {
    if (!G) return;
    let hearts = "";
    for (let i = 0; i < maxHearts(); i++) hearts += i < G.hearts ? ART.icon.heart : ART.icon.heartEmpty;
    $("hearts").innerHTML = hearts;
    $("lvl").textContent = `Lv ${G.level}`;
    $("xpfill").style.width = Math.round((100 * G.xp) / needXP(G.level)) + "%";
    $("flies").textContent = G.flies;
    $("lilies").innerHTML = Object.keys(CATS).map(k => `<span title="${CATS[k].world}">${G.lilies[k] ? ART.icon.lily : ART.icon.lilyEmpty}</span>`).join("");
  }

  let toastTimer = 0, bannerTimer = 0;
  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2400);
  }
  function banner(name, sub) {
    $("banner-name").textContent = name;
    $("banner-sub").textContent = sub;
    const el = $("banner");
    el.hidden = false;
    el.classList.remove("show");
    void el.offsetWidth;
    el.classList.add("show");
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => { el.hidden = true; }, 2800);
  }

  // ---------- journal ----------
  function openMenu(tab) {
    renderMenu();
    showTab(tab || "progress");
    $("menu").hidden = false;
    $("menu-close").focus({ preventScroll: true });
  }
  function closeMenu() { $("menu").hidden = true; }
  function showTab(name) {
    $$(".tab").forEach(t => t.setAttribute("aria-selected", String(t.dataset.tab === name)));
    $$(".tab-panel").forEach(p => { p.hidden = p.id !== "tab-" + name; });
  }

  function renderMenu() {
    const acc = G.stats.answered ? Math.round((100 * G.stats.right) / G.stats.answered) : 0;
    let html = `<p class="summary">Level ${G.level} · ${mastered()} of ${Q.length} questions mastered` +
      (G.stats.answered ? ` · ${acc}% right` : "") + "</p><div class=\"worlds\">";
    for (const k of Object.keys(CATS)) {
      const total = Q.filter(q => q.cat === k).length, n = mastered(k);
      html += `<div class="world-row" data-c="${CATS[k].c}"><div class="world-txt"><b>${CATS[k].world}</b><span>${esc(CATS[k].name)}</span></div>` +
        `<div class="bar"><span style="width:${Math.round((100 * n) / total)}%"></span></div><span class="world-n">${n}/${total}</span>` +
        `<span class="world-lily">${G.lilies[k] ? ART.icon.lily : ART.icon.lilyEmpty}</span></div>`;
    }
    html += "</div>";
    html += `<p class="items">${ART.icon.snack}<span>${G.items.snack} Hint Snack${G.items.snack === 1 ? "" : "s"}</span>${ART.icon.tea}<span>${G.items.tea} Lily Tea</span>${ART.icon.fly}<span>${G.flies} flies</span></p>`;
    $("tab-progress").innerHTML = html;

    const missed = Q.filter(q => G.qs[q.id] && G.qs[q.id].last === 0);
    $("tab-review").innerHTML = missed.length
      ? `<p class="summary">${missed.length} question${missed.length === 1 ? "" : "s"} to look at again. They'll come back in battles too.</p>` +
        missed.map(q => `<article class="review-item"><p class="chip" data-c="${CATS[q.cat].c}">${esc(CATS[q.cat].name)}</p>` +
          `<p>${esc(q.text)}</p><p class="r-ask">${esc(q.ask)}</p><p class="r-a"><b>Best answer:</b> ${esc(q.opts[q.c][0])}</p>` +
          `<p class="r-t">Frog tip: ${esc(q.tip)}</p></article>`).join("")
      : '<p class="summary">Nothing to review right now. Every question you miss shows up here.</p>';

    $("tab-rules").innerHTML = '<p class="summary">How to think like the exam</p><ul class="rules">' + RULES.map(r => `<li>${esc(r)}</li>`).join("") + "</ul>";
    volumeUI();
  }

  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]);

  on("menu-btn", "click", () => { if (!busy()) openMenu(); });
  on("menu-close", "click", closeMenu);
  $$(".tab").forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));

  let resetArmed = 0;
  function armReset(btn) {
    if (performance.now() - resetArmed < 3500) {
      started = false;   // stops the autosave on unload from writing the old game back
      try { localStorage.removeItem(KEY); } catch (e) { /* nothing saved */ }
      location.reload();
      return;
    }
    resetArmed = performance.now();
    const label = btn.textContent;
    btn.textContent = "Tap again to erase the adventure";
    setTimeout(() => { btn.textContent = label; }, 3500);
  }
  on("reset-btn", "click", ev => armReset(ev.currentTarget));
  on("t-reset", "click", ev => armReset(ev.currentTarget));

  // ---------- ending ----------
  function ending() {
    $("end-frog").innerHTML = ART.frogInline("Gabi celebrating", "cheer");
    const acc = G.stats.answered ? Math.round((100 * G.stats.right) / G.stats.answered) : 0;
    $("end-stats").textContent = `${G.stats.answered} questions answered · ${acc}% right · level ${G.level}`;
    const box = $("confetti");
    box.textContent = "";
    const colors = ["#f4a7b9", "#ffd76a", "#8fd3c8", "#7cc46a", "#c3a6f0"];
    for (let i = 0; i < 48; i++) {
      const s = document.createElement("i");
      s.style.left = Math.random() * 100 + "%";
      s.style.background = colors[i % colors.length];
      s.style.animationDelay = (Math.random() * 2.5).toFixed(2) + "s";
      s.style.animationDuration = (2.6 + Math.random() * 2).toFixed(2) + "s";
      box.appendChild(s);
    }
    $("end").hidden = false;
  }
  on("end-ok", "click", () => { $("end").hidden = true; });

  // ---------- sound ----------
  let AC = null;
  function unlockAudio() {
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state === "suspended") AC.resume();
    } catch (e) { AC = null; }
    if (started) MUSIC.unlock();
  }

  // ---------- volume ----------
  function setVolume(kind, v) {
    v = Math.max(0, Math.min(1, v));
    if (kind === "music") { G.musicVol = v; MUSIC.setVolume(v); }
    else G.sfxVol = v;
    unlockAudio();
    save(true);
    volumeUI();
  }
  function volumeUI() {
    const m = Math.round(G.musicVol * 100), s = Math.round(G.sfxVol * 100);
    for (const [ids, val, cls] of [[["vol-music", "vol-music-2"], m, ".vol-music-n"], [["vol-sfx", "vol-sfx-2"], s, ".vol-sfx-n"]]) {
      ids.map($).filter(Boolean).forEach(el => { el.value = val; el.style.setProperty("--fill", val + "%"); });
      $$(cls).forEach(el => { el.textContent = val ? val + "%" : "Off"; });
    }
    if ($("music-btn")) $("music-btn").classList.toggle("off", m === 0);
  }
  for (const [id, kind] of [["vol-music", "music"], ["vol-music-2", "music"], ["vol-sfx", "sfx"], ["vol-sfx-2", "sfx"]]) {
    on(id, "input", ev => setVolume(kind, ev.target.value / 100));
    on(id, "change", () => { save(); if (kind === "sfx") sfx("chest"); });
  }
  const volOpen = () => !$("vol-pop").hidden;
  function toggleVolume(show) {
    $("vol-pop").hidden = !show;
    $("music-btn").setAttribute("aria-expanded", String(show));
    if (show) { unlockAudio(); volumeUI(); }
  }
  on("music-btn", "click", () => toggleVolume(!volOpen()));
  let swallowTap = 0;   // the tap that closes the panel shouldn't also walk the frog
  document.addEventListener("pointerdown", ev => {
    if (!volOpen() || $("vol-pop").contains(ev.target) || $("music-btn").contains(ev.target)) return;
    toggleVolume(false);
    if (ev.target === $("world")) swallowTap = performance.now();
  }, true);
  window.addEventListener("keydown", ev => { if (ev.key === "Escape" && volOpen()) toggleVolume(false); });
  const TUNES = {
    right: [[660, 0.07], [880, 0.12]], wrong: [[233, 0.2]], level: [[523, 0.08], [659, 0.08], [784, 0.08], [1047, 0.22]],
    chest: [[784, 0.06], [988, 0.06], [1319, 0.14]], heal: [[440, 0.1], [554, 0.1], [659, 0.18]], warp: [[392, 0.07], [523, 0.12]],
    faint: [[330, 0.14], [262, 0.26]], win: [[523, 0.1], [659, 0.1], [784, 0.1], [1047, 0.32]]
  };
  function sfx(name) {
    const k = G ? Math.pow(G.sfxVol / 0.8, 2) : 0;   // 80% is the original mix
    if (!AC || k <= 0 || !TUNES[name]) return;
    let t = AC.currentTime + 0.01;
    for (const [f, d] of TUNES[name]) {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = name === "wrong" || name === "faint" ? "square" : "triangle";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime((name === "wrong" ? 0.035 : 0.07) * k, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(AC.destination);
      o.start(t);
      o.stop(t + d + 0.03);
      t += d * 0.85;
    }
  }

  // ---------- drawing ----------
  const canvas = $("world");
  const ctx = canvas.getContext("2d");
  let VW = 0, VH = 0, TS = 48, DPR = 1;
  const cam = { x: 0, y: 0 };
  let tap = null;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2.5);
    VW = window.innerWidth;
    VH = window.innerHeight;
    canvas.width = Math.round(VW * DPR);
    canvas.height = Math.round(VH * DPR);
    canvas.style.width = VW + "px";
    canvas.style.height = VH + "px";
    TS = Math.round(Math.max(30, Math.min(64, Math.min(VW / 12, VH / 9.5))));
    ART.reset(TS, DPR);
  }

  function camera() {
    const px = P.rx * TS + TS / 2, py = P.ry * TS + TS / 2, mw = M.w * TS, mh = M.h * TS;
    cam.x = Math.round(mw <= VW ? (mw - VW) / 2 : Math.max(0, Math.min(mw - VW, px - VW / 2)));
    cam.y = Math.round(mh <= VH ? (mh - VH) / 2 : Math.max(0, Math.min(mh - VH, py - VH / 2)));
  }

  const hashv = (x, y) => {
    let h = (x * 374761393 + y * 668265263) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return (h ^ (h >>> 16)) >>> 0;
  };

  const SIZE = { enemy: 1.05, boss: 1.75, npc: 1.15, owl: 1.1, spring: 1.15, portal: 1.2, sign: 1, chest: 0.95, stone: 1.05, gate: 1.05, bramble: 1.05, bell: 1.05 };

  function artFor(e) {
    if (e.type === "enemy") return e.foe;
    if (e.type === "boss") return e.boss;
    if (e.type === "npc") return e.who;
    if (e.type === "chest") return e.open ? "chestOpen" : "chest";
    if (e.type === "stone") return e.lit ? "stoneLit" : "stone";
    if (e.type === "gate") return e.open ? null : "gate";
    return e.type;
  }

  function usable(e) {
    switch (e.type) {
      case "sign": case "npc": case "spring": case "portal": case "bramble": case "bell": return true;
      case "chest": return !e.open;
      case "stone": return !e.lit;
      case "gate": return !e.open;
      case "owl": return !G.puzzles.owl;
      default: return false;
    }
  }

  function render(now) {
    camera();
    const c = ctx, th = M.theme;
    c.setTransform(DPR, 0, 0, DPR, 0, 0);
    c.fillStyle = th.outside;
    c.fillRect(0, 0, VW, VH);
    const x0 = Math.max(0, Math.floor(cam.x / TS)), y0 = Math.max(0, Math.floor(cam.y / TS));
    const x1 = Math.min(M.w - 1, Math.floor((cam.x + VW) / TS)), y1 = Math.min(M.h - 1, Math.floor((cam.y + VH) / TS));
    const frame = Math.floor(now / 380) % 4;
    const gold = lilyCount() >= 4;

    for (let y = y0; y <= y1; y++)
      for (let x = x0; x <= x1; x++) {
        let t = M.t[y * M.w + x];
        if (t === "gold" && gold) t = "goldOn";
        c.drawImage(ART.ground(t, th, hashv(x, y), frame, M.bdir[y * M.w + x]), x * TS - cam.x, y * TS - cam.y, TS, TS);
      }

    // foam where water meets land
    c.strokeStyle = "rgba(255,255,255,.6)";
    c.lineWidth = Math.max(1.5, TS * 0.07);
    c.lineCap = "round";
    c.beginPath();
    const inset = c.lineWidth * 0.7, pad = TS * 0.12;
    for (let y = y0; y <= y1; y++)
      for (let x = x0; x <= x1; x++) {
        if (!ART.WATERY.has(M.t[y * M.w + x])) continue;
        const sx = x * TS - cam.x, sy = y * TS - cam.y;
        const land = (nx, ny) => { const n = tileAt(nx, ny); return n !== "edge" && !ART.WATERY.has(n); };
        if (land(x, y - 1)) { c.moveTo(sx + pad, sy + inset); c.lineTo(sx + TS - pad, sy + inset); }
        if (land(x, y + 1)) { c.moveTo(sx + pad, sy + TS - inset); c.lineTo(sx + TS - pad, sy + TS - inset); }
        if (land(x - 1, y)) { c.moveTo(sx + inset, sy + pad); c.lineTo(sx + inset, sy + TS - pad); }
        if (land(x + 1, y)) { c.moveTo(sx + TS - inset, sy + pad); c.lineTo(sx + TS - inset, sy + TS - pad); }
      }
    c.stroke();

    // everything that stands up, back to front
    const list = [];
    for (let y = y0; y <= Math.min(M.h - 1, y1 + 2); y++)
      for (let x = x0; x <= x1; x++) {
        const t = M.t[y * M.w + x];
        if (t === "tree" || t === "rock") list.push({ z: y, t, x, y });
      }
    for (const pr of M.props) list.push({ z: pr.y + pr.h - 1, pr });
    for (const e of M.things) if (!e.gone && e.type !== "warp") list.push({ z: e.ry, e });
    list.push({ z: P.ry + 0.001, me: true });
    list.sort((a, b) => a.z - b.z);

    for (const it of list) {
      if (it.t) {
        const sx = it.x * TS - cam.x, sy = it.y * TS - cam.y;
        if (it.t === "tree") c.drawImage(ART.tree(th, hashv(it.x, it.y)), sx, sy - TS * 0.5, TS, TS * 1.5);
        else c.drawImage(ART.rock(th, hashv(it.x, it.y)), sx, sy, TS, TS);
      } else if (it.pr) {
        const w = it.pr.w * TS, h = (w * 130) / 150;
        const img = ART.sprite(it.pr.type, w, h);
        if (img) c.drawImage(img, it.pr.x * TS - cam.x, (it.pr.y + it.pr.h) * TS - h + TS * 0.12 - cam.y, w, h);
      } else if (it.e) drawThing(c, it.e, now);
      else drawFrog(c, now);
    }

    if (tap) {
      const k = (now - tap.at) / 450;
      if (k >= 1) tap = null;
      else {
        c.strokeStyle = `rgba(255,253,246,${0.9 * (1 - k)})`;
        c.lineWidth = 3;
        c.beginPath();
        c.ellipse((tap.x + 0.5) * TS - cam.x, (tap.y + 0.62) * TS - cam.y, TS * (0.2 + 0.25 * k), TS * (0.1 + 0.12 * k), 0, 0, Math.PI * 2);
        c.stroke();
      }
    }
  }

  function drawThing(c, e, now) {
    const name = artFor(e);
    if (!name) return;
    const k = SIZE[e.type] || 1;
    const s = TS * k;
    const img = ART.sprite(name, s);
    if (!img) return;
    let lift = 0;
    if (e.type === "enemy") lift = Math.abs(Math.sin(now / 260 + e.seed)) * TS * 0.07;
    if (e.type === "boss" || e.type === "npc" || e.type === "owl") lift = (Math.sin(now / 500 + e.x) + 1) * TS * 0.025;
    const cx = (e.rx + 0.5) * TS - cam.x, bottom = (e.ry + 1) * TS - cam.y + TS * 0.04;
    if (e.type === "portal") {
      c.globalAlpha = 0.75 + 0.25 * Math.sin(now / 300);
      c.drawImage(img, cx - s / 2, bottom - s * 0.92, s, s);
      c.globalAlpha = 1;
    } else if (e.type === "enemy" && e.face === "left") {
      c.save();
      c.translate(cx, 0);
      c.scale(-1, 1);
      c.drawImage(img, -s / 2, bottom - s - lift, s, s);
      c.restore();
    } else c.drawImage(img, cx - s / 2, bottom - s - lift, s, s);

    if (e.type === "spring") {
      c.fillStyle = "rgba(255,255,255,.9)";
      const tw = (now / 600 + e.x) % 1;
      c.beginPath();
      c.arc(cx + Math.sin(now / 400) * TS * 0.25, bottom - s * (0.55 + tw * 0.35), TS * 0.04 * (1 - tw), 0, Math.PI * 2);
      c.fill();
    }
    if (!P.moving && usable(e) && Math.abs(e.x - P.x) + Math.abs(e.y - P.y) === 1) {
      const by = bottom - s - TS * 0.28 + Math.sin(now / 200) * TS * 0.04;
      c.fillStyle = "#fffdf6";
      c.strokeStyle = "#5a3f22";
      c.lineWidth = 2;
      c.beginPath();
      c.arc(cx, by, TS * 0.18, 0, Math.PI * 2);
      c.fill();
      c.stroke();
      c.fillStyle = "#5a3f22";
      c.font = `600 ${Math.round(TS * 0.26)}px Fredoka, Nunito, sans-serif`;
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText("!", cx, by + 1);
    }
  }

  function drawFrog(c, now) {
    const s = TS * 1.2;
    const img = ART.sprite("frog", s);
    if (!img) return;
    let lift = 0, sx = 1, sy = 1;
    if (P.moving) {
      const k = Math.min(1, P.t / STEP);
      lift = Math.sin(k * Math.PI) * TS * 0.2;
      sx = 1 - Math.sin(k * Math.PI) * 0.06;
      sy = 1 + Math.sin(k * Math.PI) * 0.06;
    } else {
      const b = Math.sin(now / 420) * 0.015;
      sx = 1 + b;
      sy = 1 - b;
    }
    const cx = (P.rx + 0.5) * TS - cam.x, bottom = (P.ry + 1) * TS - cam.y + TS * 0.06;
    if (P.invuln > 0 && Math.floor(now / 120) % 2) c.globalAlpha = 0.55;
    c.save();
    c.translate(cx, bottom - lift);
    c.scale(P.face === "left" ? -sx : sx, sy);
    c.drawImage(img, -s / 2, -s * 0.97, s, s);
    c.restore();
    c.globalAlpha = 1;
  }

  // ---------- input ----------
  const busy = () => !!(B || D || !$("menu").hidden || !$("title").hidden || !$("end").hidden);
  const KEYS = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", w: "up", s: "down", a: "left", d: "right", W: "up", S: "down", A: "left", D: "right" };

  function actionKey() {
    const [dx, dy] = DIRS[P.face];
    const x = P.x + dx, y = P.y + dy;
    const e = thingAt(x, y);
    if (e && e.type !== "warp") return interact(x, y);
    if (propAt(x, y)) return interact(x, y);
    return null;
  }

  window.addEventListener("keydown", ev => {
    const k = ev.key;
    if (!$("title").hidden) {
      if (k === "Enter" || k === " ") { ev.preventDefault(); play(); }
      return;
    }
    if (!$("end").hidden) return;
    if (B) {
      const n = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k.toLowerCase());
      if (k.length === 1 && n >= 0 && B.picked === null) {
        const btn = $$("#b-opts .opt")[n];
        if (btn) btn.click();
        return;
      }
      if ((k === "Enter" || k === " ") && B.picked !== null && document.activeElement !== $("b-next")) { ev.preventDefault(); cont(); }
      return;
    }
    if (D) {
      if (k === "Enter" || k === " " || k === "e" || k === "E") { ev.preventDefault(); if (!ev.repeat) advance(); }
      else if (D.opts.choices && "123".includes(k) && k.length === 1) {
        const btn = $$("#dlg-choices button")[Number(k) - 1];
        if (btn) btn.click();
      }
      return;
    }
    if (!$("menu").hidden) {
      if (k === "Escape" || k === "m" || k === "M") closeMenu();
      return;
    }
    const dir = KEYS[k];
    if (dir) {
      ev.preventDefault();
      P.path = [];
      P.goal = null;
      if (!held.includes(dir)) held.push(dir);
      return;
    }
    if (k === " " || k === "Enter" || k === "e" || k === "E") { ev.preventDefault(); if (!ev.repeat) actionKey(); }
    else if (k === "Escape" || k === "m" || k === "M") openMenu();
  });
  window.addEventListener("keyup", ev => {
    const dir = KEYS[ev.key];
    if (!dir) return;
    const i = held.indexOf(dir);
    if (i >= 0) held.splice(i, 1);
  });
  window.addEventListener("blur", () => { held.length = 0; });

  canvas.addEventListener("pointerdown", ev => {
    if (busy() || !M || performance.now() - swallowTap < 100) return;
    unlockAudio();
    const tx = Math.floor((ev.clientX + cam.x) / TS), ty = Math.floor((ev.clientY + cam.y) / TS);
    if (tx < 0 || ty < 0 || tx >= M.w || ty >= M.h || (tx === P.x && ty === P.y)) return;
    tap = { x: tx, y: ty, at: performance.now() };
    held.length = 0;
    const e = thingAt(tx, ty), pr = propAt(tx, ty);
    if (e && e.type !== "warp") { goTo(tx, ty, e.type === "enemy" ? e : null); return; }
    if (pr) { goTo(pr.x + 1, pr.y + pr.h - 1, null); return; }
    const path = findPath(P.x, P.y, (x, y) => x === tx && y === ty);
    if (path) { P.path = path; P.goal = null; }
  });

  // ---------- start ----------
  let saved = null;

  function play() {
    if (started) return;
    started = true;
    MUSIC.setVolume(G.musicVol);
    unlockAudio();
    volumeUI();
    importPractice();
    $("title").hidden = true;
    if (G.hearts <= 0 || G.hearts > maxHearts()) G.hearts = maxHearts();
    enterMap(G.map, G.x, G.y, G.face);
    hud();
    save();
    if (!G.met.newt) setTimeout(talkNewt, 500);
  }

  on("t-play", "click", play);
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => { if (document.hidden) save(); });

  let last = performance.now();
  function loop(now) {
    const dt = Math.min(50, now - last);
    last = now;
    if (M) {
      update(dt);
      render(now);
    }
    requestAnimationFrame(loop);
  }

  async function boot() {
    resize();
    $("title-frog").innerHTML = ART.frogInline("Gabi the frog", "idle");
    await ART.load();
    saved = load();
    G = saved || fresh();
    enterMap(G.map, G.x, G.y, G.face, true);
    hud();
    $("t-play").textContent = saved ? "Continue adventure" : "Start adventure";
    $("t-reset").hidden = !saved;
    requestAnimationFrame(loop);
  }

  // A tiny handle for testing in the browser console.
  window.RQ = { get state() { return G; }, get map() { return M; }, player: P, enterMap, interact, encounter: e => encounter(e), answerBest: () => B && answer(B.q.c), cont: () => cont() };

  boot();
})();
