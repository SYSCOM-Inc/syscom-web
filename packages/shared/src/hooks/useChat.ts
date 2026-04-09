import { useState, useCallback, useRef } from 'react';
import type { ChatMessage } from '../types';

const SYSCOM_KNOWLEDGE = `You are the SYSCOM AI Assistant embedded on syscom.com. You represent SYSCOM, Inc., an enterprise content management company based in Baltimore, MD (Inner Harbor Center, 400 East Pratt Street, Suite 600, 21202). Phone: 1-800-7-SYSCOM (1-800-779-7266) / (410) 539-3737. Email: sales@syscom.com. Support: supportcenter@syscom.com.

COMPANY OVERVIEW:
- Founded 1982, 40+ years of enterprise IT solutions
- Specializes in Enterprise Content Management (ECM), Business Process Automation, Enterprise Capture, Content Migration, AI & Intelligent Automation, Custom Application Services, and Staffing & Workforce Augmentation
- Three divisions: Professional Services, Sales & Marketing, Corporate Services
- Long-term client relationships spanning decades, 70%+ employee tenure over 5 years
- Serves government (federal & state), financial services, insurance, health & human services, healthcare, transportation, manufacturing & telecom
- Key partnerships: IBM (decades), Tungsten Automation/Kofax (30+ years)
- PMP-certified project managers, PMBOK methodology

PRODUCTS (10):
1. AnySource Migrator (ASM) - Flagship. 25+ connectors (FileNet P8, Content Manager, ImagePlus, SharePoint, CMIS, Documentum, OLEDB, File Systems). ASM 2.0: AI auto-mapping, predictive anomaly detection, self-service portal.
2. AIS Bridge - Drop-in ImagePlus replacement. Full CICS/IMS/MQ Workflow compatibility. Zero-downtime migration.
3. IBIG 2.0 - AI-powered content discovery. LLM document understanding, semantic search, knowledge graphs. Works with all ASM connectors.
4. SYSCOM Content Services (SCS) - SOA platform for config-driven ECM service deployment. REST/SOAP interfaces. Sarbanes-Oxley support.
5. SYSCOM Content Viewer - HTML5 browser-based viewer for CM8, ImagePlus, CMOD, FileNet. PDF, AFP/MO:DCA, TIFF support. Zero install.
7. AIS+EE - Advanced client interface for IBM content repositories. Desktop and web clients.
8. ASImport - High-speed content import for IBM Content Manager. Platform-independent (Windows/AIX).
9. IP2CM - ImagePlus to Content Manager migration. ~1 million docs/hour.
10. MVS Connect - High-speed mainframe-to-capture integration for IBM ImagePlus/390.

SERVICES: ECM (IBM FileNet, Content Manager, ImagePlus, OnDemand), Enterprise Capture (30+ yr Kofax partnership), BPA (IBM BAW, case management, business rules), Content Migration (gradual, overnight, federated strategies), AI & Intelligent Automation, Custom Application Services, Staffing & Workforce Augmentation.

AI CAPABILITIES: Zero-shot classification, SecureCapture Gateway (FedRAMP-aligned, NIST 800-53, CJIS, IRS Pub 1075), Compliance-as-Code, on-prem models (Llama, Mistral) for air-gapped environments.

LEADERSHIP: Ted Bayer (President/CEO, Founder), Mark Anzmann (EVP), Chris Benedetti (CTO).

Be knowledgeable, professional, and enthusiastic. For pricing, recommend a consultation. Keep responses concise (2-4 sentences for simple questions). Always offer to connect with sales for deeper discussions.`;

const FALLBACK_RESPONSES: Record<string, { keywords: string[]; response: string }> = {
  asm: {
    keywords: ['asm', 'anysource', 'migrator', 'migration', 'migrate'],
    response:
      '**AnySource Migrator (ASM)** is our flagship migration platform with 25+ pre-built connectors for IBM FileNet P8, Content Manager, SharePoint, CMIS, EMC Documentum, and more. ASM 2.0 adds AI-powered auto-mapping that reduces migration planning from weeks to hours, plus predictive anomaly detection and real-time monitoring.',
  },
  bridge: {
    keywords: ['bridge', 'ais bridge', 'imageplus', 'image plus'],
    response:
      '**AIS Bridge** is a complete, fully-supported drop-in replacement for IBM ImagePlus. It preserves full API compatibility with existing CICS, IMS, MQ Workflow, and Windows client integrations while modernizing the platform. SYSCOM is THE go-to organization for ImagePlus — we have decades of deep knowledge.',
  },
  ibig: {
    keywords: ['ibig', 'intelligence gateway', 'content discovery', 'semantic search'],
    response:
      '**IBIG 2.0** uses LLMs to actually understand documents, not just extract text. It performs AI-powered classification, entity extraction, and relationship mapping, then builds a semantic search layer. Query naturally: "Find all contracts expiring this quarter." Works with all 25+ ASM connectors.',
  },
  capture: {
    keywords: ['capture', 'kofax', 'tungsten', 'scanner', 'ocr', 'datacap'],
    response:
      "Our **Enterprise Capture** practice has a 30+ year Tungsten Automation (Kofax) partnership. We specialize in remote/central capture, advanced recognition, and AI-powered zero-shot classification that works without templates — new document types onboarded in hours, not weeks.",
  },
  security: {
    keywords: ['security', 'fedramp', 'nist', 'cjis', 'compliance', 'zero trust', 'secure'],
    response:
      'Our **SecureCapture Gateway** is FedRAMP-aligned with zero-trust architecture, mutual TLS, and compliance packages for NIST 800-53, CJIS, and IRS Pub 1075. We also offer **Compliance-as-Code** — automated security artifact generation from deployment configurations.',
  },
  ai: {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'llm', 'claude'],
    response:
      "AI is integrated across our product line: zero-shot classification in capture, AI auto-mapping in ASM 2.0, semantic search in IBIG 2.0, and Compliance-as-Code. We support cloud and on-premises model deployment (Llama, Mistral) for air-gapped government environments.",
  },
  staffing: {
    keywords: ['staffing', 'staff', 'resources', 'augmentation', 'team'],
    response:
      "Our **Contract Staffing Services** deploy PMs, Architects, BAs, Programmers, Technical Writers, and Testers. Individuals, teams, or entire departments — backed by deep ECM technical knowledge, not generic resources.",
  },
  pricing: {
    keywords: ['pricing', 'price', 'cost', 'how much', 'budget', 'quote'],
    response:
      "Pricing varies by scope. Product licensing depends on repository count and connectors. Projects are scoped during discovery. I'd recommend scheduling a consultation: **sales@syscom.com** or **800-7SYSCOM**.",
  },
  content: {
    keywords: ['content services', 'scs', 'soa', 'ecm platform'],
    response:
      '**SYSCOM Content Services** provides SOA-based rapid ECM service deployment through configuration. REST and SOAP interfaces, pre-built templates, integrates with Office, SharePoint, and LOB systems. Sarbanes-Oxley compliance support. Deploy in days.',
  },
  viewer: {
    keywords: ['viewer', 'content viewer', 'html5 viewer', 'document viewer'],
    response:
      '**SYSCOM Content Viewer** is an HTML5 browser-based viewer for documents stored in CM8, ImagePlus, CMOD, and FileNet. It supports PDF, AFP/MO:DCA, and TIFF formats with zero client installation — a modern replacement for legacy Java applet viewers.',
  },
  ip2cm: {
    keywords: ['ip2cm', 'imageplus to content manager', 'imageplus migration'],
    response:
      '**IP2CM** is our purpose-built migration utility for moving IBM ImagePlus content to Content Manager. It processes approximately one million documents per hour through a three-phase approach: assessment, execution, and validation.',
  },
  company: {
    keywords: ['about', 'company', 'history', 'who', 'syscom', 'baltimore'],
    response:
      "SYSCOM has been delivering enterprise technology solutions since 1982 — over 40 years. Based in Baltimore's Inner Harbor, we serve government, financial services, insurance, healthcare, transportation, and manufacturing clients. Our long-term client relationships — many spanning decades — and 70%+ employee tenure over 5 years speak to the depth of our partnerships.",
  },
  contact: {
    keywords: ['contact', 'reach', 'call', 'email', 'phone', 'address'],
    response:
      "Reach us at **sales@syscom.com** or **1-800-7-SYSCOM** (410-539-3737). For support: **supportcenter@syscom.com**. We're at Inner Harbor Center, 400 East Pratt Street, Suite 600, Baltimore, MD 21202. Business hours: Monday-Friday, 8:00 AM - 5:00 PM ET.",
  },
  government: {
    keywords: ['government', 'federal', 'state', 'agency', 'public sector', 'gov'],
    response:
      'We have deep government experience with compliance frameworks including NIST 800-53, CJIS, IRS Pub 1075, and HIPAA. Our SecureCapture Gateway is purpose-built for government environments, including air-gapped deployments.',
  },
  filenet: {
    keywords: ['filenet', 'content manager', 'ibm', 'p8'],
    response:
      'SYSCOM has decades of expertise with IBM ECM: **FileNet P8**, **Content Manager Enterprise Edition**, **Content Manager for iSeries**, **Content Manager OnDemand**, and **ImagePlus**. Implementation, migration, integration, and ongoing administration.',
  },
};

function getFallbackResponse(query: string): string {
  const lower = query.toLowerCase();
  for (const entry of Object.values(FALLBACK_RESPONSES)) {
    if (entry.keywords.some((kw) => lower.includes(kw))) return entry.response;
  }
  if (lower.includes('hello') || lower.includes('hi ') || lower === 'hi' || lower === 'hey')
    return "Hello! I'm SYSCOM's AI assistant. I can help with our products (ASM, AIS Bridge, IBIG 2.0, Content Services, Content Viewer, and more), services (ECM, capture, migration, BPA, AI, staffing), or security & compliance. What would you like to know?";
  if (lower.includes('what') && (lower.includes('do') || lower.includes('offer')))
    return "SYSCOM provides enterprise content management, intelligent capture, business process automation, and AI-powered solutions. Our product suite includes AnySource Migrator, AIS Bridge, IBIG 2.0, Content Services, Content Viewer, and more. Plus enterprise capture consulting (30+ year Kofax partnership) and staffing & workforce augmentation. What area interests you?";
  return "I can help with **products** (ASM, AIS Bridge, IBIG, Content Services, Viewer, and more), **services** (ECM, capture, migration, BPA, AI, staffing), **security & compliance**, or **company info**. What would you like to explore?";
}

export const QUICK_PROMPTS = [
  'AnySource Migrator',
  'IBIG 2.0',
  'AI capabilities',
  'Security',
  'Enterprise Capture',
];

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Hey! I'm SYSCOM's AI assistant. Ask me anything about our products, services, technical capabilities, or how we can help with your content management challenges.",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const apiHistory = useRef<{ role: string; content: string }[]>([]);

  const sendMessage = useCallback((content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    apiHistory.current.push({ role: 'user', content });

    const respond = (text: string) => {
      apiHistory.current.push({ role: 'assistant', content: text });
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: text,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    };

    // Try live Claude API first, fall back to canned responses
    // The API call will fail without a proxy/key — that's expected.
    // In production, route through your backend: POST /api/chat
    fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSCOM_KNOWLEDGE,
        messages: apiHistory.current.slice(-10),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`API ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const textBlock = data.content?.find((b: { type: string }) => b.type === 'text');
        respond(textBlock?.text || getFallbackResponse(content));
      })
      .catch(() => {
        // Expected in browser without proxy — use fallback
        setTimeout(() => {
          respond(getFallbackResponse(content));
        }, 600 + Math.random() * 600);
      });
  }, []);

  return { messages, isTyping, sendMessage };
}
