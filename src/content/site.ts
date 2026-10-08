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
  description:
    'Spicy Web House builds and designs websites that do more than look good: they drive real growth and results.',
  tagline: 'We build and design websites that do more than look good,',
  highlight: 'they drive real growth and results.',
  trusted: 'Trusted by leading companies',
}

/** The call to action opens an email to company.email. */
export const booking = {
  label: 'Book a call',
}

export const showreel = {
  /** Full showreel on the studio CDN. Streamed, always muted, enlarged in place with the icon on the card. */
  src: 'https://kuartz-studio.b-cdn.net/kuartz%20studio%20june%202025.mp4',
  /** First moments of the video, shown while it loads. */
  poster: '/video/poster.jpg',
}

export const company = {
  legalName: 'Spicy Web House LLC',
  tradeName: 'Spicy Web House',
  entity: 'Limited liability company (LLC)',
  /** State of formation. */
  state: 'Delaware',
  /** Address of record of the company (mailing address on the IRS documents). */
  address: '604 Carson Dr, NT-00181, Bear, DE 19701, United States',
  /** What the company does, as stated on the legal notice. */
  activity: 'Web design and web development',
  /** Sole member. */
  manager: 'Andrea Gauvreau',
  /** Public contact address. Required on the legal notice. */
  email: 'andrea@kuartz.studio',
  /** Delaware file number and registered agent: shown only when set. */
  filingNumber: undefined as string | undefined,
  registeredAgent: undefined as string | undefined,
  /** Where the business is actually run, if different. Leave undefined to hide. */
  operatingAddress: undefined as string | undefined,
  phone: undefined as string | undefined,
  /** EU VAT number or equivalent tax ID, only if you are registered. */
  vat: undefined as string | undefined,
  /** EU/UK representative (GDPR art. 27), only if one is appointed. */
  euRepresentative: undefined as string | undefined,
  lastUpdated: '2026-10-08',
}

export const host = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Ave #4133, Covina, CA 91723, United States',
  url: 'https://vercel.com',
}
