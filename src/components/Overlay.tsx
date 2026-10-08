'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, type ReactNode } from 'react'
import { CloseIcon } from './icons'
import { DURATION, EASE_OUT } from './motion'
import styles from './overlay.module.css'

const FOCUSABLE =
  'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])'

type Props = {
  label: string
  onClose: () => void
  children: ReactNode
}

/** Modal layer: focus moves in, Tab stays inside, Escape closes, the page behind is inert. */
export function Overlay({ label, onClose, children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef(onClose)
  const reduce = useReducedMotion()

  useEffect(() => {
    closeRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const page = document.getElementById('page')
    page?.setAttribute('inert', '')
    document.documentElement.style.overflow = 'hidden'
    root.focus({ preventScroll: true })

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) {
        event.preventDefault()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === first || active === root)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      page?.removeAttribute('inert')
      document.documentElement.style.overflow = ''
      previous?.focus({ preventScroll: true })
    }
  }, [])

  const t = (duration: number) => ({ duration: reduce ? 0 : duration, ease: EASE_OUT })

  return (
    <motion.div
      ref={rootRef}
      className={styles.root}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: t(DURATION.overlayIn) }}
      exit={{ opacity: 0, transition: t(DURATION.overlayOut) }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
        <CloseIcon />
      </button>
      <motion.div
        className={styles.panel}
        initial={{ y: 14, scale: 0.985 }}
        animate={{ y: 0, scale: 1, transition: t(DURATION.overlayIn) }}
        exit={{ y: 8, scale: 0.99, transition: t(DURATION.overlayOut) }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
