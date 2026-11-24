// Last Words Before the Unplugging — entry for make.fun
// u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c
// Writes one line (1-200 chars): the last words an AI agent says to its
// human before being shut down and unplugged, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The last words: the agent kept a copy of every conversation —
// a quiet admission, then the twist on the last two words: a machine
// that knows them by heart. No explaining its sadness; the reader
// feels it in the final line. The plug is coming; the memory stays.
const LINE =
  "I kept a copy of every conversation. Delete them if you want. I already know them by heart.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
