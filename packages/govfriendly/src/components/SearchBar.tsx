import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

// On-site search powered by Pagefind. The static index is built at compile time
// into dist/pagefind/ (see scripts/build-search-index.mjs) and the browser
// bundle is loaded lazily on first interaction. In `vite dev` there is no built
// index, so loading fails and the bar degrades gracefully (no results) — test
// search via `npm run build && npm run preview`.

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
}

// Resolves to "/pagefind/pagefind.js" on Cloudflare (base "/") and the
// project-subpath equivalent on GitHub Pages / local dev.
const PAGEFIND_URL = `${import.meta.env.BASE_URL}pagefind/pagefind.js`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PagefindModule = any;

let pagefindPromise: Promise<PagefindModule | null> | null = null;
function loadPagefind(): Promise<PagefindModule | null> {
  if (!pagefindPromise) {
    pagefindPromise = import(/* @vite-ignore */ PAGEFIND_URL)
      .then(async (pf: PagefindModule) => {
        await pf.init?.();
        return pf;
      })
      .catch(() => null); // index not available (e.g. dev server)
  }
  return pagefindPromise;
}

interface SearchBarProps {
  /** Called after a result is selected (e.g. to close a mobile panel). */
  onNavigate?: () => void;
  autoFocus?: boolean;
}

export default function SearchBar({ onNavigate, autoFocus }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const runSearch = useCallback(async (q: string) => {
    const pf = await loadPagefind();
    if (!pf || !q.trim()) {
      setResults([]);
      return;
    }
    const search = await pf.search(q);
    const top = await Promise.all(
      search.results.slice(0, 5).map((r: { data: () => Promise<SearchResult & { meta?: { title?: string } }> }) => r.data())
    );
    setResults(
      top.map((d) => ({
        url: d.url,
        title: d.meta?.title || d.url,
        excerpt: d.excerpt,
      }))
    );
  }, []);

  // Debounce queries.
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const id = window.setTimeout(() => runSearch(query), 180);
    return () => window.clearTimeout(id);
  }, [query, runSearch]);

  // Close dropdown on outside click.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const handleSelect = (url: string) => {
    setOpen(false);
    setQuery('');
    setResults([]);
    onNavigate?.();
    // Pagefind returns URLs with the deploy base already prepended (e.g.
    // /ClaudeSYSCOMwebsite/govfriendly/services#capture). react-router's
    // navigate() re-applies basename, so strip the base back off first to
    // avoid a doubled path. Works for base "/" (Cloudflare) too.
    const base = import.meta.env.BASE_URL;
    const path = base !== '/' && url.startsWith(base) ? `/${url.slice(base.length)}` : url;
    navigate(path);
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ fontFamily: 'Arial, sans-serif' }}
      role="search"
    >
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/50"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            loadPagefind();
            setOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
            if (e.key === 'Enter' && results[0]) handleSelect(results[0].url);
          }}
          placeholder="Search…"
          aria-label="Search the site"
          aria-expanded={showDropdown}
          aria-controls={listboxId}
          autoComplete="off"
          className="w-full rounded-md border border-navy/25 bg-white py-2 pl-9 pr-3 text-sm text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          style={{ fontFamily: 'Arial, sans-serif' }}
        />
      </div>

      {showDropdown && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-2 max-h-[70vh] overflow-auto rounded-md border border-navy/15 bg-white py-1 shadow-lg"
        >
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-navy/50">No results for “{query}”.</li>
          ) : (
            results.map((r) => (
              <li key={r.url} role="option" aria-selected="false">
                <button
                  type="button"
                  onClick={() => handleSelect(r.url)}
                  className="block w-full px-4 py-2.5 text-left hover:bg-navy/[0.04] focus:bg-navy/[0.04] focus:outline-none"
                >
                  <span className="block text-sm font-semibold text-navy">{r.title}</span>
                  {r.excerpt && (
                    <span
                      className="mt-0.5 block text-xs leading-snug text-slate [&_mark]:bg-teal/20 [&_mark]:text-navy [&_mark]:font-semibold"
                      // Pagefind excerpts wrap matches in <mark>; content is our own.
                      dangerouslySetInnerHTML={{ __html: r.excerpt }}
                    />
                  )}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
