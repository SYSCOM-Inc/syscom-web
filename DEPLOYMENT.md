# Deployment — Cloudflare Pages

This repo deploys the **Government-Friendly** variant (`packages/govfriendly/`) to Cloudflare Pages. GitHub Pages remains the parallel showroom that hosts all three variants — see [README.md](./README.md) — and **must not be disabled** while the Cloudflare deployment is being verified.

---

## ⚠️ READ FIRST — required env var: `VITE_BASE_PATH=/`

**Before triggering the first Cloudflare build, set this environment variable in the Cloudflare dashboard. If you forget it, the build will succeed but ship a broken site — every CSS, JS, and image URL will 404 because asset paths will be prefixed with `/ClaudeSYSCOMwebsite/govfriendly/` (the GitHub Pages subpath) instead of `/`.**

This is the #1 footgun for this setup. The site will load `index.html` but appear as an unstyled blank page. View-source will show `<script src="/ClaudeSYSCOMwebsite/govfriendly/assets/...">` — that is the symptom.

Fix: set the env var (instructions below) and redeploy.

Why this exists: `packages/govfriendly/vite.config.ts` reads `VITE_BASE_PATH` and falls back to the GitHub Pages subpath when the var is unset. GitHub Actions doesn't set the var, so GH Pages keeps working. Cloudflare Pages serves the site at the root of `<project>.pages.dev`, so it must override the base to `/`.

---

## Cloudflare dashboard setup (one-time)

Do this in the Cloudflare dashboard at <https://dash.cloudflare.com> → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.

### 1. Connect to Git
- Authorize Cloudflare to access GitHub.
- Select the repo (the one containing this file).

### 2. Build settings

| Field | Value |
|-------|-------|
| Project name | `syscom-web` (matches `wrangler.toml`) |
| Production branch | `main` |
| Framework preset | **None** (this is a monorepo build, not a single-app preset) |
| Build command | `npm run build:govfriendly` |
| Build output directory | `packages/govfriendly/dist` |
| Root directory | `/` (repo root — leave the "Root directory (advanced)" field blank or set to `/`) |

### 3. Environment variables (Production AND Preview)

Add under **Settings → Environment variables**. Set for both Production and Preview environments.

| Variable | Value | Required? |
|----------|-------|-----------|
| `VITE_BASE_PATH` | `/` | **Yes — without this, the site ships broken (see warning above).** |
| `NODE_VERSION` | `20` | Recommended — matches what GitHub Actions uses (`.github/workflows/deploy.yml`). The repo has no `.nvmrc` or `engines` pin, so Cloudflare will otherwise default to its current Node version, which may drift. |

### 4. Save and trigger first build
- Click **Save and Deploy**.
- First build runs `npm ci && npm run build:govfriendly` from the repo root.
- On success, the site is live at `https://syscom-web.pages.dev` (or `https://<project-name>.pages.dev` if Cloudflare picked a different name).

### 5. Verify
Visit the `.pages.dev` URL and check:
- Page renders styled (not a blank/unstyled fallback).
- Open DevTools → Network → confirm CSS/JS load from `/assets/...` (NOT `/ClaudeSYSCOMwebsite/govfriendly/assets/...`).
- POST `https://<project>.pages.dev/api/contact` with a JSON body — the function stub at `functions/api/contact.js` should return `{ ok: true, ... }`.

---

## How deploys work after setup

| Trigger | What happens |
|---------|--------------|
| Push to `main` | Cloudflare runs the build and deploys to the production `*.pages.dev` URL. |
| Push to any other branch | Cloudflare builds and publishes a **preview deployment** at a unique `<branch>.<project>.pages.dev` URL. |
| Open a PR | Cloudflare comments on the PR with the preview URL. |
| Merge PR to `main` | Production deploy. |

GitHub Pages continues to deploy independently from the same `main` branch via `.github/workflows/deploy.yml` — the two hosts run in parallel.

---

## Local development

```bash
# Vite dev server (HMR, the normal authoring loop):
npm run dev:govfriendly        # → http://localhost:5174

# Cloudflare local emulator (serves built static + Functions, useful for testing /api/contact):
npm run build:govfriendly
npm run dev                    # wrangler pages dev packages/govfriendly/dist
```

The `npm run dev` script at the repo root runs `wrangler pages dev` against the built `dist/` — it does not have HMR. Use `npm run dev:govfriendly` for normal frontend work.

---

## Adding Pages Functions

Cloudflare Pages Functions live at `/functions/` at the **repo root** (not inside `packages/`). File-based routing:

| File | Route |
|------|-------|
| `functions/api/contact.js` | `POST /api/contact` |
| `functions/api/foo.js` | `POST /api/foo` |
| `functions/hello.js` | `/hello` |
| `functions/api/[id].js` | `/api/:id` (dynamic) |

Functions run on the Workers runtime — Web Fetch API only, **not Node**. No `fs`, no `process` (use `context.env` for secrets/env vars).

### Adding secrets (e.g. an email API key)

```bash
# Production:
npx wrangler pages secret put RESEND_API_KEY --project-name syscom-web

# Or in the dashboard:
# Settings → Environment variables → Add variable → encrypt
```

Read in the function as `context.env.RESEND_API_KEY`.

---

## Future: adding the custom domain (`syscom.com`)

**Not now.** This is deferred until after the Network Solutions handoff and DNS migration to Cloudflare. When that's done:

1. In Cloudflare dashboard → Pages project → **Custom domains** → **Set up a custom domain** → enter `syscom.com` (and `www.syscom.com`).
2. Cloudflare will auto-add the necessary CNAME / A records if the domain is on Cloudflare DNS. If not, it will provide records to add at the current registrar.
3. SSL: Cloudflare provisions a cert automatically (Universal SSL). Verify HTTPS works before flipping any prod traffic.
4. Decide which variant `syscom.com` should point at — `syscom-web.pages.dev` if the gov-friendly variant wins the bake-off, otherwise repeat this setup for whichever variant is chosen.
5. Keep the `.pages.dev` URL working — it's useful for staging/testing.

Until then: the site lives at `<project>.pages.dev` only.

---

## Future: wiring up the contact form

The function at `functions/api/contact.js` currently validates input and returns a success JSON response without sending anything. To make it actually deliver:

1. Pick an email provider — **Resend** is recommended (simple API, generous free tier, excellent deliverability).
2. Sign up, verify the `syscom.com` sender domain (DKIM/SPF records).
3. `wrangler pages secret put RESEND_API_KEY --project-name syscom-web`
4. Uncomment the marked block in `functions/api/contact.js` and adjust `from` / `to` / `subject` to match SYSCOM's preferences.
5. Update the contact form component in `packages/govfriendly/src/` to POST to `/api/contact`.

---

## Rollback

Cloudflare Pages keeps every deployment. To roll back:
- Dashboard → project → **Deployments** → find the last good deployment → **Manage deployment** → **Rollback to this deployment**.

Instant. No rebuild required.
