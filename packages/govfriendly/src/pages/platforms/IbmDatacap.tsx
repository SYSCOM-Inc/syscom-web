import PlatformPage, { type PlatformContent } from '../../components/PlatformPage';

// Schema: Service + Product. SYSCOM has decades-long IBM partnership (per
// shared/data/company.ts) and Datacap deployment experience (services
// description). IBM-certified engineers on staff (Mark Anzmann: 6 IBM
// Certifications; Chris Benedetti: IBM Certified Solutions Designer). No
// formal IBM partner tier claimed — none is documented.
const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IBM Datacap Implementation & Support',
    serviceType: 'IBM Datacap implementation partner',
    provider: {
      '@type': 'Organization',
      name: 'SYSCOM, Inc.',
      url: 'https://syscom.com',
      knowsAbout: ['IBM Datacap', 'Document Capture', 'IBM FileNet', 'IBM Content Manager'],
    },
    areaServed: 'US',
    description:
      'Implementation, integration, custom rule design, and support for IBM Datacap — intelligent document capture integrated with the IBM content stack.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IBM Datacap',
    alternateName: ['Datacap', 'IBM Datacap Taskmaster'],
    category: 'Document Capture',
    brand: { '@type': 'Brand', name: 'IBM' },
    description:
      'IBM Datacap is the IBM intelligent document capture platform — OCR, classification, and data extraction, designed to feed FileNet and IBM Content Manager. SYSCOM is an IBM Datacap implementation partner.',
  },
];

const content: PlatformContent = {
  path: '/platforms/ibm-datacap',
  seo: {
    title: 'IBM Datacap Implementation Partner | SYSCOM',
    description:
      'IBM Datacap implementation, custom rule design, integration with FileNet and IBM Content Manager, and support from SYSCOM — decades-long IBM partnership and 40+ years of capture experience.',
    jsonLd: JSON_LD,
  },
  eyebrow: 'IBM Capture Partner — 40+ years',
  h1: 'IBM Datacap Implementation Partner',
  heroLead:
    'SYSCOM implements IBM Datacap for organizations that need intelligent document capture tied directly into the IBM content stack — feeding FileNet P8, IBM Content Manager, or BAW workflows. With a decades-long IBM ECM partnership and 40+ years of capture experience, we deliver Datacap deployments that actually keep up with the volume regulated organizations push through them.',
  whatIs: {
    heading: 'What is IBM Datacap?',
    paragraphs: [
      'IBM Datacap (formerly Datacap Taskmaster) is the IBM intelligent capture platform: OCR, classification, validation, and data extraction. It is purpose-built to ingest documents into the IBM content stack — FileNet, Content Manager — and to drive BAW workflows with the extracted data.',
      "It is the IBM-native answer to capture, and customers running deep on IBM ECM usually pick it for that integration story. We've deployed Datacap into government, financial-services, and insurance environments where the bar for accuracy and auditability is non-negotiable.",
    ],
    referenceLabel: 'IBM: Datacap product overview →',
    referenceHref: 'https://www.ibm.com/products/data-capture-and-imaging',
  },
  howWeHelp: {
    heading: 'How SYSCOM helps with Datacap',
    intro: 'From document analysis to running production capture pipelines.',
    items: [
      {
        title: 'Implementation',
        description:
          'New Datacap deployments — application design, rulesets, validation, and release into FileNet or IBM Content Manager.',
      },
      {
        title: 'Custom rule design',
        description:
          'Custom recognition and classification rules tuned to your specific document types — invoices, forms, claims, government records.',
      },
      {
        title: 'IBM stack integration',
        description:
          'Wire Datacap to FileNet P8, IBM Content Manager, and BAW workflows so extracted data flows straight into your case-management systems.',
      },
      {
        title: 'Modernization & migration',
        description:
          'Upgrade older Datacap/Taskmaster deployments, or migrate from legacy Kofax Capture / Tungsten Capture environments into Datacap (or the other way) when the customer stack dictates it.',
      },
    ],
  },
  useCases: {
    heading: 'Common Datacap use cases',
    items: [
      {
        title: 'Invoice capture & AP automation',
        description:
          'Extract header and line-item data from invoices, validate against ERP, and release into approval workflows.',
      },
      {
        title: 'Government forms processing',
        description:
          'High-volume forms intake for public-sector programs — eligibility, applications, regulatory filings.',
      },
      {
        title: 'Claims & insurance intake',
        description:
          'Capture supporting documents at the front of claims processes and feed structured data into adjudication workflows.',
      },
      {
        title: 'Mailroom & remote capture',
        description:
          'Central and distributed scan operations with quality assurance, exception handling, and SLA-backed delivery into FileNet/Content Manager.',
      },
    ],
  },
  whySyscom: {
    heading: 'Why SYSCOM for IBM Datacap',
    points: [
      {
        title: '40+ years in capture',
        description:
          'Founded in 1982, SYSCOM has deployed capture systems across four decades — across IBM, Tungsten/Kofax, and bespoke pipelines.',
      },
      {
        title: 'Decades-long IBM partnership',
        description:
          'A continuous IBM ECM partnership across Datacap, FileNet, Content Manager, and BAW — with IBM-certified engineers on every engagement.',
      },
      {
        title: 'Multi-capture-platform fluency',
        description:
          'Datacap, Tungsten Capture (Kofax Capture), and Tungsten TotalAgility under one roof. Customers running heterogeneous capture stacks get one team that can speak to all of it.',
      },
      {
        title: 'Government & financial focus',
        description:
          'Deep experience with the compliance, security, and scale requirements of regulated industries.',
      },
    ],
  },
  cta: {
    heading: 'Standing up or expanding Datacap?',
    body:
      'Whether you are building a new Datacap deployment, designing custom rulesets, or integrating capture into the rest of your IBM stack, SYSCOM can help. Tell us about your environment and goals.',
  },
};

export default function IbmDatacap() {
  return <PlatformPage content={content} />;
}
