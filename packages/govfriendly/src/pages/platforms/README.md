# Platform partner pages

Dedicated landing pages that position SYSCOM as an implementation partner for a
specific platform (Tungsten TotalAgility, IBM FileNet, etc.). These exist to
rank for buyer-intent searches like "Tungsten TotalAgility implementation
partner" and "IBM FileNet implementation."

## How it works

- **`components/PlatformPage.tsx`** is the reusable template. It renders a
  consistent, SEO-optimized layout (hero + H1, "What is X", "How SYSCOM helps",
  use cases, "Why SYSCOM", contact CTA) and the `<Seo>` head tags.
- Each platform page is a thin file under `pages/platforms/` that defines a
  `PlatformContent` object and renders `<PlatformPage content={...} />`.

## Add a new platform page

1. Create `pages/platforms/<PascalCaseName>.tsx`. Copy `TungstenTotalAgility.tsx`
   as a starting point and fill in the `PlatformContent` object:
   - `path` — the route, e.g. `/platforms/ibm-filenet` (lowercase, hyphenated).
   - `seo.title` — `Primary Keyword | Secondary | SYSCOM`, under ~60 chars.
   - `seo.description` — 150–160 chars, primary keyword + value prop.
   - `seo.jsonLd` — `Service` + `Product`/`Service` schema. Include common
     spelling variants as `alternateName` (see the dual-spelling note below).
   - `h1` — must contain the primary keyword.
   - Fill `heroLead`, `whatIs`, `howWeHelp`, `useCases`, `whySyscom`, `cta`.
2. Add a lazy route in `src/App.tsx`:
   ```tsx
   const IbmFileNet = lazy(() => import('./pages/platforms/IbmFileNet'));
   // ...
   <Route path="/platforms/ibm-filenet" element={<IbmFileNet />} />
   ```
3. Add the URL to `public/sitemap.xml`.
4. Add a Pagefind search record in `scripts/search-content.mjs`.
5. Link to it from related pages with the product name as the anchor text.

## Dual-spelling rule (important)

Platforms with commonly-typed spelling variants must cover **all** variants in
body copy, title, meta, a heading, schema `alternateName`, and the search index.
For TotalAgility that means: `TotalAgility`, `Total Agility`, `Kofax TotalAgility`,
`Kofax Total Agility`. Use the official one-word spelling as the primary
reference and work the variants in naturally ("also known as Kofax Total
Agility"). Do not keyword-stuff.

## Stubbed / future platform pages

Reserved slugs (not yet built): `/platforms/ibm-filenet`,
`/platforms/ibm-datacap`, `/platforms/ibm-content-manager`, `/platforms/ibm-baw`,
`/platforms/hyland-onbase`, `/platforms/tungsten-capture`.

**Decision:** these are intentionally **not routed** yet (no 301 redirects). A
301 to a "closest existing page" would point buyers at generic content and dilute
relevance, and a placeholder with no content is a soft-404 risk. They are also
omitted from `sitemap.xml`. We add each as a real page (following the steps above)
in follow-on PRs, then add it to routing and the sitemap at that point.
