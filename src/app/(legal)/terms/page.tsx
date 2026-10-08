import type { Metadata } from 'next'
import Link from 'next/link'
import { Val } from '@/components/Val'
import { formatDate } from '@/content/format'
import { company } from '@/content/site'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Terms of use',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <h1>Terms of use</h1>
      <p className={styles.sub}>Last updated {formatDate(company.lastUpdated)}</p>

      <p>
        These terms cover your use of this website, operated by {company.legalName}. By using the site you agree to
        them. If you do not agree, please do not use the site.
      </p>

      <h2>What the site is</h2>
      <p>
        The site presents our work and lets you book a call. It is not an offer to contract. Any project we do is
        governed by a separate written agreement signed by both sides.
      </p>

      <h2>Using the site</h2>
      <p>
        You may browse the site and use its content for your own information. You agree not to disrupt it, attempt to
        gain unauthorised access, scrape it at a scale that affects its operation, or use it for anything unlawful.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content of the site belongs to {company.legalName} or its licensors, as described in the{' '}
        <Link href="/legal-notice">legal notice</Link>. These terms give you no right to use our name, logo or work
        beyond viewing the site.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided as is and as available. We do not promise that it will be uninterrupted, error-free or
        that its content is complete or current.
      </p>

      <h2>Limit of liability</h2>
      <p>
        To the extent the law allows, {company.legalName} and its members are not liable for indirect, incidental or
        consequential damages arising from your use of the site. Nothing here limits liability that cannot be limited
        by law.
      </p>

      <h2>Third-party links and services</h2>
      <p>
        Links and services operated by others, such as the scheduling tool, are outside our control and are used under
        their own terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of <Val>{company.state}</Val>, United States. Courts located
        there have jurisdiction, subject to any mandatory rights you have as a consumer where you live.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows the latest version; continued use means you accept it.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <Val>{company.email}</Val>. Personal data is covered in the{' '}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </>
  )
}
