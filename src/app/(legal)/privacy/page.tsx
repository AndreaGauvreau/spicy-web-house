import type { Metadata } from 'next'
import Link from 'next/link'
import { Email } from '@/components/Email'
import { Val } from '@/components/Val'
import { formatDate } from '@/content/format'
import { booking, company, host } from '@/content/site'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Privacy policy',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy policy</h1>
      <p className={styles.sub}>Last updated {formatDate(company.lastUpdated)}</p>

      <p>
        This policy explains what personal data {company.legalName} (“we”) handles through this site and what you can do
        about it. It applies to visitors from anywhere, including the European Economic Area, the United Kingdom and
        the United States.
      </p>

      <h2>Who is responsible</h2>
      <p>
        {company.legalName}, a Delaware limited liability company, <Val>{company.address}</Val>, is the controller of the data
        described here. You can reach us at <Email />.
      </p>
      {company.euRepresentative ? (
        <p>Our representative in the European Union is {company.euRepresentative}.</p>
      ) : null}

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Technical logs.</strong> When you load the site, our hosting provider processes your IP address,
          browser and device type, the page requested and the time of the request. This is needed to deliver the site
          and keep it secure.
        </li>
        <li>
          <strong>Call bookings.</strong> The “Book a call” button opens a scheduling page run by{' '}
          <Val>{booking.provider}</Val>. What you enter there (name, email, time zone, notes) is processed by that
          provider and shared with us so we can hold the call.
        </li>
        <li>
          <strong>Messages.</strong> If you email us, we keep your message and our replies.
        </li>
      </ul>
      <p>
        The site does not use advertising cookies, analytics cookies or any tracker that follows you across sites, so
        there is no cookie banner. The scheduling provider may set its own cookies on its own page.
      </p>

      <h2>Why we use it, and on what basis</h2>
      <ul>
        <li>To answer your messages and set up calls you ask for (steps before a contract, or our legitimate interest in replying).</li>
        <li>To run and secure the site (our legitimate interest).</li>
        <li>To meet legal, tax and accounting obligations (legal obligation).</li>
      </ul>
      <p>We do not sell your personal data, and we do not share it for cross-context behavioral advertising.</p>

      <h2>How long we keep it</h2>
      <p>
        Messages and booking details are kept for as long as we are in contact, then up to three years after our last
        exchange, unless a contract or a legal obligation requires longer. Technical logs are kept by the hosting
        provider for a short period under its own policy.
      </p>

      <h2>Who receives it</h2>
      <p>
        Only service providers that help us run the site and our work, acting on our instructions: our hosting provider
        ({host.name}), the scheduling provider named above, and our email and productivity tools. We may also disclose
        data when the law requires it.
      </p>

      <h2>International processing</h2>
      <p>
        {company.legalName} is a U.S. company and our providers are mostly U.S. companies, so your data is processed in
        the United States and possibly in other countries. Where the law requires it for visitors in the European
        Economic Area or the United Kingdom, we rely on recognised safeguards such as the EU–U.S. Data Privacy Framework
        or Standard Contractual Clauses.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you can ask to access, correct, delete or export your data, to restrict or object
        to its use, and to withdraw consent you have given. California and other U.S. state residents have comparable
        rights to know, delete and correct, and the right not to be discriminated against for using them. To use any of
        these rights, write to <Email />; we answer within one month.
      </p>
      <p>
        If you think we have not handled your data properly, you can complain to the data protection authority of your
        country.
      </p>

      <h2>Security</h2>
      <p>The site is served over HTTPS and we limit access to the data we hold to the people who need it.</p>

      <h2>Children</h2>
      <p>The site is aimed at businesses and is not intended for children under 16.</p>

      <h2>Changes</h2>
      <p>
        We update this policy when our practices change. The date at the top shows the latest version. See also our{' '}
        <Link href="/legal-notice">legal notice</Link> and <Link href="/terms">terms of use</Link>.
      </p>
    </>
  )
}
