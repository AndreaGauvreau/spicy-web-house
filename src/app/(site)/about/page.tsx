import { FinalCta, PageHeader, Section, SectionHead } from '@/components/Section'
import { TrustedBy } from '@/components/TrustedBy'
import { aboutCta, aboutPage, beliefs, companyBlock, memo, stat } from '@/content/about'
import { company } from '@/content/site'
import { pageMetadata } from '@/lib/metadata'
import s from '@/components/site.module.css'

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Spicy Web House is a remote-first design and engineering studio, registered in Wyoming, United States. Meet the studio and read what we believe.',
  path: '/about',
})

export default function AboutPage() {
  const facts: [string, string, boolean?][] = [
    ['Legal name', company.legalName],
    ['Registered in', `${company.state}, United States`],
    ['Principal office', company.address],
    ['Activity', company.activity],
    ['Email', company.email, true],
    ['Working model', company.workingModel],
  ]

  return (
    <>
      <PageHeader eyebrow={aboutPage.eyebrow} title={aboutPage.headline} sub={aboutPage.sub} />

      <Section labelledBy="memo-title">
        <div className={s.aboutGrid}>
          <article className={`${s.memo} reveal`}>
            <p className={s.eyebrow} id="memo-title">
              {memo.label}
            </p>
            <p className={s.memoGreeting}>{memo.greeting}</p>
            {memo.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={s.memoSign}>
              {memo.signOff}
              <br />
              {memo.signature}
            </p>
          </article>

          <p className={`${s.stat} reveal`}>
            <span className={s.statValue}>{stat.value}</span>
            <span className={s.statLabel}>{stat.label}</span>
          </p>
        </div>
      </Section>

      <Section soft labelledBy="beliefs-title">
        <SectionHead id="beliefs-title" title={beliefs.headline} />
        <ul className={s.whyGrid}>
          {beliefs.items.map((item) => (
            <li key={item.title} className={`${s.why} reveal`}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <TrustedBy />

      <Section labelledBy="company-title">
        <SectionHead id="company-title" title={companyBlock.headline} />
        <dl className={`${s.facts} reveal`}>
          {facts.map(([label, value, isEmail]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{isEmail ? <a href={`mailto:${value}`}>{value}</a> : value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <FinalCta id="cta-title" title={aboutCta.headline} />
    </>
  )
}
