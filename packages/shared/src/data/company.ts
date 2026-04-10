export const company = {
  name: "SYSCOM, Inc.",
  tagline: "The right technology at the right time.",
  founded: 1982,
  yearsInBusiness: new Date().getFullYear() - 1982,
  address: {
    street: "400 East Pratt Street, Suite 600",
    building: "Inner Harbor Center",
    city: "Baltimore",
    state: "Maryland",
    zip: "21202",
    full: "Inner Harbor Center, 400 East Pratt Street (at Gay Street), Suite 600, Baltimore, MD 21202-3116",
  },
  phone: "(410) 539-3737",
  phoneTollfree: "1-800-7-SYSCOM",
  phoneTollfreeNumeric: "1-800-779-7266",
  fax: "(410) 837-9535",
  email: "sales@syscom.com",
  supportEmail: "supportcenter@syscom.com",
  website: "https://syscom.com",
  businessHours: "Monday - Friday, 8:00 AM - 5:00 PM ET",
  phoneTree: [
    { key: "0", label: "Operator" },
    { key: "2", label: "Sales" },
    { key: "4", label: "Technical Support" },
  ],
  mission:
    "To create and deliver the right technology solutions by teaming with our customers to understand their business needs and empower them to achieve their goals.",
  divisions: [
    "Professional Services",
    "Sales & Marketing",
    "Corporate Services",
  ],
  retentionRate: "Exceptional",
  equalOpportunityEmployer: true,
  careerPortal: "https://syscom.catsone.com/careers/95588-General/",
};

export const leadership = [
  {
    name: "Ted Bayer",
    title: "President & CEO",
    bio: "Founder and President of SYSCOM since 1982, Ted has led the company from a startup to a leading enterprise content management solutions provider. With over four decades of experience in enterprise IT, Ted's vision for delivering the right technology — not just the newest — has guided SYSCOM's strategy and growth.",
    education: [
      "Carnegie Mellon University, BS Psychology",
      "Johns Hopkins University, Operations Research",
      "MIT, Executive Management & Artificial Intelligence",
    ],
    awards: [
      "Ernst & Young Entrepreneur of the Year",
      "Deloitte & Touche / Inc. Magazine Recognition",
    ],
  },
  {
    name: "Mark Anzmann",
    title: "Executive Vice President",
    bio: "Mark oversees SYSCOM's Professional Services division and strategic client relationships across government and financial services verticals. With over 20 years of experience and six IBM certifications, Mark brings deep technical expertise to every engagement. He has served as Chair of the Baltimore/Washington DB2 Users Group.",
    education: [
      "James Madison University, BS Computer Science",
    ],
    certifications: [
      "6 IBM Certifications",
      "Baltimore/Washington DB2 Users Group Chair",
    ],
  },
  {
    name: "Chris Benedetti",
    title: "Chief Technology Officer",
    bio: "Chris has spent over 25 years at SYSCOM, progressing from capture engineer to CTO. He leads product development and technology strategy across the entire SYSCOM portfolio — including AnySource Migrator, IBIG 2.0, and AIS Bridge. Chris has architected and delivered enterprise content solutions for clients including Wells Fargo, Navy Federal Credit Union, the United Nations, and numerous federal and state government agencies. He also co-founded Bishop Records, a vinyl record company. Under his leadership, SYSCOM has expanded into AI-powered document intelligence, semantic search, and next-generation migration tooling.",
    education: [
      "University of Cincinnati, BBA — Information Systems & Management",
    ],
    certifications: [
      "Kofax Capture Certified (v8–v11.2)",
      "Kofax KTM 6 Certified",
      "AWS Certified Solutions Architect",
      "Microsoft Certified Technology Specialist",
      "IBM Certified Solutions Designer — DB2 Content Manager v8.3",
    ],
  },
];

export const partnerships = [
  {
    name: "IBM",
    description: "Decades-long partnership spanning FileNet P8, Content Manager, ImagePlus, BAW, and the broader IBM ECM ecosystem.",
  },
  {
    name: "Tungsten Automation (Kofax)",
    description: "30+ year partnership covering enterprise capture, intelligent document processing, and automation.",
  },
];

export const services = [
  {
    id: "ecm",
    name: "Enterprise Content Management",
    shortName: "ECM",
    description:
      "IBM FileNet P8, Content Manager Enterprise Edition, Content Manager for iSeries, ImagePlus support and migration, Content Manager OnDemand. Federation, application integration, and migration between platforms.",
    icon: "database",
  },
  {
    id: "bpa",
    name: "Business Process Automation",
    shortName: "BPA",
    description:
      "End-to-end workflow design and optimization. Process analysis, redesign, and orchestration using IBM Business Automation Workflow and Tungsten platforms. Case management, business rules, and human-in-the-loop automation. Increasingly AI-enhanced — we integrate intelligent document classification, automated decision support, and predictive routing into BPA workflows so processes get smarter over time, not just faster.",
    icon: "workflow",
  },
  {
    id: "capture",
    name: "Enterprise Capture",
    shortName: "Capture",
    description:
      "30+ year Tungsten Automation (Kofax) partnership. Remote and central capture, scanner and VRS configuration, high-availability and disaster recovery, advanced recognition and classification, custom validation and release scripts, IBM Datacap deployment.",
    icon: "scan",
  },
  {
    id: "migration",
    name: "Content Migration",
    shortName: "Migration",
    description:
      "Move content between any ECM platform with full metadata, security, and folder structure preservation. Powered by our proprietary AnySource Migrator — 25+ pre-built repository connectors. Strategies include gradual migration, overnight switchover, and federated coexistence.",
    icon: "move",
  },
  {
    id: "ai",
    name: "AI & Intelligent Automation",
    shortName: "AI",
    description:
      "Zero-shot document classification without templates. AI-powered auto-mapping in ASM 2.0. Semantic search and knowledge graphs in IBIG 2.0. Compliance-as-Code for automated security documentation. Cloud and on-premises model deployment for air-gapped environments.",
    icon: "brain",
  },
  {
    id: "custom-apps",
    name: "Custom Application Services",
    shortName: "Custom Apps",
    description:
      "Purpose-built applications and integrations tailored to your specific business processes. From front-end portals to backend system integrations, we design and build solutions that work the way your organization does.",
    icon: "code",
  },
  {
    id: "managed-services",
    name: "Managed Services",
    shortName: "Managed Services",
    description:
      "Ongoing operational support for enterprise content and capture platforms. SYSCOM embeds dedicated teams to run day-to-day production operations — document capture, quality assurance, exception handling, and system monitoring — so your organization can focus on its mission. We manage the entire pipeline from intake through final disposition, with SLA-backed performance and continuous process improvement.",
    icon: "shield",
  },
  {
    id: "staffing",
    name: "Staffing & Workforce Augmentation",
    shortName: "Staffing",
    description:
      "Project Managers, Architects, Business Analysts, Programmers, Technical Writers, Testers, DBAs, and Cybersecurity Engineers. Individual resources, teams, or entire departments. Short-term engagements to long-term placements exceeding 10 years. Rapid deployment backed by deep ECM technical knowledge.",
    icon: "users",
  },
];

export const products = [
  {
    id: "asm",
    name: "AnySource Migrator",
    shortName: "ASM",
    tagline: "Any source. Any destination. Zero compromises.",
    badge: "Flagship",
    description:
      "Enterprise content migration platform with 25+ pre-built repository connectors. AI-powered auto-mapping, real-time monitoring, and the most flexible migration engine on the market.",
    features: [
      {
        title: "25+ Connectors",
        description:
          "FileNet P8, Content Manager, ImagePlus, SharePoint, CMIS, EMC Documentum, OLEDB, File Systems, and a custom connector framework.",
      },
      {
        title: "AI Auto-Mapping (2.0)",
        description:
          "Analyze source taxonomy and auto-suggest target mappings using AI. Weeks of planning reduced to hours.",
      },
      {
        title: "Smart Transformations",
        description:
          "TIFF to PDF, MODCA to TIFF, Full-Text PDF, metadata manipulation. All configurable without code.",
      },
      {
        title: "Live Monitoring",
        description:
          "Track every document migrated with status reporting, anomaly detection, and predictive issue identification.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Scale vertically or horizontally. Repository Providers, Transformations engine, and Rendition functions work independently.",
      },
      {
        title: "Self-Service Portal (2.0)",
        description:
          "Web-based migration configuration for mid-market clients. Extends ASM's reach beyond enterprise engagements.",
      },
    ],
    connectors: [
      "FileNet P8",
      "Content Manager",
      "ImagePlus",
      "SharePoint",
      "CMIS",
      "EMC Documentum",
      "OLEDB",
      "File System",
      "Custom",
    ],
    workflow: [
      { icon: "search", label: "Analyze" },
      { icon: "ruler", label: "Design" },
      { icon: "link", label: "Connect" },
      { icon: "settings", label: "Transform" },
      { icon: "rocket", label: "Migrate" },
      { icon: "check", label: "Validate" },
    ],
    flagship: true,
    category: "flagship" as const,
  },
  {
    id: "ais-bridge",
    name: "AIS Bridge",
    shortName: "Bridge",
    tagline: "ImagePlus to modern. Zero disruption.",
    badge: "Modernization",
    description:
      "A complete, fully-supported drop-in replacement for IBM ImagePlus. Preserves every integration, workflow, and user process — including AIS Bridge Viewer and ICN Plugin. Backed by decades of ImagePlus expertise.",
    features: [
      {
        title: "Drop-In Replacement",
        description:
          "Full API compatibility. Existing CICS, IMS, MQ Workflow, and Windows client integrations work without modification.",
      },
      {
        title: "Modern Architecture",
        description:
          "Current technology stack underneath, complete backward compatibility on the surface.",
      },
      {
        title: "Zero-Downtime Migration",
        description:
          "Phased migration approach keeps all systems operational throughout the transition.",
      },
      {
        title: "Expert Support",
        description:
          "SYSCOM is THE go-to for ImagePlus — the team that built and maintained these systems now supports your Bridge.",
      },
    ],
    connectors: [
      "ImagePlus API",
      "CICS",
      "IMS",
      "MQ Workflow",
      "Windows Clients",
      "OnDemand",
    ],
    workflow: [
      { icon: "clipboard", label: "Assess" },
      { icon: "refresh", label: "Config" },
      { icon: "plug", label: "Integrate" },
      { icon: "flask", label: "Test" },
      { icon: "rocket", label: "Deploy" },
      { icon: "shield", label: "Support" },
    ],
    flagship: false,
    category: "core" as const,
  },
  {
    id: "ibig",
    name: "IBIG 2.0",
    shortName: "IBIG",
    tagline: "Don't just search your documents. Understand them.",
    badge: "Next Gen",
    description:
      "The Intelligent Business Information Gateway, reborn with AI. Crawls existing repositories, uses LLMs to understand documents — not just OCR text — and builds a semantic knowledge layer with natural language search.",
    features: [
      {
        title: "AI Document Understanding",
        description:
          "LLMs comprehend document meaning — types, entities, dates, relationships. Far beyond text extraction.",
      },
      {
        title: "Semantic Search",
        description:
          'Natural language queries: "Find all contracts expiring this quarter" returns intelligent, ranked results.',
      },
      {
        title: "Knowledge Graph",
        description:
          "Automatically maps relationships between people, organizations, dates, and topics across your entire archive.",
      },
      {
        title: "Continuous Monitoring",
        description:
          "Scheduled recrawls detect new and changed documents, keeping the intelligence layer always current.",
      },
      {
        title: "25+ Repository Connectors",
        description:
          "Works with all ASM connectors — FileNet, SharePoint, Content Manager, and more. One platform, any repository.",
      },
      {
        title: "Air-Gap Capable",
        description:
          "On-premises model deployment for classified and air-gapped government environments.",
      },
    ],
    connectors: [
      "All ASM Connectors",
      "SharePoint",
      "FileNet P8",
      "Content Manager",
      "File Shares",
      "Custom APIs",
    ],
    workflow: [
      { icon: "spider", label: "Crawl" },
      { icon: "eye", label: "OCR+AI" },
      { icon: "brain", label: "Understand" },
      { icon: "folder", label: "Classify" },
      { icon: "link", label: "Relate" },
      { icon: "search", label: "Search" },
    ],
    flagship: false,
    category: "core" as const,
  },
  {
    id: "content-services",
    name: "SYSCOM Content Services",
    shortName: "SCS",
    tagline: "Config-driven content workflows. Ship in days.",
    badge: "Platform",
    description:
      "SOA architecture for rapid ECM service deployment. Build powerful content workflows through configuration, not custom code. Pre-built templates for common patterns. Sarbanes-Oxley compliance support.",
    features: [
      {
        title: "No-Code Configuration",
        description:
          "Define workflows, rules, and integrations through configuration. Pre-built templates for common patterns.",
      },
      {
        title: "SOA Architecture",
        description:
          "Standard REST and SOAP interfaces integrate with any enterprise system.",
      },
      {
        title: "Rapid Deployment",
        description:
          "Requirements to production in days. Dramatically reduces project timelines.",
      },
      {
        title: "Full Integration",
        description:
          "Microsoft Office, SharePoint, line-of-business systems, and the complete SYSCOM product suite.",
      },
    ],
    connectors: [
      "REST APIs",
      "SOAP Services",
      "SharePoint",
      "MS Office",
      "FileNet",
      "LOB Systems",
    ],
    workflow: [
      { icon: "edit", label: "Define" },
      { icon: "settings", label: "Config" },
      { icon: "plug", label: "Connect" },
      { icon: "flask", label: "Test" },
      { icon: "rocket", label: "Deploy" },
      { icon: "bar-chart", label: "Monitor" },
    ],
    flagship: false,
    category: "core" as const,
  },
  {
    id: "content-viewer",
    name: "SYSCOM Content Viewer",
    shortName: "Viewer",
    tagline: "View any document, any repository, any browser.",
    badge: "Viewer",
    description:
      "HTML5 browser-based document viewer for content stored across IBM CM8, ImagePlus, CMOD, and FileNet repositories. Supports PDF, AFP/MO:DCA, and TIFF formats with zero client installation — a modern replacement for deprecated Java applet-based viewers.",
    features: [
      {
        title: "Zero Install",
        description:
          "Pure HTML5 — runs in any modern browser with no plugins, applets, or client software required.",
      },
      {
        title: "Multi-Repository",
        description:
          "Single viewer for documents across CM8, ImagePlus, CMOD, and FileNet repositories.",
      },
      {
        title: "Format Support",
        description:
          "Native rendering of PDF, AFP/MO:DCA, TIFF, and other enterprise document formats.",
      },
      {
        title: "Legacy Replacement",
        description:
          "Modern replacement for deprecated Java applet-based viewers with full feature parity.",
      },
    ],
    connectors: ["IBM CM8", "ImagePlus", "CMOD", "FileNet", "Web Browser"],
    workflow: [
      { icon: "search", label: "Find" },
      { icon: "eye", label: "View" },
      { icon: "edit", label: "Annotate" },
      { icon: "check", label: "Complete" },
    ],
    flagship: false,
    category: "utility" as const,
  },
  {
    id: "ais-ee",
    name: "AIS+EE",
    shortName: "AIS+EE",
    tagline: "Enhanced access to IBM content repositories.",
    badge: "Client",
    description:
      "Advanced client interface for IBM content repositories. Provides enhanced folder management, workflow integration, and document retrieval through both desktop and web-based clients.",
    features: [
      {
        title: "Dual Client Architecture",
        description:
          "Desktop workstation client for power users and web-based client for broad enterprise access.",
      },
      {
        title: "Enhanced Folder Management",
        description:
          "Advanced folder operations, document organization, and metadata management beyond standard IBM interfaces.",
      },
      {
        title: "Workflow Integration",
        description:
          "Native integration with IBM Folder and Workflow Application for streamlined document processing.",
      },
      {
        title: "Enterprise Search",
        description:
          "Fast, flexible search across content repositories with compound query support.",
      },
    ],
    connectors: [
      "IBM Content Manager",
      "ImagePlus",
      "IBM Workflow",
      "Windows Desktop",
      "Web Browser",
    ],
    workflow: [
      { icon: "search", label: "Search" },
      { icon: "folder", label: "Browse" },
      { icon: "eye", label: "View" },
      { icon: "edit", label: "Edit" },
      { icon: "check", label: "Complete" },
    ],
    flagship: false,
    category: "utility" as const,
  },
  {
    id: "asimport",
    name: "ASImport",
    shortName: "ASImport",
    tagline: "High-speed content ingestion for IBM Content Manager.",
    badge: "Utility",
    description:
      "High-performance content import tool for IBM Content Manager. Ingests documents and metadata from any source with platform-independent operation across Windows and AIX environments — non-intrusive to day-to-day operations.",
    features: [
      {
        title: "Platform Independent",
        description:
          "Runs on Windows and AIX with identical functionality. No platform lock-in.",
      },
      {
        title: "Non-Intrusive Operation",
        description:
          "Import operations run alongside day-to-day system activity without performance impact.",
      },
      {
        title: "Flexible Source Support",
        description:
          "Import images and data from virtually any source format or system.",
      },
      {
        title: "Metadata Preservation",
        description:
          "Full metadata mapping and transformation during import to ensure data integrity.",
      },
    ],
    connectors: [
      "IBM Content Manager",
      "File Systems",
      "Image Sources",
      "Data Feeds",
      "Windows",
      "AIX",
    ],
    workflow: [
      { icon: "folder", label: "Source" },
      { icon: "settings", label: "Map" },
      { icon: "rocket", label: "Import" },
      { icon: "check", label: "Verify" },
    ],
    flagship: false,
    category: "utility" as const,
  },
  {
    id: "ip2cm",
    name: "IP2CM",
    shortName: "IP2CM",
    tagline: "ImagePlus to Content Manager at scale.",
    badge: "Migration",
    description:
      "Purpose-built migration utility for moving IBM ImagePlus content to Content Manager. Processes approximately one million documents per hour through a structured three-phase approach: assessment, execution, and validation.",
    features: [
      {
        title: "Million-Per-Hour Throughput",
        description:
          "Engineered for speed — migrates approximately one million documents per hour at sustained rates.",
      },
      {
        title: "Three-Phase Process",
        description:
          "Pre-migration assessment, controlled execution, and post-migration validation ensure zero data loss.",
      },
      {
        title: "Full Fidelity",
        description:
          "Preserves all metadata, security settings, and document relationships during migration.",
      },
      {
        title: "Minimal Downtime",
        description:
          "Phased approach minimizes system downtime and operational disruption.",
      },
    ],
    connectors: [
      "IBM ImagePlus",
      "IBM Content Manager",
      "ImagePlus API",
      "CM8 API",
    ],
    workflow: [
      { icon: "clipboard", label: "Assess" },
      { icon: "ruler", label: "Plan" },
      { icon: "rocket", label: "Migrate" },
      { icon: "check", label: "Validate" },
    ],
    flagship: false,
    category: "utility" as const,
  },
  {
    id: "mvs-connect",
    name: "MVS Connect",
    shortName: "MVS Connect",
    tagline: "Mainframe-to-capture integration at speed.",
    badge: "Integration",
    description:
      "High-speed integration layer connecting IBM ImagePlus/390 with enterprise capture platforms. Supports both real-time and batch document storage workflows for mainframe-centric environments.",
    features: [
      {
        title: "Real-Time & Batch",
        description:
          "Supports both real-time document storage and scheduled batch processing workflows.",
      },
      {
        title: "High-Speed Interface",
        description:
          "Optimized for throughput in high-volume mainframe document processing environments.",
      },
      {
        title: "Capture Integration",
        description:
          "Direct integration with Kofax Ascent Capture and other enterprise capture platforms.",
      },
      {
        title: "Mainframe Native",
        description:
          "Built for IBM mainframe environments with native MVS connectivity.",
      },
    ],
    connectors: [
      "IBM ImagePlus/390",
      "Kofax Capture",
      "MVS",
      "Mainframe I/O",
    ],
    workflow: [
      { icon: "eye", label: "Capture" },
      { icon: "plug", label: "Connect" },
      { icon: "rocket", label: "Store" },
      { icon: "check", label: "Confirm" },
    ],
    flagship: false,
    category: "utility" as const,
  },
];

export const aiCapabilities = [
  {
    title: "Zero-Shot Classification",
    description: "No templates needed. AI recognizes documents on sight.",
    icon: "brain",
  },
  {
    title: "SecureCapture Gateway",
    description:
      "FedRAMP-aligned. NIST 800-53, CJIS, IRS Pub 1075 built-in.",
    icon: "shield",
  },
  {
    title: "Intelligent Migration",
    description:
      "ASM 2.0: AI auto-mapping + predictive anomaly detection.",
    icon: "bar-chart",
  },
  {
    title: "Compliance-as-Code",
    description: "Auto-generate security docs from deployment configs.",
    icon: "settings",
  },
];

export const verticals = [
  {
    name: "Government",
    subtitle: "Federal & State",
    description:
      "Document processing, records management, and compliance solutions for agencies handling millions of citizen documents. NIST 800-53, CJIS, IRS Pub 1075 compliance.",
    icon: "landmark",
  },
  {
    name: "Financial Services",
    subtitle: "Banking & Credit Unions",
    description:
      "Content management and automation for banks, credit unions, and financial institutions with strict regulatory and statutory compliance requirements.",
    icon: "building",
  },
  {
    name: "Insurance",
    subtitle: "P&C, Life & Auto",
    description:
      "Claims processing, policy management, and adjudication workflows for property & casualty, life, and auto insurance carriers. Decades of industry experience.",
    icon: "shield",
  },
  {
    name: "Health & Human Services",
    subtitle: "Government & Compliance",
    description:
      "Family investment, social services, and child support programs. Over 15 years of experience with human services agencies processing complex case documentation.",
    icon: "heart-pulse",
  },
  {
    name: "Healthcare",
    subtitle: "Payers & Providers",
    description:
      "Claims processing, adjudication workflows, and document management for healthcare payers managing complex member records. HIPAA compliance.",
    icon: "activity",
  },
  {
    name: "Transportation & Logistics",
    subtitle: "Shipping, Trucking & Rail",
    description:
      "Document management and process automation for shipping, trucking, and railroad operations. Streamlined handling of manifests, compliance records, and operational documents.",
    icon: "truck",
  },
  {
    name: "Manufacturing & Telecom",
    subtitle: "Industrial Operations",
    description:
      "Document management and process automation for manufacturing and telecommunications organizations managing high-volume operational records.",
    icon: "factory",
  },
];

export const stats = [
  { value: "40+", label: "Years in Business" },
  { value: "8", label: "Service Disciplines" },
  { value: "9", label: "Software Products" },
  { value: "5", label: "Industry Verticals" },
];

export const methodology = {
  title: "Our Project Approach",
  description:
    "SYSCOM follows a disciplined project management methodology rooted in PMI's PMBOK framework. Our PMP-certified project managers apply a structured lifecycle approach — from discovery through production support — with built-in quality assurance and change management at every stage.",
  phases: [
    "Project Initiation & Discovery",
    "Requirements Analysis & Definition",
    "System Architecture & Design",
    "Iterative Development & Unit Testing",
    "Integration Testing & QA",
    "User Acceptance Testing",
    "Deployment & Production Cutover",
    "Knowledge Transfer & Training",
    "Post-Deployment Support & Optimization",
  ],
  highlights: [
    "PMP-certified Project Managers on every engagement",
    "PMBOK-based methodology with Earned Value Management",
    "Modified Agile approach — weekly goals, daily standups, continuous delivery",
    "Formal QA and Change Management processes",
    "Comprehensive documentation and knowledge transfer",
  ],
};

export const migrationStrategies = [
  {
    name: "Gradual Migration",
    description:
      "Move content in stages while both old and new systems run in parallel. Minimizes risk and allows validation at each step.",
  },
  {
    name: "Overnight Switchover",
    description:
      "Full cutover in a single planned maintenance window. Best for smaller repositories or when parallel operation isn't feasible.",
  },
  {
    name: "Federated Coexistence",
    description:
      "Run both systems simultaneously with a federation layer providing unified access. Migrate at your own pace with zero user disruption.",
  },
];

export const directions = {
  landmarks: "Near the World Trade Center, National Aquarium, and Camden Yards in Baltimore's Inner Harbor.",
  fromI95: "Take I-95 to I-395 North (Downtown Baltimore). Follow signs to Pratt Street. Turn right on Pratt Street, continue to Gay Street. Inner Harbor Center is on the left.",
  fromI83: "Take I-83 South to Pratt Street. Turn left on Pratt Street, continue east to Gay Street. Inner Harbor Center is on the right.",
  fromBWI: "Take I-295 North to I-95 North to I-395 North (Downtown Baltimore). Follow signs to Pratt Street, continue to Gay Street.",
};

export const careerInfo = {
  retentionStat: "70%+ employee tenure exceeding 5 years",
  portalUrl: "https://syscom.catsone.com/careers/95588-General/",
  skillsInDemand: [
    "Java",
    ".NET",
    "SQL Server",
    "Oracle",
    "Workday",
    "Hadoop",
    "Azure",
    "AWS",
    "EPIC",
  ],
  roleCategories: [
    "Project Managers",
    "Business Analysts",
    "Software Architects",
    "Application Developers",
    "Database Administrators",
    "Cybersecurity Engineers",
    "Technical Writers",
    "QA & Test Engineers",
    "IT Support Specialists",
  ],
};
