#!/usr/bin/env node
/**
 * Drops switched-off routes from the static export in out/.
 *
 * `next build` with `output: 'export'` still writes a file for a page that calls
 * notFound() (retreat/index.html, an empty Next error shell). A static host then
 * serves that file with **200**, so the URL stays reachable instead of gone.
 * Deleting it lets the host answer with its own 404 page - and keeps the rest of
 * the retreat code (page, components, Stripe route) in the repository, ready for
 * the next edition: flip RETREAT_ENABLED in src/site-config.ts and nothing here
 * removes anything.
 *
 * Wired up as `npm run build` = `next build && node scripts/prune-disabled-routes.mjs`.
 */
import {existsSync, readFileSync, rmSync} from 'node:fs';

const config = readFileSync(new URL('../src/site-config.ts', import.meta.url), 'utf8');
const enabled = (name) => new RegExp(`export const ${name}\\s*=\\s*true`).test(config);

const disabledRoutes = [];
if (!enabled('RETREAT_ENABLED')) disabledRoutes.push('retreat');

for (const route of disabledRoutes) {
  const dir = new URL(`../out/${route}/`, import.meta.url);
  if (!existsSync(dir)) {
    console.log(`prune-disabled-routes: /${route} not in the export, nothing to do`);
    continue;
  }
  rmSync(dir, {recursive: true, force: true});
  console.log(`prune-disabled-routes: removed /${route} from out/ (returns the host's 404)`);
}
