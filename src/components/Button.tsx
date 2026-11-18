import Link from 'next/link'
import type { ReactNode } from 'react'
import { contactCta } from '@/content/site'
import { ArrowIcon } from './icons'
import styles from './site.module.css'

type Variant = 'primary' | 'ghost'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  small?: boolean
  arrow?: boolean
  /** The button leads to the page the visitor is on. */
  current?: boolean
}

const isExternal = (href: string) => /^https?:\/\//.test(href)

/** A pill-shaped link. Internal links use the router, https links open in a new tab. */
export function ButtonLink({ href, children, variant = 'primary', small, arrow, current }: ButtonLinkProps) {
  const className = [styles.btn, variant === 'primary' ? styles.btnPrimary : styles.btnGhost, small ? styles.btnSm : '']
    .filter(Boolean)
    .join(' ')
  const content = (
    <>
      {children}
      {arrow ? <ArrowIcon /> : null}
    </>
  )

  if (isExternal(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }
  return (
    <Link className={className} href={href} aria-current={current ? 'page' : undefined}>
      {content}
    </Link>
  )
}

/** "Contact": leads to the contact page, where the form and the email address are. */
export function ContactButton({ variant, small, arrow, current }: Omit<ButtonLinkProps, 'href' | 'children'>) {
  return (
    <ButtonLink href={contactCta.href} variant={variant} small={small} arrow={arrow} current={current}>
      {contactCta.label}
    </ButtonLink>
  )
}
