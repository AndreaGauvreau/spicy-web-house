# spicy-web-house

Website of **Spicy Web House LLC**: Home, Services, Work, About, Contact, and the legal pages (legal notice, privacy policy, terms of use).

Next.js 16 (App Router) · React 19 · Motion · CSS Modules · TypeScript · no database, no tracking, no cookie banner.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm run build        # also lists what is still waiting for the owner
```

After a production build (`npm run build && npm start`), two checks run against the live server:

```bash
npm run check:site                                    # crawl: pages, links, metadata, forbidden strings
npm run screenshots                                   # full-page captures at 1440 px and 390 px in ./screenshots
node scripts/check-site.mjs https://www.spicy-web-house.com   # the same crawl on the real domain
```

## What to edit

Everything the site says lives in `src/content/`:

| File | What |
|---|---|
| `site.ts` | Company identity (legal name, address, Wyoming Filing ID, registered agent, email), hosting, booking button, showreel video |
| `home.ts`, `services.ts`, `work.ts`, `about.ts`, `contact.ts`, `faq.ts` | The copy of each page |
| `clients.ts` | "Trusted by" logos (square images in `public/logos/`) and the card shown on hover |
| `nav.ts` | Header and footer links |

Pages are in `src/app/(site)/` (Home, Services, Work, About, Contact) and `src/app/(legal)/`. Add a new public page to `routes` in `src/app/sitemap.ts` and give it `pageMetadata()` from `src/lib/metadata.ts` (unique title, description, canonical URL, social images).

**Contact form and booking.** The form prepares an email in the visitor's own email app, so nothing passes through this site and no service is needed. The "Book a free intro call" buttons lead to `/contact`; put an `https://` link in `booking.href` to open a booking page instead.

**Hero.** The text, then a big video space in the middle, then the client logos in a ticker. **Showreel.** `showreel.src` in `site.ts` is empty while the video is pending: the poster (`public/media/poster.jpg`) fills the space. Set `src` to a neutral URL (for example `/media/showreel.mp4`) and `pending` to `false` and the video plays there, silent and looping. `showreel.aspect` is its width over height (2 by default; 4 over 3 on phones).

**Client valuations** (hover card): the last priced funding round reported in the press. Update them when a company raises again.

Anything flagged `pending: true` or `needsConfirmation: true`, or set to `TODO`, is listed by:

```bash
npm run check:placeholders
```

Set `STRICT_PLACEHOLDERS=1` on the Vercel **production** environment to make the build fail until everything is filled in.

## Brand

Coral `#FF5E5E`, blush `#FFF4F4`, warm black `#0D0000`. Light mode only. The lockup is `src/components/Logo.tsx`, the favicon is `src/app/icon.png` (also used as `apple-icon.png`). Font: Geist everywhere (`next/font/google`). Motion is sober (nothing over 300 ms on interactions) and every animation respects `prefers-reduced-motion`.

## Deploy

The site lives at https://www.spicy-web-house.com (the address is `siteUrl` in `src/content/site.ts`; the bare domain redirects to `www`). Push to `main` and Vercel deploys. Set `NEXT_PUBLIC_SITE_URL` only to override the address, for example on a test deployment. Deployment Protection must stay off for the production domain.

## Apple Developer enrollment

`docs/apple-checklist.md` maps each Apple requirement to the page and element that proves it, and lists what is still open. `docs/apple-reply.md` is the draft reply to Apple Developer Support.

## Legal pages

The pages are a solid starting point for an LLC with European visitors (identification, hosting, GDPR and U.S. state privacy rights), but they are not legal advice. Have them checked by counsel.
