import { SiteShell } from '@/components/SiteShell'
import styles from './legal.module.css'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell>
      <div className={styles.doc}>{children}</div>
    </SiteShell>
  )
}
