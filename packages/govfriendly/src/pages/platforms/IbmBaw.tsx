import PlatformPage, { type PlatformContent } from '../../components/PlatformPage';

// Schema: Service + Product. SYSCOM has a decades-long IBM partnership (per
// shared/data/company.ts) covering BAW. IBM-certified engineers on staff
// (Mark Anzmann: 6 IBM Certifications). No formal partner tier claimed —
// none is documented.
const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IBM Business Automation Workflow Implementation & Support',
    serviceType: 'IBM BAW implementation partner',
    provider: {
      '@type': 'Organization',
      name: 'SYSCOM, Inc.',
      url: 'https://syscom.com',
      knowsAbout: ['IBM Business Automation Workflow', 'IBM FileNet', 'Case Management'],
    },
    areaServed: 'US',
    description:
      'Implementation, case-management design, upgrades, and support for IBM Business Automation Workflow (BAW) — process and case orchestration on the IBM automation stack.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IBM Business Automation Workflow',
    alternateName: ['BAW', 'IBM BAW', 'Business Automation Workflow'],
    category: 'Workflow & Case Management',
    brand: { '@type': 'Brand', name: 'IBM' },
    description:
      'IBM Business Automation Workflow (BAW) is the IBM workflow and case management platform, combining the older IBM BPM and Case Manager lines. SYSCOM is an IBM BAW implementation partner.',
  },
];

const content: PlatformContent = {
  path: '/platforms/ibm-baw',
  seo: {
    title: 'IBM BAW (Business Automation Workflow) Implementation | SYSCOM',
    description:
      'IBM Business Automation Workflow (BAW) implementation, case management, and migration from older IBM BPM / Case Manager — decades-long IBM partnership and 40+ years of automation experience.',
    jsonLd: JSON_LD,
  },
  eyebrow: 'IBM Automation Partner — 40+ years',
  h1: 'IBM Business Automation Workflow Implementation Partner',
  heroLead:
    'SYSCOM implements IBM Business Automation Workflow (BAW) for government and financial-services teams running complex, audited, multi-step processes. We design the case model, orchestrate the work, and integrate BAW with the surrounding IBM content stack — FileNet, Datacap, Content Manager — so the process actually runs on real customer data instead of demo screens.',
  whatIs: {
    heading: 'What is IBM BAW?',
    paragraphs: [
      'IBM Business Automation Workflow (commonly searched simply as "BAW," sometimes still "Business Automation Workflow") combines what used to be two separate IBM products: IBM Business Process Manager (BPM) and IBM Case Manager. It is the platform IBM puts in front of customers who need process orchestration AND case folders together — the "structured + unstructured work" pattern.',
      'BAW lives in the IBM automation portfolio next to FileNet (for content), Datacap (for capture), and BPM legacy artifacts that many customers still have. Our work is usually some mix of new BAW build-out, migration off older BPM/Case Manager into BAW, and integration with FileNet content and Datacap intake.',
    ],
    referenceLabel: 'IBM: Business Automation Workflow product overview →',
    referenceHref: 'https://www.ibm.com/products/business-automation-workflow',
  },
  howWeHelp: {
    heading: 'How SYSCOM helps with BAW',
    intro: 'BAW projects rarely live in isolation. We design them to play well with the rest of the IBM stack.',
    items: [
      {
        title: 'Implementation',
        description:
          'New BAW build-outs — case model design, process orchestration, business rules, and human-in-the-loop steps tied to your actual content.',
      },
      {
        title: 'Migration from legacy BPM',
        description:
          'Move from IBM BPM or older Case Manager into BAW, carrying over the process logic, case structures, and integrations.',
      },
      {
        title: 'Content & capture integration',
        description:
          'Connect BAW workflows to FileNet content, Datacap intake, and line-of-business systems so cases reference real documents and data.',
      },
      {
        title: 'PMP-led delivery',
        description:
          'PMBOK-based methodology with PMP-certified project managers — the discipline that audited, regulated workflows need.',
      },
    ],
  },
  useCases: {
    heading: 'Common BAW use cases',
    items: [
      {
        title: 'Claims case management',
        description:
          'Adjudicate claims with supporting documents, supplemental requests, and audit trails — case folders bound to FileNet content.',
      },
      {
        title: 'Government program workflows',
        description:
          'Eligibility determinations, applications, and program intake processes for state and federal agencies.',
      },
      {
        title: 'Regulatory & compliance workflows',
        description:
          'Multi-step approval, escalation, and review processes with full audit history — for banking, insurance, and public-sector compliance regimes.',
      },
      {
        title: 'Document-driven processes',
        description:
          'Any case where the work product is fundamentally documents-plus-decisions — onboarding, contract lifecycle, records review.',
      },
    ],
  },
  whySyscom: {
    heading: 'Why SYSCOM for IBM BAW',
    points: [
      {
        title: '40+ years in automation',
        description:
          'Founded in 1982, SYSCOM has implemented business-process systems across four decades of IBM platform change — including the predecessors that became BAW.',
      },
      {
        title: 'Decades-long IBM partnership',
        description:
          'A continuous IBM ECM and automation partnership covering BAW, FileNet, Content Manager, and the wider IBM stack — with IBM-certified engineers on every engagement.',
      },
      {
        title: 'PMP-certified delivery',
        description:
          'PMBOK methodology with Earned Value Management. Audited workflows need disciplined delivery — that is how we run BAW projects.',
      },
      {
        title: 'Government & financial focus',
        description:
          'Deep experience with the compliance, scale, and security requirements of regulated industries.',
      },
    ],
  },
  cta: {
    heading: 'Standing up BAW, or migrating off older BPM?',
    body:
      'Whether you are building new BAW workflows, modernizing from IBM BPM or Case Manager, or integrating BAW with the rest of your content stack, SYSCOM can help. Tell us about your environment and goals.',
  },
};

export default function IbmBaw() {
  return <PlatformPage content={content} />;
}
