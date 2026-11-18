import type { CSSProperties, ReactNode } from 'react'
import { company } from '@/content/site'
import { BookButton } from './Button'
import styles from './site.module.css'

/** Inline style that staggers the entrance of the hero blocks (see .enter in globals.css). */
export const enterStyle = (index: number): CSSProperties => ({ '--i': index }) as CSSProperties

type SectionProps = {
  id?: string
  /** Name of the section for assistive technology: the id of its heading. */
  labelledBy?: string
  /** Tinted band with a hairline above and below. */
  soft?: boolean
  children: ReactNode
}

export function Section({ id, labelledBy, soft, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${styles.section} ${soft ? styles.sectionSoft : ''}`}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

type SectionHeadProps = {
  eyebrow?: string
  title: string
  intro?: string
  id?: string
}

export function SectionHead({ eyebrow, title, intro, id }: SectionHeadProps) {
  return (
    <header className={`${styles.head} reveal`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {intro ? <p className={styles.lead}>{intro}</p> : null}
    </header>
  )
}

type PageHeaderProps = {
  eyebrow: string
  title: string
  sub: string
  children?: ReactNode
}

/** Top of an inner page: eyebrow, the one h1, a sentence, and optional buttons. */
export function PageHeader({ eyebrow, title, sub, children }: PageHeaderProps) {
  return (
    <header className={`${styles.container} ${styles.pageHeader}`}>
      <p className={`${styles.eyebrow} enter`} style={enterStyle(0)}>
        {eyebrow}
      </p>
      <h1 className={`${styles.pageTitle} enter`} style={enterStyle(1)}>
        {title}
      </h1>
      <p className={`${styles.pageSub} enter`} style={enterStyle(2)}>
        {sub}
      </p>
      {children ? (
        <div className={`${styles.pageActions} enter`} style={enterStyle(3)}>
          {children}
        </div>
      ) : null}
    </header>
  )
}

type FinalCtaProps = {
  id: string
  title: string
  body?: string
  /** For example "or write to": adds the contact email after the button. */
  secondaryPrefix?: string
}

export function FinalCta({ id, title, body, secondaryPrefix }: FinalCtaProps) {
  return (
    <section aria-labelledby={id} className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={`${styles.cta} reveal`}>
          <h2 id={id} className={styles.ctaTitle}>
            {title}
          </h2>
          {body ? <p className={styles.ctaBody}>{body}</p> : null}
          <div className={styles.ctaActions}>
            <BookButton arrow />
            {secondaryPrefix ? (
              <p className={styles.ctaSecondary}>
                {secondaryPrefix} <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
