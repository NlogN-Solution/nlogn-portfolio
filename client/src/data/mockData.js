export const siteMeta = {
  name: 'NLOGN',
  tagline: 'AI Automation / Software Development',
  email: 'hello@nlogn.dev',
  url: 'https://nlogn.dev',
  description:
    'NLOGN is a build studio for web apps, mobile apps, and custom software — wired to AI automation and lead management.',
  navLabels: ['Software', 'Automation', 'Lead Management'],
};

export const heroContent = {
  headline: 'Software that ships. Systems that',
  headlineEm: 'run themselves',
  copy: 'NLOGN is a build studio for web apps, mobile apps, and custom software — wired to AI automation and lead management, so what you launch keeps working, and keeps filling your pipeline, long after we\'ve handed over the keys.',
  primaryCta: { base: 'Start a build', alt: "Let's go →", href: '#contact' },
  secondaryCta: { base: 'See what we build', alt: 'Right this way ↓', href: '#pipeline' },
  tagline: ['Software Development', 'AI Automation', 'Lead Management'],
  hudLeft: [
    { label: 'BUILD', value: 'WEB / MOBILE' },
    { label: 'STACK', value: 'CUSTOM SOFTWARE' },
    { label: 'STATUS', value: 'SHIPPING' },
  ],
  hudRight: [
    { label: 'AUTOMATE', value: 'AI WORKFLOWS' },
    { label: 'CONVERT', value: 'LEAD SYSTEMS' },
    { label: 'STATUS', value: 'ONLINE' },
  ],
};

export const servicesContent = {
  eyebrow: 'What we build',
  title: 'Three disciplines. One shop.',
  description:
    'We design and build the product, wire up the automation behind it, and manage the leads it brings in — so nothing you launch is ever running on its own.',
  items: [
    {
      id: 'software',
      discipline: 'Discipline 01',
      title: 'Software Development',
      description:
        'Web apps, creative portfolio sites, mobile apps, and custom software — built clean, built fast, and built to be handed off without a manual. If it needs a screen or a server, we build it.',
      chips: ['Web Apps', 'Portfolio Sites', 'Mobile Apps', 'Custom Software'],
      glyph: 'nodes',
    },
    {
      id: 'automation',
      discipline: 'Discipline 02',
      title: 'AI Automation',
      description:
        "The parts of your business that shouldn't need a human anymore — data entry, follow-ups, routing, reporting. We connect the tools you already use and let AI carry the repetitive work.",
      chips: ['Workflow Automation', 'AI Agents', 'Tool Integrations', 'Internal Systems'],
      glyph: 'bridge',
    },
    {
      id: 'leads',
      discipline: 'Discipline 03',
      title: 'Lead Management',
      description:
        'A pipeline is only worth what it converts. We capture, qualify, route, and follow up on every lead automatically, so nobody good goes cold waiting on a reply.',
      chips: ['Lead Capture', 'Qualification', 'CRM Routing', 'Follow-Up Automation'],
      glyph: 'ends',
    },
  ],
};

export const statsContent = {
  eyebrow: 'How we operate',
  title: 'Built like a race team.',
  items: [
    { value: 3, label: 'Core Disciplines', suffix: '' },
    { value: 100, label: 'In-House Build', suffix: '%' },
    { value: 0, label: 'Handoffs Lost', suffix: '' },
    { value: 24, label: 'Systems Keep Running', suffix: '/7' },
  ],
};

export const projectsContent = {
  eyebrow: 'In practice',
  title: 'What this looks like, built.',
  description: 'A few of the shapes this work takes. Click one open.',
  items: [
    {
      id: 'd2c-mobile',
      tag: 'Software Development',
      title: 'D2C Mobile App + Checkout',
      description:
        'A native-feeling mobile app for a direct-to-consumer brand, built from onboarding through checkout — fast enough that cart abandonment stops being a design problem.',
      stack: ['React Native', 'Stripe', 'Push Automation'],
    },
    {
      id: 'inbox-crm',
      tag: 'AI Automation',
      title: 'Inbox-to-CRM Lead Routing',
      description:
        'An AI layer that reads inbound leads, scores intent, and routes them to the right rep in seconds — replacing a shared inbox that used to lose leads overnight.',
      stack: ['AI Agents', 'CRM Integration', 'Slack Alerts'],
    },
    {
      id: 'portfolio-platform',
      tag: 'Software Development',
      title: 'Creative Portfolio Platform',
      description:
        'A motion-led portfolio site for a design studio, built to feel handcrafted on every screen size without turning into a maintenance burden six months later.',
      stack: ['WebGL', 'CMS-Driven', 'Lighthouse 95+'],
    },
  ],
};

export const testimonialsContent = {
  quote:
    "We don't hand off a website. We hand off a system that keeps working after we leave.",
  cite: '— NLOGN',
};

export const contactContent = {
  eyebrow: 'Get in touch',
  title: "Let's build your",
  titleEm: 'next system',
  description:
    "Whether it's a product to ship, a workflow to automate, or a pipeline that keeps dropping leads — tell us where it's stuck. We'll tell you what it looks like running on rails.",
};

export const aboutContent = {
  eyebrow: 'About',
  title: 'A build studio for systems that ship.',
  description:
    'NLOGN designs and ships web apps, mobile products, and custom software — then wires the automation and lead systems that keep them compounding after handoff.',
  body: [
    'We work like a race team: tight feedback loops, in-house builds, and zero abandoned handoffs.',
    'If it needs a screen, a server, or a pipeline that converts — we build it, wire it, and leave it running.',
  ],
};

export const skillsContent = {
  eyebrow: 'Capabilities',
  title: 'What we work with.',
  groups: [
    {
      name: 'Frontend',
      items: ['React', 'React Native', 'Vite', 'Framer Motion', 'Three.js', 'CSS Modules'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Webhooks'],
    },
    {
      name: 'Automation',
      items: ['AI Agents', 'CRM Routing', 'Workflow Automation', 'Integrations'],
    },
  ],
};

export const experienceContent = {
  eyebrow: 'Experience',
  title: 'How engagements typically run.',
  items: [
    {
      role: 'Product Build',
      org: 'Software Development',
      period: 'Discovery → Ship',
      summary:
        'Scoped product builds from architecture through launch — web, mobile, or custom software.',
    },
    {
      role: 'Systems Automation',
      org: 'AI Automation',
      period: 'Integrate → Automate',
      summary:
        'Connect existing tools, remove repetitive work, and leave operators with dashboards — not busywork.',
    },
    {
      role: 'Pipeline Ops',
      org: 'Lead Management',
      period: 'Capture → Convert',
      summary:
        'Lead capture, qualification, routing, and follow-up automation that keeps pipeline warm 24/7.',
    },
  ],
};

export const socialLinks = [
  { platform: 'Email', url: 'mailto:hello@nlogn.dev', label: 'hello@nlogn.dev' },
  { platform: 'GitHub', url: 'https://github.com/nlogn', label: 'GitHub' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/nlogn', label: 'LinkedIn' },
];

export const loaderLines = [
  { text: 'INITIALIZING SYSTEMS', bold: '...' },
  { text: 'CALIBRATING ', bold: 'SENSORS' },
  { text: 'LOADING ', bold: 'NLOGN.STUDIO' },
  { text: 'SYSTEMS ', bold: 'ONLINE' },
];

export const footerContent = {
  mark: 'NLOGN',
  tagline: 'Built at full throttle, not by accident',
  copyright: '© 2026 NLOGN. All systems nominal.',
};

export const sectionLaps = ['#hero', '#pipeline', '#stats', '#work', '#contact'];
