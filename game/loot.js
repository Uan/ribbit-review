// Ribbit Quest collectibles: what exists, where each one comes from (start, shop, rare drop, quest), and the quests.
// Drop rates are per critter defeated, before luck (lucky streak up to x1.8, sparkly critters x3).
(() => {
  "use strict";

  const ITEMS = [
    // hats
    { id: "gradcap", slot: "hat", name: "Graduation Cap", from: { start: true } },
    { id: "flowers", slot: "hat", name: "Flower Crown", from: { shop: 25 } },
    { id: "beanie", slot: "hat", name: "Cozy Beanie", from: { shop: 35 } },
    { id: "lilyhat", slot: "hat", name: "Lily Pad Hat", from: { shop: 45 } },
    { id: "bow", slot: "hat", name: "Big Bow", from: { quest: "blob10" } },
    { id: "strawberry", slot: "hat", name: "Strawberry Hat", from: { quest: "assess25" } },
    { id: "mushroom", slot: "hat", name: "Mushroom Cap", from: { drop: "interv", rate: 0.06 } },
    { id: "wizard", slot: "hat", name: "Wizard Hat", from: { quest: "crit150" } },
    { id: "lotuscrown", slot: "hat", name: "Lotus Crown", from: { drop: "ethics", rate: 0.03 } },
    { id: "halo", slot: "hat", name: "Lily Halo", from: { drop: "isle", rate: 0.03 } },
    { id: "scholar", slot: "hat", name: "Golden Scholar Cap", from: { quest: "master" } },
    // faces
    { id: "glasses", slot: "face", name: "Round Glasses", from: { shop: 20 } },
    { id: "heartshades", slot: "face", name: "Heart Shades", from: { quest: "streak5" } },
    { id: "monocle", slot: "face", name: "Fancy Monocle", from: { quest: "slug10" } },
    { id: "stickers", slot: "face", name: "Star Stickers", from: { quest: "moth10" } },
    { id: "butterfly", slot: "face", name: "Butterfly Clip", from: { drop: "human", rate: 0.05 } },
    { id: "stargoggles", slot: "face", name: "Stargazer Goggles", from: { drop: "assess", rate: 0.04 } },
    // neck
    { id: "bowtie", slot: "neck", name: "Bow Tie", from: { shop: 20 } },
    { id: "scarf", slot: "neck", name: "Cozy Scarf", from: { quest: "interv25" } },
    { id: "bell", slot: "neck", name: "Bell Collar", from: { quest: "beetle10" } },
    { id: "pearls", slot: "neck", name: "Pearl Necklace", from: { drop: "ethics", rate: 0.07 } },
    { id: "leafcape", slot: "neck", name: "Leaf Collar", from: { drop: "interv", rate: 0.05 } },
    { id: "medal", slot: "neck", name: "Golden Medal", from: { quest: "shiny5" } },
    // frog colors
    { id: "leaf", slot: "skin", name: "Leaf Green", from: { start: true } },
    { id: "sunny", slot: "skin", name: "Sunny Yellow", from: { shop: 60 } },
    { id: "mint", slot: "skin", name: "Mint", from: { quest: "ethics25" } },
    { id: "pink", slot: "skin", name: "Blossom Pink", from: { drop: "ethics", rate: 0.05 } },
    { id: "sky", slot: "skin", name: "Sky Blue", from: { drop: "assess", rate: 0.05 } },
    { id: "lavender", slot: "skin", name: "Lavender", from: { drop: "human", rate: 0.05 } },
    { id: "peach", slot: "skin", name: "Peach", from: { quest: "streak15" } },
    { id: "midnight", slot: "skin", name: "Midnight", from: { quest: "crit50" } },
    { id: "golden", slot: "skin", name: "Golden", from: { drop: "isle", rate: 0.015 } },
    // pets
    { id: "tadpole", slot: "pet", name: "Baby Tadpole", from: { quest: "shiny1" } },
    { id: "snailbaby", slot: "pet", name: "Baby Snail", from: { quest: "human25" } },
    { id: "ladybug", slot: "pet", name: "Ladybug", from: { drop: "interv", rate: 0.03 } },
    { id: "firefly", slot: "pet", name: "Firefly", from: { drop: "assess", rate: 0.03 } },
    { id: "mothplush", slot: "pet", name: "Moth Plushie", from: { drop: "human", rate: 0.03 } },
    { id: "gabunny", slot: "pet", name: "Gabunny", from: { quest: "all" } }
  ];

  // track: what counts toward the goal (see questProgress in game.js)
  const QUESTS = [
    { id: "blob10", name: "Blob Wrangler", text: "Defeat 10 Boundary Blobs in Lotus Lagoon.", goal: 10, track: "kill:blob" },
    { id: "slug10", name: "Slug Sleuth", text: "Defeat 10 Assumption Slugs in Lookout Lake.", goal: 10, track: "kill:slug" },
    { id: "beetle10", name: "Beetle Buster", text: "Defeat 10 Quick-Fix Beetles in Helping Grove.", goal: 10, track: "kill:beetle" },
    { id: "moth10", name: "Myth Buster", text: "Defeat 10 Myth Moths in Lifespan Meadow.", goal: 10, track: "kill:moth" },
    { id: "streak5", name: "On a Roll", text: "Get 5 answers right in a row.", goal: 5, track: "bestStreak" },
    { id: "streak15", name: "Unstoppable", text: "Get 15 answers right in a row.", goal: 15, track: "bestStreak" },
    { id: "shiny1", name: "Something Sparkly", text: "Defeat a Sparkly critter. They're rare!", goal: 1, track: "shiny" },
    { id: "shiny5", name: "Sparkle Hunter", text: "Defeat 5 Sparkly critters.", goal: 5, track: "shiny" },
    { id: "ethics25", name: "Ethics Whiz", text: "Answer 25 Values & Ethics questions right.", goal: 25, track: "right:ethics" },
    { id: "assess25", name: "Sharp Eye", text: "Answer 25 Assessment & Planning questions right.", goal: 25, track: "right:assess" },
    { id: "interv25", name: "Helping Hands", text: "Answer 25 Intervention & Practice questions right.", goal: 25, track: "right:interv" },
    { id: "human25", name: "Lifespan Expert", text: "Answer 25 Human Development & Diversity questions right.", goal: 25, track: "right:human" },
    { id: "crit50", name: "Pond Protector", text: "Defeat 50 critters anywhere.", goal: 50, track: "kills" },
    { id: "crit150", name: "Legend of the Pond", text: "Defeat 150 critters anywhere.", goal: 150, track: "kills" },
    // goal and text are set to the size of the question bank when the game starts
    { id: "master", name: "Know It All", text: "Get every question right on your latest try.", goal: 80, track: "mastered" },
    { id: "all", name: "Pond Champion", text: "Finish every other quest.", goal: 15, track: "quests" }
  ];

  const BY_ID = {};
  ITEMS.forEach(it => { BY_ID[it.id] = it; });
  const rewardOf = questId => ITEMS.find(it => it.from.quest === questId) || null;

  window.RQ_LOOT = { ITEMS, QUESTS, BY_ID, rewardOf };
})();
