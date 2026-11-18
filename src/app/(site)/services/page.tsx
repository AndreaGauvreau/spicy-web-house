import { ContactButton } from '@/components/Button'
import { Faq } from '@/components/Faq'
import { CheckIcon } from '@/components/icons'
import { FinalCta, PageHeader, Section, SectionHead } from '@/components/Section'
import { TrustedBy } from '@/components/TrustedBy'
import { servicesFaq } from '@/content/faq'
import { audiences, oneHouse, services, servicesCta, servicesPage } from '@/content/services'
import { pageMetadata } from '@/lib/metadata'
import s from '@/components/site.module.css'

export const metadata = pageMetadata({
  title: 'Services',
  description:
    'Websites, web apps, mobile apps, brand and motion. One team designs and builds everything your product needs on the web, from first prototype to launch.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow={servicesPage.eyebrow} title={servicesPage.headline} sub={servicesPage.sub}>
        <ContactButton arrow />
      </PageHeader>

      <Section>
        {services.map((service) => (
          <article key={service.id} id={service.id} className={s.service} aria-labelledby={`${service.id}-title`}>
            <div className={`${s.serviceHead} reveal`}>
              <p className={s.eyebrow}>{service.label}</p>
              <h2 id={`${service.id}-title`}>{service.headline}</h2>
              <p>{service.body}</p>
            </div>
            <div className={`${s.included} reveal`}>
              <h3 className={s.includedTitle}>{"What's included"}</h3>
              <ul className={s.includedList}>
                {service.included.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.greatFor ? (
                <p className={s.greatFor}>
                  <strong>Great for:</strong> {service.greatFor}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </Section>

      <Section soft labelledBy="audience-title">
        <SectionHead id="audience-title" title={audiences.headline} intro={audiences.intro} />
        <ul className={s.audienceGrid}>
          {audiences.items.map((item) => (
            <li key={item} className={`${s.audienceItem} reveal`}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="one-house-title">
        <div className={s.statement}>
          <h2 id="one-house-title" className={`${s.title} reveal`}>
            {oneHouse.headline}
          </h2>
          <p className={`${s.statementBody} reveal`}>{oneHouse.body}</p>
        </div>
      </Section>

      <TrustedBy />

      <Section labelledBy="faq-title">
        <div className={s.faqLayout}>
          <SectionHead id="faq-title" title="Common questions" />
          <Faq items={servicesFaq} />
        </div>
      </Section>

      <FinalCta id="cta-title" title={servicesCta.headline} body={servicesCta.body} />
    </>
  )
}
