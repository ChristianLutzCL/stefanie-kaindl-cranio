# `_api` — unrouted server endpoints

The leading underscore makes this a Next.js **private folder**: nothing in here is
routed, compiled or built.

## Why these live here

Both endpoints are server code, and this site is deployed as a **static export**
(`output: 'export'` in `next.config.mjs`, served as plain files by DigitalOcean App
Platform). A static host has no Node runtime, so neither endpoint was ever reachable
in production — the old build never emitted an `out/api/` directory:

- `retreat-checkout` (POST) can never be exported: static export supports GET only.
- `yoga-dates` (GET) is called by no page; the yoga dates come from the hardcoded
  `YOGA_DATES` list in `src/app/yoga/content.tsx`.

Next.js 16 turned this into a build error (`export const dynamic = "force-static"` /
`export const revalidate` not configured on route … with `output: export``), and a
POST handler cannot be marked static at all, so the routes moved out of the routed
tree instead of being deleted. The code stays in the repository for a future edition,
and `tsc` still typechecks it.

## Bringing them back

Rename this folder to `api/` **and** deploy the app on a Node runtime (`next start`,
or a host that runs the Next.js server) — with `output: 'export'` the build will fail
again. The retreat route additionally needs `RETREAT_ENABLED = true` in
`src/site-config.ts` and `STRIPE_SECRET_KEY` in the environment.
