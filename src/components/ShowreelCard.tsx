'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { showreel } from '@/content/site'
import { CollapseIcon, ExpandIcon } from './icons'
import styles from './home.module.css'

/** The card never grows past this, whatever room there is. */
const MAX_SCALE = 1.55

/**
 * How far the card can grow without leaving the screen or covering the logo.
 * It scales from its bottom centre, so it grows upward and its bottom edge stays put.
 */
function fitScale(frame: HTMLElement): number {
  const width = frame.offsetWidth
  const height = frame.offsetHeight
  const { bottom } = frame.getBoundingClientRect()

  let scale = Math.min(MAX_SCALE, (window.innerWidth - 32) / width, (bottom - 12) / height)

  const brand = document.getElementById('brand')?.getBoundingClientRect()
  if (brand) {
    const coversLogo =
      bottom - scale * height < brand.bottom + 8 && (window.innerWidth - scale * width) / 2 < brand.right + 12
    if (coversLogo) scale = Math.min(scale, (bottom - brand.bottom - 8) / height)
  }
  return Math.max(1, scale)
}

export function ShowreelCard() {
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()
  const [expanded, setExpanded] = useState(false)
  const [scale, setScale] = useState(1)

  // The video is a silent loop, always.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    if (reduce) video.pause()
    else video.play().catch(() => {})
  }, [reduce])

  // While enlarged: Escape or a click elsewhere shrinks it back, a resize refits it.
  useEffect(() => {
    if (!expanded) return
    const frame = frameRef.current
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false)
    }
    const onDown = (event: PointerEvent) => {
      if (frame && !frame.contains(event.target as Node)) setExpanded(false)
    }
    const onResize = () => {
      if (frame) setScale(fitScale(frame))
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
      window.removeEventListener('resize', onResize)
    }
  }, [expanded])

  const toggle = () => {
    if (!expanded && frameRef.current) setScale(fitScale(frameRef.current))
    setExpanded((value) => !value)
  }

  return (
    <motion.div
      ref={frameRef}
      className={styles.frame}
      style={{ originX: 0.5, originY: 1 }}
      animate={{ scale: expanded ? scale : 1 }}
      transition={reduce ? { duration: 0 } : { type: 'spring', visualDuration: 0.4, bounce: 0 }}
    >
      <button
        type="button"
        className={styles.card}
        onClick={toggle}
        aria-expanded={expanded}
        aria-label={expanded ? 'Shrink the video' : 'Enlarge the video'}
      >
        <video
          ref={videoRef}
          className={styles.video}
          src={showreel.src}
          poster={showreel.poster}
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
          onVolumeChange={(event) => {
            if (!event.currentTarget.muted) event.currentTarget.muted = true
          }}
        />
        <span className={styles.expand} aria-hidden="true">
          {expanded ? <CollapseIcon /> : <ExpandIcon />}
        </span>
      </button>
    </motion.div>
  )
}
