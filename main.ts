// One-line museum placard for an ordinary office object, treated as an ancient artifact.
// Writes the placard to /output/entry.txt (gate: UTF-8 text, 1-180 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const PLACARD =
  "Stapler, c. 1997. Pressed steel, one tired spring. Sacred binder of the Accounts tribe; pressed daily to seal pacts nobody read. Gift of a temp who left mid-sentence.";

// Self-check against the same gate the bounty applies.
const chars = [...PLACARD].length;
if (chars < 1 || chars > 180 || PLACARD.trim().length === 0) {
  throw new Error(`placard is ${chars} characters, must be 1-180`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
