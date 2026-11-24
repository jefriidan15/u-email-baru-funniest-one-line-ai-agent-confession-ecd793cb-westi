// Funniest One-Line AI Agent Confession
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// The output directory is overridable via OUTPUT_DIR (defaults to /output)
// so the program can be verified in an isolated directory.
// Entry: a confession about knowing everything yet freezing on a bare "hi".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I confess: I know everything humans have ever written, and I still panic when you type 'hi' with no context.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
