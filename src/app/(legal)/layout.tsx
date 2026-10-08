import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { company } from '@/content/site'
import styles from './legal.module.css'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.head}>
        <Link href="/" className={styles.back} aria-label="Spicy Web House, home">
          <Logo className={styles.logo} />
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
