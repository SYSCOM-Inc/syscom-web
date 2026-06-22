import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Manages scroll on navigation:
//  - With a hash (e.g. search-result deep links to /services#capture), scroll to
//    that section. Lazy pages render after a tick, so retry briefly.
//  - Without a hash, reset to the top for a fresh view on every navigation —
//    including clicking the logo/Home while already on a page (keyed on
//    location.key, which changes on each navigation even to the same path).
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72; // fixed navbar offset
          window.scrollTo({ top, behavior: 'smooth' });
        } else if (tries++ < 12) {
          window.setTimeout(tryScroll, 60);
        }
      };
      tryScroll();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash, key]);
  return null;
}

// Home is eager (originally to fix the Suspense-fallback footer CLS — #14/#16).
//
// All platform pages are *also* eager. Reason: even with prerendered HTML in
// place + main.tsx awaiting the route chunk before hydrateRoot, React 18's
// hydration with React.lazy still races against the chunk fetch under
// real-world latency (we measured CLS 0.322 in 4/5 mobile Lighthouse runs on
// the lazy platform routes — the same footer-shift bug as #14, just on
// different routes). When the platform component is statically imported,
// Suspense never activates, the prerendered DOM hydrates cleanly, CLS = 0.
//
// Cost: ~30 KB added to the main entry bundle (6 platform pages, ~5 KB each
// post-gzip). Acceptable since platform pages are the highest-value
// direct-land SEO surface and need predictable CWV.
//
// About / Services / Products / Contact / Careers / PlatformsIndex stay lazy.
// They are mostly navigated to in-app rather than landed on from search, so
// occasional hydration flicker on direct-land is a lower-priority issue we
// can revisit if it shows up in real-user metrics.
import Home from './pages/Home';
import TungstenTotalAgility from './pages/platforms/TungstenTotalAgility';
import TungstenCapture from './pages/platforms/TungstenCapture';
import IbmFileNet from './pages/platforms/IbmFileNet';
import IbmBaw from './pages/platforms/IbmBaw';
import IbmDatacap from './pages/platforms/IbmDatacap';
import HylandOnBase from './pages/platforms/HylandOnBase';
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const PlatformsIndex = lazy(() => import('./pages/platforms/PlatformsIndex'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollManager />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-1 pt-16">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/platforms" element={<PlatformsIndex />} />
              <Route path="/platforms/tungsten-totalagility" element={<TungstenTotalAgility />} />
              <Route path="/platforms/tungsten-capture" element={<TungstenCapture />} />
              <Route path="/platforms/ibm-filenet" element={<IbmFileNet />} />
              <Route path="/platforms/ibm-baw" element={<IbmBaw />} />
              <Route path="/platforms/ibm-datacap" element={<IbmDatacap />} />
              <Route path="/platforms/hyland-onbase" element={<HylandOnBase />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
