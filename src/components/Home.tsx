'use client'

import { MotionConfig, motion, stagger, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { useMemo } from 'react'
import { booking, company, site } from '@/content/site'
import { ClientLogos } from './ClientLogos'
import { Logo } from './Logo'
import { DURATION, EASE_OUT } from './motion'
import { ShowreelCard } from './ShowreelCard'
import styles from './home.module.css'

export function Home({ year }: { year: number }) {
  const reduce = useReducedMotion()

  // One entrance for the whole page: every block rises 10px and fades in, 60 ms apart.
  const { page, item, group } = useMemo(
    () => ({
      page: {
        hidden: {},
        show: { transition: { delayChildren: stagger(reduce ? 0 : 0.06, { startDelay: reduce ? 0 : 0.04 }) } },
      },
      item: {
        hidden: { opacity: 0, y: 10, scale: 0.985 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: reduce ? 0 : DURATION.enter, ease: EASE_OUT } },
      },
      group: {
        hidden: {},
        show: { transition: { delayChildren: stagger(reduce ? 0 : 0.03) } },
      },
    }),
    [reduce],
  )

  return (
    <MotionConfig reducedMotion="user">
      <motion.div id="page" className={styles.page} variants={page} initial="hidden" animate="show">
        <motion.header className={styles.top} variants={item}>
          <h1 id="brand" className={styles.brand}>
            <Logo className={styles.brandLogo} label="Spicy Web House" />
            <span className="sr-only"> — web design and development studio</span>
          </h1>
        </motion.header>

        <main className={styles.stage}>
          <div className={styles.stack}>
            <motion.div variants={item}>
              <ShowreelCard />
            </motion.div>

            <motion.div variants={item} className={styles.ctaWrap}>
              <a className={styles.cta} href={booking.url} target="_blank" rel="noopener noreferrer">
                <span>{booking.label}</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </motion.div>
          </div>
        </main>

        <footer className={styles.base}>
          <div className={styles.baseMain}>
            <motion.p className={styles.tagline} variants={item}>
              {site.tagline} <mark className={styles.highlight}>{site.highlight}</mark>
            </motion.p>

            <motion.p className={styles.trusted} variants={item}>
              {site.trusted}
            </motion.p>

            <ClientLogos group={group} item={item} />
          </div>

          <motion.div className={styles.legal} variants={item}>
            <nav aria-label="Legal">
              <Link href="/legal-notice">Legal notice</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
            <p>
              © {year} {company.legalName}
            </p>
          </motion.div>
        </footer>
      </motion.div>

    </MotionConfig>
  )
}
