import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

/** Skip link, header, the page itself, footer. Every page of the site goes through here. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  )
}
