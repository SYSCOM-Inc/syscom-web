import {
  Database,
  Workflow,
  ScanLine,
  ArrowLeftRight,
  Brain,
  Users,
  Laptop,
} from 'lucide-react';
import { services } from '@shared/data/company';
import ROICalculator from '../components/ROICalculator';

const serviceIcons: Record<string, React.ReactNode> = {
  ecm: <Database size={28} />,
  bpa: <Workflow size={28} />,
  capture: <ScanLine size={28} />,
  migration: <ArrowLeftRight size={28} />,
  ai: <Brain size={28} />,
  'custom-apps': <Laptop size={28} />,
  staffing: <Users size={28} />,
};

const serviceDetails: Record<string, string[]> = {
  ecm: [
    'IBM FileNet P8, Content Manager Enterprise Edition, Content Manager for iSeries',
    'ImagePlus support and migration to modern platforms',
    'Content Manager OnDemand implementation and optimization',
    'Federation, application integration, and cross-platform migration',
  ],
  bpa: [
    'End-to-end workflow definition and optimization',
    'Process analysis and redesign for maximum efficiency',
    'Workflow orchestration using IBM and Tungsten platforms',
    'Case management for complex, multi-step processes',
  ],
  capture: [
    '30+ year Tungsten Automation (Kofax) partnership',
    'Remote and central capture, scanner and VRS configuration',
    'Advanced recognition and AI-powered classification',
    'Custom validation and release scripts, IBM Datacap deployment',
  ],
  migration: [
    'Powered by our proprietary AnySource Migrator technology',
    'Full metadata, security, and folder structure preservation',
    '25+ pre-built repository connectors',
    'AI-powered auto-mapping reduces planning from weeks to hours',
  ],
  ai: [
    'Zero-shot document classification without templates',
    'AI-powered auto-mapping in ASM 2.0',
    'Semantic search and knowledge graphs in IBIG 2.0',
    'On-premises model deployment for air-gapped environments',
  ],
  'custom-apps': [
    'Custom web portals and client-facing applications',
    'Backend system integration and API development',
    'Legacy application modernization',
    'Mobile-responsive enterprise applications',
    'Database design and optimization',
    'End-to-end testing and deployment',
  ],
  staffing: [
    'Project Managers, Architects, Business Analysts, Programmers',
    'Technical Writers and Testers with deep ECM knowledge',
    'Individual resources, teams, or entire departments',
    'Short-term engagements to long-term placements exceeding 10 years',
    'Rapid deployment backed by decades of technical expertise',
  ],
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Our Expertise
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-charcoal-900 animate-slide-up font-light">
            What We Do
          </h1>
          <p
            className="mt-8 text-charcoal-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light animate-slide-up"
            style={{ animationDelay: '150ms' }}
          >
            Seven disciplines. Four decades of refinement. Each one backed by
            proprietary technology and hard-won expertise.
          </p>
        </div>
      </section>

      {/* Services - Editorial alternating layout */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={service.id}>
              <div
                className={`py-16 md:py-24 ${
                  index % 2 === 0
                    ? 'md:flex md:gap-16'
                    : 'md:flex md:flex-row-reverse md:gap-16'
                }`}
              >
                <div className="md:w-2/5 mb-8 md:mb-0">
                  <div className="text-copper-500/60 mb-4">
                    {serviceIcons[service.id]}
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-charcoal-900 mb-3 font-normal">
                    {service.name}
                  </h2>
                  <p className="text-charcoal-500 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="md:w-3/5">
                  <div className="space-y-5">
                    {serviceDetails[service.id]?.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 text-sm text-charcoal-600"
                      >
                        <span className="w-1 h-1 rounded-full bg-copper-500 mt-2 shrink-0" />
                        <span className="leading-relaxed font-light">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < services.length - 1 && (
                <div className="border-t border-charcoal-300/20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </section>
    </>
  );
}
