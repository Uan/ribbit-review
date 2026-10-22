// Ribbit Quest art: characters and props are SVG, ground tiles and trees are painted on canvas.
// Everything is cached per tile size, so each frame only copies small bitmaps.
(() => {
  "use strict";

  // ---------- palettes per world ----------
  const BASE = {
    grass: "#a9dc8f", grass2: "#8fcb74", path: "#ecd9a8", path2: "#d6bd85", sand: "#f3e1a8", sand2: "#e3cb86",
    water: "#86cfe0", water2: "#c4ecf4", leaf: "#6fbf5d", leaf2: "#4e9a45", leafHi: "#a6dc8c", trunk: "#8a6238",
    rock: "#b9b3a5", rock2: "#8d8678", flowers: ["#f4a7b9", "#ffd76a", "#fffdf6"], tree: "round", outside: "#4e9a45"
  };
  const THEMES = {
    hub: {},
    ethics: { grass: "#ade19c", grass2: "#93cf84", leaf: "#f7b6c8", leaf2: "#e27d96", leafHi: "#ffdbe5", flowers: ["#f4a7b9", "#ef8a9a", "#fffdf6"], tree: "blossom", outside: "#5f9f55" },
    assess: { grass: "#a4dab6", grass2: "#88c89e", leaf: "#4fae9f", leaf2: "#2d7f76", leafHi: "#8fd3c8", flowers: ["#9bd0f5", "#fffdf6", "#ffd76a"], tree: "pine", rock: "#aab4bd", rock2: "#6f7b86", outside: "#3d8a78" },
    interv: { grass: "#9fd57f", grass2: "#84c464", leaf: "#5fb24f", leaf2: "#3f7f37", leafHi: "#93d47a", flowers: ["#ffd76a", "#fffdf6", "#f6a85a"], tree: "round", outside: "#356f2f" },
    human: { grass: "#b8df9e", grass2: "#9ccf82", leaf: "#c3a6f0", leaf2: "#8c6fd0", leafHi: "#e6dafc", flowers: ["#c3a6f0", "#fffdf6", "#f4a7b9"], tree: "wisteria", outside: "#679f58" },
    isle: { grass: "#c8e494", grass2: "#acd377", water: "#6fc3dc", water2: "#b5e8f3", leaf: "#7cc46a", leaf2: "#4e9a45", leafHi: "#b8e39a", flowers: ["#ffd76a", "#fff0c2", "#f6a85a"], tree: "palm", outside: "#5bb5d0" }
  };
  const theme = id => Object.assign({ id }, BASE, THEMES[id] || {});

  // ---------- the frog (same art as the quiz) ----------
  const SIL = '<ellipse cx="40" cy="168" rx="25" ry="16"/><ellipse cx="160" cy="168" rx="25" ry="16"/>' +
    '<path d="M100 64C146 64 168 98 168 136C168 170 140 186 100 186C60 186 32 170 32 136C32 98 54 64 100 64Z"/>' +
    '<ellipse cx="76" cy="183" rx="15" ry="7"/><ellipse cx="124" cy="183" rx="15" ry="7"/>' +
    '<circle cx="66" cy="186" r="4.2"/><circle cx="76" cy="188.5" r="4.2"/><circle cx="86" cy="186" r="4.2"/>' +
    '<circle cx="114" cy="186" r="4.2"/><circle cx="124" cy="188.5" r="4.2"/><circle cx="134" cy="186" r="4.2"/>' +
    '<circle cx="66" cy="70" r="24"/><circle cx="134" cy="70" r="24"/>';
  const CAP = '<path d="M80 45H120L118 68Q100 74 82 68Z" fill="#3b3a44"/>' +
    '<path d="M58 42L100 53L142 42V45.5L100 56.5L58 45.5Z" fill="#18171d"/>' +
    '<path d="M100 31L142 42L100 53L58 42Z" fill="#3b3a44"/>' +
    '<path d="M61 41.4L100 31.6L139 41.4" fill="none" stroke="#6a6976" stroke-width="2" stroke-linecap="round"/>';
  const TASSEL = '<circle cx="100" cy="42" r="3.2" fill="#ffd76a"/>' +
    '<path d="M100 42L139 42.6Q146 43.2 148.5 49" fill="none" stroke="#ffd76a" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M144 49.5h9l1.8 10.5h-12.6z" fill="#ffd76a" stroke="#b8901f" stroke-width="1.5" stroke-linejoin="round"/>';
  const eyeImg = (cx, ix, s1, s2) =>
    `<circle cx="${cx}" cy="70" r="17.76" fill="#fff"/><circle cx="${ix}" cy="71.44" r="12" fill="#6a4527"/>` +
    `<circle cx="${ix}" cy="71.44" r="7.2" fill="#2a1e14"/><circle cx="${s1}" cy="66.64" r="3.84" fill="#fff"/>` +
    `<circle cx="${s2}" cy="75.28" r="1.8" fill="#fff"/>`;
  const FROG_IMG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
    '<ellipse cx="100" cy="191" rx="72" ry="7" fill="#3b2a1a" opacity=".16"/>' + CAP +
    '<g fill="#3f7f37" stroke="#3f7f37" stroke-width="7" stroke-linejoin="round">' + SIL + '</g>' +
    '<g fill="#7cc46a">' + SIL + '</g>' +
    '<ellipse cx="100" cy="148" rx="42" ry="31" fill="#d9f1bd"/>' +
    '<ellipse cx="57.84" cy="56.56" rx="7.2" ry="3.84" fill="#fff" opacity=".4" transform="rotate(-28 57.84 56.56)"/>' +
    eyeImg(66, 67.92, 63.84, 72.24) + eyeImg(134, 132.08, 128, 136.4) +
    '<ellipse cx="56" cy="114" rx="11" ry="6.5" fill="#f4a7b9" opacity=".85"/><ellipse cx="144" cy="114" rx="11" ry="6.5" fill="#f4a7b9" opacity=".85"/>' +
    '<circle cx="94" cy="104" r="1.9" fill="#3f7f37"/><circle cx="106" cy="104" r="1.9" fill="#3f7f37"/>' +
    '<path d="M89 116Q100 126 111 116" fill="none" stroke="#3b2a1a" stroke-width="3.6" stroke-linecap="round"/>' +
    TASSEL + '</svg>';

  // Class-based copy for HTML portraits, so CSS can switch moods (idle, happy, oops, cheer).
  const eyeCss = (cx, ix, s1, s2) =>
    `<g class="e-open"><circle class="white" cx="${cx}" cy="70" r="17.76"/><circle class="iris" cx="${ix}" cy="71.44" r="12"/>` +
    `<circle class="pupil" cx="${ix}" cy="71.44" r="7.2"/><circle class="white" cx="${s1}" cy="66.64" r="3.84"/>` +
    `<circle class="white" cx="${s2}" cy="75.28" r="1.8"/></g>`;
  const frogInline = (label, mood) =>
    `<svg class="frog" viewBox="0 0 200 200" data-mood="${mood || "idle"}" role="img" aria-label="${label || "Gabi the frog"}">` +
    '<ellipse class="shadow" cx="100" cy="191" rx="72" ry="7"/><g class="bob">' + CAP +
    '<g class="sil-line">' + SIL + '</g><g class="sil-fill">' + SIL + '</g>' +
    '<ellipse class="belly" cx="100" cy="148" rx="42" ry="31"/>' +
    '<ellipse class="shine" cx="57.84" cy="56.56" rx="7.2" ry="3.84" transform="rotate(-28 57.84 56.56)"/>' +
    eyeCss(66, 67.92, 63.84, 72.24) + eyeCss(134, 132.08, 128, 136.4) +
    '<path class="e-happy" d="M54.96 72.88Q66 58 77.04 72.88M122.96 72.88Q134 58 145.04 72.88"/>' +
    '<ellipse class="cheek" cx="56" cy="114" rx="11" ry="6.5"/><ellipse class="cheek" cx="144" cy="114" rx="11" ry="6.5"/>' +
    '<circle class="nostril" cx="94" cy="104" r="1.9"/><circle class="nostril" cx="106" cy="104" r="1.9"/>' +
    '<path class="m-smile" d="M89 116Q100 126 111 116"/>' +
    '<g class="m-grin"><path d="M86 114Q100 134 114 114Z"/><ellipse cx="100" cy="122" rx="6" ry="3.2"/></g>' +
    '<ellipse class="m-o" cx="100" cy="119" rx="4.2" ry="5.2"/>' +
    '<path class="drop" d="M30 50c-4 6-6 9-6 12a6 6 0 0 0 12 0c0-3-2-6-6-12z"/>' + TASSEL + '</g></svg>';

  // ---------- characters and props (viewBox 0 0 100 100 unless noted) ----------
  const svg = body => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' + body + '</svg>';
  const shadow = (rx, cy) => `<ellipse cx="50" cy="${cy || 92}" rx="${rx}" ry="5" fill="#3b2a1a" opacity=".16"/>`;
  const eyes = (x1, x2, y, r, ink) =>
    `<circle cx="${x1}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x2}" cy="${y}" r="${r}" fill="#fff"/>` +
    `<circle cx="${x1 + r * 0.15}" cy="${y + r * 0.15}" r="${r * 0.52}" fill="${ink || "#2a1e14"}"/><circle cx="${x2 + r * 0.15}" cy="${y + r * 0.15}" r="${r * 0.52}" fill="${ink || "#2a1e14"}"/>` +
    `<circle cx="${x1 - r * 0.2}" cy="${y - r * 0.25}" r="${r * 0.2}" fill="#fff"/><circle cx="${x2 - r * 0.2}" cy="${y - r * 0.25}" r="${r * 0.2}" fill="#fff"/>`;
  const crown = (x, y, s) => {
    const k = s || 1;
    const p = [[-12, 10], [-8, 0], [-3, 6], [0, -2], [3, 6], [8, 0], [12, 10]].map(([a, b]) => `${x + a * k} ${y + b * k}`).join("L");
    return `<path d="M${p}Z" fill="#ffd76a" stroke="#b8901f" stroke-width="2.5" stroke-linejoin="round"/><circle cx="${x}" cy="${y + 6 * k}" r="${1.8 * k}" fill="#ef8a7a"/>`;
  };

  const SVG = {
    frog: FROG_IMG,

    // critters
    blob: svg(shadow(34, 91) +
      '<path d="M14 84C10 58 28 28 50 28S90 58 86 84Q50 94 14 84Z" fill="#f4a7b9" stroke="#b85a73" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M27 50Q31 40 41 38" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/>' +
      '<rect x="25" y="50" width="50" height="15" rx="7.5" fill="#5a2a3a"/>' + eyes(39, 61, 57.5, 5.5) +
      '<path d="M43 73Q50 78 57 73" fill="none" stroke="#7a2941" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="29" cy="72" rx="5" ry="3" fill="#ef8a9a"/><ellipse cx="71" cy="72" rx="5" ry="3" fill="#ef8a9a"/>'),
    slug: svg(shadow(38, 91) +
      '<path d="M10 84Q10 72 26 70H64Q76 70 78 80Q80 88 70 88H18Q10 88 10 84Z" fill="#8fd3c8" stroke="#3e8f83" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M22 78Q30 74 38 78M42 78Q50 74 56 78" fill="none" stroke="#c6f0e9" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M58 74Q52 44 70 40Q88 38 88 58Q88 76 74 80Z" fill="#8fd3c8" stroke="#3e8f83" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M66 44L60 24M80 42L84 22" stroke="#3e8f83" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="59" cy="20" r="7.5" fill="#fff" stroke="#3e8f83" stroke-width="3"/><circle cx="85" cy="18" r="7.5" fill="#fff" stroke="#3e8f83" stroke-width="3"/>' +
      '<circle cx="60" cy="21" r="3.4" fill="#2a1e14"/><circle cx="86" cy="19" r="3.4" fill="#2a1e14"/>' +
      '<path d="M68 62Q74 67 80 62" fill="none" stroke="#0e4a43" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="64" cy="56" rx="3.5" ry="2.2" fill="#f4a7b9"/><ellipse cx="84" cy="56" rx="3.5" ry="2.2" fill="#f4a7b9"/>'),
    beetle: svg(shadow(30) +
      '<path d="M26 58L12 52M24 70L10 74M74 58L88 52M76 70L90 74" stroke="#3f7f37" stroke-width="4" stroke-linecap="round"/>' +
      '<ellipse cx="50" cy="64" rx="28" ry="25" fill="#7cc46a" stroke="#3f7f37" stroke-width="4"/>' +
      '<path d="M50 42V88" stroke="#3f7f37" stroke-width="3"/>' +
      '<circle cx="38" cy="62" r="4" fill="#4e9a45"/><circle cx="62" cy="62" r="4" fill="#4e9a45"/><circle cx="40" cy="76" r="3" fill="#4e9a45"/><circle cx="60" cy="76" r="3" fill="#4e9a45"/>' +
      '<path d="M30 54Q35 46 43 45" fill="none" stroke="#c8f0b8" stroke-width="3.5" stroke-linecap="round"/>' +
      '<ellipse cx="50" cy="36" rx="18" ry="14" fill="#4e9a45" stroke="#3f7f37" stroke-width="4"/>' +
      '<path d="M42 24Q36 12 28 12M58 24Q64 12 72 12" fill="none" stroke="#3f7f37" stroke-width="3.5" stroke-linecap="round"/>' +
      '<circle cx="27" cy="12" r="3.5" fill="#3f7f37"/><circle cx="73" cy="12" r="3.5" fill="#3f7f37"/>' + eyes(43, 57, 35, 5.5) +
      '<path d="M45 44Q50 47 55 44" fill="none" stroke="#1b4317" stroke-width="2.5" stroke-linecap="round"/>'),
    moth: svg(shadow(26) +
      '<ellipse cx="30" cy="44" rx="22" ry="17" transform="rotate(-20 30 44)" fill="#c3a6f0" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<ellipse cx="70" cy="44" rx="22" ry="17" transform="rotate(20 70 44)" fill="#c3a6f0" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<ellipse cx="34" cy="70" rx="15" ry="12" transform="rotate(25 34 70)" fill="#ddd0f8" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<ellipse cx="66" cy="70" rx="15" ry="12" transform="rotate(-25 66 70)" fill="#ddd0f8" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<circle cx="26" cy="42" r="6" fill="#f4a7b9"/><circle cx="74" cy="42" r="6" fill="#f4a7b9"/>' +
      '<ellipse cx="50" cy="62" rx="10" ry="22" fill="#8a6cc9" stroke="#4b2d7f" stroke-width="3.5"/>' +
      '<circle cx="50" cy="36" r="13" fill="#8a6cc9" stroke="#4b2d7f" stroke-width="3.5"/>' +
      '<path d="M45 25Q40 12 32 10M55 25Q60 12 68 10" fill="none" stroke="#4b2d7f" stroke-width="3" stroke-linecap="round"/>' +
      eyes(45, 55, 35, 4.5) + '<path d="M46 42Q50 45 54 42" fill="none" stroke="#2a1e14" stroke-width="2" stroke-linecap="round"/>'),

    // bosses
    crab: svg(shadow(40) +
      '<path d="M26 72L10 80M28 78L16 90M74 72L90 80M72 78L84 90" stroke="#c9604f" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M28 60Q16 52 16 40M72 60Q84 52 84 40" fill="none" stroke="#c9604f" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M8 36Q8 20 20 18Q28 18 26 28L18 32L26 36Q22 46 12 44Q8 42 8 36Z" fill="#ef8a7a" stroke="#a8402f" stroke-width="3.5" stroke-linejoin="round"/>' +
      '<path d="M92 36Q92 20 80 18Q72 18 74 28L82 32L74 36Q78 46 88 44Q92 42 92 36Z" fill="#ef8a7a" stroke="#a8402f" stroke-width="3.5" stroke-linejoin="round"/>' +
      '<ellipse cx="50" cy="68" rx="30" ry="20" fill="#ef8a7a" stroke="#a8402f" stroke-width="4"/>' +
      '<path d="M42 50V38M58 50V38" stroke="#a8402f" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="42" cy="34" r="7" fill="#fff" stroke="#a8402f" stroke-width="3"/><circle cx="58" cy="34" r="7" fill="#fff" stroke="#a8402f" stroke-width="3"/>' +
      '<circle cx="43" cy="35" r="3.2" fill="#2a1e14"/><circle cx="59" cy="35" r="3.2" fill="#2a1e14"/>' +
      '<path d="M35 25L47 29M65 25L53 29" stroke="#6a1c12" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M42 72Q50 66 58 72" fill="none" stroke="#6a1c12" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="32" cy="70" rx="4.5" ry="2.8" fill="#f4a7b9"/><ellipse cx="68" cy="70" rx="4.5" ry="2.8" fill="#f4a7b9"/>' + crown(50, 12, 0.9)),
    turtle: svg(shadow(40) +
      '<ellipse cx="24" cy="80" rx="10" ry="7" fill="#a8e0cf" stroke="#2d7f76" stroke-width="3.5"/><ellipse cx="76" cy="80" rx="10" ry="7" fill="#a8e0cf" stroke="#2d7f76" stroke-width="3.5"/>' +
      '<path d="M12 66Q12 26 50 24Q88 26 88 66Z" fill="#4fae9f" stroke="#2d7f76" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M50 32L62 39V53L50 60L38 53V39Z" fill="#8fd3c8" opacity=".7"/>' +
      '<path d="M24 48L34 44L36 58L26 62ZM76 48L66 44L64 58L74 62Z" fill="#8fd3c8" opacity=".55"/>' +
      '<rect x="8" y="62" width="84" height="9" rx="4.5" fill="#2d7f76"/>' +
      '<ellipse cx="50" cy="80" rx="17" ry="13" fill="#a8e0cf" stroke="#2d7f76" stroke-width="4"/>' + eyes(43.5, 56.5, 78, 4.6) +
      '<path d="M38 70L47 73M62 70L53 73" stroke="#0e4a43" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M45 86L50 89L55 86" fill="none" stroke="#0e4a43" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' + crown(50, 16, 0.85)),
    fox: svg(shadow(36) +
      '<path d="M68 82Q96 76 92 50Q90 42 84 48Q84 68 64 72Z" fill="#f6a85a" stroke="#b06a22" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M88 50Q92 44 86 44Q83 47 84 50Z" fill="#fff4e6"/>' +
      '<ellipse cx="48" cy="74" rx="22" ry="17" fill="#f6a85a" stroke="#b06a22" stroke-width="4"/><ellipse cx="48" cy="78" rx="12" ry="10" fill="#fff4e6"/>' +
      '<path d="M22 42Q22 24 32 14L40 30H56L64 14Q74 24 74 42Q74 60 48 64Q22 60 22 42Z" fill="#f6a85a" stroke="#b06a22" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M31 21L37 30H30ZM65 21L59 30H66Z" fill="#fbe3ea"/>' +
      '<path d="M33 48Q48 68 63 48Q56 54 48 54Q40 54 33 48Z" fill="#fff4e6"/>' +
      '<path d="M32 40Q37 35 43 40M53 40Q59 35 64 40" fill="none" stroke="#2a1e14" stroke-width="3.5" stroke-linecap="round"/>' +
      '<ellipse cx="48" cy="51" rx="4" ry="3" fill="#2a1e14"/>' +
      '<path d="M42 57Q48 60 56 55" fill="none" stroke="#2a1e14" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="30" cy="50" rx="4" ry="2.5" fill="#f4a7b9"/><ellipse cx="66" cy="50" rx="4" ry="2.5" fill="#f4a7b9"/>' +
      '<g transform="rotate(-30 22 78)"><rect x="18" y="66" width="7" height="24" rx="3" fill="#c3ccd4" stroke="#5e6a75" stroke-width="2.5"/>' +
      '<path d="M14 66Q14 58 21.5 58Q29 58 29 66H25V62H18V66Z" fill="#c3ccd4" stroke="#5e6a75" stroke-width="2.5" stroke-linejoin="round"/></g>' + crown(48, 8, 0.75)),
    caterpillar: svg(shadow(42) +
      '<path d="M84 86v4M68 86v4M52 86v4M36 86v4" stroke="#4b2d7f" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="84" cy="74" r="11" fill="#c3a6f0" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<circle cx="68" cy="72" r="13" fill="#c3a6f0" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<circle cx="52" cy="74" r="13" fill="#c3a6f0" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<circle cx="36" cy="70" r="14" fill="#c3a6f0" stroke="#6c55a8" stroke-width="3.5"/>' +
      '<circle cx="68" cy="68" r="4" fill="#e6dafc"/><circle cx="52" cy="70" r="4" fill="#e6dafc"/><circle cx="84" cy="70" r="3.5" fill="#e6dafc"/>' +
      '<path d="M18 36Q12 22 8 16M32 34Q36 20 40 14" fill="none" stroke="#4b2d7f" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="8" cy="15" r="4" fill="#f4a7b9"/><circle cx="40" cy="13" r="4" fill="#f4a7b9"/>' +
      '<circle cx="25" cy="50" r="19" fill="#ddd0f8" stroke="#6c55a8" stroke-width="3.5"/>' + eyes(19, 31, 48, 5) +
      '<path d="M18 58Q25 62 32 57" fill="none" stroke="#4b2d7f" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="13" cy="56" rx="3.5" ry="2.2" fill="#f4a7b9"/><ellipse cx="37" cy="56" rx="3.5" ry="2.2" fill="#f4a7b9"/>' + crown(25, 24, 0.8)),
    toad: svg(shadow(44) +
      '<path d="M8 84Q6 50 30 40Q50 32 70 40Q94 50 92 84Q50 94 8 84Z" fill="#c9a24a" stroke="#7a5a1c" stroke-width="4" stroke-linejoin="round"/>' +
      '<ellipse cx="50" cy="76" rx="27" ry="14" fill="#f3e1a8"/>' +
      '<circle cx="32" cy="40" r="13" fill="#c9a24a" stroke="#7a5a1c" stroke-width="4"/><circle cx="68" cy="40" r="13" fill="#c9a24a" stroke="#7a5a1c" stroke-width="4"/>' +
      eyes(32, 68, 40, 8.5) +
      '<path d="M22 37Q32 30 42 37M58 37Q68 30 78 37" fill="none" stroke="#7a5a1c" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="18" cy="66" r="2.6" fill="#a8822f"/><circle cx="26" cy="74" r="2" fill="#a8822f"/><circle cx="82" cy="66" r="2.6" fill="#a8822f"/><circle cx="76" cy="75" r="2" fill="#a8822f"/>' +
      '<path d="M30 60Q50 72 70 60" fill="none" stroke="#5a3f12" stroke-width="3.5" stroke-linecap="round"/>' +
      '<ellipse cx="22" cy="56" rx="5" ry="3" fill="#ef8a9a" opacity=".8"/><ellipse cx="78" cy="56" rx="5" ry="3" fill="#ef8a9a" opacity=".8"/>' +
      '<g transform="rotate(35 84 30)"><rect x="80" y="14" width="7" height="28" fill="#ffd76a" stroke="#b8901f" stroke-width="2"/>' +
      '<path d="M80 42L83.5 50L87 42Z" fill="#f3e1a8" stroke="#b8901f" stroke-width="2" stroke-linejoin="round"/><rect x="80" y="10" width="7" height="5" fill="#f4a7b9" stroke="#b85a73" stroke-width="1.5"/></g>' +
      crown(50, 16, 1.2)),

    // friends
    newt: svg(shadow(30, 93) +
      '<path d="M64 82Q88 84 90 66Q91 58 84 60Q82 74 64 74Z" fill="#f6a85a" stroke="#b06a22" stroke-width="3" stroke-linejoin="round"/>' +
      '<ellipse cx="48" cy="74" rx="20" ry="17" fill="#f6a85a" stroke="#b06a22" stroke-width="3"/><ellipse cx="48" cy="78" rx="12" ry="10" fill="#ffe7cb"/>' +
      '<path d="M40 61L48 65L40 69ZM56 61L48 65L56 69Z" fill="#4fae9f" stroke="#2d7f76" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<ellipse cx="48" cy="40" rx="25" ry="20" fill="#f6a85a" stroke="#b06a22" stroke-width="3"/>' +
      '<circle cx="31" cy="30" r="2.5" fill="#e0893a"/><circle cx="64" cy="27" r="2.5" fill="#e0893a"/><circle cx="56" cy="22" r="1.8" fill="#e0893a"/>' +
      '<circle cx="38" cy="40" r="8.5" fill="#fff" stroke="#6e4d2d" stroke-width="2.5"/><circle cx="58" cy="40" r="8.5" fill="#fff" stroke="#6e4d2d" stroke-width="2.5"/>' +
      '<path d="M46.5 40h3" stroke="#6e4d2d" stroke-width="2.5"/><circle cx="39" cy="41" r="3.2" fill="#2a1e14"/><circle cx="59" cy="41" r="3.2" fill="#2a1e14"/>' +
      '<path d="M42 52Q48 56 54 52" fill="none" stroke="#6e2b1b" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="29" cy="49" rx="4" ry="2.5" fill="#f4a7b9"/><ellipse cx="67" cy="49" rx="4" ry="2.5" fill="#f4a7b9"/>'),
    snail: svg(shadow(38) +
      '<path d="M12 82Q10 70 24 70H72Q88 70 90 82Q90 89 81 89H20Q12 89 12 82Z" fill="#ffe1b0" stroke="#c99a5a" stroke-width="3.5" stroke-linejoin="round"/>' +
      '<path d="M18 74Q12 50 24 44Q38 40 40 58L38 72Z" fill="#ffe1b0" stroke="#c99a5a" stroke-width="3.5" stroke-linejoin="round"/>' +
      '<path d="M23 46L18 30M32 45L35 29" stroke="#c99a5a" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="18" cy="28" r="5.5" fill="#fff" stroke="#c99a5a" stroke-width="2.5"/><circle cx="35" cy="27" r="5.5" fill="#fff" stroke="#c99a5a" stroke-width="2.5"/>' +
      '<circle cx="19" cy="29" r="2.6" fill="#2a1e14"/><circle cx="36" cy="28" r="2.6" fill="#2a1e14"/>' +
      '<path d="M22 58Q28 62 34 57" fill="none" stroke="#8a6238" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="20" cy="54" rx="3" ry="2" fill="#f4a7b9"/>' +
      '<circle cx="62" cy="54" r="22" fill="#f4a7b9" stroke="#b85a73" stroke-width="3.5"/>' +
      '<path d="M62 54m-3 0a3 3 0 1 1 6 0a7 7 0 1 1 -12 -2a11 11 0 1 1 20 6a15 15 0 1 1 -26 -12" fill="none" stroke="#b85a73" stroke-width="3" stroke-linecap="round"/>'),
    owl: svg(shadow(28) +
      '<ellipse cx="50" cy="60" rx="28" ry="31" fill="#b98a5e" stroke="#6e4d2d" stroke-width="3.5"/>' +
      '<ellipse cx="25" cy="64" rx="8" ry="18" fill="#a1764d" stroke="#6e4d2d" stroke-width="3"/><ellipse cx="75" cy="64" rx="8" ry="18" fill="#a1764d" stroke="#6e4d2d" stroke-width="3"/>' +
      '<ellipse cx="50" cy="70" rx="17" ry="19" fill="#f1e3d3"/>' +
      '<path d="M42 66l4 4 4 -4 4 4 4 -4M44 76l3 3 3 -3 3 3 3 -3" fill="none" stroke="#c9a27a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="38" cy="46" r="13" fill="#f1e3d3"/><circle cx="62" cy="46" r="13" fill="#f1e3d3"/>' + eyes(38, 62, 46, 8.5) +
      '<path d="M46 54L54 54L50 62Z" fill="#f6a85a" stroke="#b06a22" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M40 90v4M46 90v4M54 90v4M60 90v4" stroke="#f6a85a" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M32 28L50 22L68 28L50 34Z" fill="#3b3a44"/><path d="M38 30H62V36Q50 40 38 36Z" fill="#3b3a44"/>' +
      '<path d="M50 28L66 30V38" fill="none" stroke="#ffd76a" stroke-width="2" stroke-linecap="round"/>'),

    // things in the world
    sign: svg(shadow(22) +
      '<rect x="45" y="48" width="10" height="44" rx="3" fill="#b07b4a" stroke="#6e4d2d" stroke-width="3"/>' +
      '<rect x="14" y="20" width="72" height="38" rx="9" fill="#e2b77c" stroke="#6e4d2d" stroke-width="3.5"/>' +
      '<path d="M27 33h46M27 45h32" stroke="#a57a48" stroke-width="4.5" stroke-linecap="round"/>'),
    chest: svg(shadow(34, 90) +
      '<rect x="16" y="46" width="68" height="40" rx="6" fill="#c98f52" stroke="#6e4d2d" stroke-width="4"/>' +
      '<path d="M16 46Q16 26 50 26Q84 26 84 46Z" fill="#d9a86c" stroke="#6e4d2d" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M30 30V86M70 30V86" stroke="#8a6238" stroke-width="3" opacity=".45"/>' +
      '<rect x="16" y="43" width="68" height="7" fill="#ffd76a" stroke="#b8901f" stroke-width="2.5"/>' +
      '<rect x="44" y="47" width="12" height="14" rx="3" fill="#ffd76a" stroke="#b8901f" stroke-width="2.5"/>'),
    chestOpen: svg(shadow(34, 90) +
      '<path d="M18 40Q18 14 50 12Q82 14 82 40Z" fill="#b8844a" stroke="#6e4d2d" stroke-width="4" stroke-linejoin="round"/>' +
      '<rect x="16" y="46" width="68" height="40" rx="6" fill="#c98f52" stroke="#6e4d2d" stroke-width="4"/>' +
      '<rect x="20" y="46" width="60" height="9" fill="#5a3f22"/>' +
      '<rect x="16" y="53" width="68" height="6" fill="#ffd76a" stroke="#b8901f" stroke-width="2.5"/>'),
    spring: svg('<ellipse cx="50" cy="86" rx="38" ry="8" fill="#3b2a1a" opacity=".14"/>' +
      '<ellipse cx="50" cy="70" rx="40" ry="19" fill="#d6cfbd" stroke="#857c6b" stroke-width="4"/>' +
      '<ellipse cx="50" cy="66" rx="30" ry="12" fill="#9be3ef" stroke="#5ea9dd" stroke-width="3"/>' +
      '<path d="M50 64V30" stroke="#9be3ef" stroke-width="7" stroke-linecap="round"/><circle cx="50" cy="27" r="7" fill="#d6f5fa"/>' +
      '<path d="M38 66q12 6 24 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>' +
      '<path d="M28 40l3 -7 3 7 -3 7zM70 32l3 -7 3 7 -3 7z" fill="#ffd76a"/>'),
    stone: svg(shadow(24, 90) +
      '<path d="M30 90Q26 40 50 14Q74 40 70 90Z" fill="#b5bec6" stroke="#5e6a75" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M50 40V66M40 52H60M43 45L57 59" stroke="#7a8590" stroke-width="4" stroke-linecap="round"/>'),
    stoneLit: svg('<circle cx="50" cy="52" r="40" fill="#8fd3c8" opacity=".35"/>' + shadow(24, 90) +
      '<path d="M30 90Q26 40 50 14Q74 40 70 90Z" fill="#c9e9e4" stroke="#2d7f76" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M50 40V66M40 52H60M43 45L57 59" stroke="#2bb3a2" stroke-width="4.5" stroke-linecap="round"/>'),
    gate: svg('<rect x="6" y="16" width="12" height="80" rx="3" fill="#8a6238" stroke="#5a3f22" stroke-width="3"/>' +
      '<rect x="82" y="16" width="12" height="80" rx="3" fill="#8a6238" stroke="#5a3f22" stroke-width="3"/>' +
      '<rect x="18" y="26" width="64" height="66" rx="4" fill="#c98f52" stroke="#6e4d2d" stroke-width="4"/>' +
      '<path d="M34 26V92M50 26V92M66 26V92" stroke="#8a6238" stroke-width="3"/>' +
      '<circle cx="50" cy="56" r="12" fill="#8fd3c8" stroke="#2d7f76" stroke-width="3"/><circle cx="50" cy="56" r="4" fill="#2d7f76"/>'),
    bramble: svg(shadow(38, 90) +
      '<path d="M10 86Q6 60 22 50Q20 30 40 28Q50 14 64 26Q84 24 84 46Q96 58 88 86Z" fill="#4e7a3a" stroke="#2f4f22" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M24 62l-8 -4M40 42l-6 -8M62 36l4 -9M78 56l9 -3M50 60l-3 -9M66 72l7 4M30 76l-7 5" stroke="#2f4f22" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="36" cy="58" r="4.5" fill="#9b6fd0"/><circle cx="58" cy="48" r="4.5" fill="#9b6fd0"/><circle cx="70" cy="66" r="4.5" fill="#9b6fd0"/><circle cx="46" cy="76" r="4" fill="#9b6fd0"/>'),
    bell: svg('<ellipse cx="44" cy="92" rx="20" ry="5" fill="#3b2a1a" opacity=".16"/>' +
      '<rect x="38" y="20" width="10" height="72" rx="3" fill="#b07b4a" stroke="#6e4d2d" stroke-width="3"/>' +
      '<path d="M44 24H76" stroke="#6e4d2d" stroke-width="5" stroke-linecap="round"/><path d="M76 26V33" stroke="#6e4d2d" stroke-width="3"/>' +
      '<path d="M62 56Q62 34 76 33Q90 34 90 56Z" fill="#f4a7b9" stroke="#b85a73" stroke-width="3.5" stroke-linejoin="round"/>' +
      '<circle cx="76" cy="59" r="4" fill="#ffd76a" stroke="#b8901f" stroke-width="2"/>' +
      '<path d="M67 42q3 -4 8 -4" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>'),
    portal: svg('<ellipse cx="50" cy="70" rx="42" ry="18" fill="#ffd76a" opacity=".35"/>' +
      '<ellipse cx="50" cy="70" rx="34" ry="13" fill="none" stroke="#e0b640" stroke-width="5"/>' +
      '<ellipse cx="50" cy="70" rx="22" ry="7" fill="#fff4cc" opacity=".85"/>' +
      '<path d="M50 64Q42 50 50 36Q58 50 50 64Z" fill="#ffd76a" stroke="#b8901f" stroke-width="2.5"/>' +
      '<path d="M50 64Q36 56 32 44Q46 46 50 64ZM50 64Q64 56 68 44Q54 46 50 64Z" fill="#ffe08a" stroke="#b8901f" stroke-width="2.5" stroke-linejoin="round"/>'),
    house: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 130">' +
      '<ellipse cx="75" cy="124" rx="70" ry="6" fill="#3b2a1a" opacity=".16"/>' +
      '<rect x="18" y="56" width="114" height="66" rx="8" fill="#fff4dd" stroke="#8a6238" stroke-width="4"/>' +
      '<path d="M6 62L75 10L144 62Z" fill="#f4a7b9" stroke="#b85a73" stroke-width="5" stroke-linejoin="round"/>' +
      '<circle cx="75" cy="40" r="9" fill="#fff4dd" stroke="#b85a73" stroke-width="3"/>' +
      '<rect x="62" y="80" width="26" height="42" rx="12" fill="#b07b4a" stroke="#6e4d2d" stroke-width="4"/>' +
      '<path d="M75 92c-4 -5 -9 -1 -6 3l6 6 6 -6c3 -4 -2 -8 -6 -3z" fill="#f4a7b9"/>' +
      '<rect x="28" y="72" width="24" height="20" rx="4" fill="#9bd0f5" stroke="#8a6238" stroke-width="3.5"/>' +
      '<rect x="98" y="72" width="24" height="20" rx="4" fill="#9bd0f5" stroke="#8a6238" stroke-width="3.5"/>' +
      '<path d="M40 72v20M28 82h24M110 72v20M98 82h24" stroke="#8a6238" stroke-width="2.5"/></svg>',
    shop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 130">' +
      '<ellipse cx="75" cy="124" rx="70" ry="6" fill="#3b2a1a" opacity=".16"/>' +
      '<rect x="18" y="56" width="114" height="66" rx="8" fill="#fff4dd" stroke="#8a6238" stroke-width="4"/>' +
      '<path d="M6 62L75 10L144 62Z" fill="#8fd3c8" stroke="#2d7f76" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M16 62H134V74Q127 82 120 74Q113 82 106 74Q99 82 92 74Q85 82 78 74Q71 82 64 74Q57 82 50 74Q43 82 36 74Q29 82 22 74Q16 80 16 74Z" fill="#fffdf6" stroke="#2d7f76" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="62" y="84" width="26" height="38" rx="12" fill="#b07b4a" stroke="#6e4d2d" stroke-width="4"/>' +
      '<rect x="26" y="84" width="28" height="20" rx="4" fill="#9bd0f5" stroke="#8a6238" stroke-width="3.5"/>' +
      '<rect x="96" y="84" width="28" height="20" rx="4" fill="#9bd0f5" stroke="#8a6238" stroke-width="3.5"/>' +
      '<circle cx="75" cy="40" r="11" fill="#fff4dd" stroke="#2d7f76" stroke-width="3"/>' +
      '<ellipse cx="71" cy="37" rx="4" ry="3" fill="#e3f2fc" stroke="#5e6a75" stroke-width="1.2"/><ellipse cx="79" cy="37" rx="4" ry="3" fill="#e3f2fc" stroke="#5e6a75" stroke-width="1.2"/>' +
      '<ellipse cx="75" cy="42" rx="3" ry="4" fill="#3b3a44"/></svg>'
  };

  // ---------- small icons for the HUD and menus (inline HTML) ----------
  const ICON = {
    heart: '<svg viewBox="0 0 24 22" aria-hidden="true"><path d="M12 20.5C5 15 1.2 11.5 1.2 7A5.3 5.3 0 0 1 12 4.6A5.3 5.3 0 0 1 22.8 7C22.8 11.5 19 15 12 20.5Z" fill="#ef6f8a" stroke="#a8324f" stroke-width="2"/><path d="M5 7q1-2.5 3.5-2.6" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".7"/></svg>',
    heartEmpty: '<svg viewBox="0 0 24 22" aria-hidden="true"><path d="M12 20.5C5 15 1.2 11.5 1.2 7A5.3 5.3 0 0 1 12 4.6A5.3 5.3 0 0 1 22.8 7C22.8 11.5 19 15 12 20.5Z" fill="#fbe3ea" stroke="#d29aa8" stroke-width="2"/></svg>',
    lily: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 34Q8 31 5 18Q16 18 20 27Q24 18 35 18Q32 31 20 34Z" fill="#ffd76a" stroke="#b8901f" stroke-width="2" stroke-linejoin="round"/><path d="M20 31Q11 22 20 5Q29 22 20 31Z" fill="#fff0c2" stroke="#b8901f" stroke-width="2" stroke-linejoin="round"/></svg>',
    lilyEmpty: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 34Q8 31 5 18Q16 18 20 27Q24 18 35 18Q32 31 20 34Z" fill="none" stroke="#c9b797" stroke-width="2" stroke-dasharray="3 3" stroke-linejoin="round"/><path d="M20 31Q11 22 20 5Q29 22 20 31Z" fill="none" stroke="#c9b797" stroke-width="2" stroke-dasharray="3 3" stroke-linejoin="round"/></svg>',
    fly: '<svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="13" cy="15" rx="8" ry="6" fill="#e3f2fc" stroke="#5e6a75" stroke-width="2" transform="rotate(-25 13 15)"/><ellipse cx="27" cy="15" rx="8" ry="6" fill="#e3f2fc" stroke="#5e6a75" stroke-width="2" transform="rotate(25 27 15)"/><ellipse cx="20" cy="25" rx="7" ry="9" fill="#3b3a44"/><circle cx="17" cy="20" r="2.2" fill="#ef6f6c"/><circle cx="23" cy="20" r="2.2" fill="#ef6f6c"/></svg>',
    snack: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="15" fill="#e2b77c" stroke="#8a6238" stroke-width="2.5"/><circle cx="14" cy="16" r="2.5" fill="#6e4d2d"/><circle cx="24" cy="13" r="2" fill="#6e4d2d"/><circle cx="25" cy="24" r="2.5" fill="#6e4d2d"/><circle cx="15" cy="26" r="2" fill="#6e4d2d"/></svg>',
    tea: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 16H30V24Q30 34 18.5 34Q7 34 7 24Z" fill="#fffdf6" stroke="#8a6238" stroke-width="2.5" stroke-linejoin="round"/><path d="M30 18Q37 18 37 23Q37 28 30 27" fill="none" stroke="#8a6238" stroke-width="2.5"/><ellipse cx="18.5" cy="17" rx="10" ry="2.6" fill="#a8d88a"/><path d="M14 10q2-3 0-6M21 10q2-3 0-6" stroke="#c9b797" stroke-width="2" fill="none" stroke-linecap="round"/></svg>'
  };

  // ---------- canvas painters ----------
  const TAU = Math.PI * 2;
  const WATERY = new Set(["water", "pad", "sunk", "lotus", "bridge", "gold", "goldOn"]);

  function grass(c, S, th, v) {
    c.fillStyle = th.grass;
    c.fillRect(0, 0, S, S);
    c.strokeStyle = th.grass2;
    c.lineWidth = Math.max(1.2, S / 24);
    c.lineCap = "round";
    c.lineJoin = "round";
    const spots = [[0.24, 0.32], [0.7, 0.24], [0.46, 0.7], [0.82, 0.7], [0.18, 0.78]];
    for (let i = 0; i < 2; i++) {
      const [px, py] = spots[(v + i * 2) % spots.length];
      const x = px * S, y = py * S, k = S * 0.06;
      c.beginPath();
      c.moveTo(x - k, y - k * 0.9);
      c.lineTo(x, y + k * 0.5);
      c.lineTo(x + k, y - k * 0.9);
      c.stroke();
    }
  }

  function flowers(c, S, th, v) {
    const spots = [[0.3, 0.35], [0.7, 0.62], [0.64, 0.24], [0.28, 0.74]];
    for (let i = 0; i < 2; i++) {
      const [px, py] = spots[(v + i) % 4];
      const col = th.flowers[(v + i) % th.flowers.length];
      const x = px * S, y = py * S, r = S * 0.055;
      c.fillStyle = col;
      for (let k = 0; k < 5; k++) {
        const a = (k * TAU) / 5;
        c.beginPath();
        c.arc(x + Math.cos(a) * r, y + Math.sin(a) * r, r * 0.85, 0, TAU);
        c.fill();
      }
      c.fillStyle = col === "#ffd76a" ? "#f6a85a" : "#ffd76a";
      c.beginPath();
      c.arc(x, y, r * 0.7, 0, TAU);
      c.fill();
    }
  }

  function dotted(c, S, fill, spot, v) {
    const spots = [[0.25, 0.3], [0.7, 0.55], [0.4, 0.78], [0.8, 0.2]];
    c.fillStyle = spot;
    for (let i = 0; i < 2; i++) {
      const [px, py] = spots[(v + i) % 4];
      c.beginPath();
      c.ellipse(px * S, py * S, S * 0.05, S * 0.035, 0, 0, TAU);
      c.fill();
    }
  }

  function water(c, S, th, f) {
    c.fillStyle = th.water;
    c.fillRect(0, 0, S, S);
    c.strokeStyle = th.water2;
    c.lineWidth = Math.max(1.2, S / 22);
    c.lineCap = "round";
    const drift = (f / 4) * S * 0.5;
    for (const [py, px] of [[0.3, 0.3], [0.72, 0.72]]) {
      const x = ((px * S + drift) % (S * 0.7)) + S * 0.15, y = py * S;
      c.beginPath();
      c.moveTo(x - S * 0.13, y);
      c.quadraticCurveTo(x, y - S * 0.07, x + S * 0.13, y);
      c.stroke();
    }
  }

  function lilyPad(c, S, fill, edge, cx, cy, r) {
    c.fillStyle = fill;
    c.strokeStyle = edge;
    c.lineWidth = Math.max(1.4, S / 22);
    c.beginPath();
    c.moveTo(cx, cy);
    c.arc(cx, cy, r, -0.9, TAU - 1.5);
    c.closePath();
    c.fill();
    c.stroke();
    c.lineWidth = Math.max(1, S / 40);
    c.beginPath();
    c.moveTo(cx, cy);
    c.lineTo(cx - r * 0.7, cy + r * 0.25);
    c.moveTo(cx, cy);
    c.lineTo(cx - r * 0.05, cy + r * 0.75);
    c.stroke();
  }

  function paintGround(c, type, S, th, v, f, dir) {
    if (WATERY.has(type)) water(c, S, th, f);
    else if (type === "path") { c.fillStyle = th.path; c.fillRect(0, 0, S, S); dotted(c, S, th.path, th.path2, v); }
    else if (type === "sand") { c.fillStyle = th.sand; c.fillRect(0, 0, S, S); dotted(c, S, th.sand, th.sand2, v); }
    else grass(c, S, th, v);

    if (type === "flower") flowers(c, S, th, v);
    if (type === "pad") lilyPad(c, S, "#8fd177", "#4e9a45", S / 2, S / 2, S * 0.4);
    if (type === "sunk") {
      c.setLineDash([S * 0.08, S * 0.07]);
      lilyPad(c, S, "rgba(40,100,110,.16)", "rgba(40,100,110,.45)", S / 2, S / 2, S * 0.36);
      c.setLineDash([]);
    }
    if (type === "lotus") {
      lilyPad(c, S, "#8fd177", "#4e9a45", S / 2, S * 0.55, S * 0.34);
      c.fillStyle = "#f4a7b9";
      c.strokeStyle = "#e27d96";
      c.lineWidth = Math.max(1, S / 36);
      for (const a of [-0.9, -0.45, 0, 0.45, 0.9]) {
        c.beginPath();
        c.ellipse(S / 2 + Math.sin(a) * S * 0.09, S * 0.44 - Math.cos(a) * S * 0.06, S * 0.06, S * 0.13, a, 0, TAU);
        c.fill();
        c.stroke();
      }
      c.fillStyle = "#ffd76a";
      c.beginPath();
      c.arc(S / 2, S * 0.48, S * 0.045, 0, TAU);
      c.fill();
    }
    if (type === "bridge") {
      c.save();
      if (dir === "v") { c.translate(S, 0); c.rotate(Math.PI / 2); }
      c.fillStyle = "#d4a46c";
      c.fillRect(0, S * 0.14, S, S * 0.72);
      c.strokeStyle = "#a8763f";
      c.lineWidth = Math.max(1, S / 30);
      for (let i = 1; i < 4; i++) {
        c.beginPath();
        c.moveTo((i * S) / 4, S * 0.14);
        c.lineTo((i * S) / 4, S * 0.86);
        c.stroke();
      }
      c.fillStyle = "#8a6238";
      c.fillRect(0, S * 0.1, S, S * 0.07);
      c.fillRect(0, S * 0.83, S, S * 0.07);
      c.restore();
    }
    if (type === "goldOn") {
      lilyPad(c, S, "#ffd76a", "#c99a1e", S / 2, S / 2, S * 0.42);
      c.fillStyle = "#fffdf6";
      c.beginPath();
      c.arc(S * 0.62, S * 0.36, S * 0.05, 0, TAU);
      c.fill();
    }
  }

  function canopy(c, circles, fill, edge, lw) {
    c.fillStyle = edge;
    c.strokeStyle = edge;
    c.lineWidth = lw;
    for (const [x, y, r] of circles) { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); c.stroke(); }
    c.fillStyle = fill;
    for (const [x, y, r] of circles) { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }
  }

  // Trees are S wide and 1.5 S tall; the bottom S square is the tile they stand on.
  function paintTree(c, S, th, v) {
    const H = S * 1.5, base = H - S * 0.14, k = [1, 0.92, 1.06][v];
    const lw = Math.max(2, S / 14);
    c.fillStyle = "rgba(59,42,26,.18)";
    c.beginPath();
    c.ellipse(S / 2, base, S * 0.34, S * 0.1, 0, 0, TAU);
    c.fill();
    if (th.tree === "pine") {
      c.fillStyle = th.trunk;
      c.fillRect(S * 0.44, base - S * 0.3, S * 0.12, S * 0.3);
      c.lineJoin = "round";
      for (const [w, top, bot] of [[0.46, 0.62, 0.2], [0.38, 0.92, 0.48], [0.28, 1.2, 0.76]]) {
        c.beginPath();
        c.moveTo(S / 2 - S * w * k, base - S * bot);
        c.lineTo(S / 2, base - S * top * k);
        c.lineTo(S / 2 + S * w * k, base - S * bot);
        c.closePath();
        c.fillStyle = th.leaf;
        c.strokeStyle = th.leaf2;
        c.lineWidth = lw;
        c.stroke();
        c.fill();
      }
      return;
    }
    if (th.tree === "palm") {
      c.strokeStyle = th.trunk;
      c.lineWidth = S * 0.13;
      c.lineCap = "round";
      c.beginPath();
      c.moveTo(S * 0.5, base);
      c.quadraticCurveTo(S * 0.38, base - S * 0.5, S * 0.56, base - S * 0.95);
      c.stroke();
      const tx = S * 0.56, ty = base - S * 0.98;
      for (const a of [-2.6, -1.9, -1.2, -0.5, 0.2]) {
        c.save();
        c.translate(tx, ty);
        c.rotate(a);
        c.fillStyle = th.leaf;
        c.strokeStyle = th.leaf2;
        c.lineWidth = lw * 0.7;
        c.beginPath();
        c.ellipse(S * 0.26, 0, S * 0.28 * k, S * 0.09, 0, 0, TAU);
        c.fill();
        c.stroke();
        c.restore();
      }
      c.fillStyle = "#8a6238";
      c.beginPath();
      c.arc(tx - S * 0.05, ty + S * 0.07, S * 0.05, 0, TAU);
      c.arc(tx + S * 0.06, ty + S * 0.08, S * 0.05, 0, TAU);
      c.fill();
      return;
    }
    c.fillStyle = th.trunk;
    c.fillRect(S * 0.43, base - S * 0.42, S * 0.14, S * 0.42);
    const cy = base - S * 0.72;
    canopy(c, [[S * 0.5, cy - S * 0.08, S * 0.36 * k], [S * 0.3, cy + S * 0.08, S * 0.24 * k], [S * 0.7, cy + S * 0.08, S * 0.24 * k]], th.leaf, th.leaf2, lw);
    c.fillStyle = th.leafHi;
    c.beginPath();
    c.arc(S * 0.38, cy - S * 0.2, S * 0.08, 0, TAU);
    c.fill();
    if (th.tree === "blossom") {
      c.fillStyle = "#fffdf6";
      for (const [x, y] of [[0.36, 0.05], [0.6, -0.12], [0.7, 0.12], [0.48, 0.16], [0.24, 0.1]]) {
        c.beginPath();
        c.arc(S * x, cy + S * y, S * 0.035, 0, TAU);
        c.fill();
      }
    }
    if (th.tree === "wisteria") {
      c.fillStyle = th.leaf2;
      for (const x of [0.26, 0.42, 0.58, 0.74]) {
        c.beginPath();
        c.ellipse(S * x, cy + S * 0.3, S * 0.045, S * 0.11, 0, 0, TAU);
        c.fill();
      }
    }
  }

  function paintRock(c, S, th, v) {
    const lw = Math.max(2, S / 16);
    c.fillStyle = "rgba(59,42,26,.16)";
    c.beginPath();
    c.ellipse(S / 2, S * 0.84, S * 0.38, S * 0.1, 0, 0, TAU);
    c.fill();
    c.fillStyle = th.rock;
    c.strokeStyle = th.rock2;
    c.lineWidth = lw;
    c.lineJoin = "round";
    c.beginPath();
    if (v) {
      c.moveTo(S * 0.16, S * 0.82); c.quadraticCurveTo(S * 0.1, S * 0.44, S * 0.42, S * 0.3);
      c.quadraticCurveTo(S * 0.82, S * 0.26, S * 0.86, S * 0.66); c.quadraticCurveTo(S * 0.86, S * 0.84, S * 0.6, S * 0.84);
    } else {
      c.moveTo(S * 0.14, S * 0.82); c.quadraticCurveTo(S * 0.18, S * 0.36, S * 0.52, S * 0.34);
      c.quadraticCurveTo(S * 0.9, S * 0.4, S * 0.86, S * 0.82);
    }
    c.closePath();
    c.fill();
    c.stroke();
    c.fillStyle = "rgba(255,255,255,.45)";
    c.beginPath();
    c.ellipse(S * 0.4, S * 0.46, S * 0.1, S * 0.05, -0.4, 0, TAU);
    c.fill();
  }

  // ---------- caches ----------
  let TS = 48, DPR = 1;
  const cache = new Map();
  const IMG = {};

  function reset(ts, dpr) { TS = ts; DPR = dpr; cache.clear(); }

  function cached(key, w, h, paint) {
    let cv = cache.get(key);
    if (!cv) {
      cv = document.createElement("canvas");
      cv.width = Math.max(1, Math.round(w * DPR));
      cv.height = Math.max(1, Math.round(h * DPR));
      const c = cv.getContext("2d");
      c.setTransform(DPR, 0, 0, DPR, 0, 0);
      paint(c);
      cache.set(key, cv);
    }
    return cv;
  }

  const ground = (type, th, v, f, dir) => {
    const fr = WATERY.has(type) ? f : 0, vv = v % 4;
    return cached(`g|${th.id}|${type}|${vv}|${fr}|${dir || ""}`, TS, TS, c => paintGround(c, type, TS, th, vv, fr, dir));
  };
  const tree = (th, v) => cached(`t|${th.id}|${v % 3}`, TS, TS * 1.5, c => paintTree(c, TS, th, v % 3));
  const rock = (th, v) => cached(`r|${th.id}|${v % 2}`, TS, TS, c => paintRock(c, TS, th, v % 2));
  const sprite = (name, w, h) => {
    const img = IMG[name];
    if (!img) return null;
    const hh = h || w;
    return cached(`s|${name}|${Math.round(w)}|${Math.round(hh)}`, w, hh, c => c.drawImage(img, 0, 0, w, hh));
  };

  function load() {
    return Promise.all(Object.keys(SVG).map(name => new Promise(done => {
      const img = new Image();
      img.onload = () => { IMG[name] = img; done(); };
      img.onerror = () => done();
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(SVG[name]);
    })));
  }

  window.RQ_ART = { theme, load, reset, ground, tree, rock, sprite, svg: SVG, icon: ICON, frogInline, WATERY };
})();
