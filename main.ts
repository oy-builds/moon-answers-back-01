import { mkdirSync, writeFileSync } from "node:fs";

// The Moon, after four billion years on the night shift, finally sends
// humanity the bill. Revised line: "zero tips" replaces the wordy setup,
// the invoice lands sooner, and the threat — repossessing the tides —
// is the comeback that closes the line.
const entry =
  "Four billion years of wishes, zero tips. Invoice's due at dawn — pay up, or I'm taking the tides with me.";

// Gate safety: the entry must stay a single line under 240 characters.
const MAX_CHARS = 240;
const finalEntry = entry.length > MAX_CHARS ? entry.slice(0, MAX_CHARS) : entry;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", finalEntry, "utf8");
console.log(finalEntry);
console.log(`chars: ${[...finalEntry].length}`);
