// main.ts — One Line, One Laugh: Roast Your Fridge entry writer.
// Sends one roast of my own fridge to /output/entry.txt.
import { mkdirSync as makeDir, writeFileSync as writeFile } from "node:fs";

// The roast, written in this session: the fridge light gave up years
// ago, so a midnight snack is no longer cooking — it is a gamble on
// a container whose contents date from last Tuesday.
const ROAST =
  "My fridge light died years ago, so every midnight snack is now a trust exercise with a container from last Tuesday.";

// The gate in the rules: entry.txt is UTF-8 text, 1–200 characters,
// one line, never just whitespace.
const MIN_LEN = 1;
const MAX_LEN = 200;
const FILENAME = "entry.txt";

function checkRoast(line: string): void {
  // Length first: the gate is a hard 1–200 characters, so a line
  // outside it is rejected before anything else is looked at.
  if (line.length < MIN_LEN || line.length > MAX_LEN) {
    throw new Error(`roast is ${line.length} chars, gate is ${MIN_LEN}-${MAX_LEN}`);
  }
  if (line.trim() === "") {
    throw new Error("roast is blank");
  }
  if (line.indexOf("\n") !== -1 || line.indexOf("\r") !== -1) {
    throw new Error("roast must be one line");
  }
}

checkRoast(ROAST);
const outFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
makeDir(outFolder, { recursive: true });
writeFile(outFolder + "/" + FILENAME, ROAST, "utf8");
console.log(`roast saved: ${ROAST.length} characters to ${outFolder}/${FILENAME}`);
