/** The Contact button next to them (see contactCta) replaces a Contact link here. */
export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Studio', href: '/about' },
] as const

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Websites', href: '/services#websites' },
      { label: 'Web apps', href: '/services#web-apps' },
      { label: 'Mobile apps', href: '/services#mobile-apps' },
      { label: 'Brand and motion', href: '/services#brand-and-motion' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal notice', href: '/legal-notice' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
] as const
