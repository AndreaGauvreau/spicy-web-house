# Apple Developer enrollment: requirement → proof

Case 103004199563 · Enrollment ID F53GKFSDNW · Site: https://www.spicy-web-house.com

Apple's rules come from <https://developer.apple.com/programs/enroll/> and
<https://developer.apple.com/help/account/membership/program-enrollment/>.
Everything below was checked live on 2026-11-18, after the production deploy of commit `3e226fd`: `npm run check:site https://www.spicy-web-house.com`, a pass of every page in a real Chrome (rendered text, console), Lighthouse on four pages, and DNS lookups.

| # | Apple requirement | Page and element that proves it | Status |
|---|---|---|---|
| 1 | The website is publicly available | All eight pages answer 200 without password or cookies. No `noindex` anywhere, `robots.txt` allows everything, the sitemap lists the eight pages. `spicy-web-house.com` redirects (308) to `https://www.spicy-web-house.com`, HTTP redirects to HTTPS, HSTS is on. | Checked live |
| 2 | The website is functional | `npm run check:site`: 8 pages, 127 links (13 external, the six client sites answer 200), 0 broken, anchors resolve, images load. Navigation, footer and buttons all lead somewhere. Contact form (`/contact`): required fields are validated, then it opens the visitor's email app with the message ready. Lighthouse on the live site (mobile, Home, Services, Contact, Legal notice): Performance 99 to 100, Accessibility 100, Best Practices 100, SEO 100. No console or network error on any page. | Checked live |
| 3 | The domain name is associated with the organization | Footer of every page: "© 2026 Spicy Web House LLC. A limited liability company registered in Wyoming, United States." plus `contact@spicy-web-house.com` (same domain as the site). `/legal-notice`: company, legal form, Wyoming Filing ID, principal office, registered agent, sole member, email, hosting. `/about` block "The company". `/contact` block "Direct contact". Organization JSON-LD on `/` (name, legalName, url, email, logo, address). | Done |
| 4 | Not a minimal site (no social page, no registrar placeholder) | Eight pages with real content: Home (10 sections), Services (4 services, audiences, FAQ), Work (6 projects), About (studio note, beliefs, company), Contact (form, steps), Legal notice, Privacy, Terms. No placeholder, no "coming soon" (the crawl searches for `[`, TODO, lorem, "coming soon"). | Done |
| 5 | No DBA, fictitious business, trade name or branch | The brand "Spicy Web House" and the legal name "Spicy Web House LLC" are the same entity everywhere. No other company is presented as the brand. Client names and logos are credited to their owners (`/legal-notice`, "Client names, logos and project work"). | Done |
| 6 | The work email address uses the organization's domain | `contact@spicy-web-house.com`, shown in the footer, on `/contact`, `/about`, `/legal-notice`, `/privacy`, `/terms`. **Make sure this mailbox exists and receives mail**, and use it in the enrollment. DNS of the domain: Google Workspace MX record, SPF and DKIM present, no DMARC (optional). | **Owner to confirm the mailbox** |
| 7 | The organization is a legal entity that can enter into contracts | `/legal-notice`: "Limited liability company (LLC), organized under the laws of the State of Wyoming", Wyoming Filing ID 2026-001904234, registered agent. | Done |
| 8 | The name and address match the D-U-N-S record (identity, legal entity status, address) | Name "Spicy Web House LLC" and address "604 Carson Dr, NT-00181, Bear, DE 19701, United States" on `/legal-notice`, `/about`, `/contact` and in the JSON-LD. Confirmed by the owner on 2026-11-18 as identical to the D-U-N-S record. The D-U-N-S number itself is not shown on the site. | Done |
| 9 | No trace of another company's branding | `grep -ri` finds nothing in the repository. The showreel video of the home page (`/media/showreel.mp4`, served by the site itself, H.264, no audio track, no metadata) and its poster show no other studio's branding: checked on the first, the second and the last frames and on one frame every 2 seconds (it is a looping wall of project screens). The crawl searches the rendered pages for the old studio name. | Done |

## Still open before sending

1. **Mailbox** `contact@spicy-web-house.com` (point 6): send a test email to it from another address, check that it
   arrives, and that you can reply from it. The DNS is set up; only you can confirm the mailbox itself.
2. Optional but recommended: set `STRICT_PLACEHOLDERS=1` on the Vercel Production environment so that a build
   fails while `npm run check:placeholders` still lists something.
3. Optional: add a DMARC record for the domain (better delivery of your replies to Apple).

The site is deployed in production and was checked live (production domain, apex redirect, HTTPS, the video with
range requests, sitemap, robots). The showreel video shows project screens of other brands next to the six projects
of the Work page: keep it only if you may show them.

## Your side (not done by the assistant)

- Apple Account first name and last name are your legal names, not a company name.
- D&B record shows Spicy Web House LLC as an LLC with the right address (corrections take up to 2 business days to reach Apple).
- Keep the Articles of Organization at hand (Apple may ask for documents, sometimes notarized).
- Resubmit the enrollment at <https://developer.apple.com/programs/enroll/> with https://www.spicy-web-house.com, or answer the email of case 103004199563 (draft in `docs/apple-reply.md`).
- After approval: accept the license and pay the 99 USD yearly fee.
