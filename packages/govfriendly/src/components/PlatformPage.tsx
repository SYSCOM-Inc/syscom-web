import { Link } from 'react-router-dom';
import Seo from './Seo';

// Reusable template for platform partner landing pages (e.g. Tungsten
// TotalAgility, IBM FileNet). Pass a PlatformContent object; the component
// renders a consistent, SEO-optimized layout. See pages/platforms/README.md
// for how to add a new platform page.

export interface PlatformContent {
  /** Route path for canonical/og:url, e.g. "/platforms/tungsten-totalagility". */
  path: string;
  seo: {
    title: string;
    description: string;
    jsonLd?: object | object[];
  };
  /** Small uppercase label above the H1. */
  eyebrow: string;
  /** The single H1 — should contain the primary keyword. */
  h1: string;
  /** Hero lead paragraph(s). */
  heroLead: string;
  /** "What is X" overview section. */
  whatIs: {
    heading: string;
    paragraphs: string[];
    referenceLabel?: string;
    referenceHref?: string;
  };
  /** "How SYSCOM helps" capability cards. */
  howWeHelp: {
    heading: string;
    intro?: string;
    items: { title: string; description: string }[];
  };
  /** Common use cases. */
  useCases: {
    heading: string;
    items: { title: string; description: string }[];
  };
  /** Why SYSCOM points. */
  whySyscom: {
    heading: string;
    points: { title: string; description: string }[];
  };
  cta: {
    heading: string;
    body: string;
  };
}

export default function PlatformPage({ content }: { content: PlatformContent }) {
  return (
    <div>
      <Seo
        title={content.seo.title}
        description={content.seo.description}
        path={content.path}
        jsonLd={content.seo.jsonLd}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-24" aria-label="Introduction">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-teal uppercase tracking-wider mb-3">
            {content.eyebrow}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy leading-[1.15]">
            {content.h1}
          </h1>
          <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
            {content.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-teal">
              Talk to an Implementation Team
            </Link>
            <Link
              to="/products#alpha-z"
              className="inline-flex items-center text-sm font-semibold text-navy hover:text-teal transition-colors"
            >
              Explore our products
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What is X */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="whatis-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="whatis-heading" className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            {content.whatIs.heading}
          </h2>
          {content.whatIs.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-slate leading-relaxed">
              {p}
            </p>
          ))}
          {content.whatIs.referenceHref && (
            <p className="mt-4 text-sm text-muted">
              <a
                href={content.whatIs.referenceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal font-semibold hover:underline"
              >
                {content.whatIs.referenceLabel}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* How SYSCOM helps */}
      <section className="py-16 sm:py-20 bg-warm-cream" aria-labelledby="help-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="help-heading" className="font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
            {content.howWeHelp.heading}
          </h2>
          {content.howWeHelp.intro && (
            <p className="mt-3 text-slate text-center max-w-3xl mx-auto leading-relaxed">
              {content.howWeHelp.intro}
            </p>
          )}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.howWeHelp.items.map((item) => (
              <div key={item.title} className="bg-white rounded-warm border border-warm-border p-5">
                <h3 className="font-heading font-semibold text-base text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="usecases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="usecases-heading" className="font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
            {content.useCases.heading}
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {content.useCases.items.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-warm border border-warm-border p-5">
                <span className="text-teal mt-0.5 shrink-0" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-base text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SYSCOM */}
      <section className="py-16 sm:py-20 bg-warm-cream" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-heading" className="font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
            {content.whySyscom.heading}
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.whySyscom.points.map((point) => (
              <div key={point.title} className="bg-white rounded-warm border border-warm-border p-5">
                <h3 className="font-heading font-semibold text-base text-navy">{point.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy" aria-label="Contact call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">{content.cta.heading}</h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">{content.cta.body}</p>
          <Link to="/contact" className="mt-8 btn-white inline-flex">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
