import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import SearchBar from './SearchBar';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/platforms', label: 'Platforms' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Opportunities' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(250,250,247,0.95)] backdrop-blur-md shadow-sm border-b border-warm-border'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo + inline search. Full nav + inline search activate at lg;
              below lg (incl. tablet) we use the icon-triggered search + menu so the
              7 nav items + search bar don't collide. */}
          <div className="flex items-center gap-4 min-w-0">
            <Link
              to="/"
              className="font-heading text-2xl font-bold text-navy tracking-tight hover:text-teal transition-colors shrink-0"
              aria-label="SYSCOM home"
            >
              SYSCOM
            </Link>
            <div className="hidden lg:block w-64">
              <SearchBar />
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                  location.pathname === link.to
                    ? 'text-navy'
                    : 'text-muted hover:text-navy'
                }`}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal rounded-full" />
                )}
              </Link>
            ))}
            <Link to="/contact" className="ml-3 btn-primary text-sm !py-2 !px-4">
              Get Started
            </Link>
          </div>

          {/* Mobile/tablet controls: search toggle + hamburger (below the lg breakpoint) */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              type="button"
              className="p-2 rounded-lg text-navy hover:bg-warm-cream transition-colors"
              onClick={() => {
                setSearchOpen((v) => !v);
                setMobileOpen(false);
              }}
              aria-expanded={searchOpen}
              aria-controls="mobile-search"
              aria-label={searchOpen ? 'Close search' : 'Open search'}
            >
              {searchOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Search className="w-6 h-6" aria-hidden="true" />}
            </button>
            <button
              type="button"
              className="p-2 rounded-lg text-navy hover:bg-warm-cream transition-colors"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setSearchOpen(false);
              }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search panel (icon-triggered) */}
        {searchOpen && (
          <div id="mobile-search" className="lg:hidden pb-3 animate-fade-in">
            <SearchBar autoFocus onNavigate={() => setSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-warm-border shadow-lg animate-fade-in"
        >
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-warm-cream text-navy'
                    : 'text-muted hover:text-navy hover:bg-warm-light'
                }`}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="block mt-2 btn-primary text-sm text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
