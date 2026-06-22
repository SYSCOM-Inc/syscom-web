import PlatformPage, { type PlatformContent } from '../../components/PlatformPage';

// Schema: Service (SYSCOM's implementation service) + Product (FileNet P8),
// with alternateName covering the common spelling variants ("FileNet",
// "File Net", "IBM FileNet P8"). Partner-tier claim: SYSCOM has a decades-long
// IBM ECM partnership (per shared/data/company.ts) and IBM-certified engineers
// (Mark Anzmann: 6 IBM Certifications; Chris Benedetti: IBM Certified Solutions
// Designer). No formal IBM partner tier is claimed — none is documented.
const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IBM FileNet P8 Implementation & Support',
    serviceType: 'IBM FileNet implementation partner',
    provider: {
      '@type': 'Organization',
      name: 'SYSCOM, Inc.',
      url: 'https://syscom.com',
      knowsAbout: ['IBM FileNet P8', 'IBM Content Manager', 'IBM ECM'],
    },
    areaServed: 'US',
    description:
      'Implementation, federation, migration, upgrades, and support for IBM FileNet P8 (also written File Net) — content services and case management.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IBM FileNet P8',
    alternateName: ['FileNet', 'File Net', 'IBM FileNet'],
    category: 'Enterprise Content Management',
    brand: { '@type': 'Brand', name: 'IBM' },
    description:
      'IBM FileNet P8 is an enterprise content services and case management platform. SYSCOM is an IBM FileNet implementation partner with decades of ECM experience.',
  },
];

const content: PlatformContent = {
  path: '/platforms/ibm-filenet',
  seo: {
    title: 'IBM FileNet Implementation Partner | SYSCOM',
    description:
      'IBM FileNet P8 (also File Net) implementation, federation, migration, and support from SYSCOM — decades-long IBM ECM partnership, 40+ years of enterprise content experience.',
    jsonLd: JSON_LD,
  },
  eyebrow: 'IBM ECM Partner — 40+ years',
  h1: 'IBM FileNet Implementation Partner',
  heroLead:
    'SYSCOM designs, deploys, federates, and migrates IBM FileNet P8 environments for government and financial-services organizations. Backed by a decades-long IBM ECM partnership and 40+ years of content-management experience, we help teams modernize and consolidate FileNet without losing the institutional knowledge they have built into it.',
  whatIs: {
    heading: 'What is IBM FileNet P8?',
    paragraphs: [
      'IBM FileNet P8 (often searched as "File Net" or simply "FileNet") is the IBM enterprise content services and case-management platform. It combines a high-scale content repository with records management, business process orchestration, and federation across other content stores.',
      'It runs the back office of many regulated organizations — banks, insurers, government agencies — and it is rarely replaced wholesale. The work is usually: extend it, integrate it, federate it, modernize the surrounding stack, and sometimes migrate it (in or out) without disrupting operations.',
    ],
    referenceLabel: 'IBM: FileNet Content Manager product overview →',
    referenceHref: 'https://www.ibm.com/products/filenet-content-manager',
  },
  howWeHelp: {
    heading: 'How SYSCOM helps with IBM FileNet',
    intro: 'From green-field rollouts to thirty-year-old repositories — full FileNet lifecycle support.',
    items: [
      {
        title: 'Implementation & upgrades',
        description:
          'New P8 deployments, version upgrades, and HA/DR architectures designed for regulated workloads.',
      },
      {
        title: 'Federation & integration',
        description:
          'Federate FileNet with Content Manager, ImagePlus, and line-of-business apps; surface content through ICN, custom portals, or APIs.',
      },
      {
        title: 'Migration in or out',
        description:
          'Move content between FileNet and any other ECM with full metadata, security, and folder fidelity — powered by our proprietary AnySource Migrator (ASM).',
      },
      {
        title: 'Production support',
        description:
          'Ongoing operations, performance tuning, and troubleshooting from engineers who have lived inside FileNet for decades.',
      },
    ],
  },
  useCases: {
    heading: 'Common FileNet use cases',
    items: [
      {
        title: 'Records & compliance',
        description:
          'Records management, retention, and legal hold for regulated content — banking, insurance, healthcare, federal.',
      },
      {
        title: 'Claims & case management',
        description:
          'Case folders, supporting documents, and adjudication workflows orchestrated on top of P8 and BAW.',
      },
      {
        title: 'Contracts & document repositories',
        description:
          'Centralized contracts, agreements, and supporting content with versioning, security, and audit trails.',
      },
      {
        title: 'Government forms processing',
        description:
          'High-volume forms intake into FileNet with the auditability public-sector programs require.',
      },
    ],
  },
  whySyscom: {
    heading: 'Why SYSCOM for IBM FileNet',
    points: [
      {
        title: '40+ years in ECM',
        description:
          'Founded in 1982, SYSCOM has implemented content systems across four decades of platform change — including the full FileNet generation.',
      },
      {
        title: 'Decades-long IBM ECM partnership',
        description:
          'A continuous IBM ECM partnership covering FileNet P8, Content Manager, ImagePlus, BAW, and the broader IBM stack — with IBM-certified engineers on every engagement.',
      },
      {
        title: 'AnySource Migrator (proprietary)',
        description:
          'Our own migration platform with 25+ pre-built repository connectors — FileNet P8 in or out, with full metadata, security, and folder preservation.',
      },
      {
        title: 'Government & financial focus',
        description:
          'Deep experience with the compliance, security clearance, and audit requirements of regulated industries.',
      },
    ],
  },
  cta: {
    heading: 'Modernizing or migrating FileNet?',
    body:
      "Whether you're extending an existing P8 deployment, federating it with adjacent systems, or moving content in or out of FileNet, SYSCOM can help. Tell us about your environment and goals.",
  },
};

export default function IbmFileNet() {
  return <PlatformPage content={content} />;
}
