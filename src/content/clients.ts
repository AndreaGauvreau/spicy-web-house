export type Client = {
  name: string
  /** Square logo in /public/logos. */
  logo: string
  /** Last valuation reported in the press (a priced round), shown in the card on hover. */
  valuation: string
  activity: string
}

/**
 * Shown under "Trusted by leading companies", with a card on hover.
 * Figures updated on 2026-11-18 from press coverage of priced funding rounds:
 * Framer, Series D, August 2025 (2 billion). Whop, Series D, October 2026 (5.1 billion).
 * Qonto (2022 round) and ClickUp (2021 round) are unchanged: no newer priced round exists.
 */
export const clients: Client[] = [
  { name: 'Framer', logo: '/logos/framer.png', valuation: '2 Billion Dollar', activity: 'Coolest website builder' },
  { name: 'Whop', logo: '/logos/whop.png', valuation: '5.1 Billion Dollar', activity: 'Social commerce platform' },
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
