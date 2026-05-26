import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import { platforms, PLATFORM_VENDOR_ORDER } from '../../data/platforms';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Platforms SYSCOM implements and supports',
  itemListElement: platforms.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
  })),
};

export default function PlatformsIndex() {
  return (
    <div>
      <Seo
        title="Platforms We Implement & Support | SYSCOM"
        description="SYSCOM implements and supports Tungsten TotalAgility, Kofax Capture, IBM FileNet, IBM Content Manager, Datacap, BAW, Hyland OnBase, and more — 44 years of ECM and automation expertise."
        path="/platforms"
        jsonLd={JSON_LD}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-20" aria-label="Platforms introduction">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Platforms We Implement
          </h1>
          <p className="mt-4 text-lg text-slate max-w-3xl leading-relaxed">
            SYSCOM is a multi-platform implementation partner across the enterprise content and
            intelligent-automation ecosystem. We implement, upgrade, migrate, and support the
            platforms below — backed by 44 years of experience and deep IBM and Tungsten Automation
            partnerships.
          </p>

          {/* Kofax -> Tungsten rebrand note */}
          <div className="mt-8 rounded-warm border border-warm-border bg-white p-5">
            <p className="text-sm text-slate leading-relaxed">
              <span className="font-semibold text-navy">Kofax is now Tungsten Automation.</span>{' '}
              The company rebranded in 2024, and we support the full portfolio across that change —
              from the latest Tungsten TotalAgility releases to legacy Kofax Capture, Kofax
              Transformation Modules (KTM), and Kofax Front Office Server (KFS) deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Platform groups by vendor */}
      {PLATFORM_VENDOR_ORDER.map((vendor, vi) => {
        const items = platforms.filter((p) => p.vendor === vendor);
        const isAlt = vi % 2 === 1;
        return (
          <section
            key={vendor}
            className={`py-14 sm:py-16 ${isAlt ? 'bg-warm-cream' : 'bg-white'}`}
            aria-labelledby={`vendor-${vi}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id={`vendor-${vi}-heading`}
                className="font-heading text-2xl font-bold text-navy mb-6"
              >
                {vendor}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p) => (
                  <Link
                    key={p.name}
                    to={p.href}
                    className={`group block bg-white rounded-warm border p-5 transition-all hover:shadow-md ${
                      p.featured ? 'border-teal/40 ring-1 ring-teal/20' : 'border-warm-border'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-semibold text-base text-navy group-hover:text-teal transition-colors">
                        {p.name}
                      </h3>
                      {p.featured && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal/10 text-teal">
                          Partner page
                        </span>
                      )}
                    </div>
                    {p.formerly && <p className="mt-0.5 text-xs text-muted italic">{p.formerly}</p>}
                    <p className="mt-2 text-sm text-slate leading-relaxed">{p.blurb}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-teal group-hover:underline">
                      {p.featured ? 'View partner page' : 'How we help'}
                      <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-navy" aria-label="Contact call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Don't see your platform?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We work across the enterprise content and automation ecosystem. Tell us what you run and
            we'll tell you how we can help.
          </p>
          <Link to="/contact" className="mt-8 btn-white inline-flex">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
