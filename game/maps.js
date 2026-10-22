// Ribbit Quest maps. Each world is drawn from simple shapes on a tile grid, then things are placed on it.
// Tiles: grass, flower, path, sand, water, pad, sunk (raised by a puzzle), lotus, bridge, gold (walkable with 4 lilies),
// tree, rock, house (under a building). Things: start, warp, sign, npc, spring, chest, enemy, boss, bell, stone, gate,
// bramble, owl, portal.
(() => {
  "use strict";

  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function grid(w, h, seed) {
    const g = { w, h, t: new Array(w * h).fill("grass"), things: [], props: [] };
    const rand = rng(seed);
    const inside = (x, y) => x >= 0 && y >= 0 && x < w && y < h;
    g.get = (x, y) => (inside(x, y) ? g.t[y * w + x] : "tree");
    g.set = (x, y, v) => { if (inside(x, y)) g.t[y * w + x] = v; };
    g.rect = (x0, y0, x1, y1, v) => {
      for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) g.set(x, y, v);
    };
    g.oval = (cx, cy, rx, ry, v) => {
      for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++)
        for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++)
          if (((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1) g.set(x, y, v);
    };
    g.frame = (v, k) => {
      g.rect(0, 0, w - 1, k - 1, v);
      g.rect(0, h - k, w - 1, h - 1, v);
      g.rect(0, 0, k - 1, h - 1, v);
      g.rect(w - k, 0, w - 1, h - 1, v);
    };
    g.add = (type, x, y, o) => { g.things.push(Object.assign({ type, x, y }, o || {})); };
    g.prop = (type, x, y, pw, ph, o) => {
      g.props.push(Object.assign({ type, x, y, w: pw, h: ph }, o || {}));
      g.rect(x, y, x + pw - 1, y + ph - 1, "house");
    };
    const nearThing = (x, y) => g.things.some(t => Math.abs(t.x - x) <= 1 && Math.abs(t.y - y) <= 1);
    // Scatter decoration. Trees and rocks never touch each other, so they can't wall anything off.
    g.sprinkle = (v, n, on = "grass") => {
      const solid = v === "tree" || v === "rock";
      for (let tries = 0; n > 0 && tries < 5000; tries++) {
        const x = Math.floor(rand() * w), y = Math.floor(rand() * h);
        if (g.get(x, y) !== on) continue;
        if (solid) {
          if (nearThing(x, y)) continue;
          let crowded = false;
          for (let dy = -1; dy <= 1 && !crowded; dy++)
            for (let dx = -1; dx <= 1; dx++) {
              const k = g.get(x + dx, y + dy);
              if ((dx || dy) && (k === "tree" || k === "rock" || k === "house")) { crowded = true; break; }
            }
          if (crowded) continue;
        }
        g.set(x, y, v);
        n--;
      }
    };
    g.done = meta => {
      delete g.get; delete g.set; delete g.rect; delete g.oval; delete g.frame;
      delete g.add; delete g.prop; delete g.sprinkle; delete g.done;
      return Object.assign(g, meta);
    };
    return g;
  }

  function hub() {
    const g = grid(32, 24, 7);
    g.rect(15, 0, 16, 23, "path");
    g.rect(0, 11, 31, 12, "path");
    g.oval(22, 17, 5.6, 3.6, "water");
    g.oval(22, 17.2, 1.8, 1.2, "grass");
    g.set(22, 14, "gold");
    g.set(22, 15, "gold");
    g.rect(5, 6, 5, 10, "path");
    g.rect(24, 6, 24, 10, "path");
    g.frame("tree", 2);
    g.rect(15, 0, 16, 1, "path");
    g.rect(15, 22, 16, 23, "path");
    g.rect(0, 11, 1, 12, "path");
    g.rect(30, 11, 31, 12, "path");
    g.prop("house", 4, 4, 3, 2);
    g.prop("shop", 23, 4, 3, 2);

    g.add("start", 5, 7);
    g.add("npc", 8, 9, { who: "newt" });
    g.add("npc", 26, 7, { who: "snail" });
    g.add("spring", 11, 15);
    g.add("sign", 17, 3, { lines: ["North: Lotus Lagoon.", "Values & Ethics live there."] });
    g.add("sign", 27, 9, { lines: ["East: Lookout Lake.", "Assessment & Planning live there."] });
    g.add("sign", 14, 20, { lines: ["South: Helping Grove.", "Intervention & Practice live there."] });
    g.add("sign", 4, 13, { lines: ["West: Lifespan Meadow.", "Human Development & Diversity live there."] });
    g.add("sign", 19, 13, { lines: ["The Exam Isle.", "They say a golden bridge appears for a frog with all four Golden Lilies."] });
    g.add("chest", 27, 21, { flies: 10 });
    g.add("portal", 22, 17, { to: "isle", at: [13, 15], face: "up" });
    g.add("warp", 15, 0, { to: "ethics", at: [17, 23], face: "up" });
    g.add("warp", 16, 0, { to: "ethics", at: [18, 23], face: "up" });
    g.add("warp", 31, 11, { to: "assess", at: [2, 12], face: "right" });
    g.add("warp", 31, 12, { to: "assess", at: [2, 13], face: "right" });
    g.add("warp", 15, 23, { to: "interv", at: [17, 2], face: "down" });
    g.add("warp", 16, 23, { to: "interv", at: [18, 2], face: "down" });
    g.add("warp", 0, 11, { to: "human", at: [33, 12], face: "left" });
    g.add("warp", 0, 12, { to: "human", at: [33, 13], face: "left" });
    g.sprinkle("tree", 16);
    g.sprinkle("flower", 45);
    return g.done({ id: "hub", name: "Home Pond", sub: "Your village", theme: "hub", cat: null, start: [5, 7] });
  }

  function ethics() {
    const g = grid(36, 26, 11);
    g.oval(18, 6, 14, 5.6, "water");
    g.oval(18, 4.6, 3.8, 2.5, "grass");
    const pads = [[18, 11], [18, 10], [18, 9], [18, 8]];
    pads.forEach(([x, y]) => g.set(x, y, "sunk"));
    g.rect(17, 12, 18, 25, "path");
    g.frame("tree", 2);
    g.rect(17, 24, 18, 25, "path");

    g.add("bell", 16, 12);
    g.add("boss", 18, 4, { boss: "crab" });
    g.add("spring", 14, 21);
    g.add("sign", 20, 21, { lines: ["Lotus Lagoon · Values & Ethics", "The Boundary Crab is hiding on the island.", "Ring the Lotus Bell with a right answer to raise each sunken lily pad."] });
    [[7, 15], [11, 19], [25, 15], [29, 19], [8, 22], [27, 22]].forEach(([x, y]) => g.add("enemy", x, y));
    g.add("chest", 3, 14, { snack: 1 });
    g.add("chest", 32, 22, { flies: 12 });
    g.add("warp", 17, 25, { to: "hub", at: [15, 2], face: "down" });
    g.add("warp", 18, 25, { to: "hub", at: [16, 2], face: "down" });
    g.sprinkle("lotus", 16, "water");
    g.sprinkle("tree", 14);
    g.sprinkle("flower", 40);
    return g.done({ id: "ethics", name: "Lotus Lagoon", sub: "Values & Ethics", theme: "ethics", cat: "ethics", pads });
  }

  function assess() {
    const g = grid(36, 26, 23);
    g.rect(0, 12, 9, 13, "path");
    g.rect(8, 6, 9, 19, "path");
    g.rect(8, 6, 26, 7, "path");
    g.rect(8, 18, 26, 19, "path");
    g.rect(25, 6, 26, 19, "path");
    g.oval(17, 12.5, 6.2, 4.3, "water");
    g.rect(27, 2, 27, 23, "rock");
    g.set(27, 12, "path");
    g.rect(28, 12, 30, 13, "path");
    g.frame("tree", 2);
    g.rect(0, 12, 1, 13, "path");

    g.add("gate", 27, 12);
    g.add("boss", 31, 12, { boss: "turtle" });
    g.add("stone", 4, 4);
    g.add("stone", 16, 22);
    g.add("stone", 22, 3);
    g.add("spring", 3, 9);
    g.add("sign", 5, 15, { lines: ["Lookout Lake · Assessment & Planning", "Good assessments use more than one source.", "Light all three Clue Stones to open the Lookout Gate."] });
    [[12, 4], [20, 4], [13, 21], [21, 21], [23, 10], [5, 20]].forEach(([x, y]) => g.add("enemy", x, y));
    g.add("chest", 2, 23, { flies: 10 });
    g.add("chest", 33, 3, { snack: 1 });
    g.add("warp", 0, 12, { to: "hub", at: [29, 11], face: "left" });
    g.add("warp", 0, 13, { to: "hub", at: [29, 12], face: "left" });
    g.sprinkle("rock", 10);
    g.sprinkle("tree", 12);
    g.sprinkle("flower", 30);
    return g.done({ id: "assess", name: "Lookout Lake", sub: "Assessment & Planning", theme: "assess", cat: "assess" });
  }

  function interv() {
    const g = grid(36, 26, 31);
    g.rect(0, 0, 35, 25, "tree");
    g.rect(13, 2, 22, 7, "grass");
    g.rect(17, 0, 18, 10, "path");
    g.rect(5, 9, 30, 10, "path");
    g.oval(7.5, 5.2, 5, 3, "grass");
    g.oval(28.5, 5.2, 5, 3, "grass");
    g.oval(7.5, 17.5, 5, 3.6, "grass");
    g.oval(28.5, 17.5, 5, 3.6, "grass");
    g.rect(7, 7, 8, 8, "path");
    g.rect(28, 7, 29, 8, "path");
    g.rect(7, 11, 8, 14, "path");
    g.rect(28, 11, 29, 14, "path");
    g.oval(18, 21.4, 4.6, 2.6, "grass");
    g.rect(18, 11, 18, 19, "path");
    g.frame("tree", 2);
    g.rect(17, 0, 18, 1, "path");

    [12, 14, 16, 18].forEach(y => g.add("bramble", 18, y));
    g.add("boss", 18, 22, { boss: "fox" });
    g.add("spring", 14, 4);
    g.add("sign", 21, 4, { lines: ["Helping Grove · Intervention & Practice", "Brambles block the path to the Quick-Fix Fox.", "Clear them one right answer at a time."] });
    [[6, 5], [29, 5], [6, 17], [10, 19], [26, 17], [30, 19]].forEach(([x, y]) => g.add("enemy", x, y));
    g.add("chest", 4, 19, { snack: 1 });
    g.add("chest", 32, 17, { flies: 12 });
    g.add("warp", 17, 0, { to: "hub", at: [15, 21], face: "up" });
    g.add("warp", 18, 0, { to: "hub", at: [16, 21], face: "up" });
    g.sprinkle("flower", 30);
    return g.done({ id: "interv", name: "Helping Grove", sub: "Intervention & Practice", theme: "interv", cat: "interv" });
  }

  function human() {
    const g = grid(36, 26, 47);
    g.rect(10, 0, 11, 25, "water");
    g.rect(12, 12, 35, 13, "path");
    g.set(10, 12, "bridge");
    g.set(11, 12, "bridge");
    g.rect(4, 12, 9, 12, "path");
    g.oval(24, 20, 3, 1.6, "water");
    g.frame("tree", 2);
    g.rect(34, 12, 35, 13, "path");

    g.add("owl", 12, 12, { perch: [12, 10] });
    g.add("boss", 4, 12, { boss: "caterpillar" });
    g.add("spring", 31, 9);
    g.add("sign", 30, 15, { lines: ["Lifespan Meadow · Human Development & Diversity", "The Wise Owl guards the bridge.", "Answer three in a row to cross. Development builds step by step!"] });
    [[16, 5], [22, 8], [27, 4], [17, 19], [21, 16], [29, 21]].forEach(([x, y]) => g.add("enemy", x, y));
    g.add("chest", 3, 4, { flies: 15 });
    g.add("chest", 32, 22, { snack: 1 });
    g.add("warp", 35, 12, { to: "hub", at: [2, 11], face: "right" });
    g.add("warp", 35, 13, { to: "hub", at: [2, 12], face: "right" });
    g.set(23, 20, "pad");
    g.set(25, 19, "pad");
    g.sprinkle("tree", 14);
    g.sprinkle("flower", 45);
    return g.done({ id: "human", name: "Lifespan Meadow", sub: "Human Development & Diversity", theme: "human", cat: "human" });
  }

  function isle() {
    const g = grid(26, 20, 59);
    g.rect(0, 0, 25, 19, "water");
    g.oval(13, 10, 10, 7.2, "grass");
    g.rect(13, 7, 13, 16, "path");
    g.rect(10, 3, 16, 5, "sand");

    g.add("boss", 13, 4, { boss: "toad" });
    g.add("portal", 13, 17, { to: "hub", at: [22, 16], face: "down" });
    g.add("spring", 9, 14);
    [[7, 10], [19, 10], [9, 7], [17, 7]].forEach(([x, y]) => g.add("enemy", x, y));
    g.sprinkle("tree", 8);
    g.sprinkle("flower", 30);
    return g.done({ id: "isle", name: "Exam Isle", sub: "The final test", theme: "isle", cat: null });
  }

  window.RQ_MAPS = { hub: hub(), ethics: ethics(), assess: assess(), interv: interv(), human: human(), isle: isle() };
})();
