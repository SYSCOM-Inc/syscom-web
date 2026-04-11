import { Link } from 'react-router-dom';
import {
  Database,
  Workflow,
  ScanLine,
  ArrowLeftRight,
  Brain,
  Users,
  Landmark,
  Building2,
  HeartPulse,
  Factory,
  ArrowRight,
  Shield,
  BarChart3,
  Settings,
  Laptop,
  Truck,
  Activity,
} from 'lucide-react';
import {
  company,
  services,
  products,
  aiCapabilities,
  verticals,
} from '@shared/data/company';

const serviceIcons: Record<string, React.ReactNode> = {
  ecm: <Database size={22} />,
  bpa: <Workflow size={22} />,
  capture: <ScanLine size={22} />,
  migration: <ArrowLeftRight size={22} />,
  ai: <Brain size={22} />,
  'custom-apps': <Laptop size={22} />,
  staffing: <Users size={22} />,
};

const verticalIcons: Record<string, React.ReactNode> = {
  landmark: <Landmark size={24} />,
  building: <Building2 size={24} />,
  factory: <Factory size={24} />,
  'heart-pulse': <HeartPulse size={24} />,
  shield: <Shield size={24} />,
  activity: <Activity size={24} />,
  truck: <Truck size={24} />,
};

const aiIcons: Record<string, React.ReactNode> = {
  brain: <Brain size={20} />,
  shield: <Shield size={20} />,
  'bar-chart': <BarChart3 size={20} />,
  settings: <Settings size={20} />,
};

export default function Home() {
  const coreProducts = products.filter(
    (p) => p.category === 'core'
  );

  return (
    <>
      {/* HERO - Maximum drama */}
      <section className="relative min-h-screen flex items-center justify-center px-6 noise-overlay">
        {/* Subtle warm copper radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(196,147,94,0.06)_0%,_transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(212,184,150,0.04)_0%,_transparent_50%)]" />

        <div className="relative text-center max-w-5xl mx-auto z-10">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-charcoal-900 leading-[0.9] tracking-tight animate-fade-in font-light">
            Enterprise Content.
            <br />
            <span className="text-gradient-copper font-normal">Perfected.</span>
          </h1>
          <p className="mt-10 text-charcoal-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed font-light animate-slide-up">
            Four decades of precision. Proprietary technology.
            <br className="hidden sm:block" />
            Quietly solving the hardest problems in content management.
          </p>
          <div
            className="mt-14 animate-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/25 px-10 py-4 hover:bg-copper-500/8 hover:border-copper-500/50 transition-all duration-700 group"
            >
              Discover Our Approach
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-6">Our Mission</p>
          <blockquote className="font-heading text-2xl md:text-3xl text-charcoal-900 font-light leading-relaxed">
            &ldquo;{company.mission}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* SERVICES - "What We Do" */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal-900 font-light">
              Our Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/services"
                className="group glass-card rounded-lg p-8 hover:border-copper-500/25 transition-all duration-700"
              >
                <div className="text-charcoal-400 mb-5 group-hover:text-copper-500 transition-colors duration-700">
                  {serviceIcons[service.id]}
                </div>
                <h3 className="font-heading text-xl text-charcoal-900 mb-3 font-normal">
                  {service.name}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light line-clamp-3">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS - Editorial layout */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Our Products
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal-900 font-light">
              Built, Not Bought
            </h2>
          </div>

          {/* ASM - Flagship Feature */}
          <div className="mb-20 glass-card rounded-lg p-8 md:p-16">
            <div className="md:flex items-start gap-14">
              <div className="flex-1">
                <span className="inline-block text-[9px] uppercase tracking-[0.3em] text-copper-600 border border-copper-500/25 px-3 py-1 rounded-full mb-5">
                  {products[0].badge}
                </span>
                <h3 className="font-heading text-4xl md:text-5xl text-charcoal-900 mb-2 font-light">
                  {products[0].name}
                </h3>
                <p className="font-heading text-lg text-charcoal-600 italic mb-6 font-light">
                  {products[0].tagline}
                </p>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-8 font-light">
                  {products[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {products[0].connectors.map((c) => (
                    <span
                      key={c}
                      className="text-[9px] uppercase tracking-wider px-3 py-1 rounded-full bg-copper-500/8 border border-copper-500/15 text-copper-600"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-copper-600 hover:text-copper-500 transition-colors duration-500 group"
                >
                  Explore ASM
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="flex-1 mt-10 md:mt-0">
                <div className="space-y-4">
                  {products[0].features.slice(0, 4).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4"
                    >
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
          </div>

          {/* Core Products Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {coreProducts.map((product) => (
              <Link
                key={product.id}
                to="/products"
                className="group glass-card rounded-lg p-8 hover:border-copper-500/25 transition-all duration-700"
              >
                <span className="inline-block text-[9px] uppercase tracking-[0.3em] text-copper-500 mb-4">
                  {product.badge}
                </span>
                <h3 className="font-heading text-2xl text-charcoal-900 mb-1 font-normal">
                  {product.name}
                </h3>
                <p className="font-heading text-sm text-charcoal-600 italic mb-4 font-light">
                  {product.tagline}
                </p>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light line-clamp-3">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>

          {/* View All Products Link */}
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-copper-600 hover:text-copper-500 transition-colors duration-500 group"
            >
              View all products
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* AI CAPABILITIES */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Intelligence
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal-900 font-light mb-6">
              AI That Serves the Mission
            </h2>
          </div>

          {/* Pull quote */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-charcoal-500 text-base leading-relaxed font-light italic">
              We do not chase trends. We integrate AI where it solves real problems --
              zero-shot classification that eliminates manual sorting, semantic search
              that finds what keyword search misses, and compliance automation that
              turns weeks into hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="glass-card rounded-lg p-6 text-center"
              >
                <div className="text-copper-500/70 flex justify-center mb-4">
                  {aiIcons[cap.icon]}
                </div>
                <h3 className="font-heading text-base text-charcoal-900 mb-2 font-normal">
                  {cap.title}
                </h3>
                <p className="text-charcoal-500 text-xs leading-relaxed font-light">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Industries We Serve
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 font-light">
              Deep Vertical Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {verticals.map((vertical) => (
              <div
                key={vertical.name}
                className="glass-card rounded-lg p-7 text-center"
              >
                <div className="text-copper-500/60 flex justify-center mb-4">
                  {verticalIcons[vertical.icon]}
                </div>
                <h3 className="font-heading text-lg text-charcoal-900 mb-1 font-normal">
                  {vertical.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.15em] text-copper-500/70 mb-3">
                  {vertical.subtitle}
                </p>
                <p className="text-charcoal-500 text-xs leading-relaxed font-light">
                  {vertical.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 md:py-44 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal-900 mb-6 font-light">
            Begin a Conversation
          </h2>
          <p className="text-charcoal-500 text-base mb-12 max-w-md mx-auto font-light">
            {company.yearsInBusiness} years of solving enterprise content
            challenges. Let us solve yours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/25 px-10 py-4 hover:bg-copper-500/8 hover:border-copper-500/50 transition-all duration-700 group"
          >
            Get in Touch
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
