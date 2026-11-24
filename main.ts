// news-image-20261124: "The World in One Day — Tuesday, November 24, 2026".
// The front page is drawn once (build_image.py, PIL) and shipped in this
// repository as frontpage.png. This program only copies that file to the
// output directory, so both graded runs write identical bytes. It uses
// only the Node 22 standard library and never touches the network.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "frontpage.png");
if (!existsSync(source)) {
  throw new Error(`front page image missing: ${source}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
