/**
 * Everything the site says about the business lives here.
 * Any value set to TODO is shown as "[to be completed]" on the legal pages
 * and listed by `npm run check:placeholders`.
 */
export const TODO = '__TODO__'

export const isTodo = (value: string | undefined): boolean =>
  value === undefined || value.includes(TODO)

/** Public address of the site. NEXT_PUBLIC_SITE_URL can override it (previews, tests). */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.spicy-web-house.com'
export const siteHost = new URL(siteUrl).host

export const site = {
  name: 'Spicy Web House',
  tagline: 'Websites and apps that do more than look good.',
  description:
    'Spicy Web House is a design and engineering studio. We design, build and ship websites, web apps and mobile apps for ambitious startups and tech companies.',
  trusted: 'Trusted by leading companies',
}

/**
 * The "Book a free intro call" buttons.
 * With a real booking link (https://...), they open it in a new tab.
 * Without one, they lead to the contact page.
 */
export const booking = {
  label: 'Book a free intro call',
  href: '/contact',
}

export const showreel = {
  /**
   * Showreel video, streamed, always muted, enlarged in place with the icon on the card.
   * Set it to a neutral URL (for example /media/showreel.mp4 or a CDN link) once a version
   * without third-party branding is available. While it is undefined, the poster is shown alone.
   */
  src: undefined as string | undefined,
  /** Frame shown while the video loads, or alone while there is no video. */
  poster: '/media/poster.jpg',
  /** Flagged by `npm run check:placeholders` until the video is in place. */
  pending: true,
}

export const company = {
  legalName: 'Spicy Web House LLC',
  tradeName: 'Spicy Web House',
  entity: 'Limited liability company (LLC)',
  /** State of formation. */
  state: 'Wyoming',
  /** Address shown on the site. Confirmed on 2026-11-18 as identical to the D-U-N-S record. */
  address: '604 Carson Dr, NT-00181, Bear, DE 19701, United States',
  addressParts: {
    street: '604 Carson Dr, NT-00181',
    city: 'Bear',
    region: 'DE',
    postalCode: '19701',
    countryCode: 'US',
  },
  /** What the company does, as stated on the legal notice and the About page. */
  activity: 'Web design, web and mobile app development',
  /** Sole member. */
  manager: 'Andrea Gauvreau',
  /** Public contact address. Required on the legal notice. */
  email: 'contact@spicy-web-house.com',
  /** Wyoming Filing ID and registered agent: shown only when set. */
  filingNumber: '2026-001904234',
  registeredAgent: 'Northwest Registered Agent Service Inc, 30 N Gould St Ste N, Sheridan, WY 82801, United States',
  /** Where the business is actually run, if different. Leave undefined to hide. */
  operatingAddress: undefined as string | undefined,
  phone: undefined as string | undefined,
  /** EU VAT number or equivalent tax ID, only if you are registered. */
  vat: undefined as string | undefined,
  /** EU/UK representative (GDPR art. 27), only if one is appointed. */
  euRepresentative: undefined as string | undefined,
  /** How the team works, shown on the About page. */
  workingModel: 'Remote-first, across time zones',
  /** Date shown on the legal pages and in the sitemap. */
  lastUpdated: '2026-11-18',
}

export const host = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Ave #4133, Covina, CA 91723, United States',
  url: 'https://vercel.com',
}
