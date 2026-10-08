'use client'

import { useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { showreel } from '@/content/site'
import { ExpandIcon } from './icons'
import styles from './home.module.css'

type Props = {
  /** The lightbox is open: stop the inline loop. */
  paused: boolean
  onOpen: () => void
}

export function ShowreelCard({ paused, onOpen }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    if (reduce || paused) video.pause()
    else video.play().catch(() => {})
  }, [reduce, paused])

  return (
    <button type="button" className={styles.card} onClick={onOpen} aria-label="Watch the showreel">
      <video
        ref={videoRef}
        className={styles.video}
        src={showreel.src}
        poster={showreel.poster}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <span className={styles.expand} aria-hidden="true">
        <ExpandIcon />
      </span>
    </button>
  )
}
