# Deploying AL Solutions to Cloudflare Workers

The app builds to a Cloudflare Worker (SSR) plus static assets. Nitro generates
`dist/server/wrangler.json` during the build, so no hand-written Wrangler config is needed.

## One-time setup

1. Install deps: `bun install`
2. Log in to Cloudflare: `bunx wrangler login`
   (CI instead: set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` env vars,
   token needs the "Edit Cloudflare Workers" template.)

## Deploy

```bash
bun run deploy
```

This runs `vite build`, then `wrangler deploy --config dist/server/wrangler.json --name al-solutions`.
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
bunx wrangler secret put MY_SECRET --name al-solutions
```

Client-visible values must be `VITE_*` and are baked in at build time.