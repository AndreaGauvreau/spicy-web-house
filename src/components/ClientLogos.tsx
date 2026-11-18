'use client'

import { AnimatePresence, MotionConfig, motion, stagger, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { clients, type Client } from '@/content/clients'
import { EASE_OUT } from './motion'
import styles from './clients.module.css'

const TIP_WIDTH = 176
/** Identical copies of the list: moving by one copy loops the ticker without a jump (see clients.module.css). */
const COPIES = 4

type Align = 'start' | 'end'

/** Where the detail card opens: above the hovered logo. Kept after closing so the card can fade out in place. */
type Anchor = { index: number; copy: number; x: number; y: number; align: Align }

const noSubscription = () => () => {}
const useIsClient = () =>
  useSyncExternalStore(
    noSubscription,
    () => true,
    () => false,
  )

/** Client logos in a slow ticker. The hovered logo lifts and a card with its details opens above it. */
export function ClientLogos() {
  const [anchor, setAnchor] = useState<Anchor | null>(null)
  const [shown, setShown] = useState(false)
  const lastPointer = useRef<string>('mouse')
  const tipId = useId()
  const isClient = useIsClient()

  const open = (index: number, copy: number, trigger: HTMLElement) => {
    const rect = trigger.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    setAnchor({ index, copy, x, y: rect.top, align: x - 4 + TIP_WIDTH > window.innerWidth - 12 ? 'end' : 'start' })
    setShown(true)
  }
  const close = (index: number, copy: number) => {
    if (anchor?.index === index && anchor.copy === copy) setShown(false)
  }

  // Touch: a tap opens the card, a tap elsewhere, a scroll or Escape closes it.
  useEffect(() => {
    if (!shown) return
    const hide = () => setShown(false)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') hide()
    }
    const onDown = (event: PointerEvent) => {
      if (!(event.target as Element).closest('[data-client-logo]')) hide()
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', hide, { passive: true })
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', hide)
    }
  }, [shown])

  const isActive = (index: number, copy: number) => shown && anchor?.index === index && anchor.copy === copy

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.marquee} data-paused={shown}>
        <div className={styles.rail}>
          {Array.from({ length: COPIES }, (_, copy) => (
            <ul
              key={copy}
              className={styles.copy}
              aria-label={copy === 0 ? 'Clients' : undefined}
              aria-hidden={copy > 0 ? true : undefined}
            >
              {clients.map((client, index) => (
                <li key={client.name} className={styles.cell}>
                  <button
                    type="button"
                    className={styles.logo}
                    data-client-logo=""
                    data-active={isActive(index, copy)}
                    aria-label={client.name}
                    aria-describedby={isActive(index, copy) ? tipId : undefined}
                    tabIndex={copy === 0 ? 0 : -1}
                    onPointerDown={(event) => {
                      lastPointer.current = event.pointerType
                    }}
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse') open(index, copy, event.currentTarget)
                    }}
                    onPointerLeave={(event) => {
                      if (event.pointerType === 'mouse') close(index, copy)
                    }}
                    onFocus={(event) => {
                      if (event.currentTarget.matches(':focus-visible')) open(index, copy, event.currentTarget)
                    }}
                    onBlur={() => close(index, copy)}
                    onClick={(event) => {
                      if (event.detail === 0 || lastPointer.current === 'mouse') return
                      if (isActive(index, copy)) setShown(false)
                      else open(index, copy, event.currentTarget)
                    }}
                  >
                    <Image src={client.logo} alt="" width={52} height={52} sizes="52px" draggable={false} />
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {isClient
        ? createPortal(
            <div className={styles.tipLayer} style={anchor ? { left: anchor.x, top: anchor.y } : undefined}>
              <AnimatePresence>
                {shown && anchor ? (
                  <Card
                    key={`${anchor.index}-${anchor.copy}`}
                    id={tipId}
                    client={clients[anchor.index]}
                    align={anchor.align}
                  />
                ) : null}
              </AnimatePresence>
            </div>,
            document.body,
          )
        : null}
    </MotionConfig>
  )
}

function Card({ id, client, align }: { id: string; client: Client; align: Align }) {
  const reduce = useReducedMotion()

  const { card, row } = useMemo(
    () => ({
      card: {
        hidden: { opacity: 0, y: 6, scale: 0.97 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: reduce ? 0 : 0.18, ease: EASE_OUT, delayChildren: stagger(reduce ? 0 : 0.045) },
        },
        exit: { opacity: 0, y: 3, scale: 0.98, transition: { duration: reduce ? 0 : 0.12, ease: EASE_OUT } },
      },
      row: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: reduce ? 0 : 0.16 } },
        exit: { opacity: 1 },
      },
    }),
    [reduce],
  )

  const rows: [string, string][] = [
    ['Name', client.name],
    ['Last valuation', client.valuation],
    ['Activity', client.activity],
  ]

  return (
    <motion.div
      id={id}
      role="tooltip"
      className={`${styles.card} ${align === 'end' ? styles.cardEnd : styles.cardStart}`}
      variants={card}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {rows.map(([label, value]) => (
        <motion.div key={label} className={styles.row} variants={row}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
