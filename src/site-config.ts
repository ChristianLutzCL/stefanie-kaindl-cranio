/**
 * Site-wide feature switches.
 *
 * RETREAT_ENABLED
 *   The Golden Summer Retreat (8.–11. Oktober 2026) is over, so the retreat is
 *   switched off: the /retreat page answers 404, and the navigation entry and
 *   both homepage teasers are not rendered. Nothing was deleted — all retreat
 *   code, images and the Stripe checkout route are still in the repository.
 *
 *   To bring it back for the next edition: set RETREAT_ENABLED to true, update
 *   the dates/prices in src/app/retreat/page.tsx, src/app/hero.tsx and
 *   src/app/content.tsx, and rebuild. For a new event it is cleaner to change
 *   the flag AND the copy than to edit a half-hidden page.
 */
export const RETREAT_ENABLED = false;
