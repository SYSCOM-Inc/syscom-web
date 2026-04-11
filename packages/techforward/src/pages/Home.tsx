import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { company, services, products, aiCapabilities, verticals } from '@shared/data/company';

/* ── Featured vs utility products ── */
const featuredProducts = products.filter(p => p.category === 'flagship' || p.category === 'core');
const utilityProducts = products.filter(p => p.category === 'utility');

/* ── Scroll fade-in hook ── */
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

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Service emoji icons ── */
const serviceEmoji: Record<string, string> = {
  ecm: '\u{1F5C4}\uFE0F',
  bpa: '\u{26A1}',
  capture: '\u{1F4C4}',
  migration: '\u{1F504}',
  ai: '\u{1F9E0}',
  'custom-apps': '\u{1F4BB}',
  staffing: '\u{1F465}',
};

/* ── Product accent colors ── */
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

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid animate-grid-pulse" />

        {/* Radial gradient orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full animate-glow"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full animate-glow"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)', animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan/5 border border-cyan/10 mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs font-heading font-bold text-muted uppercase tracking-wider">
                Enterprise Content Management &middot; AI-Powered
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-3px] leading-[0.95] mb-8">
              <span className="block text-gray-900 opacity-0 animate-fade-up-1">Your documents.</span>
              <span className="block gradient-text opacity-0 animate-fade-up-2">Understood.</span>
            </h1>

            {/* Body */}
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-up-3">
              {company.yearsInBusiness}+ years of solving enterprise content challenges.
              Now with AI that actually understands your documents &mdash; not just the text inside them.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
                style={{ color: '#ffffff' }}
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/roi"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-emerald border border-emerald/30 hover:bg-emerald/5 transition-colors"
              >
                Calculate Your ROI
              </Link>
              <Link
                to="/products"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-gray-600 border border-border hover:bg-gray-50 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-20 pt-10 border-t border-border opacity-0 animate-fade-up-5 max-w-3xl">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-3">Our Mission</p>
            <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
              &ldquo;{company.mission}&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="mb-14">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-3">
              What We Do
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px]">
              Our Services
            </h2>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <FadeSection key={service.id} delay={i * 0.06}>
                <Link
                  to="/services"
                  className="group block h-full rounded-2xl bg-card border border-border p-6 card-hover"
                >
                  <span className="text-2xl mb-4 block">{serviceEmoji[service.id] || '\u{1F4E6}'}</span>
                  <h3 className="font-heading font-bold text-base tracking-tight mb-2 group-hover:text-cyan transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCTS ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="mb-14">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-purple mb-3">
              Our IP
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px]">
              Software suite
            </h2>
          </FadeSection>

          {/* Featured products (flagship + core) */}
          <div className="grid sm:grid-cols-2 gap-4">
            {featuredProducts.map((product, i) => (
              <FadeSection key={product.id} delay={i * 0.08}>
                <Link
                  to={`/products#${product.id}`}
                  className="group block h-full rounded-2xl bg-card border border-border p-6 lg:p-8 card-hover"
                >
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-heading font-bold uppercase tracking-wider border mb-4 ${productAccentBg[product.id]}`}
                  >
                    {product.badge}
                  </span>
                  <h3 className="font-heading font-bold text-xl tracking-tight mb-1 group-hover:text-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: productAccent[product.id] }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Connector tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.connectors.slice(0, 5).map((conn) => (
                      <span
                        key={conn}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-muted/70 bg-border/50"
                      >
                        {conn}
                      </span>
                    ))}
                    {product.connectors.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-muted/50">
                        +{product.connectors.length - 5}
                      </span>
                    )}
                  </div>

                  <span
                    className="text-sm font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1"
                    style={{ color: productAccent[product.id] }}
                  >
                    Explore
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              </FadeSection>
            ))}
          </div>

          {/* Utility products (compact row) */}
          <FadeSection className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {utilityProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products#${product.id}`}
                  className="group flex items-center gap-4 rounded-xl bg-card border border-border p-4 card-hover"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm tracking-tight group-hover:text-cyan transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-muted truncate">{product.tagline}</p>
                  </div>
                  <span
                    className="text-xs font-medium shrink-0"
                    style={{ color: productAccent[product.id] }}
                  >
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </FadeSection>

          {/* View all link */}
          <FadeSection className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:gap-3 transition-all"
            >
              View All Products &rarr;
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ═══════════ AI SECTION ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-amber mb-3">
                AI &amp; Innovation
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-6">
                Intelligence, not just automation
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Steve Jobs called the computer &ldquo;a bicycle for the mind.&rdquo; AI is
                the electric motor we just bolted onto it. SYSCOM integrates AI across every
                product &mdash; classification, mapping, search, and compliance.
              </p>

              <blockquote className="border-l-2 border-cyan pl-4 py-2 mb-8">
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  &ldquo;A bicycle for the mind. AI is the electric motor we just bolted onto it.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-4">
                {aiCapabilities.map((cap) => (
                  <div key={cap.title} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-sm shrink-0 mt-0.5">
                      {cap.icon === 'brain' ? '\u{1F9E0}' : cap.icon === 'shield' ? '\u{1F6E1}\uFE0F' : cap.icon === 'bar-chart' ? '\u{1F4CA}' : '\u{2699}\uFE0F'}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-gray-900">{cap.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>

            <FadeSection delay={0.15}>
              <div className="relative flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center"
                  style={{ background: 'conic-gradient(from 0deg, #0891B2, #7C3AED, #E11D48, #D97706, #059669, #0891B2)', padding: '2px' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
                    <span className="font-heading font-bold text-6xl sm:text-8xl gradient-text tracking-[-4px]">
                      AI
                    </span>
                  </div>
                </div>
                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan" />
                </div>
                <div className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse]">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple" />
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT / VERTICALS ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeSection>
              <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-emerald mb-3">
                Track Record
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-6">
                {company.yearsInBusiness}+ years of solving hard problems
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Founded in {company.founded} in {company.address.city}, SYSCOM has built a reputation
                on deep technical expertise and long-term client partnerships. We configure proven
                platforms, customize them to fit, and build our own tools when nothing else will do.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We know that the newest, latest technology is not always the best solution &mdash;
                but it&apos;s sometimes the only solution. And we know the difference.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {verticals.map((v) => (
                  <div key={v.name} className="rounded-xl bg-card border border-border p-4">
                    <h4 className="font-heading font-bold text-xs text-gray-900 mb-0.5">{v.name}</h4>
                    <p className="text-[11px] text-muted">{v.subtitle}</p>
                  </div>
                ))}
              </div>
            </FadeSection>

            <FadeSection delay={0.1}>
              <div className="rounded-2xl bg-card border border-border p-8 h-full flex flex-col justify-center">
                <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-6">
                  Our Mission
                </p>
                <blockquote className="text-xl sm:text-2xl text-gray-700 font-body leading-relaxed mb-6">
                  &ldquo;{company.mission}&rdquo;
                </blockquote>
                <p className="text-sm text-muted">
                  &mdash; {company.name}, {company.address.city}, {company.address.state}
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT CTA ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-border">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-2px] mb-6">
              Ready to modernize?
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">
              Talk to our team about how {company.yearsInBusiness}+ years of ECM expertise
              and modern AI can solve your toughest challenges.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
                style={{ color: '#ffffff' }}
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/roi"
                className="px-8 py-4 rounded-xl text-sm font-semibold text-emerald border border-emerald/30 hover:bg-emerald/5 transition-colors"
              >
                Calculate Your ROI
              </Link>
              <a
                href={`tel:${company.phoneTollfree}`}
                className="px-8 py-4 rounded-xl text-sm font-semibold text-gray-600 border border-border hover:bg-gray-50 transition-colors"
              >
                {company.phoneTollfree}
              </a>
            </div>

            <p className="text-xs text-muted/60">
              {company.address.street}, {company.address.city}, {company.address.state} {company.address.zip}
            </p>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
