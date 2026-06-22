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
      'IBM FileNet P8, Content Manager Enterprise Edition, Content Manager for iSeries, ImagePlus, Content Manager OnDemand. Document management, records management, compliance, repository solutions, federation, and migration between platforms. Keywords: FileNet, File Net, IBM Content Manager, IBM Datacap, IBM Business Automation Workflow, BAW.',
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
      'Enterprise Capture and intelligent document processing built on Tungsten TotalAgility, formerly known as Kofax TotalAgility. TotalAgility (commonly searched as "Total Agility," or "Kofax Total Agility") is the Tungsten Automation (formerly Kofax) intelligent automation and capture platform. Remote and central capture, scanner and VRS configuration, advanced recognition and classification, AI-powered classification, custom validation and release scripts, and IBM Datacap deployment. Tungsten Capture, Kofax Capture, TotalAgility, Total Agility, Kofax TotalAgility, Kofax Total Agility, intelligent document processing, OCR.',
  },
  {
    url: '/platforms',
    title: 'Platforms We Implement & Support',
    content:
      'SYSCOM implements and supports platforms across the IBM and Tungsten Automation (formerly Kofax) ecosystems: Tungsten TotalAgility (Kofax TotalAgility), Tungsten Capture (Kofax Capture), Kofax Transformation Modules (KTM), Kofax Front Office Server (KFS), IBM FileNet P8, IBM Content Manager (CM8), IBM Datacap, IBM Business Automation Workflow (BAW), IBM ImagePlus, IBM Content Manager OnDemand (CMOD), Hyland OnBase, Microsoft SharePoint, OpenText Documentum. Kofax is now Tungsten Automation.',
  },
  {
    // Dedicated platform partner page. Carries all four TotalAgility spelling
    // variants so any of them returns this page as well as Enterprise Capture.
    url: '/platforms/tungsten-totalagility',
    title: 'Tungsten TotalAgility Implementation Partner',
    content:
      'SYSCOM is a Tungsten TotalAgility implementation partner. We implement, upgrade, migrate, support, and train on Tungsten TotalAgility — also written Total Agility, and formerly sold as Kofax TotalAgility or Kofax Total Agility. Migration from Kofax Capture and older Kofax TotalAgility releases to current Tungsten TotalAgility. Use cases: accounts payable automation, customer and citizen onboarding, claims processing, government forms processing. 40+ years of automation experience, Silver-level Tungsten Automation (Kofax) partner across Document Exchange (DX), Financial Process Automation (FPA), and Intelligent Capture (IC), Baltimore mid-Atlantic, government and financial services. TotalAgility, Total Agility, Kofax TotalAgility, Kofax Total Agility.',
  },
  {
    url: '/platforms/tungsten-capture',
    title: 'Tungsten Capture Implementation Partner (formerly Kofax Capture)',
    content:
      'SYSCOM is a Tungsten Capture implementation partner. We implement, modernize, upgrade, and support Tungsten Capture — formerly sold as Kofax Capture. High-volume distributed document capture for mailrooms, branch offices, and centralized scan operations. Custom validation and release scripts into IBM FileNet, IBM Content Manager, Hyland OnBase, and downstream systems. Modernization paths from Kofax Capture toward Tungsten TotalAgility where appropriate. Silver-level Tungsten Automation (Kofax) partner across Document Exchange (DX), Financial Process Automation (FPA), and Intelligent Capture (IC). 30+ years of Kofax/Tungsten experience. CTO Tungsten Capture certified v8 v11.2. Use cases: mailroom operations, remote and branch capture, claims and forms intake, government records intake. Tungsten Capture, Kofax Capture, Kofax distributed capture.',
  },
  {
    url: '/platforms/ibm-filenet',
    title: 'IBM FileNet Implementation Partner',
    content:
      'SYSCOM is an IBM FileNet implementation partner. We design, deploy, federate, migrate, upgrade, and support IBM FileNet P8 — also written File Net or simply FileNet. Enterprise content services and case management. Federation with IBM Content Manager, ImagePlus, and line-of-business apps. Migration in and out of FileNet powered by our proprietary AnySource Migrator (ASM) with full metadata, security, and folder fidelity. Use cases: records and compliance, claims and case management, contracts and document repositories, government forms. Decades-long IBM ECM partnership covering FileNet P8, Content Manager, ImagePlus, and BAW. IBM-certified engineers. 40+ years of ECM experience, Baltimore mid-Atlantic. FileNet, File Net, IBM FileNet P8, IBM FileNet Content Manager.',
  },
  {
    url: '/platforms/ibm-baw',
    title: 'IBM Business Automation Workflow (BAW) Implementation Partner',
    content:
      'SYSCOM is an IBM Business Automation Workflow implementation partner. We implement BAW, design case-management workflows, and migrate from older IBM BPM and Case Manager into BAW. Integration with FileNet content and Datacap intake so workflows reference real documents and data. Use cases: claims case management, government program workflows, regulatory and compliance workflows, document-driven processes. PMP-certified delivery with PMBOK methodology — the discipline audited workflows need. Decades-long IBM ECM and automation partnership. IBM-certified engineers. 40+ years of automation experience. BAW, IBM BAW, Business Automation Workflow, IBM BPM, IBM Case Manager.',
  },
  {
    url: '/platforms/ibm-datacap',
    title: 'IBM Datacap Implementation Partner',
    content:
      'SYSCOM is an IBM Datacap implementation partner. We implement Datacap, design custom recognition and classification rules, and integrate capture with FileNet P8, IBM Content Manager, and BAW workflows. Modernize older Datacap or Taskmaster deployments. Multi-capture-platform fluency across IBM Datacap, Tungsten Capture (Kofax Capture), and Tungsten TotalAgility under one roof. Use cases: invoice capture and AP automation, government forms processing, claims and insurance intake, mailroom and remote capture. Decades-long IBM ECM partnership. IBM-certified engineers. 40+ years of capture experience. Datacap, IBM Datacap, Datacap Taskmaster, IBM intelligent capture.',
  },
  {
    url: '/platforms/hyland-onbase',
    title: 'Hyland OnBase Implementation, Integration & Migration',
    content:
      'SYSCOM provides Hyland OnBase implementation, integration, and migration services. OnBase is also commonly written as On Base. Vendor-neutral multi-platform ECM expertise — not a Hyland-specific shop. Move content into OnBase from FileNet, IBM Content Manager, ImagePlus, SharePoint, Documentum, or shared drives with full metadata, security, and folder fidelity. Move content out of OnBase into another ECM as part of consolidation initiatives — bidirectional migration via our proprietary AnySource Migrator (ASM). Integration with the IBM stack (FileNet, BAW, Datacap) where customers run heterogeneous content estates. Use cases: ECM consolidation, legacy retirement, hybrid coexistence, OnBase plus IBM-stack integration. 40+ years across ECM platforms. OnBase, On Base, Hyland OnBase, Hyland ECM.',
  },
  {
    url: '/services#migration',
    title: 'Content Migration',
    content:
      'Move content between any ECM platform with full metadata, security, and folder structure preservation. Powered by AnySource Migrator (ASM) with 25+ pre-built connectors including FileNet (also File Net), IBM Content Manager, Hyland OnBase (also written On Base), SharePoint, and EMC Documentum.',
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
    title: 'Alpha-Z — Mainframe AI Platform (In Development)',
    content:
      "Alpha-Z is SYSCOM's in-development AI platform for reverse-engineering, documenting, and mapping legacy IBM mainframe code: COBOL, Assembler, PL/I, JCL, BMS, CICS, IMS, DB2, and z/OS. It produces natural-language documentation, architecture diagrams, dependency maps, and multi-language call-chain tracing, paired with 40 years of IBM platform expertise. Available in the cloud (Anthropic Claude) or air-gapped on-premise (local LLMs) for FedRAMP, CMMC, ITAR, and HIPAA environments. Mainframe modernization, code documentation, reverse engineering, compiler listing analysis.",
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
