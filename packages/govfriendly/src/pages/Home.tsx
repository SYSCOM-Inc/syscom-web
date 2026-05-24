import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { company, services, products, verticals } from '@shared/data/company';
import { SyscomIcon } from '../lib/icons';

// Rotating AI-reinvention provocations for the hero panel.
const AI_QUOTES = [
  'Steve Jobs called the computer a bicycle for the mind. AI just strapped a motor on it — time to ride!',
  'Four decades mastering content. AI is how we make it think.',
  "AI doesn't replace expertise — it amplifies it. Forty years of know-how, now at machine speed.",
  "Every document you've ever filed is a question waiting to be answered. AI finally learned to listen.",
  'Automation took the busywork. AI takes the judgment calls. Your team takes the credit.',
  'The next decade belongs to the organizations that reinvent fastest — not the ones with the most data.',
];

const QUOTE_INTERVAL_MS = 7000;

const PRODUCT_COLORS: Record<string, { badge: string; border: string }> = {
  asm: { badge: 'bg-teal/10 text-teal', border: 'border-teal/30' },
  'ais-bridge': { badge: 'bg-terracotta/10 text-terracotta', border: 'border-terracotta/30' },
  ibig: { badge: 'bg-navy/10 text-navy', border: 'border-navy/30' },
  'content-services': { badge: 'bg-sage/10 text-sage', border: 'border-sage/30' },
  'content-viewer': { badge: 'bg-cyan-50 text-cyan-700', border: 'border-cyan-200' },
  'ais-ee': { badge: 'bg-violet-50 text-violet-700', border: 'border-violet-200' },
  asimport: { badge: 'bg-emerald-50 text-emerald-700', border: 'border-emerald-200' },
  ip2cm: { badge: 'bg-sky-50 text-sky-700', border: 'border-sky-200' },
  'mvs-connect': { badge: 'bg-slate-50 text-slate-700', border: 'border-slate-200' },
};

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const id = window.setInterval(() => {
      setQuoteIndex((i) => (i + 1) % AI_QUOTES.length);
    }, QUOTE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-20 sm:py-28" aria-label="Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Headline + CTAs */}
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-teal uppercase tracking-wider mb-3">
                Trusted Partner Since {company.founded}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy leading-[1.15]">
                Trusted Enterprise Content Management
              </h1>
              <p className="mt-2 font-heading text-xl sm:text-2xl text-warm-brown italic">
                Built to last. Built to evolve.
              </p>
              <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl">
                {company.yearsInBusiness} years of proven solutions for government agencies,
                financial institutions, and healthcare organizations. We solve complex content
                challenges with technology that works.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-teal">
                  Schedule a Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-semibold text-navy hover:text-teal transition-colors"
                >
                  Explore Services
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center text-sm font-semibold text-navy hover:text-teal transition-colors"
                >
                  Explore Products
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Credibility stats panel (balances the right side of the hero) */}
            <aside
              className="lg:col-span-5 bg-white border border-warm-border rounded-warm p-6 sm:p-8 shadow-sm"
              aria-label="The AI era at SYSCOM"
            >
              <p className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-teal mb-5">
                <Sparkles className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                The AI Era
              </p>
              <div className="min-h-[11rem] flex items-center" aria-live="polite">
                <blockquote
                  key={quoteIndex}
                  className={`font-heading text-2xl sm:text-3xl font-semibold text-navy leading-snug ${
                    reduceMotion ? '' : 'animate-fade-up'
                  }`}
                >
                  {AI_QUOTES[quoteIndex]}
                </blockquote>
              </div>
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {AI_QUOTES.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === quoteIndex ? 'w-5 bg-teal' : 'w-1.5 bg-warm-border'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-warm-border">
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-teal mb-3">
                  Compliance &amp; Frameworks
                </p>
                <ul className="flex flex-wrap gap-2">
                  {['NIST 800-53', 'CJIS', 'IRS Pub 1075', 'HIPAA', 'SOX'].map((badge) => (
                    <li
                      key={badge}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-warm-cream border border-warm-border text-xs font-semibold text-navy"
                    >
                      {badge}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Mission */}
          <div className="mt-16 bg-warm-light border border-warm-border rounded-warm p-8">
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-teal mb-2">Our Mission</p>
            <blockquote className="text-lg text-navy font-heading font-semibold italic leading-relaxed">
              &ldquo;{company.mission}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy"
            >
              Our Services
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              Seven specialized service areas built on decades of real-world enterprise deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group block bg-white border border-warm-border rounded-warm p-6 transition-all hover:shadow-md hover:border-warm-brown/20"
              >
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-teal/10 text-teal"
                  aria-hidden="true"
                >
                  <SyscomIcon name={service.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-3 font-heading font-semibold text-lg text-navy group-hover:text-teal transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-teal group-hover:underline">
                  Learn more
                  <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-warm-cream" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="products-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy"
            >
              Our Products
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              We use the right tool for the job — proven platforms when they fit, custom-built solutions when they don't.
            </p>
          </div>

          {/* Flagship & Core Products — full cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter((p) => p.category === 'flagship' || p.category === 'core').map((product) => {
              const colors = PRODUCT_COLORS[product.id] || PRODUCT_COLORS.asm;
              return (
                <Link
                  key={product.id}
                  to={`/products#${product.id}`}
                  className={`group block bg-white border ${
                    product.flagship ? 'border-teal/40 ring-1 ring-teal/20' : 'border-warm-border'
                  } rounded-warm p-6 transition-all hover:shadow-md`}
                >
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${colors.badge}`}>
                    {product.badge}
                  </span>
                  <h3 className="mt-3 font-heading font-bold text-lg text-navy group-hover:text-teal transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-warm-brown">{product.tagline}</p>
                  <p className="mt-3 text-sm text-slate leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-teal group-hover:underline">
                    Learn More
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Utility Products — compact cards */}
          <div className="mt-8">
            <h3 className="font-heading text-lg font-semibold text-navy text-center mb-4">
              Specialized Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {products.filter((p) => p.category === 'utility').map((product) => (
                <Link
                  key={product.id}
                  to={`/products#${product.id}`}
                  className="group block bg-white border border-warm-border rounded-warm p-4 transition-all hover:shadow-md text-center"
                >
                  <h4 className="font-heading font-semibold text-sm text-navy group-hover:text-teal transition-colors">
                    {product.name}
                  </h4>
                  <p className="mt-1 text-xs text-warm-brown">{product.tagline}</p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-teal group-hover:underline">
                    Details
                    <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 bg-white" aria-labelledby="verticals-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="verticals-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy"
            >
              Industries We Serve
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              Deep domain expertise in the sectors where content management matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {verticals.map((vertical) => (
              <div
                key={vertical.name}
                className="bg-warm-light rounded-warm p-8 text-center border border-warm-border"
              >
                <span
                  className="inline-flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-warm-cream text-navy ring-1 ring-warm-border"
                  aria-hidden="true"
                >
                  <SyscomIcon name={vertical.icon} className="w-7 h-7" />
                </span>
                <h3 className="mt-4 font-heading font-semibold text-lg text-navy">
                  {vertical.name}
                </h3>
                <p className="text-xs text-warm-brown font-medium">{vertical.subtitle}</p>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {vertical.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Partner with SYSCOM
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you need to modernize legacy systems, automate document workflows, or
            migrate millions of records, we have the tools and the track record.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors"
            >
              About SYSCOM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
