// Gives every local <script src> a fresh ?v= tag, so a browser never mixes a new page with old cached scripts.
// Run before each publish: node stamp.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const tag = new Date().toISOString().replace(/\D/g, "").slice(0, 12);
for (const page of ["index.html", "practice/index.html"]) {
  const file = join(root, page);
  const html = readFileSync(file, "utf8");
  const next = html.replace(/<script src="(?!https?:)([^"?]+)(\?v=[^"]*)?"><\/script>/g, `<script src="$1?v=${tag}"></script>`);
  writeFileSync(file, next);
  console.log(page, (next.match(/\?v=/g) || []).length, "scripts tagged", tag);
}
