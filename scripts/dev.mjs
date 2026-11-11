// Starts `next dev` on port 3001, or on the next free port if 3001 is busy.
// Ports 3002 (admin panel) and 5000 (backend) are always skipped.
// Override the starting port with PORT=xxxx.
import net from "node:net";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const SKIP = new Set([3002, 5000]);
const START = Number(process.env.PORT) || 3001;
const MAX_TRIES = 20;

const isFree = (port) =>
  new Promise((resolve) => {
    const srv = net.createServer();
    srv.once("error", () => resolve(false));
    srv.once("listening", () => srv.close(() => resolve(true)));
    srv.listen(port); // same "all interfaces" binding next dev uses
  });

let port = START;
for (let i = 0; i < MAX_TRIES; i++, port++) {
  if (SKIP.has(port)) continue;
  if (await isFree(port)) break;
  console.log(`Port ${port} is in use, trying ${port + 1}...`);
}

if (port !== START) {
  console.log(`\n  Website will run on http://localhost:${port} (port ${START} was busy)\n`);
}

const nextBin = createRequire(import.meta.url).resolve("next/dist/bin/next");
const child = spawn(process.execPath, [nextBin, "dev", "-p", String(port), ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env,
});
child.on("exit", (code) => process.exit(code ?? 0));
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => child.kill(sig));
