import PlatformPage, { type PlatformContent } from '../../components/PlatformPage';

// Schema: Service + Product. NOTE on partner credentials: SYSCOM does NOT claim
// a Hyland partner tier — none is documented. This page positions SYSCOM as a
// multi-vendor ECM specialist whose actual leverage on OnBase work is the
// proprietary AnySource Migrator (ASM), used to move content into or out of
// OnBase with full fidelity. Implementation/integration claims are scoped to
// what SYSCOM verifiably does (ASM has an OnBase connector per the existing
// product copy in shared/data/company.ts).
const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hyland OnBase Implementation, Integration & Migration',
    serviceType: 'Hyland OnBase implementation and migration',
    provider: {
      '@type': 'Organization',
      name: 'SYSCOM, Inc.',
      url: 'https://syscom.com',
      knowsAbout: ['Hyland OnBase', 'Enterprise Content Management', 'Content Migration'],
    },
    areaServed: 'US',
    description:
      'Implementation, integration, and migration services for Hyland OnBase (also written On Base) — vendor-neutral ECM expertise from a 40+ year content management firm.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Hyland OnBase',
    alternateName: ['OnBase', 'On Base'],
    category: 'Enterprise Content Management',
    brand: { '@type': 'Brand', name: 'Hyland' },
    description:
      'Hyland OnBase is an enterprise content services platform. SYSCOM provides implementation, integration, and migration services for OnBase using the AnySource Migrator content-migration platform.',
  },
];

const content: PlatformContent = {
  path: '/platforms/hyland-onbase',
  seo: {
    title: 'Hyland OnBase Implementation & Migration | SYSCOM',
    description:
      'Hyland OnBase (also On Base) implementation, integration, and migration services from SYSCOM — 40+ years of multi-vendor ECM expertise and the AnySource Migrator content-migration platform.',
    jsonLd: JSON_LD,
  },
  eyebrow: 'Multi-Vendor ECM — 40+ years',
  h1: 'Hyland OnBase Implementation, Integration & Migration',
  heroLead:
    'SYSCOM is a vendor-neutral enterprise content management firm with 40+ years of experience across the ECM landscape — IBM, Tungsten Automation, Microsoft, and Hyland. For Hyland OnBase (also written On Base) we provide implementation, integration, and especially high-fidelity content migration in and out, powered by our proprietary AnySource Migrator (ASM) platform.',
  whatIs: {
    heading: 'What is Hyland OnBase?',
    paragraphs: [
      'Hyland OnBase is an enterprise content services platform — document management, workflow, case management, and integrations with line-of-business systems. It is one of the most common ECM platforms in healthcare, higher education, government, and financial services.',
      "Our role on OnBase work is shaped by the customer's starting point. Some teams want help implementing or extending an existing OnBase deployment. Many more come to us when they're consolidating ECM platforms — and need to move content into OnBase or out of it to FileNet, Content Manager, SharePoint, or somewhere else — without losing metadata, security, or audit history. That migration work is where SYSCOM's depth shows up.",
    ],
    referenceLabel: 'Hyland: OnBase product overview →',
    referenceHref: 'https://www.hyland.com/en/platform/onbase',
  },
  howWeHelp: {
    heading: 'How SYSCOM helps with OnBase',
    intro: 'Vendor-neutral ECM expertise, with content migration as our particular strength.',
    items: [
      {
        title: 'Implementation & integration',
        description:
          'OnBase deployments, integration with line-of-business apps, and connecting OnBase to adjacent capture and workflow systems.',
      },
      {
        title: 'Migration to OnBase',
        description:
          'Move content from FileNet, IBM Content Manager, ImagePlus, SharePoint, Documentum, or shared drives into OnBase — full metadata, security, and folder structure preserved.',
      },
      {
        title: 'Migration out of OnBase',
        description:
          'When consolidating onto another ECM, ASM moves OnBase content to the target platform with the same fidelity — bidirectional support is a SYSCOM differentiator.',
      },
      {
        title: 'Multi-platform federation',
        description:
          'Keep OnBase in place but surface its content alongside FileNet, Content Manager, or SharePoint via federation and unified-search layers.',
      },
    ],
  },
  useCases: {
    heading: 'Common OnBase scenarios we handle',
    items: [
      {
        title: 'ECM consolidation',
        description:
          'Move from multiple ECM platforms onto OnBase as a single repository — or migrate OnBase into another ECM as part of a consolidation initiative.',
      },
      {
        title: 'Legacy retirement',
        description:
          'Retire end-of-life ECM systems by migrating their content into OnBase with full audit trails preserved.',
      },
      {
        title: 'Hybrid coexistence',
        description:
          'Run OnBase alongside FileNet or Content Manager during a phased migration, with federated access so users see a single view.',
      },
      {
        title: 'OnBase integration with IBM stack',
        description:
          'Bridge OnBase with FileNet, BAW, or Datacap workflows where customers run a heterogeneous content estate.',
      },
    ],
  },
  whySyscom: {
    heading: 'Why SYSCOM for OnBase work',
    points: [
      {
        title: '40+ years across ECM platforms',
        description:
          'Founded in 1982, SYSCOM has implemented and migrated every major ECM generation. We are not OnBase-specific — and that breadth is the point on multi-platform work.',
      },
      {
        title: 'AnySource Migrator (proprietary)',
        description:
          'Our own migration engine with 25+ pre-built repository connectors including OnBase. Moves content in or out with full metadata, security, and folder structure intact.',
      },
      {
        title: 'Vendor-neutral perspective',
        description:
          "SYSCOM doesn't have a captive incentive to push OnBase or push you off it. The right answer depends on your stack and your goals, and we'll say so.",
      },
      {
        title: 'Government & financial focus',
        description:
          'Decades of work with the security, compliance, and scale requirements of regulated industries.',
      },
    ],
  },
  cta: {
    heading: 'Implementing OnBase, or migrating in or out of it?',
    body:
      'Whether you are standing up OnBase, integrating it with the rest of your content stack, or consolidating ECM platforms, SYSCOM can help. Tell us about your environment and goals.',
  },
};

export default function HylandOnBase() {
  return <PlatformPage content={content} />;
}
