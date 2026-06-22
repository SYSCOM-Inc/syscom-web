// Platforms SYSCOM implements and supports. Govfriendly-only data, shared by the
// /platforms index page and the home "Platforms We Implement" section.
//
// Branding note: Kofax rebranded to Tungsten Automation (Jan 2024). The company
// is "Tungsten Automation (formerly Kofax)"; several products still carry the
// Kofax name in current docs (e.g. Kofax Front Office Server 4.3, 2025) while
// others are rebranding (Kofax Transformation Modules → Tungsten Transformation
// Toolkit). Copy reflects that transition rather than inventing names.

export type PlatformVendor = 'Tungsten Automation' | 'IBM' | 'Other ECM';

export interface PlatformEntry {
  name: string;
  vendor: PlatformVendor;
  /** One-line description. */
  blurb: string;
  /** Most relevant destination today (full page for TotalAgility, section anchors otherwise). */
  href: string;
  /** Legacy/alternate name shown as a small note. */
  formerly?: string;
  /** Flagship dedicated page exists. */
  featured?: boolean;
}

export const platforms: PlatformEntry[] = [
  // Tungsten Automation (formerly Kofax)
  {
    name: 'Tungsten TotalAgility',
    vendor: 'Tungsten Automation',
    blurb: 'Low-code intelligent automation, capture, and workflow — implementation, upgrades, and support.',
    href: '/platforms/tungsten-totalagility',
    formerly: 'formerly Kofax TotalAgility',
    featured: true,
  },
  {
    name: 'Tungsten Capture',
    vendor: 'Tungsten Automation',
    blurb: 'High-volume document capture, recognition, and classification across distributed scan environments.',
    href: '/platforms/tungsten-capture',
    formerly: 'formerly Kofax Capture',
    featured: true,
  },
  {
    name: 'Legacy Capture: KTM & KFS',
    vendor: 'Tungsten Automation',
    blurb: 'Kofax Transformation Modules (now the Transformation Toolkit) and Kofax Front Office Server — supported and modernized toward TotalAgility.',
    href: '/services#capture',
    formerly: 'KTM / KFS',
  },
  // IBM
  {
    name: 'IBM FileNet P8',
    vendor: 'IBM',
    blurb: 'Enterprise content and case management — design, deployment, federation, and migration.',
    href: '/platforms/ibm-filenet',
    featured: true,
  },
  {
    name: 'IBM Content Manager (CM8)',
    vendor: 'IBM',
    blurb: 'Content repository for high-volume imaging and records, including Content Manager for iSeries.',
    href: '/services#ecm',
  },
  {
    name: 'IBM Datacap',
    vendor: 'IBM',
    blurb: 'Intelligent document capture and classification, integrated with the IBM content stack.',
    href: '/platforms/ibm-datacap',
    featured: true,
  },
  {
    name: 'IBM Business Automation Workflow (BAW)',
    vendor: 'IBM',
    blurb: 'Process and case orchestration across the IBM automation portfolio.',
    href: '/platforms/ibm-baw',
    featured: true,
  },
  {
    name: 'IBM ImagePlus',
    vendor: 'IBM',
    blurb: 'Legacy mainframe imaging — maintained and modernized by our AIS Bridge product.',
    href: '/products#ais-bridge',
  },
  {
    name: 'IBM Content Manager OnDemand (CMOD)',
    vendor: 'IBM',
    blurb: 'High-volume report, statement, and output archive and retrieval.',
    href: '/services#ecm',
  },
  // Other ECM platforms
  {
    name: 'Hyland OnBase',
    vendor: 'Other ECM',
    blurb: 'ECM platform — a common AnySource Migrator source and target for content migration.',
    href: '/platforms/hyland-onbase',
    featured: true,
  },
  {
    name: 'Microsoft SharePoint',
    vendor: 'Other ECM',
    blurb: 'Content and collaboration — capture into and migration to or from SharePoint.',
    href: '/services#ecm',
  },
  {
    name: 'OpenText Documentum',
    vendor: 'Other ECM',
    blurb: 'Enterprise content platform — migrate in or out with full fidelity using AnySource Migrator.',
    href: '/services#migration',
  },
];

export const PLATFORM_VENDOR_ORDER: PlatformVendor[] = ['Tungsten Automation', 'IBM', 'Other ECM'];
