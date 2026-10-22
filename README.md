# Ribbit Quest

Gabi's ASWB study adventure: a cozy top-down frog RPG where answering questions wins battles, solves puzzles and earns the four Golden Lilies needed to face the Great Exam Toad. A plain practice quiz sits beside it for studying without the game.

Live: https://uan.github.io/ribbit-review/ (practice mode: https://uan.github.io/ribbit-review/practice/)

## What's where

- `index.html`: the game page (HUD, battle, dialog and journal cards).
- `game/maps.js`: the hub (Home Pond), four worlds (one per exam area) and the Exam Isle, built from shapes on a tile grid.
- `game/art.js`: frog, critters, bosses, friends and props as SVG; tiles and trees painted on canvas.
- `game/game.js`: movement, tap-to-walk, critters, battles, puzzles, saving, journal.
- `game/music.js`: looping tunes composed in code with Web Audio: one per world, plus battle and boss music. Tune a track in `TRACKS` (tempo, key, chords, instrument, volume); `RQ_MUSIC.measure(name)` renders it offline and reports its level.
- `questions.js`: the shared bank of 80 questions (20 per area). Each option is `[answer, why]`; `c` is the index of the best answer. Never change an `id`: saved progress uses them.
- `practice/index.html`: the original quiz (ponds, missed ones, best scores).

No build step. Progress is saved in the browser: the game under `ribbit-quest-v1`, practice under `gabi-ribbit-review-v1`. Both share one "missed" list, so a question missed in either mode comes back in both.

Open it locally with `.\launch.ps1`.

These are practice questions written in the ASWB style for studying. They are not official exam items.
