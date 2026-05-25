import { useEffect } from 'react';

// Lightweight, dependency-free per-route head management. The site is a
// client-rendered SPA, so index.html ships one static <title>/meta set for
// every route — terrible for findability. This sets a unique title,
// description, canonical, Open Graph/Twitter tags, and optional JSON-LD
// per page. Modern crawlers (Googlebot) render JS and pick these up.
//
// NOTE: for guaranteed crawlability without JS execution, prerendering/SSG
// is the robust long-term fix (flagged in the PR as a follow-up).

const SITE_URL = 'https://syscom.com';

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for canonical + og:url. */
  path: string;
  /** Optional Schema.org structured data (object or array of objects). */
  jsonLd?: object | object[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const JSONLD_ID = 'seo-jsonld';

export default function Seo({ title, description, path, jsonLd }: SeoProps) {
  // Stringify so an inline object literal prop doesn't re-fire the effect every render.
  const ld = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertLink('canonical', url);

    document.getElementById(JSONLD_ID)?.remove();
    if (ld) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = JSONLD_ID;
      script.text = ld;
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(JSONLD_ID)?.remove();
    };
  }, [title, description, path, ld]);

  return null;
}
