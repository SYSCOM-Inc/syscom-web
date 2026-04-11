import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@shared/data/company';
import WorkflowAnimation from '../components/WorkflowAnimation';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}
    >
      {children}
    </div>
  );
}

const productAccent: Record<string, string> = {
  asm: '#22d3ee',
  'ais-bridge': '#fb7185',
  ibig: '#a78bfa',
  'content-services': '#34d399',
  'content-viewer': '#06b6d4',
  'ais-ee': '#8b5cf6',
  asimport: '#10b981',
  ip2cm: '#22d3ee',
  'mvs-connect': '#64748b',
};

const productAccentBg: Record<string, string> = {
  asm: 'bg-cyan/10 text-cyan border-cyan/20',
  'ais-bridge': 'bg-rose/10 text-rose border-rose/20',
  ibig: 'bg-purple/10 text-purple border-purple/20',
  'content-services': 'bg-emerald/10 text-emerald border-emerald/20',
  'content-viewer': 'bg-cyan/10 text-cyan border-cyan/20',
  'ais-ee': 'bg-purple/10 text-purple border-purple/20',
  asimport: 'bg-emerald/10 text-emerald border-emerald/20',
  ip2cm: 'bg-cyan/10 text-cyan border-cyan/20',
  'mvs-connect': 'bg-slate/10 text-slate border-slate/20',
};

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-purple mb-3">
              Our Products
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-3px] leading-tight mb-6">
              Products built from{' '}
              <span className="gradient-text">experience.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              We configure the best platforms when they fit. When they don&apos;t, we build our own.
              Every SYSCOM product was born from a real client need that nothing else could solve.
            </p>
          </div>
        </div>
      </section>

      {/* Product sections */}
      {products.map((product, idx) => {
        const accent = productAccent[product.id] || '#22d3ee';
        const badgeClass = productAccentBg[product.id] || '';
        const isEven = idx % 2 === 0;

        return (
          <section
            key={product.id}
            id={product.id}
            className={`py-20 sm:py-28 ${idx > 0 ? 'border-t border-border' : 'border-t border-border'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeSection>
                {/* Header */}
                <div className="mb-10">
                  <span className={`inline-flex px-3 py-1.5 rounded-md text-[10px] font-heading font-bold uppercase tracking-wider border mb-4 ${badgeClass}`}>
                    {product.badge}
                  </span>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-2">
                    {product.name}
                  </h2>
                  <p className="text-lg font-medium" style={{ color: accent }}>
                    {product.tagline}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <p className="text-muted leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Connector tags */}
                    <div className="mb-8">
                      <h4 className="text-xs font-heading font-bold uppercase tracking-[3px] text-muted mb-3">
                        Connectors
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.connectors.map((conn) => (
                          <span
                            key={conn}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-border/40 text-muted/80 border border-border"
                          >
                            {conn}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
                    style={{ color: '#ffffff' }}
                    >
                      Schedule a Consultation
                    </Link>
                  </div>

                  {/* Workflow + Features */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    {/* Workflow animation */}
                    <div className="rounded-2xl bg-card border border-border p-5 mb-5">
                      <h4 className="text-xs font-heading font-bold uppercase tracking-[3px] text-muted mb-3">
                        Workflow
                      </h4>
                      <WorkflowAnimation steps={product.workflow} accentColor={accent} />
                    </div>

                    {/* Feature grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.slice(0, 4).map((feat) => (
                        <div key={feat.title} className="rounded-xl bg-card border border-border p-4">
                          <h5 className="font-heading font-bold text-xs text-gray-900 mb-1">{feat.title}</h5>
                          <p className="text-[11px] text-muted leading-relaxed">{feat.description}</p>
                        </div>
                      ))}
                    </div>
                    {product.features.length > 4 && (
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        {product.features.slice(4).map((feat) => (
                          <div key={feat.title} className="rounded-xl bg-card border border-border p-4">
                            <h5 className="font-heading font-bold text-xs text-gray-900 mb-1">{feat.title}</h5>
                            <p className="text-[11px] text-muted leading-relaxed">{feat.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeSection>
            </div>
          </section>
        );
      })}

      {/* Integrated Suite */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-emerald mb-3">
              Better Together
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
              An integrated product suite
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              SYSCOM&apos;s products are designed to work together. Migrate content with ASM,
              discover insights with IBIG, and maintain legacy access with AIS Bridge &mdash; all
              from one vendor who built every piece.
            </p>
          </FadeSection>

          <FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {products.map((product) => {
                const accent = productAccent[product.id] || '#22d3ee';
                return (
                  <a
                    key={product.id}
                    href={`#${product.id}`}
                    className="rounded-xl bg-card border border-border p-5 text-center hover:border-cyan/30 transition-all group"
                  >
                    <h3 className="font-heading font-bold text-sm tracking-tight mb-1 group-hover:text-cyan transition-colors">{product.name}</h3>
                    <p className="text-xs font-medium mb-2" style={{ color: accent }}>{product.tagline}</p>
                    <p className="text-[11px] text-muted leading-relaxed">
                      {product.description.split('.')[0]}.
                    </p>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted">
                All products backed by SYSCOM engineering &amp; support &middot;{' '}
                <Link to="/contact" className="text-cyan hover:underline">Get a demo &rarr;</Link>
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
              Ready to see our products in action?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8">
              Schedule a demo to see how our suite of {products.length} products
              can solve your enterprise content challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              Request a Demo &rarr;
            </Link>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
