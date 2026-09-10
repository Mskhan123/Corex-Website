import { ServiceItem, ProjectItem, ReviewItem, TeamMember, PrincipleItem, WorkingModel, ProductItem, InstallStep } from '../types';

export const COMPANY_DETAILS = {
  name: 'CoreX IT Solutions',
  shortName: 'CoreX',
  tagline: 'We engineer digital momentum.',
  slogan: 'YOUR IDEAS. OUR TECHNOLOGY.',
  logo: '/logo.png',
  subtagline: 'Strategy, design, AI and software engineering — united to turn ambitious ideas into digital products people choose to use.',
  foundedYear: '2020',
  headquarters: 'Dammam–Khobar, Eastern Province, Saudi Arabia',
  workingRadius: 'Working with ambitious teams worldwide',
  email: 'info@corexitsolutions.com',
  primaryMobile: '+966 56 329 8385',
  whatsappRaw: '966563298385',
  phoneDirect: '056 329 8385',
  projectLines: ['+966 54 158 6909', '+966 58 196 8485'],
  rating: 5.0,
  metrics: {
    inMarketSince: '2020',
    projectsDelivered: '150+',
    supportCoverage: '24/7',
    satisfactionRate: '92%',
    leadResponseSpeed: '86%',
    tasksAutomatedRate: '74%',
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai',
    index: '01',
    title: 'AI Agents for Business Automation',
    label: 'BUSINESS AUTOMATION',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Bot',
    summary: 'We build intelligent agents that automate repeatable business work—from answering customers and qualifying leads to processing documents and internal coordination.',
    description: 'From customer support and lead qualification to documents, reporting, approvals and internal knowledge, we create dependable AI agents that reduce repetitive work and keep your operation moving around the clock.',
    deliverables: [
      'Customer support autonomous agents',
      'Sales and lead qualification agents',
      'Document and multi-modal data processing',
      'Reporting and workflow automation pipelines',
      'Internal knowledge assistants & RAG systems'
    ],
    techStack: ['OpenAI / Gemini', 'LangChain', 'Python', 'FastAPI', 'Vector DBs', 'Node.js'],
    featuredProject: {
      title: 'AI Operations Command',
      type: 'Agentic operations platform',
      impact: '24/7 automated support'
    }
  },
  {
    id: 'web',
    index: '02',
    title: 'Website Building & Digital Platforms',
    label: 'WEB DESIGN & DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Globe',
    summary: 'Fast, accessible digital experiences designed to earn trust and convert demand into real commercial momentum.',
    description: 'We design and build focused company websites, e-commerce experiences and advanced web platforms—combining brand clarity, conversion-led UX, resilient development and a practical launch path.',
    deliverables: [
      'Business and corporate web platforms',
      'High-velocity e-commerce storefronts',
      'Conversion-optimized landing funnels',
      'Custom SaaS web portals and dashboards',
      'Cloud hosting, Core Web Vitals & SLA support'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'GraphQL'],
    featuredProject: {
      title: 'Commerce Velocity',
      type: 'Conversion-led storefront',
      impact: '3.8× growth impact'
    }
  },
  {
    id: 'mobile',
    index: '03',
    title: 'Mobile Products (iOS & Android)',
    label: 'MOBILE ENGINEERING',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Smartphone',
    summary: 'Useful mobile experiences with focused interaction design, resilient architecture and smooth app store delivery.',
    description: 'We shape the right mobile journey, build a maintainable product foundation and guide the application through testing, release and continuous iteration across real consumer and field workflows.',
    deliverables: [
      'Native iOS & Android development',
      'High-performance cross-platform Flutter/React Native',
      'Mobile product UX & offline-first data sync',
      'App Store & Google Play compliance & release',
      'Real-time push notifications & analytics'
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'REST/WebSockets'],
    featuredProject: {
      title: 'FieldFlow Mobile',
      type: 'Cross-platform field operations',
      impact: 'Real-time coordination'
    }
  },
  {
    id: 'uiux',
    index: '04',
    title: 'UI/UX Engineering & Design Systems',
    label: 'PRODUCT EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Layout',
    summary: 'Clarity before decoration. We translate complex workflows into precise interfaces that feel intuitive from the first interaction.',
    description: 'Research, product thinking and interface engineering work together so the final experience is useful, consistent and ready for development—not just superficial mockups.',
    deliverables: [
      'User journey mapping & field research',
      'Product experience strategy & wireframing',
      'High-fidelity interactive prototypes',
      'Comprehensive design system & token architecture',
      'Accessibility (WCAG AA) & micro-interaction design'
    ],
    techStack: ['Figma', 'Design Tokens', 'Storybook', 'Framer Motion', 'Tailwind', 'Zeroheight'],
    featuredProject: {
      title: 'Finance Design System',
      type: 'Scalable interface foundation',
      impact: 'Unified product experience'
    }
  },
  {
    id: 'enterprise',
    index: '05',
    title: 'Enterprise Software & Systems',
    label: 'ENTERPRISE SYSTEMS',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Server',
    summary: 'Connected platforms that remove operational friction, make information visible and give growing organizations a stable digital core.',
    description: 'We design secure platforms around your teams, systems and business rules, bringing fragmented information and workflows into one dependable operation.',
    deliverables: [
      'Distributed solution architecture & microservices',
      'Internal operations platforms & ERP integration',
      'Enterprise API ecosystems & data bus design',
      'Cloud infrastructure & hybrid migrations',
      'Role-Based Access Control (RBAC) & audit compliance'
    ],
    techStack: ['Node.js', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'Kafka'],
    featuredProject: {
      title: 'Property Nexus',
      type: 'Enterprise intelligence hub',
      impact: '360° pipeline visibility'
    }
  },
  {
    id: 'growth',
    index: '06',
    title: 'Digital Growth & Performance Systems',
    label: 'GROWTH SYSTEMS',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    iconName: 'TrendingUp',
    summary: 'Positioning, content and performance systems designed to turn attention into qualified action and compound market momentum.',
    description: 'We connect brand, content, campaigns and measurement into one practical growth system—so learning compounds and every channel gets smarter over time.',
    deliverables: [
      'Market positioning & competitive messaging',
      'Content operations & authority architecture',
      'Full-funnel campaign strategy & tracking',
      'Conversion Rate Optimization (CRO) experiments',
      'Executive performance analytics & attribution'
    ],
    techStack: ['Google Analytics 4', 'Mixpanel', 'PostHog', 'A/B Testing Tools', 'SEO Systems'],
    featuredProject: {
      title: 'Market Momentum System',
      type: 'Brand and campaign engine',
      impact: 'Compounding customer acquisition'
    }
  },
  {
    id: 'cloud',
    index: '07',
    title: 'Cloud Architecture & DevOps',
    label: 'CLOUD ENGINEERING',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Cloud',
    summary: 'Resilient cloud foundations and automated delivery pipelines that keep your software fast, available and ready to scale.',
    description: 'We design cloud architecture, deployment pipelines, monitoring and disaster recovery around the needs of your product—giving teams a safer, faster path from code to production.',
    deliverables: [
      'Cloud architecture design & multi-region migration',
      'Automated CI/CD pipelines & zero-downtime deploy',
      'Infrastructure as Code (Terraform / CloudFormation)',
      'Real-time monitoring, APM & alerting systems',
      'Automated backup, recovery & failover protocol'
    ],
    techStack: ['AWS', 'Google Cloud', 'Terraform', 'GitHub Actions', 'Datadog', 'Prometheus'],
    featuredProject: {
      title: 'Cloud Delivery Platform',
      type: 'Automated deployment foundation',
      impact: 'Safer, faster releases'
    }
  },
  {
    id: 'security',
    index: '08',
    title: 'Cybersecurity & Compliance',
    label: 'SECURE SOFTWARE',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    iconName: 'ShieldCheck',
    summary: 'Practical security across applications, infrastructure, identity and delivery—not an afterthought added before launch.',
    description: 'We assess risk, strengthen system architecture and implement security controls that protect customer data, business operations and the trust behind your product.',
    deliverables: [
      'Application security code & architectural reviews',
      'Modern identity & zero-trust access controls',
      'Penetration testing & vulnerability assessment',
      'Infrastructure security hardening & secrets vaulting',
      'Remediation planning & regulatory compliance'
    ],
    techStack: ['OAuth 2.0 / OIDC', 'WAF', 'HashiCorp Vault', 'SonarQube', 'OWASP Standards'],
    featuredProject: {
      title: 'Application Security Review',
      type: 'Product risk assessment',
      impact: 'Clear remediation path'
    }
  },
  {
    id: 'data',
    index: '09',
    title: 'Data Engineering & Analytics',
    label: 'DATA SYSTEMS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Database',
    summary: 'Reliable data pipelines and clear analytics that give decision-makers one accurate, timely view of business performance.',
    description: 'We connect fragmented sources, improve data quality and build decision-ready dashboards that turn operational information into timely, understandable action.',
    deliverables: [
      'Modern data warehouse architecture',
      'Automated ETL / ELT batch and stream pipelines',
      'Executive Business Intelligence dashboards',
      'Data governance, cataloging and quality scoring',
      'Predictive modeling & machine learning integration'
    ],
    techStack: ['PostgreSQL', 'Snowflake / BigQuery', 'dbt', 'Apache Airflow', 'Python', 'PowerBI'],
    featuredProject: {
      title: 'Executive Insight Hub',
      type: 'Connected business dashboards',
      impact: 'One trusted executive view'
    }
  },
  {
    id: 'quality',
    index: '10',
    title: 'Quality Assurance & Testing',
    label: 'SOFTWARE QUALITY',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    iconName: 'CheckCircle2',
    summary: 'Systematic testing that protects the user experience, release schedule and operational reputation of your software.',
    description: 'Our quality process combines thoughtful manual testing with reliable automation across functionality, devices, integrations and peak-load performance.',
    deliverables: [
      'Holistic test strategy & coverage mapping',
      'Automated end-to-end regression test suites',
      'Load, stress and peak performance benchmarking',
      'Cross-device & cross-browser quality assurance',
      'Pre-launch release validation & sign-off'
    ],
    techStack: ['Playwright', 'Cypress', 'Jest', 'k6', 'Appium', 'Postman'],
    featuredProject: {
      title: 'Release Confidence Suite',
      type: 'Automated regression coverage',
      impact: 'Safer, faster releases'
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-operations',
    index: '01',
    title: 'AI Operations Command',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    subtitle: 'Agentic operations platform',
    summary: 'Autonomous AI agents handling multi-tier customer support, dynamic ticket escalation, and cross-department knowledge synthesis 24/7 without manual intervention.',
    metrics: [
      { value: '24/7', label: 'Continuous Automated Operation' },
      { value: '88%', label: 'First-Contact Resolution' },
      { value: '< 15s', label: 'Average Response Latency' }
    ],
    deliverables: ['Custom LLM fine-tuning', 'Knowledge base vector embeddings', 'CRM bi-directional sync', 'Escalation supervisor routing'],
    technologies: ['OpenAI / Gemini', 'LangChain', 'Python', 'FastAPI', 'Redis'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'commerce-velocity',
    index: '02',
    title: 'Commerce Velocity',
    category: 'web',
    categoryLabel: 'Web Systems',
    subtitle: 'Conversion-led digital storefront',
    summary: 'A sub-second loading headless e-commerce ecosystem integrating live inventory synchronization, dynamic product bundling, and localized MENA payment gateways.',
    metrics: [
      { value: '3.8×', label: 'Growth in Direct Conversions' },
      { value: '99/100', label: 'Google Core Web Vitals Score' },
      { value: '-42%', label: 'Checkout Cart Abandonment' }
    ],
    deliverables: ['Headless Next.js architecture', 'Micro-animations & checkout flow', 'Mada & Apple Pay checkout integration', 'Real-time ERP warehouse sync'],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fieldflow-mobile',
    index: '03',
    title: 'FieldFlow Mobile',
    category: 'mobile',
    categoryLabel: 'Mobile Products',
    subtitle: 'Cross-platform field operations application',
    summary: 'Offline-first field operations companion enabling technicians across logistics and construction to report status, capture photo proofs, and sync dispatch orders smoothly.',
    metrics: [
      { value: '1-Tap', label: 'Frictionless Status Logging' },
      { value: '100%', label: 'Offline Usability with Local Sync' },
      { value: '35%', label: 'Field Efficiency Gain' }
    ],
    deliverables: ['Cross-platform mobile client', 'Biometric login & GPS geofencing', 'Background offline sync queue', 'Camera proof compression'],
    technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'property-nexus',
    index: '04',
    title: 'Property Nexus',
    category: 'enterprise',
    categoryLabel: 'Enterprise Systems',
    subtitle: 'Enterprise real estate intelligence hub',
    summary: 'A centralized multi-tenant CRM and sales command center providing complete 360° visibility across developer project pipelines, broker commissions, and client contracts.',
    metrics: [
      { value: '360°', label: 'Live Pipeline Visibility' },
      { value: '15,000+', label: 'Active Unit Inventory Managed' },
      { value: '62%', label: 'Reduction in Contract Cycle Time' }
    ],
    deliverables: ['Custom enterprise solution design', 'Role-based authorization hierarchy', 'Interactive property floorplan viewer', 'Automated PDF contract generation'],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'document-hub',
    index: '05',
    title: 'Document Intelligence Hub',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    subtitle: 'Automated document processing engine',
    summary: 'Intelligent multi-lingual OCR and classification pipeline parsing commercial invoices, customs manifests, and contracts into structured databases with high precision.',
    metrics: [
      { value: '68%', label: 'Faster Processing Turnaround' },
      { value: '99.4%', label: 'Data Extraction Accuracy' },
      { value: '120k+', label: 'Monthly Documents Parsed' }
    ],
    deliverables: ['Vision OCR model fine-tuning', 'Automated anomaly detection', 'Human-in-the-loop review workbench', 'Audit log export'],
    technologies: ['Python', 'Tesseract/Vision AI', 'FastAPI', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'market-momentum',
    index: '06',
    title: 'Market Momentum System',
    category: 'growth',
    categoryLabel: 'Digital Growth',
    subtitle: 'Brand and digital acquisition engine',
    summary: 'Full-funnel digital positioning framework combining high-converting landing pages, interactive product calculators, and attribution analytics that continuously optimize ad spend.',
    metrics: [
      { value: '2.9×', label: 'Qualified Inbound Leads' },
      { value: '-38%', label: 'Customer Acquisition Cost' },
      { value: '4.5×', label: 'Organic Search Traffic Growth' }
    ],
    deliverables: ['Performance brand design', 'High-speed landing pages', 'Multi-touch attribution setup', 'Conversion rate optimization tests'],
    technologies: ['Next.js', 'PostHog', 'Tailwind CSS', 'Google Analytics 4'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    quote: "The automation removed hours of repetitive work every week and gave our team far better visibility across our client operations.",
    authorRole: "Operations Director",
    companyType: "US Services Company",
    serviceId: "ai",
    rating: 5
  },
  {
    quote: "CoreX made the AI practical, understandable and safe for our people to use. A thoughtful team that focused on business results.",
    authorRole: "Technology Lead",
    companyType: "Regional Enterprise Client",
    serviceId: "ai",
    rating: 5
  },
  {
    quote: "The new platform is faster, clearer and dramatically easier for our customers to use. Core Web Vitals are consistently 99+.",
    authorRole: "Digital Director",
    companyType: "US Retail Group",
    serviceId: "web",
    rating: 5
  },
  {
    quote: "They understood our intricate business rules and turned them into an intuitive product. Strong engineering, transparent progress.",
    authorRole: "Product Owner",
    companyType: "B2B Enterprise Software",
    serviceId: "web",
    rating: 5
  },
  {
    quote: "The mobile app feels focused and natural—our field team needed almost zero training. CoreX handled everything from design to stores.",
    authorRole: "Operations Manager",
    companyType: "Logistics & Field Services",
    serviceId: "mobile",
    rating: 5
  },
  {
    quote: "We finally have one dependable view of our pipeline instead of disconnected spreadsheets. CoreX navigated complex demands with ease.",
    authorRole: "Commercial Operations VP",
    companyType: "Property & Real Estate Group",
    serviceId: "enterprise",
    rating: 5
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sulaiman',
    name: 'Engr Muhammad Sulaiman',
    role: 'Senior Programmer',
    track: '01 / ARCHITECTURE & CORE SYSTEMS',
    image: 'https://corexitsolutions.online/images/muhammad-sulaiman.jpg',
    bio: 'Builds robust software foundations and turns demanding technical requirements into dependable, production-ready products. Specializes in scalable backend architecture, full-stack systems, and resilient infrastructure.',
    specialties: ['Distributed Systems', 'Full-Stack Engineering', 'API Design', 'Cloud Solutions', 'Performance Tuning'],
    featured: true
  },
  {
    id: 'kazim',
    name: 'Engr Muhammad Kazim',
    role: 'Founder',
    track: '02 / EXECUTIVE LEADERSHIP & STRATEGY',
    image: 'https://corexitsolutions.online/images/muhammad-kazim.jpg',
    bio: 'Connects business direction, product thinking and technological delivery into a clear path from early concept to sustainable market leadership. Guides clients on digital momentum and strategic AI integration.',
    specialties: ['Product Strategy', 'Technology Advisory', 'Enterprise Partnerships', 'Digital Transformation', 'Venture Delivery'],
    featured: true
  },
  {
    id: 'imran',
    name: 'Engr Imran Khan',
    role: 'Senior Programmer',
    track: '03 / SCALABLE APPLICATIONS & CLOUD',
    image: 'https://corexitsolutions.online/images/imran-khan.jpg',
    bio: 'Shapes scalable application systems with a sharp eye for performance, clean architecture, and long-term maintainability. Champions automated pipelines and modern cloud infrastructure.',
    specialties: ['Scalable Systems', 'Cloud & DevOps', 'Application Performance', 'Security Hardening', 'Database Engineering'],
    featured: true
  }
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    index: '01',
    tag: 'CLARITY',
    title: 'Make it obvious.',
    description: 'Good products explain themselves. We eliminate cognitive friction and visual noise until the right user action feels completely natural.'
  },
  {
    index: '02',
    tag: 'OWNERSHIP',
    title: 'Care past launch.',
    description: 'We take direct responsibility for commercial outcomes, reliability, and real user adoption—not merely delivering against a checklist.'
  },
  {
    index: '03',
    tag: 'MOMENTUM',
    title: 'Ship, learn, improve.',
    description: 'Progress compounds when teams work in focused, transparent cycles. Working software in real users\' hands teaches faster than speculation.'
  },
  {
    index: '04',
    tag: 'DIRECT',
    title: 'Senior minds at the table.',
    description: 'You collaborate directly with the engineers and strategists building your product. No account manager telephone games.'
  },
  {
    index: '05',
    tag: 'VISIBLE',
    title: 'Radical transparency.',
    description: 'Live progress dashboards, staging builds, and candid trade-off conversations. You always know what is being built and why.'
  },
  {
    index: '06',
    tag: 'SECURITY',
    title: 'Engineered into the core.',
    description: 'Data protection, zero-trust controls, and resilient recovery protocols built into every layer from day one.'
  }
];

export const WORKING_MODELS: WorkingModel[] = [
  {
    index: '01',
    tag: 'DEFINE & VALIDATE',
    title: 'Strategic Sprint',
    description: 'A sharp 2-to-4 week engagement to clarify architecture, validate technical feasibility, craft interactive prototypes, and create an executable production blueprint.',
    timeline: '2 – 4 Weeks',
    idealFor: 'New ventures, technical de-risking, or platform revamps'
  },
  {
    index: '02',
    tag: 'END-TO-END BUILD',
    title: 'Product Launch',
    description: 'Full-cycle engineering ownership from product architecture and interface design through development, rigorous QA testing, security review, and store/cloud deployment.',
    timeline: '6 – 12 Weeks',
    idealFor: 'Complete MVPs, AI agent workflows, or custom platforms'
  },
  {
    index: '03',
    tag: 'CONTINUOUS COMPOUNDING',
    title: 'Scale Partner',
    description: 'A dedicated cross-functional senior team that ships continuously, strengthens infrastructure, optimizes conversion metrics, and scales with your business roadmap.',
    timeline: 'Ongoing / Dedicated',
    idealFor: 'Growing enterprises needing a world-class dedicated tech wing'
  }
];

export const TECH_BADGES = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'AI & Data' },
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'Three.js / WebGL', category: '3D Graphics' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Node.js / Express', category: 'Backend' },
  { name: 'OpenAI & Gemini', category: 'AI Models' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'Redis', category: 'Caching' },
  { name: 'Docker & K8s', category: 'DevOps' },
  { name: 'AWS & GCP', category: 'Cloud' },
  { name: 'Tailwind CSS', category: 'UI' }
];

export const FAQ_ITEMS = [
  {
    q: 'Where is CoreX IT Solutions based, and how do you work with remote clients?',
    a: 'Our main headquarters is in Dammam–Khobar, Eastern Province, Saudi Arabia. We work seamlessly with clients across Saudi Arabia, the GCC, Europe, and the US using asynchronous daily updates, dedicated Slack/Teams channels, staging environments, and weekly milestone demos.'
  },
  {
    q: 'What types of AI agents do you build for businesses?',
    a: 'We build autonomous, reliable AI agents tailored to specific operational bottlenecks: multi-channel customer service agents, automated sales lead qualification and CRM sync, document intelligence pipelines, internal knowledge bases (RAG), and ERP workflow dispatchers.'
  },
  {
    q: 'How does CoreX ensure high security and data confidentiality?',
    a: 'We sign mutual NDAs before any deep discovery. We implement zero-trust access controls, encryption at rest and in transit, strict private tenant hosting, and compliance with Saudi data sovereignty and international standards.'
  },
  {
    q: 'How quickly can we start a project?',
    a: 'We usually schedule initial discovery calls within 24–48 hours. Strategic Sprints can begin within 5 to 7 business days following alignment on project scope.'
  },
  {
    q: 'How do you structure project pricing and payment?',
    a: 'We offer fixed-scope milestone billing for defined projects (e.g. Sprints and MVP builds) and monthly team engagements for ongoing product partnerships. All terms are clear, with transparent deliverables.'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'social-media-automation',
    name: 'Social Media Automation Engine',
    tagline: 'Autonomous multi-channel social media scheduler, engagement engine & automated marketing suite.',
    version: 'v4.2.0 Cloud',
    releaseDate: 'September 2026',
    category: 'Social Media & Marketing Automation',
    productType: 'web',
    externalUrl: 'https://www.direngineeringsolutionscom.com/',
    highlights: ['Multi-Account Auto Scheduler', 'Automated DM & Comment Responders', 'AI Content & Viral Caption Generator', 'Deep Analytics & Conversion Tracking'],
    features: [
      'Automated multi-platform publishing across Facebook, Instagram, Twitter/X, LinkedIn, TikTok & YouTube',
      'Smart schedule queue with time-zone optimization and peak audience engagement algorithms',
      'Autonomous AI content synthesis, hashtag research, and automated visual captioning',
      'Automated direct message (DM) marketing funnels, customer lead capture, and auto-comment replies',
      'Unified multi-brand dashboard with team collaboration, approval workflows, and link tracking'
    ],
    changelog: [
      'Added direct integration with DIR Engineering Solutions automated marketing backend',
      'Enhanced AI copy generator supporting bilingual English and Arabic viral captions',
      'Unified real-time campaign performance analytics and audience sentiment graphs'
    ],
    status: 'Live Platform'
  },
  {
    id: 'corex-copier',
    name: 'CoreX Copier',
    tagline: 'Ultra-low-latency real-time data synchronizer, automated order/trade mirroring & cross-device copier.',
    version: 'v2.1.0',
    releaseDate: 'September 2026',
    category: 'Data Replication & Mirroring',
    productType: 'apk',
    apkSize: '18.2 MB',
    minAndroid: 'Android 8.0 (Oreo) or higher',
    targetAndroid: 'Android 15 (API 35)',
    packageName: 'com.corex.copier.engine',
    sha256: 'b45f1a98c32d4e870192ea4b78912fc304d5e6a7182903fe56b1029c48ea9210',
    downloadFilename: 'CoreX-Copier-v2.1.0.apk',
    highlights: ['Sub-Millisecond Data Mirroring', 'End-to-End Cryptographic Sockets', 'Multi-Terminal Signal Sync', 'Offline Resilient Queue Buffer'],
    features: [
      'Real-time bidirectional message, trade, and clipboard synchronization across distributed devices',
      'Zero-latency WebSocket cluster connection with automatic reconnection and cache preservation',
      'Cryptographic AES-256 GCM encrypted socket payloads with local private key handshake',
      'Custom mapping rules for automated fields, risk limits, volume multipliers, and channel routing',
      'Persistent Android background daemon with intelligent power management'
    ],
    permissions: ['Foreground Telemetry Service', 'Network Access', 'Storage / Media', 'Notifications'],
    changelog: [
      'Upgraded socket protocol to binary delta compression with sub-millisecond propagation',
      'Added duplicate prevention filter preventing redundant executions during network jitter',
      'Integrated live latency meter and ping diagnostics panel'
    ],
    status: 'Latest Stable'
  },
  {
    id: 'corex-cloner',
    name: 'CoreX Cloner',
    tagline: 'Advanced multi-account sandboxing, application virtualization & independent parallel session manager.',
    version: 'v3.0.4',
    releaseDate: 'September 2026',
    category: 'System Virtualization & Sandboxing',
    productType: 'apk',
    apkSize: '24.6 MB',
    minAndroid: 'Android 8.0 (Oreo) or higher',
    targetAndroid: 'Android 15 (API 35)',
    packageName: 'com.corex.cloner.virtual',
    sha256: '71e890a42c5b3617fd092184e56a7c3b901248ea15dc8290b34e56f1029c4871',
    downloadFilename: 'CoreX-Cloner-v3.0.4.apk',
    highlights: ['Multi-Instance Isolated Virtualization', 'Zero Cross-Account Session Leakage', 'Independent Notification Rings', 'Hardware ID Privacy Masking'],
    features: [
      'Clone multiple isolated instances of WhatsApp, Telegram, business apps, and games on one phone',
      'True sandboxed storage preventing cross-application tracking or token crossover',
      'Custom device identity per cloned profile: virtualized Android ID, IMEI, and network MAC',
      'Separate notification badges, independent ringtones, and custom app icons',
      'Stealth vault mode: disguise cloned apps behind an authentic functioning passcode calculator'
    ],
    permissions: ['Install Packages', 'Storage / File Sandbox', 'Notifications', 'Device Virtualization'],
    changelog: [
      'Full 64-bit Android 15 compatibility with optimized native execution container',
      'Memory footprint reduction enabling smooth execution of 8+ simultaneous active apps',
      'Integrated biometric fingerprint and PIN protection per cloned application'
    ],
    status: 'Latest Stable'
  }
];

export const APK_INSTALL_GUIDE_STEPS: InstallStep[] = [
  {
    step: 1,
    badge: 'DOWNLOAD',
    title: 'Download the Official APK File',
    shortDesc: 'Save the .apk installer directly to your Android device.',
    instruction: 'Tap the "Download APK" button on any product card above, or scan the QR code with your mobile camera. When prompted by your browser (Chrome/Samsung Internet), tap "Download anyway" to save the APK file into your device Downloads folder.',
    tip: 'Make sure your device has at least 100 MB of free storage space before downloading.'
  },
  {
    step: 2,
    badge: 'SECURITY',
    title: 'Enable "Install Unknown Apps"',
    shortDesc: 'Authorize your browser or file manager to install enterprise apps.',
    instruction: 'Android restricts direct installations by default for security. Go to Android Settings → Security & Privacy (or Apps) → Special App Access → Install Unknown Apps. Find the browser you used (e.g., Google Chrome or Files by Google) and toggle "Allow from this source" to ON.',
    tip: 'On Samsung OneUI or Xiaomi MIUI, you can simply tap the downloaded APK notification and toggle "Allow from this source" directly in the pop-up modal.'
  },
  {
    step: 3,
    badge: 'INSTALL',
    title: 'Run the Package Installer',
    shortDesc: 'Open the downloaded .apk file and start installation.',
    instruction: 'Swipe down your Android notification panel and tap the "Download complete" alert, or open your "Files" app → Downloads folder and tap the APK file (e.g. CoreX-FieldOps-Pro-v2.4.1.apk). Press "Install" when the system prompt appears.',
    warning: 'Do not interrupt the installation or turn off the device during the progress bar.'
  },
  {
    step: 4,
    badge: 'PLAY PROTECT',
    title: 'Verify Google Play Protect Prompt',
    shortDesc: 'Approve the in-house enterprise certificate prompt if prompted.',
    instruction: 'If Google Play Protect displays a message stating "Unrecognized app" or "App blocked by Play Protect", tap "More details" and select "Install anyway". CoreX enterprise applications are cryptographically signed with our in-house enterprise keys rather than the public consumer Play Store.',
    tip: 'You can verify the SHA-256 fingerprint displayed on this website against the package signature anytime.'
  },
  {
    step: 5,
    badge: 'ACTIVATE',
    title: 'Grant Permissions & Launch',
    shortDesc: 'Open the app and authenticate with your CoreX enterprise account.',
    instruction: 'Once installation finishes, tap "Open". Allow the requested operational permissions (such as Location for FieldOps or Camera for scanner). Enter your corporate CoreX login credentials or scan your onboarding QR code to begin operating.',
    tip: 'Need deployment assistance? Contact our engineering team directly via WhatsApp at +966 56 329 8385.'
  }
];

export const APK_SECURITY_INFO = {
  signingAuthority: 'CoreX IT Solutions Corporate Enterprise CA',
  encryptionStandard: 'AES-256 GCM at rest / TLS 1.3 in transit',
  compatibility: 'ARM64-v8a, ARMv7, x86_64 Android Devices',
  supportHotline: '+966 56 329 8385',
  supportEmail: 'support@corexitsolutions.com'
};
