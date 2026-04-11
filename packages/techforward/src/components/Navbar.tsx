import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[rgba(255,255,255,0.92)] backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 group">
            <span className="font-heading font-bold text-xl tracking-[-2px] text-gray-900">
              SYSCOM
            </span>
            <span className="font-heading font-bold text-xl text-cyan">_</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-gray-900'
                    : 'text-muted hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/roi"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/roi'
                  ? 'text-emerald'
                  : 'text-emerald/70 hover:text-emerald'
              }`}
            >
              ROI Calculator
            </Link>
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-muted hover:text-gray-900 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-1 border-t border-border/50">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-muted hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/roi"
            className="block px-4 py-3 rounded-lg text-sm font-medium text-emerald hover:bg-gray-100 transition-colors"
          >
            ROI Calculator
          </Link>
          <Link
            to="/contact"
            className="block mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-cyan to-purple"
            style={{ color: '#ffffff' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}