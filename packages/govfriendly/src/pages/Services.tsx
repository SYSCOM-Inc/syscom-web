import { Link } from 'react-router-dom';
import { services } from '@shared/data/company';
import { SyscomIcon } from '../lib/icons';

const serviceDetails: Record<string, { capabilities: string[]; detail: string }> = {
  ecm: {
    detail:
      'Our ECM practice helps organizations manage the full lifecycle of enterprise content, from creation through archival. We design and implement repository solutions that ensure compliance, enable rapid retrieval, and integrate with existing business systems.',
    capabilities: [
      'IBM FileNet P8, Content Manager EE, iSeries',
      'ImagePlus support and migration',
      'Content Manager OnDemand',
      'Federation and application integration',
      'Security and access controls',
      'Cloud and on-premises deployment',
    ],
  },
  bpa: {
    detail:
      'We design and build automation solutions that replace manual, paper-based processes with streamlined digital workflows. Our BPA implementations reduce processing time, eliminate errors, and provide complete audit trails.',
    capabilities: [
      'End-to-end workflow definition and optimization',
      'Process analysis and redesign',
      'IBM and Tungsten workflow orchestration',
      'Case management solutions',
      'Process analytics and reporting',
      'Exception handling and escalation',
    ],
  },
  capture: {
    detail:
      'Our capture solutions turn paper and unstructured content into actionable data. With a 30+ year Tungsten Automation (Kofax) partnership, we deploy remote and central capture, advanced recognition, and AI-powered classification.',
    capabilities: [
      'Remote and central capture deployment',
      'Scanner and VRS configuration',
      'High-availability and disaster recovery',
      'Advanced recognition and classification',
      'Custom validation and release scripts',
      'IBM Datacap deployment',
    ],
  },
  migration: {
    detail:
      'Content migration is one of the hardest problems in enterprise IT. Our proprietary AnySource Migrator (ASM) technology moves content between any ECM platform with full metadata preservation, security mapping, and 25+ pre-built connectors.',
    capabilities: [
      'Platform-to-platform content migration',
      'Full metadata and security preservation',
      '25+ pre-built repository connectors',
      'Format conversion (TIFF to PDF, MODCA, etc.)',
      'AI auto-mapping in ASM 2.0',
      'Predictive anomaly detection',
    ],
  },
  ai: {
    detail:
      'Our AI practice applies proven machine learning and large language models to content challenges. Zero-shot classification, semantic search, compliance automation, and on-premises model deployment for air-gapped environments.',
    capabilities: [
      'Zero-shot document classification',
      'AI-powered auto-mapping in ASM 2.0',
      'Semantic search and knowledge graphs (IBIG 2.0)',
      'Compliance-as-Code automation',
      'Cloud and on-prem model deployment',
      'Air-gapped environment support',
    ],
  },
  staffing: {
    detail:
      'Our contract staffing services deploy technical professionals with deep ECM knowledge. Individual resources, teams, or entire departments, all backed by SYSCOM\'s decades of platform expertise.',
    capabilities: [
      'Project Managers and Architects',
      'Business Analysts and Programmers',
      'Technical Writers and Testers',
      'Individual, team, or department deployment',
      'Rapid deployment capability',
      'Deep ECM technical knowledge',
    ],
  },
  'custom-apps': {
    detail:
      'We design and build custom applications tailored to your specific business processes. From web portals to backend integrations, our development team creates solutions that work the way your organization does — not the other way around.',
    capabilities: [
      'Custom web portals and client-facing applications',
      'Backend system integration and API development',
      'Legacy application modernization',
      'Mobile-responsive enterprise applications',
      'Database design and optimization',
      'End-to-end testing and deployment',
    ],
  },
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-20" aria-label="Services hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-slate max-w-3xl leading-relaxed">
            Seven specialized service areas, each backed by decades of real-world
            deployments. We don't just advise. We build, implement, and support.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const details = serviceDetails[service.id];
        const isAlt = index % 2 === 1;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 sm:py-20 ${isAlt ? 'bg-warm-cream' : 'bg-white'}`}
            aria-labelledby={`service-${service.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="inline-flex items-center justify-center w-12 h-12 mt-0.5 shrink-0 rounded-lg bg-teal/10 text-teal"
                      aria-hidden="true"
                    >
                      <SyscomIcon name={service.icon} className="w-6 h-6" />
                    </span>
                    <div>
                      <h2
                        id={`service-${service.id}-heading`}
                        className="font-heading text-2xl sm:text-3xl font-bold text-navy"
                      >
                        {service.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-teal">
                        {service.shortName}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate leading-relaxed">
                    {service.description}
                  </p>
                  {details && (
                    <p className="mt-4 text-slate leading-relaxed">
                      {details.detail}
                    </p>
                  )}
                </div>

                {details && (
                  <div className="bg-white rounded-warm border border-warm-border p-6">
                    <h3 className="font-heading font-semibold text-lg text-navy mb-4">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {details.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3">
                          <span className="text-teal mt-0.5 shrink-0" aria-hidden="true">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm text-slate">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-navy" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Tell us about your content management challenges. We'll provide an honest
            assessment and a clear path forward.
          </p>
          <Link to="/contact" className="mt-8 btn-white inline-flex">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
