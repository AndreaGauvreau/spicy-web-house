import Link from 'next/link'
import { FlameMark } from '@/components/icons'
import { company } from '@/content/site'
import styles from './legal.module.css'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.head}>
        <Link href="/" className={styles.back}>
          <FlameMark className={styles.mark} />
          <span>Spicy</span>
          <span className={styles.badge}>Web</span>
          <span>House</span>
        </Link>
      </header>
      <main className={styles.doc}>{children}</main>
      <footer className={styles.foot}>
        <nav aria-label="Legal">
          <Link href="/legal-notice">Legal notice</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <p>© {new Date().getFullYear()} {company.legalName}</p>
      </footer>
    </div>
  )
}
