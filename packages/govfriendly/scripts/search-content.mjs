// Search records for the on-site Pagefind index.
//
// Why a curated file: the site is a client-rendered SPA, so the production
// build emits a single empty index.html — there is no per-page static HTML for
// Pagefind to crawl. Instead we feed Pagefind custom records at build time
// (see build-search-index.mjs). Keep this in sync when page copy changes
// materially. Follow-up option: generate from shared data or prerendered HTML.
//
// `url` may include a hash (e.g. /services#capture) — the app scrolls to that
// section on navigation (see ScrollToHash in App.tsx).

export const searchPages = [
  {
    url: '/',
    title: 'SYSCOM, Inc. — Enterprise Content Management & Automation',
    content:
      'SYSCOM is a Baltimore-based enterprise content management and business process automation firm with 40+ years serving government, financial services, and healthcare. Trusted ECM partner since 1982. The right technology at the right time. AI-forward, employee-driven, owns its IP.',
  },
  {
    url: '/about',
    title: 'About SYSCOM — 40+ Years in ECM',
    content:
      'Founded 1982 in Baltimore, Maryland. Leadership: Ted Bayer, Mark Anzmann, Chris Benedetti. Partnerships with IBM and Tungsten Automation (formerly Kofax). Centers of Excellence across content management, capture, migration, and AI. We build and own our intellectual property.',
  },
  {
    url: '/services',
    title: 'Services — ECM, Capture, Migration & AI',
    content:
      'Enterprise content management, business process automation, enterprise capture, content migration, AI and intelligent automation, custom application services, managed services, and staffing. Decades of real-world deployments for government and enterprise clients.',
  },
  {
    url: '/services#ecm',
    title: 'Enterprise Content Management (ECM)',
    content:
      'IBM FileNet P8, Content Manager Enterprise Edition, Content Manager for iSeries, ImagePlus, Content Manager OnDemand. Document management, records management, compliance, repository solutions, federation, and migration between platforms.',
  },
  {
    url: '/services#bpa',
    title: 'Business Process Automation (BPA)',
    content:
      'Workflow design and orchestration using IBM Business Automation Workflow and Tungsten TotalAgility. Case management, business rules, human-in-the-loop automation, AI-enhanced intelligent document classification and predictive routing.',
  },
  {
    // The Enterprise Capture / TotalAgility record. Both spellings are present
    // intentionally so "TotalAgility" and "Total Agility" both resolve here.
    url: '/services#capture',
    title: 'Enterprise Capture — Tungsten TotalAgility',
    content:
      'Enterprise Capture and intelligent document processing built on Tungsten TotalAgility. TotalAgility (commonly searched as "Total Agility") is the Tungsten Automation (formerly Kofax) intelligent automation and capture platform. Remote and central capture, scanner and VRS configuration, advanced recognition and classification, AI-powered classification, custom validation and release scripts, and IBM Datacap deployment. Tungsten Capture, Kofax Capture, TotalAgility, Total Agility, intelligent document processing, OCR.',
  },
  {
    url: '/services#migration',
    title: 'Content Migration',
    content:
      'Move content between any ECM platform with full metadata, security, and folder structure preservation. Powered by AnySource Migrator (ASM) with 25+ pre-built connectors including FileNet, IBM Content Manager, Hyland OnBase, SharePoint, and EMC Documentum.',
  },
  {
    url: '/services#ai',
    title: 'AI & Intelligent Automation',
    content:
      'Zero-shot document classification, AI-powered auto-mapping in ASM 2.0, semantic search and knowledge graphs in IBIG 2.0, Compliance-as-Code, cloud and on-premises model deployment for air-gapped environments.',
  },
  {
    url: '/products',
    title: 'Products — Software SYSCOM Builds and Owns',
    content:
      'AnySource Migrator (ASM), AIS Bridge, IBIG 2.0, SYSCOM Content Services, Content Viewer, AIS+EE, ASImport, IP2CM, MVS Connect. Proprietary software supporting FileNet, IBM Content Manager, Hyland OnBase, ImagePlus, and SharePoint.',
  },
  {
    url: '/products#asm',
    title: 'AnySource Migrator (ASM)',
    content:
      'Flagship enterprise content migration platform. Any source, any destination, zero compromises. 25+ pre-built connectors: FileNet P8, IBM Content Manager, ImagePlus, Hyland OnBase, SharePoint, CMIS, EMC Documentum. AI auto-mapping, smart transformations, live monitoring.',
  },
  {
    url: '/products#ais-bridge',
    title: 'AIS Bridge — IBM ImagePlus Modernization',
    content:
      'A complete, fully supported replacement for IBM ImagePlus. Maintain critical ImagePlus workflows and investment while modernizing infrastructure with zero disruption.',
  },
  {
    url: '/products#ibig',
    title: 'IBIG 2.0 — Intelligent Business Information Gateway',
    content:
      'Content services platform with a semantic knowledge layer and AI-powered search. Crawls your repositories to help you understand, not just search, your documents. Config-driven content workflows.',
  },
  {
    url: '/products#alpha-z',
    title: 'Alpha-Z — Mainframe Modernization (In Development)',
    content:
      "SYSCOM's mainframe modernization initiative. AI-powered analysis and documentation of legacy mainframe applications: COBOL, JCL, IMS, DB2, CICS. Automated compiler listing analysis, call-chain mapping, AI-generated application documentation, and modernization assessment support. Currently in active development.",
  },
  {
    url: '/contact',
    title: 'Contact SYSCOM — Baltimore, MD',
    content:
      'Contact SYSCOM, Inc. 400 East Pratt Street, Suite 600, Baltimore, MD 21202. Phone (410) 539-3737. Email sales@syscom.com. Request a consultation or a product demonstration.',
  },
  {
    url: '/careers',
    title: 'Job Opportunities at SYSCOM',
    content:
      'Careers and job opportunities at SYSCOM. Build enterprise software that matters. Skills in demand: Java, .NET, Azure, AWS, Claude, LangChain, Tungsten Capture, Total Agility. Roles: project managers, business analysts, software architects, developers, DBAs, cybersecurity engineers. Work-from-home opportunities, benefits, and mentorship.',
  },
];
