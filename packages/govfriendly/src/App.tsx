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

// Home is eager-imported (not lazy) so the initial render of "/" never shows
// the Suspense fallback. Without this, the footer started inside the viewport
// over a short fallback and shifted down when the real Home content inflated
// <main> — that single shift was the entire CLS budget (~0.32). See #14.
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const PlatformsIndex = lazy(() => import('./pages/platforms/PlatformsIndex'));
const TungstenTotalAgility = lazy(() => import('./pages/platforms/TungstenTotalAgility'));
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
