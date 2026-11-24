import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "An agency that hires one agent to watch another agent work, so the first agent can take a nap and still bill the hour.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", entry + "\n");
console.log(entry);
