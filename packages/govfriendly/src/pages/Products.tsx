import { Link } from 'react-router-dom';
import { products } from '@shared/data/company';
import WorkflowAnimation from '../components/WorkflowAnimation';
import { Replace, ShieldCheck, Brain, Zap, FileText, Plug } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const PRODUCT_ACCENTS: Record<string, { accent: string; badgeClass: string; label: string }> = {
  asm: { accent: 'teal', badgeClass: 'bg-teal/10 text-teal', label: 'Flagship' },
  'ais-bridge': { accent: 'terracotta', badgeClass: 'bg-terracotta/10 text-terracotta', label: 'Modernization' },
  ibig: { accent: 'navy', badgeClass: 'bg-navy/10 text-navy', label: 'Next Gen' },
  'content-services': { accent: 'sage', badgeClass: 'bg-sage/10 text-sage', label: 'Platform' },
  'content-viewer': { accent: 'cyan', badgeClass: 'bg-cyan-50 text-cyan-700', label: 'Viewer' },
  'ais-ee': { accent: 'violet', badgeClass: 'bg-violet-50 text-violet-700', label: 'Client' },
  asimport: { accent: 'emerald', badgeClass: 'bg-emerald-50 text-emerald-700', label: 'Utility' },
  ip2cm: { accent: 'sky', badgeClass: 'bg-sky-50 text-sky-700', label: 'Migration' },
  'mvs-connect': { accent: 'slate', badgeClass: 'bg-slate-50 text-slate-700', label: 'Integration' },
};

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-20" aria-label="Products hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-slate max-w-3xl leading-relaxed">
            Software we built because off-the-shelf didn't solve the problem. We own the code,
            control the roadmap, and support every deployment — alongside the best platforms in the industry.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => {
        const meta = PRODUCT_ACCENTS[product.id] || PRODUCT_ACCENTS.asm;
        const isAlt = index % 2 === 1;

        return (
          <section
            key={product.id}
            id={product.id}
            className={`py-16 sm:py-20 ${isAlt ? 'bg-warm-cream' : 'bg-white'}`}
            aria-labelledby={`product-${product.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-10">
                <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${meta.badgeClass}`}>
                  {product.badge}
                </span>
                <h2
                  id={`product-${product.id}-heading`}
                  className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-navy"
                >
                  {product.name}
                </h2>
                <p className="mt-2 text-warm-brown font-medium">{product.tagline}</p>
                <p className="mt-4 text-slate max-w-3xl mx-auto leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Workflow Animation */}
              <div className="mb-10">
                <WorkflowAnimation steps={product.workflow} accentColor={meta.accent} />
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {product.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white rounded-warm border border-warm-border p-5 hover:shadow-sm transition-shadow"
                  >
                    <h3 className="font-heading font-semibold text-base text-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Connectors */}
              <div>
                <h3 className="font-heading font-semibold text-sm text-muted uppercase tracking-wider mb-3 text-center">
                  Supported Connectors
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {product.connectors.map((connector) => (
                    <span
                      key={connector}
                      className="text-xs px-3 py-1.5 bg-warm-light border border-warm-border rounded-full text-slate"
                    >
                      {connector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* How They Work Together */}
      <section
        className="py-20 bg-white"
        aria-labelledby="together-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="together-heading"
            className="font-heading text-3xl font-bold text-navy text-center mb-4"
          >
            Better Together
          </h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-12">
            Our products are designed to work as an integrated suite, covering the full
            content lifecycle from capture to migration to delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              { Icon: Replace, title: 'Migrate', desc: 'ASM moves content from legacy platforms to modern repositories with full fidelity. IP2CM handles high-speed ImagePlus-to-CM migrations.', color: 'text-teal', iconBg: 'bg-teal/10' },
              { Icon: ShieldCheck, title: 'Preserve', desc: 'AIS Bridge maintains critical ImagePlus workflows while modernizing infrastructure. AIS+EE provides enhanced access to IBM content repositories.', color: 'text-terracotta', iconBg: 'bg-terracotta/10' },
              { Icon: Brain, title: 'Understand', desc: 'IBIG 2.0 crawls your repositories and builds a semantic knowledge layer with AI-powered search.', color: 'text-navy', iconBg: 'bg-navy/10' },
              { Icon: Zap, title: 'Deliver', desc: 'SCS provides config-driven workflows that deploy in days. Content Viewer gives zero-install document access across repositories.', color: 'text-sage', iconBg: 'bg-sage/10' },
              { Icon: FileText, title: 'View & Import', desc: 'Content Viewer renders any document in any browser. ASImport handles high-speed content ingestion into IBM Content Manager.', color: 'text-navy', iconBg: 'bg-navy/10' },
              { Icon: Plug, title: 'Connect', desc: 'MVS Connect bridges mainframe environments with enterprise capture platforms for seamless document storage.', color: 'text-teal', iconBg: 'bg-teal/10' },
            ] as Array<{ Icon: LucideIcon; title: string; desc: string; color: string; iconBg: string }>).map(({ Icon, title, desc, color, iconBg }) => (
              <div key={title} className="bg-warm-light rounded-warm p-6 border border-warm-border text-center">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 mx-auto rounded-lg ${iconBg} ${color}`}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </span>
                <h3 className={`mt-4 font-heading font-semibold text-lg ${color}`}>
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            See Our Products in Action
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Schedule a demonstration and see how SYSCOM products can solve your content
            challenges.
          </p>
          <Link to="/contact" className="mt-8 btn-white inline-flex">
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
