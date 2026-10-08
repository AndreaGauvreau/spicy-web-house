'use client'

import { useReducedMotion } from 'motion/react'
import { showreel } from '@/content/site'
import { Overlay } from './Overlay'
import styles from './reel.module.css'

export function ReelLightbox({ onClose }: { onClose: () => void }) {
  const reduce = useReducedMotion()

  return (
    <Overlay label="Showreel" onClose={onClose}>
      <video
        className={styles.reel}
        src={showreel.src}
        poster={showreel.poster}
        controls
        playsInline
        preload="auto"
        autoPlay={!reduce}
        loop
      />
    </Overlay>
  )
}
