import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', 'public', 'galamat-logo-white.svg');

// Renders the white Galamat lockup to a transparent PNG for the OG composer.
await sharp(src, { density: 300 })
  .resize({ width: 720 })
  .png()
  .toFile(path.join(here, 'og-logo.png'));

console.log('og-logo.png rendered');
