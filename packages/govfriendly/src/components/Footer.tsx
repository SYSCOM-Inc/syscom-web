import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { company, services, products } from '@shared/data/company';
import logoDark from '../assets/syscom-logo-dark.webp';

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Link to="/" className="inline-flex items-center hover:opacity-80 transition-opacity" aria-label="SYSCOM home">
              <img
                src={logoDark}
                alt="SYSCOM"
                width={150}
                height={50}
                className="h-12 w-auto"
                decoding="async"
              />
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {company.tagline}
            </p>
            <p className="mt-4 text-sm text-white/50">
              {company.address.street}<br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
            {company.social?.linkedin && (
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SYSCOM on LinkedIn"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {products.filter((p) => p.category === 'flagship' || p.category === 'core').map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products#${p.id}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-sm text-gold hover:text-white transition-colors"
                >
                  All Products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.supportEmail}`} className="hover:text-white transition-colors">
                  {company.supportEmail}
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 px-4 py-2 text-sm font-medium border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} SYSCOM, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/about" className="hover:text-white/70 transition-colors">About</Link>
            <Link to="/careers" className="hover:text-white/70 transition-colors">Opportunities</Link>
            <Link to="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
