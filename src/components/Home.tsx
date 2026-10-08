'use client'

import { AnimatePresence, MotionConfig, motion, stagger, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'
import { clients } from '@/content/clients'
import { booking, company, site } from '@/content/site'
import { CursorIcon, FlameMark } from './icons'
import { DURATION, EASE_OUT } from './motion'
import { ReelLightbox } from './ReelLightbox'
import { ShowreelCard } from './ShowreelCard'
import styles from './home.module.css'

export function Home({ year }: { year: number }) {
  const [reelOpen, setReelOpen] = useState(false)
  const close = useCallback(() => setReelOpen(false), [])
  const reduce = useReducedMotion()

  // One entrance for the whole page: every block rises 10px and fades in, 60 ms apart.
  const { page, item, group, flame } = useMemo(
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
      // The big flame behind the stage rises a little slower than the content.
      flame: {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.5, ease: EASE_OUT } },
      },
    }),
    [reduce],
  )

  return (
    <MotionConfig reducedMotion="user">
      <motion.div id="page" className={styles.page} variants={page} initial="hidden" animate="show">
        <motion.header className={styles.top} variants={item}>
          <h1 className={styles.brand}>
            <FlameMark className={styles.brandMark} />
            <span>Spicy</span>
            <span className={styles.brandBadge}>Web</span>
            <span>House</span>
            <span className="sr-only"> — web design and development studio</span>
          </h1>
        </motion.header>

        <main className={styles.stage}>
          <motion.div className={styles.flame} variants={flame} aria-hidden="true">
            <FlameMark />
          </motion.div>

          <div className={styles.stack}>
            <motion.div variants={item}>
              <ShowreelCard paused={reelOpen} onOpen={() => setReelOpen(true)} />
            </motion.div>

            <motion.div variants={item} className={styles.ctaWrap}>
              <a className={styles.cta} href={booking.url} target="_blank" rel="noopener noreferrer">
                <span>{booking.label}</span>
                <span className={styles.ctaIcon} aria-hidden="true">
                  <CursorIcon />
                </span>
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

            <motion.ul className={styles.logos} variants={group} aria-label="Clients">
              {clients.map((client) => (
                <motion.li key={client.name} variants={item} className={styles.logo}>
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} width={40} height={40} loading="lazy" />
                  ) : (
                    <span className={styles.logoStandIn} role="img" aria-label={client.name} />
                  )}
                </motion.li>
              ))}
            </motion.ul>
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

      <AnimatePresence>{reelOpen ? <ReelLightbox key="reel" onClose={close} /> : null}</AnimatePresence>
    </MotionConfig>
  )
}
