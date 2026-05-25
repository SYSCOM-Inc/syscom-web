// Builds the Pagefind search index from curated records (search-content.mjs)
// and writes it to dist/pagefind/ at compile time. Runs after `vite build`.
//
// The site is a client-rendered SPA (one empty index.html), so Pagefind's
// default HTML crawl finds nothing. We use the Node Indexing API to add custom
// records instead. The browser bundle (pagefind.js) is emitted alongside the
// index and loaded lazily by the SearchBar component.

import * as pagefind from 'pagefind';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { searchPages } from './search-content.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(__dirname, '../dist/pagefind');

const { index } = await pagefind.createIndex();

for (const page of searchPages) {
  await index.addCustomRecord({
    url: page.url,
    content: `${page.title}. ${page.content}`,
    language: 'en',
    meta: {
      title: page.title,
    },
  });
}

const { errors } = await index.writeFiles({ outputPath });
if (errors && errors.length) {
  console.error('[pagefind] errors:', errors);
  process.exit(1);
}

await pagefind.close();
console.log(`[pagefind] indexed ${searchPages.length} records -> ${outputPath}`);
