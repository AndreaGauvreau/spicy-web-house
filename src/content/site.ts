/**
 * Everything the site says about the business lives here.
 * Any value set to TODO is shown as "[to be completed]" on the legal pages
 * and listed by `npm run check:placeholders`.
 */
export const TODO = '__TODO__'

export const isTodo = (value: string | undefined): boolean =>
  value === undefined || value.includes(TODO)

export const site = {
  name: 'Spicy Web House',
  description:
    'Spicy Web House builds and designs websites that do more than look good: they drive real growth and results.',
  tagline: 'We build and design websites that do more than look good,',
  highlight: 'they drive real growth and results.',
  trusted: 'Trusted by leading companies',
}

export const booking = {
  label: 'Book a call',
  // Cal.com, Calendly, SavvyCal… any scheduling link. Opens in a new tab, no embed, no cookies on our side.
  url: 'https://cal.com/__TODO__',
  // Name shown in the privacy policy.
  provider: TODO,
}

export const showreel = {
  src: '/video/showreel.mp4',
  poster: '/video/poster.jpg',
  // Generated stand-in loop. Replace both files in /public/video, then set to false.
  placeholder: true,
}

export const company = {
  legalName: 'Spicy Web House LLC',
  tradeName: 'Spicy Web House',
  entity: 'Limited liability company (LLC)',
  /** State (or country) where the LLC was formed, e.g. Wyoming. */
  state: TODO,
  /** Entity / file number on the state register. */
  filingNumber: TODO,
  registeredAgent: TODO,
  registeredAddress: TODO,
  /** Where the business is actually run, if different. Leave undefined to hide. */
  operatingAddress: undefined as string | undefined,
  manager: 'Andrea Gauvreau',
  email: TODO,
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
