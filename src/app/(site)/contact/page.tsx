import { ContactForm } from '@/components/ContactForm'
import { PageHeader } from '@/components/Section'
import { booking, company } from '@/content/site'
import { contactPage, nextSteps, reassurance } from '@/content/contact'
import { pageMetadata } from '@/lib/metadata'
import styles from '@/components/contact.module.css'
import s from '@/components/site.module.css'

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Book a free intro call or send Spicy Web House a few lines about your project. We read every message and reply personally.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={contactPage.eyebrow} title={contactPage.headline} sub={contactPage.sub} />

      <div className={s.container}>
        <div className={styles.layout}>
          <div className={`${styles.formCard} reveal`}>
            <ContactForm />
          </div>

          <aside className={styles.aside} aria-label="Contact details">
            <section className={`${styles.panel} reveal`} aria-labelledby="direct-title">
              <h2 id="direct-title" className={styles.panelTitle}>
                Direct contact
              </h2>
              <dl className={styles.contactList}>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Call</dt>
                  <dd>
                    <a href="#contact-form">{booking.label}</a>
                  </dd>
                </div>
                <div>
                  <dt>Company</dt>
                  <dd>
                    {company.legalName}, registered in {company.state}, United States
                    <br />
                    {company.address}
                  </dd>
                </div>
              </dl>
            </section>

            <section className={`${styles.panel} reveal`} aria-labelledby="next-title">
              <h2 id="next-title" className={styles.panelTitle}>
                {nextSteps.headline}
              </h2>
              <ol className={styles.nextList}>
                {nextSteps.steps.map((step, index) => (
                  <li key={step}>
                    <span className={styles.nextNum} aria-hidden="true">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <p className={`${styles.reassure} reveal`}>{reassurance}</p>
          </aside>
        </div>
      </div>
    </>
  )
}
