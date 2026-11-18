export type Project = {
  name: string
  tagline: string
  industry: string
  services: string
  /** Live site, without the protocol. */
  domain: string
}

/** The six projects shown on the home page and on /work. Each card links to the live site. */
export const projects: Project[] = [
  {
    name: 'Blackbox AI',
    tagline: 'An AI coding agent that helps builders ship faster.',
    industry: 'AI and developer tools',
    services: 'Website',
    domain: 'blackbox.ai',
  },
  {
    name: 'Orizons',
    tagline: 'Smart building intelligence for asset managers and field teams.',
    industry: 'Proptech',
    services: 'Website',
    domain: 'orizons.io',
  },
  {
    name: 'Oqood',
    tagline: 'An AI legal assistant for bilingual contracts and documents across MENA.',
    industry: 'Legal tech',
    services: 'Website',
    domain: 'oqood.ai',
  },
  {
    name: 'Alexandrie',
    tagline: 'A data-driven growth partner for ambitious e-commerce brands.',
    industry: 'E-commerce and growth',
    services: 'Website',
    domain: 'alexandrie.io',
  },
  {
    name: 'Everything To Gain',
    tagline: 'Revenue-boosting automations that save time and scale growth.',
    industry: 'Automation',
    services: 'Website',
    domain: 'everythingtogain.com',
  },
  {
    name: 'Trust',
    tagline: 'From content to relationship, from relationship to trust, from trust to revenue.',
    industry: 'Content and growth',
    services: 'Website',
    domain: 'buildtrust.studio',
  },
]

export const workPage = {
  eyebrow: 'Work',
  headline: 'Selected work.',
  sub: "A few of the companies we've designed and built for, from AI tools to smart buildings.",
  cta: {
    headline: 'Your project could be next.',
    body: "Tell us what you're building and we'll show you how we'd approach it.",
  },
}
