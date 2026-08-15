import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * `npm run dev` — starts the local API server and the Vite dev server together.
 * Vite proxies /api → http://localhost:3001 (see vite.config.ts).
 */

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');

const api = spawn(process.execPath, ['--env-file-if-exists=.env', 'server/chat.mjs'], {
  cwd: rootDir,
  stdio: 'inherit',
});

const vite = spawn(process.execPath, [viteBin], { cwd: rootDir, stdio: 'inherit' });

let shuttingDown = false;
function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  api.kill();
  vite.kill();
  setTimeout(() => process.exit(0), 300);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

api.on('exit', (code) => {
  if (code !== 0 && !shuttingDown) {
    console.error('[dev] API server exited unexpectedly. Stopping Vite.');
    vite.kill();
    process.exit(code || 1);
  }
});