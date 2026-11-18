import Link from 'next/link'
import { footerColumns } from '@/content/nav'
import { company, site } from '@/content/site'
import { Logo } from './Logo'
import styles from './shell.module.css'

/** On every page: tagline, links, contact, and the legal identity of the company. */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogoLink} aria-label="Spicy Web House, home">
            <Logo className={styles.footerLogo} />
          </Link>
          <p className={styles.footerTagline}>{site.tagline}</p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className={styles.colTitle}>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className={styles.colTitle}>Contact</h2>
          <ul>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {year} {company.legalName}. A limited liability company registered in {company.state}, United States.
        </p>
      </div>
    </footer>
  )
}
