# SYSCOM, Inc. — Website Redesign

Three production-ready website variants for [syscom.com](https://syscom.com), built as a React/Vite/Tailwind monorepo. Each variant presents a distinct visual identity for the same company content. Built for presentation to SYSCOM ownership on March 26, 2026.

## Running Locally

```bash
npm install               # one-time setup
npm run dev:techforward   # → http://localhost:5173
npm run dev:govfriendly   # → http://localhost:5174
npm run dev:premium       # → http://localhost:5175
```

Port numbers may vary if ports are in use. Check terminal output.

## The Three Variants

### 1. Tech-Forward (`packages/techforward/`)
**Positioning:** Modern, AI-forward, innovation-led
**Best for:** Attracting new business, RFP differentiation, signaling AI capability
**Design:** Deep navy (#0a1628) base, electric blue/teal accents, Outfit font headings, gradient mesh backgrounds, connected-node visuals, animated floating elements
**Hero line:** *"Enterprise Content Management. Powered by Intelligence."*

### 2. Government-Friendly (`packages/govfriendly/`)
**Positioning:** Clean, accessible, trustworthy, WCAG AA compliant
**Best for:** State/federal clients, compliance-sensitive prospects
**Design:** Navy/white/warm gray palette, Source Sans 3 font, structured grids, high contrast, visible focus indicators, skip-to-content navigation, ARIA labels throughout
**Hero line:** *"Trusted Enterprise Content Management Since 1982"*

### 3. Premium Dark (`packages/premium/`)
**Positioning:** High-end, sophisticated, boutique
**Best for:** Financial services, premium positioning, executive audience
**Design:** Near-black (#0a0a0a) base, copper/gold accents, Cormorant Garamond serif headings, cinematic spacing, editorial layout, dramatic typography
**Hero line:** *"Enterprise Content. Perfected."*

## Pages (All Variants)

| Page | Route | Content |
|------|-------|---------|
| **Home** | `/#/` | Hero, company stats (40+ years, 70% retention, 1M+ docs daily, 50+ deployments), services grid, products showcase, industry verticals, CTA |
| **About** | `/#/about` | Company history (founded 1982, Baltimore), mission, values, leadership team (Ted Bayer, Mark Anzmann, Chris Benedetti), Centers of Excellence |
| **Services** | `/#/services` | Six Centers of Excellence with detailed descriptions + interactive ROI Calculator |
| **Products** | `/#/products` | ASM (flagship, with migration flow diagram), AIS Bridge, IBIG, integrated suite overview |
| **Contact** | `/#/contact` | Contact form (name, email, company, phone, service interest, message) + company info sidebar |
| **Careers** | `/#/careers` | Culture, benefits, retention stats, apply CTA |

Routes use `HashRouter` for GitHub Pages compatibility (hash-based URLs).

## Interactive Features

### AI Chatbot Widget
- Floating chat button (bottom-right corner on every page)
- Opens a chat panel with message bubbles, typing indicator, input field
- Currently runs on canned responses about SYSCOM services, products, migration, AI, government work, and contact info
- **Claude API integration point** is marked in `packages/shared/src/hooks/useChat.ts` with commented-out Anthropic SDK code — just needs an API key and backend proxy

### ROI Calculator
- Located on the Services page in all three variants
- Three slider inputs: Document Volume (1,000-100,000), Number of Users (1-100), Processing Time (1-30 min)
- Outputs: Time Saved (hours/year), Cost Reduction (%), Efficiency Gain (%), Annual Savings ($)
- Animated result counters
- Logic lives in `packages/shared/src/hooks/useROICalculator.ts`

### Product Migration Diagram
- On the Products page, ASM section
- CSS-built diagram showing source systems → ASM engine → target systems
- Visual representation of ASM's multi-platform migration capability

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 6 (HashRouter) |
| Icons | Lucide React |
| Fonts | Google Fonts (Outfit, Inter, Source Sans 3, Cormorant Garamond) |
| Package management | npm workspaces |
| Deployment target | GitHub Pages via GitHub Actions |

## Project Structure

```
ClaudeSYSCOMwebsite/
├── package.json                    # Workspace root — all npm run commands
├── tsconfig.base.json              # Shared TypeScript config
├── .github/workflows/deploy.yml    # GitHub Pages deployment (variant-selectable)
│
├── packages/shared/                # Shared across all variants
│   └── src/
│       ├── data/company.ts         # Company info, leadership, services, products, verticals, stats
│       ├── types.ts                # TypeScript interfaces
│       ├── hooks/useChat.ts        # Chat logic + canned responses (Claude API integration point)
│       ├── hooks/useROICalculator.ts  # ROI calculation logic
│       └── index.ts                # Barrel export
│
├── packages/techforward/           # Variant 1
│   ├── index.html                  # Entry HTML (Outfit + Inter fonts)
│   ├── vite.config.ts
│   ├── tailwind.config.js          # Navy/electric-blue/teal palette
│   └── src/
│       ├── App.tsx                 # HashRouter + Layout
│       ├── components/             # Navbar, Footer, ChatWidget, ROICalculator
│       └── pages/                  # Home, About, Services, Products, Contact, Careers
│
├── packages/govfriendly/           # Variant 2
│   ├── index.html                  # Entry HTML (Source Sans 3 font, skip-to-content link)
│   ├── vite.config.ts
│   ├── tailwind.config.js          # Navy/white/warm-gray/burgundy palette
│   └── src/
│       ├── App.tsx                 # HashRouter + Layout (main#main-content for skip-nav)
│       ├── components/             # Navbar, Footer, ChatWidget, ROICalculator
│       └── pages/                  # Home, About, Services, Products, Contact, Careers
│
├── packages/premium/               # Variant 3
│   ├── index.html                  # Entry HTML (Cormorant Garamond + Inter fonts)
│   ├── vite.config.ts
│   ├── tailwind.config.js          # Near-black/cream/copper/gold palette
│   └── src/
│       ├── App.tsx                 # HashRouter + Layout
│       ├── components/             # Navbar, Footer, ChatWidget, ROICalculator
│       └── pages/                  # Home, About, Services, Products, Contact, Careers
│
├── CLAUDE.md                       # Full project brief (Claude Code instructions)
└── MEETING-PREP.md                 # Talking points for March 26 meeting
```

## Build & Deploy

### Build a single variant
```bash
npm run build:techforward
npm run build:govfriendly
npm run build:premium
```

### Build all three
```bash
npm run build:all
```

### Preview a production build
```bash
npm run preview:techforward
npm run preview:govfriendly
npm run preview:premium
```

## Hosting

This repo deploys to two hosts in parallel:

- **GitHub Pages** — combined showroom of all three variants at `chrisbenedetti.github.io/ClaudeSYSCOMwebsite/`. Triggered by pushes to `main` via `.github/workflows/deploy.yml`. Useful for stakeholder review.
- **Cloudflare Pages** — production host for the Government-Friendly variant at `<project>.pages.dev`. Custom domain (`syscom.com`) is deferred until DNS migration completes.

Full setup, env vars, dashboard configuration, and the eventual custom-domain cutover are documented in [DEPLOYMENT.md](./DEPLOYMENT.md). Read that **before** triggering the first Cloudflare build — there's a required `VITE_BASE_PATH=/` env var without which the site ships broken.

## Bundle Sizes

| Variant | CSS | App JS | Vendor JS | Total | Gzipped |
|---------|-----|--------|-----------|-------|---------|
| Tech-Forward | 31 KB | 92 KB | 162 KB | **285 KB** | ~80 KB |
| Gov-Friendly | 21 KB | 80 KB | 162 KB | **263 KB** | ~76 KB |
| Premium Dark | 22 KB | 64 KB | 162 KB | **248 KB** | ~73 KB |

All well under the 500 KB target.

## Source Code Stats

| Variant | Component lines | Page lines | Total TSX |
|---------|----------------|------------|-----------|
| Tech-Forward | 618 | 1,680 | ~2,300 |
| Gov-Friendly | 570 | 1,488 | ~2,060 |
| Premium Dark | 511 | 1,159 | ~1,670 |
| **Shared** | — | — | ~250 |

## Company Data

All SYSCOM content is centralized in `packages/shared/src/data/company.ts`:

- **Company:** SYSCOM, Inc., founded 1982, Baltimore MD, (410) 539-3737, sales@syscom.com
- **Leadership:** Ted Bayer (President), Mark Anzmann (EVP), Chris Benedetti (CTO)
- **Services:** ECM, Business Process Automation, Enterprise Capture, Content Migration, Platform Integration, AI & Intelligent Automation
- **Products:** AnySource Migrator (ASM) — flagship, AIS Bridge, IBIG
- **Verticals:** State & Federal Government, Financial Services, Health Insurance
- **Stats:** 40+ years, 70% retention (5+ years), 1M+ docs migrated daily, 50+ deployments

## What's Stubbed / Phase 2

| Feature | Current State | Next Step |
|---------|--------------|-----------|
| Contact form | UI only, no submission | Connect to backend or email service |
| AI Chatbot | Canned keyword-matched responses | Wire to Claude API via backend proxy |
| Careers | Placeholder apply link | Connect to ATS or mailto |
| Analytics | None | Add Plausible, Fathom, or GA4 |
| Sitemap | Not generated | Add vite-plugin-sitemap |
| Product pages | Current names (ASM, AIS Bridge, IBIG) | Update after Step 2 rebrand decisions |
| Map on Contact page | Styled placeholder | Embed Google Maps or Mapbox |

## License

Private — SYSCOM, Inc. internal project.
