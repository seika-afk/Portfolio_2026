import { mkdir, rm, cp } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "out");
const target = resolve(root, ".vercel/output/static");

await mkdir(dirname(target), { recursive: true });
await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });
