import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@shared/data/company';
import WorkflowAnimation from '../components/WorkflowAnimation';

const accentColors: Record<number, 'copper' | 'gold'> = {
  1: 'copper',
  2: 'gold',
  3: 'copper',
  4: 'gold',
};

function getAccentColor(index: number): 'copper' | 'gold' {
  if (accentColors[index]) return accentColors[index];
  return index % 2 === 0 ? 'gold' : 'copper';
}

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Proprietary Technology
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal-900 animate-slide-up font-light">
            Built, Not Bought
          </h1>
          <p
            className="mt-8 text-charcoal-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light animate-slide-up"
            style={{ animationDelay: '150ms' }}
          >
            Proven platforms when they fit. Custom solutions when they don't.
            Every product here exists because nothing else solved the problem.
          </p>
        </div>
      </section>

      {/* Products */}
      {products.map((product, productIndex) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-24 md:py-32 px-6 ${
            productIndex > 0 ? 'border-t border-charcoal-300/20' : ''
          }`}
        >
          <div className="max-w-6xl mx-auto">
            {product.flagship ? (
              /* ASM - Flagship treatment */
              <div className="glass-card rounded-lg p-8 md:p-16">
                <div className="text-center mb-14">
                  <span className="inline-block text-[9px] uppercase tracking-[0.3em] text-copper-600 border border-copper-500/25 px-4 py-1.5 rounded-full mb-5">
                    {product.badge}
                  </span>
                  <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-charcoal-900 mb-3 font-light">
                    {product.name}
                  </h2>
                  <p className="font-heading text-lg md:text-xl text-charcoal-600 italic font-light">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-charcoal-500 text-base leading-relaxed max-w-2xl mx-auto text-center mb-16 font-light">
                  {product.description}
                </p>

                {/* Workflow */}
                <div className="mb-16">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500 text-center mb-6">
                    Migration Workflow
                  </p>
                  <WorkflowAnimation steps={product.workflow} />
                </div>

                {/* Connectors */}
                <div className="mb-16 text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-5">
                    Supported Connectors
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {product.connectors.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-copper-500/8 border border-copper-500/15 text-copper-600"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="bg-warm-200/60 border border-copper-500/8 rounded-lg p-5"
                    >
                      <h4 className="text-charcoal-900 text-sm font-medium mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-charcoal-500 text-xs leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Non-flagship products */
              <div
                className={`md:flex items-start gap-16 ${
                  productIndex % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-2/5 mb-10 md:mb-0">
                  <span className="inline-block text-[9px] uppercase tracking-[0.3em] text-copper-500 mb-4">
                    {product.badge}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 mb-2 font-normal">
                    {product.name}
                  </h2>
                  <p className="font-heading text-base text-charcoal-600 italic mb-6 font-light">
                    {product.tagline}
                  </p>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-8 font-light">
                    {product.description}
                  </p>

                  {/* Connectors */}
                  <div className="flex flex-wrap gap-2">
                    {product.connectors.map((c) => (
                      <span
                        key={c}
                        className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-copper-500/5 border border-copper-500/10 text-copper-600"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-3/5">
                  {/* Workflow */}
                  <div className="mb-8">
                    <WorkflowAnimation
                      steps={product.workflow}
                      accentColor={getAccentColor(productIndex)}
                    />
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="w-1 h-1 rounded-full bg-copper-500 mt-2.5 shrink-0" />
                        <div>
                          <p className="text-charcoal-900 text-sm font-medium mb-1">
                            {feature.title}
                          </p>
                          <p className="text-charcoal-500 text-xs leading-relaxed font-light">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Integration Narrative */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border-t border-b border-copper-500/20 py-14 md:py-20">
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal-900 mb-8 font-light">
              Better Together
            </h2>
            <p className="text-charcoal-500 text-base leading-relaxed font-light">
              ASM migrates your content. AIS Bridge preserves your ImagePlus
              investment. IBIG 2.0 delivers intelligent content discovery. Content
              Services deploys workflows in days. Content Viewer provides
              zero-install document access across every repository.
              Together, they form a complete platform for organizations modernizing
              their content infrastructure -- built by a team that has been doing
              this longer than most companies have existed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 mb-6 font-light">
            See It in Action
          </h2>
          <p className="text-charcoal-500 text-base mb-12 max-w-md mx-auto font-light">
            Every engagement starts with understanding your environment.
            Let us show you what our products can do for yours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/25 px-10 py-4 hover:bg-copper-500/8 hover:border-copper-500/50 transition-all duration-700 group"
          >
            Request a Demo
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-500"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
