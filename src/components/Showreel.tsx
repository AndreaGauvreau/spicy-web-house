'use client'

import Image from 'next/image'
import { useEffect, useRef, type CSSProperties } from 'react'
import { showreel } from '@/content/site'
import styles from './home.module.css'

/**
 * The big space in the middle of the hero. It plays the showreel (silent loop) when `showreel.src` is set,
 * and shows the poster in the same space until then.
 */
export function Showreel() {
  const video = useRef<HTMLVideoElement>(null)

  // Reduced motion: the first frame stays, nothing moves.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.current?.pause()
  }, [])

  return (
    <div className={styles.showreel} style={{ '--aspect': showreel.aspect } as CSSProperties}>
      {showreel.src ? (
        <video
          ref={video}
          src={showreel.src}
          poster={showreel.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          aria-label="Studio showreel: a selection of our recent projects"
        />
      ) : (
        <Image src={showreel.poster} alt="Spicy Web House" fill sizes="(max-width: 1200px) 100vw, 1160px" priority />
      )}
    </div>
  )
}
