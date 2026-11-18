import { site } from '@/content/site'
import { ClientLogos } from './ClientLogos'
import styles from './site.module.css'

/** "Trusted by leading companies" and the eight client logos. */
export function TrustedBy() {
  return (
    <section className={styles.trusted} aria-labelledby="trusted-label">
      <div className={`${styles.container} ${styles.trustedInner}`}>
        <p id="trusted-label" className={styles.trustedLabel}>
          {site.trusted}
        </p>
        <ClientLogos />
      </div>
    </section>
  )
}
