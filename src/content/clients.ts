export type Client = {
  name: string
  /** Square logo in /public/logos. */
  logo: string
  valuation: string
  activity: string
}

/** Shown under "Trusted by leading companies", with a card on hover. */
export const clients: Client[] = [
  { name: 'Framer', logo: '/logos/framer.png', valuation: '+150 Million Dollar', activity: 'Coolest website builder' },
  { name: 'Whop', logo: '/logos/whop.png', valuation: '300 Million Dollar', activity: 'Social commerce platform' },
  { name: 'Qonto', logo: '/logos/qonto.png', valuation: '5 Billion Dollar', activity: 'Neo-bank' },
  { name: 'ClickUp', logo: '/logos/clickup.png', valuation: '4 Billion Dollar', activity: 'Productivity Tool' },
  { name: 'Orizons', logo: '/logos/orizons.png', valuation: 'Seed', activity: 'Property Management' },
  { name: 'Blackbox AI', logo: '/logos/blackbox-ai.png', valuation: '1 Billion Dollar', activity: 'AI agent' },
  {
    name: 'The Mobile First Company',
    logo: '/logos/mobile-first.png',
    valuation: '3.5 Million Dollar',
    activity: 'Mobile app',
  },
  { name: 'Graphite', logo: '/logos/graphite.png', valuation: 'Seed', activity: 'AI copilot' },
]
