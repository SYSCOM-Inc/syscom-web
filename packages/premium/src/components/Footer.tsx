import { Link } from 'react-router-dom';
import { company, services } from '@shared/data/company';

export default function Footer() {
  return (
    <footer className="bg-warm-200 border-t border-copper-500/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-heading text-xl font-semibold text-charcoal-900 tracking-wide">
                SYSCOM<span className="text-copper-500">.</span>
              </span>
            </Link>
            <p className="mt-4 text-charcoal-500 text-sm leading-relaxed max-w-xs font-light">
              {company.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Products', path: '/products' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-charcoal-500 text-sm hover:text-copper-600 transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400 mb-6">
              Expertise
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-charcoal-500 text-sm hover:text-copper-600 transition-colors duration-500"
                  >
                    {service.shortName === 'Custom Apps' ? 'Custom Applications' : service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400 mb-6">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-500">
              <li>{company.address.street}</li>
              <li>
                {company.address.city}, {company.address.state}{' '}
                {company.address.zip}
              </li>
              <li className="pt-2">
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-copper-600 transition-colors duration-500"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phoneTollfreeNumeric}`}
                  className="hover:text-copper-600 transition-colors duration-500"
                >
                  {company.phoneTollfree}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-copper-600 transition-colors duration-500"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.supportEmail}`}
                  className="hover:text-copper-600 transition-colors duration-500"
                >
                  {company.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-charcoal-300/30">
          <p className="text-charcoal-400 text-xs tracking-wide font-light">
            &copy; {new Date().getFullYear()} {company.name} All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
