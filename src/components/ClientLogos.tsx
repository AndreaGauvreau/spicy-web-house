'use client'

import { AnimatePresence, motion, stagger, useReducedMotion, type Variants } from 'motion/react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { clients, type Client } from '@/content/clients'
import { EASE_OUT } from './motion'
import styles from './clients.module.css'

const TIP_WIDTH = 176

type Align = 'start' | 'end'

type Props = {
  /** Entrance variants shared with the rest of the page. */
  group: Variants
  item: Variants
}

/** Client logos: the hovered one lifts, a card with its details opens above it. */
export function ClientLogos({ group, item }: Props) {
  const [active, setActive] = useState<number | null>(null)
  const [align, setAlign] = useState<Align>('start')
  const listRef = useRef<HTMLUListElement>(null)
  const lastPointer = useRef<string>('mouse')
  const tipId = useId()

  const open = (index: number, trigger: HTMLElement) => {
    const rect = trigger.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    setAlign(center - 4 + TIP_WIDTH > window.innerWidth - 12 ? 'end' : 'start')
    setActive(index)
  }
  const close = (index: number) => setActive((current) => (current === index ? null : current))

  // Touch: a tap opens the card, a tap elsewhere or Escape closes it.
  useEffect(() => {
    if (active === null) return
    const onDown = (event: PointerEvent) => {
      if (!listRef.current?.contains(event.target as Node)) setActive(null)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <motion.ul ref={listRef} className={styles.list} variants={group} aria-label="Clients">
      {clients.map((client, index) => (
        <motion.li key={client.name} variants={item} className={styles.cell}>
          <button
            type="button"
            className={styles.logo}
            data-active={active === index}
            aria-label={client.name}
            aria-describedby={active === index ? `${tipId}-${index}` : undefined}
            onPointerDown={(event) => {
              lastPointer.current = event.pointerType
            }}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') open(index, event.currentTarget)
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'mouse') close(index)
            }}
            onFocus={(event) => {
              if (event.currentTarget.matches(':focus-visible')) open(index, event.currentTarget)
            }}
            onBlur={() => close(index)}
            onClick={(event) => {
              if (event.detail === 0 || lastPointer.current === 'mouse') return
              if (active === index) setActive(null)
              else open(index, event.currentTarget)
            }}
          >
            <img src={client.logo} alt="" width={40} height={40} loading="lazy" draggable={false} />
          </button>

          <AnimatePresence>
            {active === index ? <Card key="card" id={`${tipId}-${index}`} client={client} align={align} /> : null}
          </AnimatePresence>
        </motion.li>
      ))}
    </motion.ul>
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
    ['Valuation', client.valuation],
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
