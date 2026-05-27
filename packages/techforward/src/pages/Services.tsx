import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '@shared/data/company';

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

const serviceEmoji: Record<string, string> = {
  ecm: '\u{1F5C4}\uFE0F',
  bpa: '\u{26A1}',
  capture: '\u{1F4C4}',
  migration: '\u{1F504}',
  ai: '\u{1F9E0}',
  'custom-apps': '\u{1F4BB}',
  staffing: '\u{1F465}',
};

const serviceCapabilities: Record<string, string[]> = {
  ecm: [
    'IBM FileNet P8, Content Manager Enterprise Edition, Content Manager for iSeries',
    'ImagePlus support and migration to modern platforms',
    'Content Manager OnDemand deployment and optimization',
    'Federation, application integration between platforms',
    'Records management with automated retention policies',
    'High-volume document ingestion pipelines handling millions of records',
  ],
  bpa: [
    'Workflow design using IBM BAW and Tungsten platforms',
    'Process analysis, redesign, and end-to-end optimization',
    'Business rules engines with visual configuration',
    'Case management for complex multi-step approvals',
    'Human-in-the-loop automation with intelligent task routing',
    'Integration with ERP, CRM, and line-of-business applications',
  ],
  capture: [
    'Silver-level Tungsten Automation partner across Document Exchange (DX), Financial Process Automation (FPA), and Intelligent Capture (IC)',
    'Remote and central capture with scanner and VRS configuration',
    'High-availability and disaster recovery architectures',
    'Advanced recognition, classification, and AI zero-shot classification',
    'Custom validation and release scripts',
    'IBM Datacap deployment and integration',
  ],
  migration: [
    'Cross-platform migration between 25+ ECM systems',
    'Full metadata, security ACL, and folder structure preservation',
    'Taxonomy analysis and automated mapping between systems',
    'Format conversion: TIFF to PDF, MODCA to TIFF, Full-Text PDF',
    'Phased migration strategies minimizing operational disruption',
    'Validation and reconciliation with document-level audit trails',
  ],
  ai: [
    'Zero-shot document classification without templates',
    'AI-powered auto-mapping in ASM 2.0',
    'Semantic search and knowledge graphs in IBIG 2.0',
    'Compliance-as-Code for automated security documentation',
    'Cloud and on-premises model deployment for air-gapped environments',
    'Computer vision, NLP, and intelligent classification',
  ],
  'custom-apps': [
    'Custom web portals and client-facing applications',
    'Backend system integration and API development',
    'Legacy application modernization',
    'Mobile-responsive enterprise applications',
    'Database design and optimization',
    'End-to-end testing and deployment automation',
  ],
  staffing: [
    'Project Managers, Architects, Business Analysts',
    'Programmers, Technical Writers, and Testers',
    'Individual resources, teams, or entire departments',
    'Rapid deployment backed by deep ECM technical knowledge',
    'Government-cleared personnel available',
    'Long-term and project-based engagement models',
  ],
};

const serviceAccent: Record<string, string> = {
  ecm: '#22d3ee',
  bpa: '#a78bfa',
  capture: '#34d399',
  migration: '#22d3ee',
  ai: '#fbbf24',
  'custom-apps': '#f97316',
  staffing: '#fb7185',
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-3">
              Our Services
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-3px] leading-tight mb-6">
              Our{' '}
              <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Seven specialized disciplines, each staffed by practitioners who have spent
              their careers mastering enterprise content challenges. We don&apos;t generalize
              &mdash; we go deep.
            </p>
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => {
        const capabilities = serviceCapabilities[service.id] || [];
        const accent = serviceAccent[service.id] || '#22d3ee';
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-24 ${!isEven ? 'border-y border-border' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeSection>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Info */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl">{serviceEmoji[service.id] || '\u{1F4E6}'}</span>
                      <div>
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-[-2px]">
                          {service.name}
                        </h2>
                        <p className="text-sm font-heading font-bold" style={{ color: accent }}>
                          {service.shortName}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                      style={{ color: accent }}
                    >
                      Discuss this service &rarr;
                    </Link>
                  </div>

                  {/* Capabilities */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="rounded-2xl bg-card border border-border p-6">
                      <h3 className="text-xs font-heading font-bold uppercase tracking-[3px] text-muted mb-5">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {capabilities.map((cap, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                              style={{ backgroundColor: accent }}
                            />
                            <span className="text-sm text-muted leading-relaxed">
                              {cap}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </section>
        );
      })}

      {/* ROI CTA */}
      <section className="py-20 sm:py-28 border-t border-border">
        <FadeSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-emerald mb-3">
            Quantify the Impact
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
            What could automation save you?
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Use our interactive ROI calculator to estimate the impact on your operations.
          </p>
          <Link
            to="/roi"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-emerald border border-emerald/30 hover:bg-emerald/5 transition-colors"
          >
            Open ROI Calculator &rarr;
          </Link>
        </FadeSection>
      </section>
    </>
  );
}
