// main.ts — entry program for the make.fun bounty gta6-meme-x-01.
//
// Per the bounty rules, this program's only job is to copy POST.json
// from the repository into the output dir. The meme image
// (meme-generated.png) lives in the repository and was posted to X;
// the house reads the post itself, so nothing about the post is
// produced here.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader the same program runs with MAKEFUN_BOT_DIR=/bot and
// MAKEFUN_OUTPUT_DIR=/output.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR =
  process.env.MAKEFUN_OUTPUT_DIR ?? (existsSync('/output') ? '/output' : './output');

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
