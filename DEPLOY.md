# Deploying AL Solutions to Cloudflare Workers

The app builds to a Cloudflare Worker (SSR) plus static assets. A root `wrangler.jsonc` is committed so Cloudflare (CLI, dashboard, or Workers Builds) detects the project automatically.

## One-time setup

1. Install deps: `bun install`
2. Log in to Cloudflare: `bunx wrangler login`
   (CI instead: set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` env vars,
   token needs the "Edit Cloudflare Workers" template.)

## Deploy

```bash
bun run deploy
```

This runs `vite build`, then `wrangler deploy` using the root `wrangler.jsonc`.
The worker goes live at `https://al-solutions.<your-subdomain>.workers.dev`.

## Test the Worker locally

```bash
bun run cf:preview
```

Runs the built worker in workerd (the same runtime as production).

## Custom domain (alsolutions.in)

1. Add `alsolutions.in` as a zone in the Cloudflare dashboard and point your registrar's
   nameservers at Cloudflare.
2. Workers & Pages → `al-solutions` → Settings → Domains & Routes → Add custom domain →
   `alsolutions.in` (repeat for `www.alsolutions.in`).

Cloudflare issues the TLS certificate automatically.

## Environment variables / secrets

Server-side values are read inside server functions via `process.env`. Set them with:

```bash
bunx wrangler secret put MY_SECRET
```

Client-visible values must be `VITE_*` and are baked in at build time.
## Deploying from the Cloudflare dashboard (Workers Builds / Git)

Cloudflare reads the committed `wrangler.jsonc`, so set:

- Build command: `bun run build` (or `npm run build`)
- Deploy command: `bunx wrangler deploy` (default)

If you ever see "No Wrangler configuration detected", the `wrangler.jsonc` at the
repo root is missing from the pushed commit.
