import { Link } from 'react-router-dom';
import { services } from '@shared/data/company';
import { SyscomIcon } from '../lib/icons';
import Seo from '../components/Seo';

// Schema.org structured data identifying the Enterprise Capture service and the
// Tungsten TotalAgility platform (incl. the "Total Agility" spelling people search).
const SERVICES_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise Capture & Intelligent Document Processing',
    serviceType: 'Enterprise Capture',
    provider: { '@type': 'Organization', name: 'SYSCOM, Inc.', url: 'https://syscom.com' },
    areaServed: 'US',
    description:
      'Intelligent document capture, classification, and process automation built on Tungsten TotalAgility (formerly Kofax) and IBM Datacap.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Tungsten TotalAgility',
    alternateName: ['Total Agility', 'Kofax TotalAgility'],
    category: 'Intelligent Automation Platform',
    brand: { '@type': 'Brand', name: 'Tungsten Automation (formerly Kofax)' },
    description:
      'Tungsten TotalAgility intelligent capture and process automation, deployed and supported by SYSCOM, Inc. as part of its Enterprise Capture practice.',
  },
];

const serviceDetails: Record<
  string,
  { capabilities: string[]; detail: string; platform?: string; platformLink?: { href: string; label: string } }
> = {
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
      'We design and build automation solutions that replace manual, paper-based processes with streamlined digital workflows — often on Tungsten TotalAgility (also written Total Agility). Our BPA implementations reduce processing time, eliminate errors, and provide complete audit trails.',
    platformLink: { href: '/platforms/tungsten-totalagility', label: 'Tungsten Total Agility for BPA' },
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
    platform: 'Built on Tungsten TotalAgility (formerly Kofax TotalAgility)',
    detail:
      "Our capture solutions turn paper and unstructured content into actionable data. We build on Tungsten TotalAgility — the intelligent automation platform many teams still search for as “Total Agility” — to deliver remote and central capture, advanced recognition, AI-powered classification, and end-to-end process automation. It's all backed by our standing as a Silver-level Tungsten Automation (formerly Kofax) partner with 30+ years of experience — many teams still know the platform as Kofax TotalAgility or Kofax Total Agility — plus deep IBM Datacap deployment experience.",
    platformLink: { href: '/platforms/tungsten-totalagility', label: 'Tungsten TotalAgility implementation' },
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
      <Seo
        title="ECM, Capture, Migration & Automation Services | SYSCOM"
        description="SYSCOM delivers enterprise content management, capture, migration, and AI automation services — IBM FileNet, Tungsten Capture, and Datacap expertise since 1982."
        path="/services"
        jsonLd={SERVICES_JSON_LD}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-20" aria-label="Services hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Enterprise Content &amp; Automation Services
          </h1>
          <p className="mt-4 text-lg text-slate max-w-3xl leading-relaxed">
            Specialized service areas, each backed by decades of real-world
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
                  {details?.platform && (
                    <h3 className="mt-4 font-heading text-lg font-semibold text-teal">
                      {details.platform}
                    </h3>
                  )}
                  {details && (
                    <p className="mt-4 text-slate leading-relaxed">
                      {details.detail}
                    </p>
                  )}
                  {details?.platformLink && (
                    <Link
                      to={details.platformLink.href}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-teal hover:underline"
                    >
                      {details.platformLink.label}
                      <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
