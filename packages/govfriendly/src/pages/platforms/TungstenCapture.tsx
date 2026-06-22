import PlatformPage, { type PlatformContent } from '../../components/PlatformPage';

// Schema: Service + Product with alternateName covering Kofax/Tungsten spelling
// variants. Partner-tier claim: SYSCOM is a Silver-level Tungsten Automation
// partner (per the Tungsten partner portal) across DX, FPA, and IC product
// lines. Tungsten Capture is part of the Intelligent Capture (IC) line, so the
// Silver claim applies here. CTO Chris Benedetti is Tungsten Capture Certified
// (v8–v11.2) per shared/data/company.ts. We do NOT claim partner status on
// PPDF, ControlSuite, or Printix (tiers blank).
const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tungsten Capture Implementation & Support',
    serviceType: 'Tungsten Capture implementation partner',
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
      'Implementation, modernization, upgrades, and support for Tungsten Capture (formerly Kofax Capture) — high-volume distributed document capture for regulated industries.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Tungsten Capture',
    alternateName: ['Kofax Capture', 'Tungsten Automation Capture'],
    category: 'Document Capture',
    brand: { '@type': 'Brand', name: 'Tungsten Automation (formerly Kofax)' },
    description:
      'Tungsten Capture (formerly Kofax Capture) is the classic high-volume, distributed document capture platform. SYSCOM is a Silver-level Tungsten Automation partner across the Intelligent Capture (IC) product line.',
  },
];

const content: PlatformContent = {
  path: '/platforms/tungsten-capture',
  seo: {
    title: 'Tungsten & Kofax Capture Implementation Partner | SYSCOM',
    description:
      'Tungsten Capture (formerly Kofax Capture) implementation, modernization, and support from SYSCOM — Silver-level Tungsten Automation partner with 30+ years of Kofax/Tungsten experience.',
    jsonLd: JSON_LD,
  },
  eyebrow: 'Silver Tungsten Automation (Kofax) Partner',
  h1: 'Tungsten Capture Implementation Partner',
  heroLead:
    'SYSCOM implements, modernizes, and supports Tungsten Capture — the classic high-volume distributed-capture platform, still widely known by its legacy name Kofax Capture. We help organizations keep production capture lines running, scale them out, and modernize toward Tungsten TotalAgility when that is the right path forward.',
  whatIs: {
    heading: 'What is Tungsten Capture?',
    paragraphs: [
      'Tungsten Capture (commonly written Kofax Capture by anyone who has used it for a decade or more) is the high-volume distributed document capture platform from Tungsten Automation (formerly Kofax). It is purpose-built for environments scanning hundreds of thousands of pages per day across mailrooms, branch offices, and centralized scan operations.',
      'It is a different product from Tungsten TotalAgility — TotalAgility is the low-code intelligent automation and workflow platform. Capture is the high-throughput scan/classify/release engine. Many customers run both, and Tungsten provides a migration path from Capture toward TotalAgility where it fits. SYSCOM supports both lines and helps customers pick which lives where in their stack.',
    ],
    referenceLabel: 'Tungsten Automation: Capture product overview →',
    referenceHref: 'https://www.tungstenautomation.com/products/kofax-capture',
  },
  howWeHelp: {
    heading: 'How SYSCOM helps with Tungsten Capture',
    intro: 'From production-floor scan operations to modernization paths toward TotalAgility.',
    items: [
      {
        title: 'Implementation & scale-out',
        description:
          'New Capture deployments, distributed scan stations, scanner/VRS configuration, and high-availability architectures.',
      },
      {
        title: 'Custom validation & release scripts',
        description:
          'Custom validation rules and release scripts to push captured content into FileNet, IBM Content Manager, OnBase, or downstream systems.',
      },
      {
        title: 'Modernization to TotalAgility',
        description:
          'Migrate Kofax Capture workloads onto Tungsten TotalAgility when its intelligent-automation features (AI classification, low-code workflow) fit better — or keep them on Capture when that is the right call.',
      },
      {
        title: 'Production support',
        description:
          'Performance tuning, troubleshooting, and ongoing operations for capture pipelines that have to hit SLAs every day.',
      },
    ],
  },
  useCases: {
    heading: 'Common Tungsten Capture use cases',
    items: [
      {
        title: 'High-volume mailroom operations',
        description:
          'Central mailroom and distributed scan with classification, validation, and release into the enterprise content stack.',
      },
      {
        title: 'Remote & branch capture',
        description:
          'Distributed capture at branch offices and remote sites feeding into central processing — bank statements, claims, applications.',
      },
      {
        title: 'Claims & forms intake',
        description:
          'High-throughput intake of claims and forms with QA, exception handling, and SLA-backed throughput.',
      },
      {
        title: 'Government records intake',
        description:
          'Public-sector records intake with the auditability and chain-of-custody regulated programs require.',
      },
    ],
  },
  whySyscom: {
    heading: 'Why SYSCOM for Tungsten / Kofax Capture',
    points: [
      {
        title: 'Silver-level Tungsten Automation partner',
        description:
          'Silver-tier partner across Document Exchange (DX), Financial Process Automation (FPA), and Intelligent Capture (IC) — Capture lives in the IC line.',
      },
      {
        title: '30+ years of Kofax/Tungsten experience',
        description:
          'Three decades of continuous Kofax/Tungsten implementation experience — through every generation of the platform and the 2024 Tungsten rebrand.',
      },
      {
        title: 'Certified engineers',
        description:
          'Our CTO is Tungsten Capture Certified (v8–v11.2). Capture deployments are run by engineers who know the platform deeply, not generic contractors.',
      },
      {
        title: 'Government & financial focus',
        description:
          'Deep experience with the compliance, security, and throughput requirements of regulated industries.',
      },
    ],
  },
  cta: {
    heading: 'Modernizing Kofax Capture, or scaling Tungsten Capture?',
    body:
      'Whether you are running an established Kofax Capture line, scaling out new capture stations, or evaluating a path toward Tungsten TotalAgility, SYSCOM can help. Tell us about your environment and goals.',
  },
};

export default function TungstenCapture() {
  return <PlatformPage content={content} />;
}
