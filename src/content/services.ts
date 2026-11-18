export type Service = {
  /** Anchor used by the footer and the home page links. */
  id: string
  label: string
  headline: string
  body: string
  included: string[]
  greatFor?: string
}

export const servicesPage = {
  eyebrow: 'Services',
  headline: 'Everything your product needs on the web.',
  sub: 'Websites, web apps and mobile apps, designed and built by one team. Start with one, or let us build the whole house.',
}

export const services: Service[] = [
  {
    id: 'websites',
    label: 'Websites',
    headline: 'Marketing websites that sell.',
    body: "Your website is often the first conversation you have with a customer. We make it count: a site that's clear, memorable and built to convert, and easy for your team to run.",
    included: [
      'Positioning, messaging and copywriting',
      'UX, wireframes and UI design',
      'Framer, Webflow or custom code development',
      'CMS, blog and content setup',
      'SEO, analytics and performance',
      'Motion, interactions and WebGL moments',
      'Migration from your current platform',
    ],
    greatFor: 'Launches, rebrands, fundraising, new product lines.',
  },
  {
    id: 'web-apps',
    label: 'Web apps',
    headline: 'Products people enjoy using.',
    body: 'From a first MVP to a mature SaaS, we design interfaces that make complex things feel simple, and build them on a stack your team can grow with.',
    included: [
      'Product discovery and UX',
      'UI design and design systems',
      'Front-end and full-stack development with React, Next.js and TypeScript',
      'Dashboards, client portals and internal tools',
      'Integrations with your APIs and tools',
      'Clickable prototypes and MVPs',
    ],
    greatFor: 'SaaS products, AI products, internal tools, customer portals.',
  },
  {
    id: 'mobile-apps',
    label: 'Mobile apps',
    headline: 'Apps that earn a spot on the home screen.',
    body: 'We design and build iOS and Android apps that feel native, load fast and keep people coming back. We take care of the whole path, from prototype to store release.',
    included: [
      'App UX and UI for iOS and Android',
      'Interactive prototypes',
      'Development, QA and beta testing',
      'App Store and Google Play submission',
      'Store listings, screenshots and preview videos',
      'Updates and improvements after launch',
    ],
    greatFor: 'Consumer apps, companion apps for your SaaS, MVPs.',
  },
  {
    id: 'brand-and-motion',
    label: 'Brand and motion',
    headline: 'One brand, every screen.',
    body: 'A product feels premium when every detail agrees. We create the identity, the system and the motion that tie your website and your app together.',
    included: [
      'Brand identity and guidelines',
      'Design systems and component libraries',
      'Motion design and micro-interactions',
      '3D and WebGL experiences',
      'Product visuals, illustration and social assets',
    ],
  },
]

export const audiences = {
  headline: 'Who we build for',
  intro: 'Teams that move fast and care about quality.',
  items: [
    'AI and developer tools',
    'SaaS and B2B software',
    'Fintech',
    'Proptech and smart buildings',
    'E-commerce and growth',
    'Legal tech',
  ],
}

export const oneHouse = {
  headline: 'Start with a website. Come back for the app.',
  body: 'Same team, same design language, no starting over. Everything we build is designed to work together, so your next project starts where the last one ended.',
}

export const servicesCta = {
  headline: 'Not sure where to start?',
  body: "Tell us your goal. We'll tell you what to build first.",
}
