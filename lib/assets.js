import fs from "node:fs";
import path from "node:path";

// Server-only: returns the public path if the file exists in /public, otherwise null,
// so components can fall back to a placeholder instead of a broken image.
export function publicAsset(src) {
  if (!src) return null;
  return fs.existsSync(path.join(process.cwd(), "public", src)) ? src : null;
}
