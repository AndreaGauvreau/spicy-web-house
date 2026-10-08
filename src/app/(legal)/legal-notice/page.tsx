import type { Metadata } from 'next'
import Link from 'next/link'
import { Val } from '@/components/Val'
import { formatDate } from '@/content/format'
import { company, host } from '@/content/site'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Legal notice',
  alternates: { canonical: '/legal-notice' },
}

export default function LegalNoticePage() {
  return (
    <>
      <h1>Legal notice</h1>
      <p className={styles.sub}>Mentions légales · Last updated {formatDate(company.lastUpdated)}</p>

      <h2>Publisher</h2>
      <dl className={styles.facts}>
        <div>
          <dt>Company</dt>
          <dd>{company.legalName}</dd>
        </div>
        <div>
          <dt>Legal form</dt>
          <dd>
            {company.entity}, organized under the laws of the State of <Val>{company.state}</Val>
          </dd>
        </div>
        <div>
          <dt>Activity</dt>
          <dd>{company.activity}</dd>
        </div>
        {company.filingNumber ? (
          <div>
            <dt>State file number</dt>
            <dd>{company.filingNumber}</dd>
          </div>
        ) : null}
        <div>
          <dt>Address</dt>
          <dd>
            <Val>{company.address}</Val>
          </dd>
        </div>
        {company.registeredAgent ? (
          <div>
            <dt>Registered agent</dt>
            <dd>{company.registeredAgent}</dd>
          </div>
        ) : null}
        {company.operatingAddress ? (
          <div>
            <dt>Operating address</dt>
            <dd>{company.operatingAddress}</dd>
          </div>
        ) : null}
        <div>
          <dt>Sole member and publication director</dt>
          <dd>{company.manager}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <Val>{company.email}</Val>
          </dd>
        </div>
        {company.phone ? (
          <div>
            <dt>Phone</dt>
            <dd>{company.phone}</dd>
          </div>
        ) : null}
        {company.vat ? (
          <div>
            <dt>VAT / tax ID</dt>
            <dd>{company.vat}</dd>
          </div>
        ) : null}
      </dl>

      <h2>Hosting</h2>
      <p>
        The site is hosted by {host.name}, {host.address} (
        <a href={host.url} target="_blank" rel="noopener noreferrer">
          vercel.com
        </a>
        ).
      </p>

      <h2>Intellectual property</h2>
      <p>
        The texts, visuals, videos, layout, code and trademarks on this site belong to {company.legalName} or are
        used with permission of their owners. Nothing may be copied, reproduced, adapted or distributed without
        prior written consent, except for private use or as allowed by law.
      </p>

      <h2>Client names, logos and project work</h2>
      <p>
        Client names, logos and project visuals belong to their respective owners. They are shown to describe work
        carried out with or for those clients, and their display does not imply any endorsement beyond that
        relationship.
      </p>

      <h2>Liability</h2>
      <p>
        We do our best to keep the information on this site accurate and up to date, but it is provided as is and
        may contain errors or omissions. {company.legalName} is not liable for any damage resulting from the use of
        the site or from temporary unavailability.
      </p>

      <h2>Third-party services and links</h2>
      <p>
        The site links to third-party services, including the scheduling tool opened by the “Book a call” button.
        Those services are run by their own providers under their own terms and privacy policies, and we are not
        responsible for their content or practices.
      </p>

      <h2>Personal data and cookies</h2>
      <p>
        How we handle personal data is described in the <Link href="/privacy">privacy policy</Link>. The site does not
        set advertising or analytics cookies.
      </p>

      <h2>Governing law</h2>
      <p>
        This notice is governed by the laws of the State of <Val>{company.state}</Val>, United States, without
        affecting any mandatory consumer-protection rules that apply where you live.
      </p>

      <h2>Contact</h2>
      <p>
        For any question about this site, write to <Val>{company.email}</Val>.
      </p>
    </>
  )
}
