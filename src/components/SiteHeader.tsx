'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navLinks } from '@/content/nav'
import { contactCta } from '@/content/site'
import { ContactButton } from './Button'
import { Logo } from './Logo'
import styles from './shell.module.css'

/** Logo, main navigation and the Contact button. On small screens the links open in a panel. */
export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const close = () => setOpen(false)

  return (
    <header id="site-header" className={styles.header} data-open={open}>
      <div className={styles.bar}>
        <Link href="/" id="brand" className={styles.brand} aria-label="Spicy Web House, home" onClick={close}>
          <Logo className={styles.logo} />
        </Link>

        <nav id="primary-nav" className={styles.nav} aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined} onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navCta}>
            <Link href={contactCta.href} aria-current={isCurrent(contactCta.href) ? 'page' : undefined} onClick={close}>
              {contactCta.label}
            </Link>
          </div>
        </nav>

        <div className={styles.actions}>
          <div className={styles.bookDesktop}>
            <ContactButton small current={isCurrent(contactCta.href)} />
          </div>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
