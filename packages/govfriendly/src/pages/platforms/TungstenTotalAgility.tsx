import PlatformPage, { type PlatformContent } from '../../components/PlatformPage';

// Schema.org: a Service (SYSCOM's implementation service) plus the underlying
// Product, with alternateName covering all four searched spelling variants.
// Partner tier: SYSCOM is a confirmed Silver-level Tungsten Automation partner
// (per the Tungsten partner portal) across the Document Exchange (DX), Financial
// Process Automation (FPA), and Intelligent Capture (IC) product lines.
// We do NOT claim partner status on PPDF, ControlSuite, or Printix (tier blank).
const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tungsten TotalAgility Implementation & Support',
    serviceType: 'Tungsten TotalAgility implementation partner',
    provider: {
      '@type': 'Organization',
      name: 'SYSCOM, Inc.',
      url: 'https://syscom.com',
      award:
        'Tungsten Automation Silver Partner — Document Exchange (DX), Financial Process Automation (FPA), Intelligent Capture (IC)',
      memberOf: {
        '@type': 'ProgramMembership',
        programName: 'Tungsten Automation Partner Program',
        membershipNumber: 'Silver',
        hostingOrganization: { '@type': 'Organization', name: 'Tungsten Automation' },
      },
    },
    areaServed: 'US',
    description:
      'Implementation, upgrades, migration, support, and training for Tungsten TotalAgility (formerly Kofax TotalAgility / Kofax Total Agility).',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Tungsten TotalAgility',
    alternateName: ['Total Agility', 'Kofax TotalAgility', 'Kofax Total Agility'],
    category: 'Intelligent Automation Platform',
    brand: { '@type': 'Brand', name: 'Tungsten Automation (formerly Kofax)' },
    description:
      'Low-code intelligent automation, document capture, and workflow platform. SYSCOM is a Tungsten TotalAgility implementation partner.',
  },
];

const content: PlatformContent = {
  path: '/platforms/tungsten-totalagility',
  seo: {
    title: 'Tungsten & Kofax TotalAgility Implementation | SYSCOM',
    description:
      'Tungsten TotalAgility (also Kofax Total Agility) implementation, upgrades, and support from SYSCOM — 40+ years of automation expertise for government and financial services.',
    jsonLd: JSON_LD,
  },
  eyebrow: 'Silver Tungsten Automation (Kofax) Partner',
  h1: 'Tungsten TotalAgility Implementation Partner',
  heroLead:
    'SYSCOM implements, upgrades, and supports Tungsten TotalAgility — the intelligent automation platform formerly sold as Kofax TotalAgility. With 40+ years of automation experience and a deep mid-Atlantic presence, we help government agencies and financial institutions get measurably more from their TotalAgility investment.',
  whatIs: {
    heading: 'What is Tungsten TotalAgility?',
    paragraphs: [
      "Tungsten TotalAgility (commonly written “Total Agility,” and still widely known by its legacy name Kofax TotalAgility) is a low-code platform for intelligent document processing, data capture, and end-to-end workflow automation. It pairs OCR and AI-driven classification with case management and process orchestration in a single environment.",
      'If you adopted the platform under the Kofax brand, none of your investment is stranded — Kofax Total Agility and Tungsten TotalAgility are the same product line under a new owner. SYSCOM supports it across versions, from older Kofax TotalAgility deployments through the current Tungsten TotalAgility releases.',
    ],
    referenceLabel: 'Tungsten Automation: TotalAgility product overview →',
    referenceHref: 'https://www.tungstenautomation.com/products/totalagility',
  },
  howWeHelp: {
    heading: 'How SYSCOM helps with TotalAgility',
    intro: 'From first deployment to long-term operations, we cover the full TotalAgility lifecycle.',
    items: [
      {
        title: 'Implementation',
        description:
          'New TotalAgility deployments — capture, classification, and workflow designed around your processes, not a generic template.',
      },
      {
        title: 'Upgrades & migration',
        description:
          'Migrations from Kofax Capture and older Kofax TotalAgility releases to current Tungsten TotalAgility, with minimal disruption.',
      },
      {
        title: 'Support & troubleshooting',
        description:
          'Ongoing production support, performance tuning, and troubleshooting from engineers who know the platform deeply.',
      },
      {
        title: 'Training',
        description:
          'Hands-on training for your administrators and developers so your team can own and extend the platform.',
      },
    ],
  },
  useCases: {
    heading: 'Common TotalAgility use cases',
    items: [
      {
        title: 'Accounts payable automation',
        description:
          'Capture, classify, and route invoices straight into approval workflows and your line-of-business systems.',
      },
      {
        title: 'Customer & citizen onboarding',
        description:
          'Turn forms, IDs, and supporting documents into structured, validated data with far less manual keying.',
      },
      {
        title: 'Claims processing',
        description:
          'Intake, classify, and adjudicate claims faster with AI-assisted capture and case management.',
      },
      {
        title: 'Government forms processing',
        description:
          'High-volume forms intake for public-sector programs, with the accuracy and auditability agencies require.',
      },
    ],
  },
  whySyscom: {
    heading: 'Why SYSCOM for Tungsten TotalAgility',
    points: [
      {
        title: '40+ years in automation',
        description:
          'Founded in 1982, SYSCOM has implemented content and capture systems across four decades of platform change.',
      },
      {
        title: 'Silver-level Tungsten Automation partner',
        description:
          'A Silver-level Tungsten Automation (formerly Kofax) partner across Document Exchange (DX), Financial Process Automation (FPA), and Intelligent Capture (IC), backed by 30+ years of Kofax/Tungsten implementation experience.',
      },
      {
        title: 'Mid-Atlantic presence',
        description:
          "Based in Baltimore's Inner Harbor, close to the government and financial clients we serve.",
      },
      {
        title: 'Government & financial focus',
        description:
          'Deep experience with the security, compliance, and scale requirements of regulated industries.',
      },
    ],
  },
  cta: {
    heading: 'Ready to get more from TotalAgility?',
    body:
      "Whether you're standing up Tungsten TotalAgility for the first time or modernizing a legacy Kofax Total Agility deployment, SYSCOM can help. Tell us about your environment and goals.",
  },
};

export default function TungstenTotalAgility() {
  return <PlatformPage content={content} />;
}
