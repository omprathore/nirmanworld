import fs from 'node:fs';
import path from 'node:path';

const source = path.resolve('apps/nirman-world/out');
const target = path.resolve('hostinger_dist');
if (!fs.existsSync(source)) {
  throw new Error('Build output not found. Run npm run build first.');
}
fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });
console.log(`Hostinger-ready static build copied to: ${target}`);
