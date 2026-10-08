# spicy-web-house

One-page showcase site for **Spicy Web House LLC**: a full-height page with a showreel and a "Book a call" button, plus the legal pages (legal notice, privacy policy, terms of use).

Next.js 16 (App Router) · React 19 · Motion · CSS Modules · no database, no tracking, no cookie banner.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # also lists what is still a placeholder
```

## What to edit

Everything the site says lives in `src/content/`:

| File | What |
|---|---|
| `site.ts` | Booking link, showreel files, company identity used by the legal pages |
| `clients.ts` | "Trusted by" logos (square images in `public/logos/`) and the details shown in the card on hover |

Replace the showreel with your own: put `showreel.mp4` and `poster.jpg` in `public/video/` (the current files are a generated stand-in), then set `showreel.placeholder` to `false`.

Anything still set to `TODO` or `placeholder: true` shows as `[to be completed]` on the legal pages and is listed by:

```bash
npm run check:placeholders
```

Set `STRICT_PLACEHOLDERS=1` on the Vercel **production** environment to make the build fail until everything is filled in.

## Brand

Coral `#FF5E5E`, blush `#FFF4F4`, warm black `#0D0000`. Light mode only. The lockup is `src/components/Logo.tsx` (from the original SVG, recoloured for light backgrounds), the favicon is `src/app/icon.png` (also used as `apple-icon.png`). Font: Geist everywhere (`next/font/google`).

## Deploy

Push to GitHub, import the repo on Vercel, no configuration needed. Optional environment variable: `NEXT_PUBLIC_SITE_URL` (custom domain, used for canonical URLs, sitemap and social images).

## Legal pages

The pages are a solid starting point for an LLC with European visitors (identification, hosting, GDPR and U.S. state privacy rights), but they are not legal advice. Have them checked by counsel once the company details are filled in.
