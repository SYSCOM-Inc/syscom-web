import { Link } from 'react-router-dom';
import { company, services, products } from '@shared/data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-border" role="contentinfo" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-0 mb-4">
              <span className="font-heading font-bold text-xl tracking-[-2px] text-gray-900">
                SYSCOM
              </span>
              <span className="font-heading font-bold text-xl text-cyan">_</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {company.tagline}
            </p>
            <p className="text-muted/60 text-xs">
              Enterprise content management and intelligent automation since {company.founded}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[3px] text-muted mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-muted/80 hover:text-cyan transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[3px] text-muted mb-4">
              Software
            </h4>
            <ul className="space-y-2.5">
              {products.filter(p => p.category === 'flagship' || p.category === 'core').map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products#${product.id}`}
                    className="text-sm text-muted/80 hover:text-cyan transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-sm text-cyan/70 hover:text-cyan transition-colors"
                >
                  All Products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[3px] text-muted mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted/80 hover:text-cyan transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-muted/80 hover:text-cyan transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted/80 hover:text-cyan transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted/60">
            &copy; {currentYear} {company.name} All rights reserved.
          </p>
          <p className="text-xs text-muted/60">
            {company.address.city}, {company.address.state} &middot; {company.phone} &middot; {company.phoneTollfree} &middot;{' '}
            <a href={`mailto:${company.supportEmail}`} className="hover:text-cyan transition-colors">
              {company.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}