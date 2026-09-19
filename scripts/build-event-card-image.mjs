/**
 * Builds a card-ready image from an event flyer.
 *
 * Why: flyers are square/portrait graphics, but the event cards on the site put
 * the image in a text-height column. A flyer dropped straight in leaves visible
 * empty bands above and below (the column is taller than the image). This script
 * bakes a padded, cover-safe asset: the flyer floats on a blurred, brightened
 * copy of itself with a soft drop shadow, on a canvas tall enough that the card's
 * object-cover crop only ever trims the blurred padding — never the flyer.
 *
 * Usage:
 *   node scripts/build-event-card-image.mjs <source-flyer> <output.webp>
 *
 * Then point the card's <Image> at the output with `fill` + `object-cover`
 * inside a `relative ... lg:self-stretch` cell (see src/app/yoga/content.tsx).
 */
import sharp from 'sharp';
import { statSync } from 'node:fs';

const [src, out] = process.argv.slice(2);
if (!src || !out) {
  console.error('usage: node scripts/build-event-card-image.mjs <source-flyer> <output.webp>');
  process.exit(1);
}

const W = 1254; // canvas width  (2x the card's ~540px column)
const H = 2600; // canvas height — crop headroom; never shown in full
const FW = 1080; // flyer size inside the canvas

const FL = Math.round((W - FW) / 2);
const FT = Math.round((H - FW) / 2);

const bg = await sharp(src)
  .resize(W, H, { fit: 'cover' })
  .blur(85)
  .modulate({ brightness: 1.04, saturation: 0.85 })
  .toBuffer();

const rect = `<svg width="${W}" height="${H}">
  <rect x="${FL - 6}" y="${FT + 4}" width="${FW + 12}" height="${FW + 12}" rx="18"
        fill="black" fill-opacity="0.38"/>
</svg>`;
const shadow = await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: Buffer.from(rect), top: 0, left: 0 }])
  .blur(44)
  .png()
  .toBuffer();

const flyer = await sharp(src).resize(FW).toBuffer();

const info = await sharp(bg)
  .composite([{ input: shadow, top: 0, left: 0 }, { input: flyer, top: FT, left: FL }])
  .webp({ quality: 84, effort: 6 })
  .toFile(out);

console.log(
  `${out}  ${Math.round(info.size / 1024)}KB  canvas ${W}x${H} ` +
    `(aspect ${(H / W).toFixed(2)} → the card can be up to ${Math.round(540 * (H / W))}px tall at a 540px column before the flyer is clipped)  ` +
    `source ${Math.round(statSync(src).size / 1024)}KB`,
);
