import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Careers', path: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-warm-50/90 backdrop-blur-xl border-b border-copper-500/10 shadow-sm'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-baseline gap-2 group">
              <span className="font-heading text-2xl font-semibold text-charcoal-900 tracking-wide">
                SYSCOM
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-copper-500 group-hover:bg-copper-400 transition-colors duration-500 mb-0.5" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal-400 font-body">
                INC
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] uppercase tracking-[0.25em] transition-colors duration-500 ${
                    location.pathname === link.path
                      ? 'text-charcoal-900'
                      : 'text-charcoal-500 hover:text-charcoal-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/30 px-6 py-2.5 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500"
              >
                Inquire
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-charcoal-500 hover:text-charcoal-900 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 bg-warm-50/98 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <Link
            to="/"
            className="font-heading text-3xl text-charcoal-900 tracking-wide"
          >
            SYSCOM<span className="text-copper-500">.</span>
          </Link>
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-[0.25em] transition-all duration-500 ${
                location.pathname === link.path
                  ? 'text-charcoal-900'
                  : 'text-charcoal-500 hover:text-charcoal-900'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 text-sm uppercase tracking-[0.25em] text-copper-600 border border-copper-500/30 px-8 py-3 hover:bg-copper-500/10 transition-all duration-300"
          >
            Inquire
          </Link>
        </div>
      </div>
    </>
  );
}
