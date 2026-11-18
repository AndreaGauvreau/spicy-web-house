import type { Metadata } from 'next'
import Link from 'next/link'
import { ButtonLink } from '@/components/Button'
import { Faq } from '@/components/Faq'
import { ArrowIcon } from '@/components/icons'
import { FinalCta, Section, SectionHead, enterStyle } from '@/components/Section'
import { Showreel } from '@/components/Showreel'
import { TrustedBy } from '@/components/TrustedBy'
import { WorkCard } from '@/components/WorkCard'
import { faqHeadline, homeFaq } from '@/content/faq'
import { homeCta, hero, howWeWork, makes, selectedWork, statement, toolkit, why } from '@/content/home'
import { company, site, siteUrl } from '@/content/site'
import { projects } from '@/content/work'
import { openGraphImages, twitterImages } from '@/lib/metadata'
import home from '@/components/home.module.css'
import s from '@/components/site.module.css'

const title = `${site.name} | Websites, web apps and mobile apps`

export const metadata: Metadata = {
  title: { absolute: title },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title,
    description: site.description,
    url: '/',
    images: openGraphImages,
  },
  twitter: { card: 'summary_large_image', title, description: site.description, images: twitterImages },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: company.legalName,
  url: siteUrl,
  email: company.email,
  logo: `${siteUrl}/apple-icon.png`,
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.addressParts.street,
    addressLocality: company.addressParts.city,
    addressRegion: company.addressParts.region,
    postalCode: company.addressParts.postalCode,
    addressCountry: company.addressParts.countryCode,
  },
}

export default function HomePage() {
  const [before, after] = hero.headline.split(hero.highlight)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={home.hero} aria-labelledby="hero-title">
        <div className={s.container}>
          <div className={home.heroRow}>
            <div className={home.heroText}>
              <h1 id="hero-title" className={`${home.heroTitle} enter`} style={enterStyle(0)}>
                {before}
                <span className={s.highlight}>{hero.highlight}</span>
                {after}
              </h1>
              <p className={`${home.heroSub} enter`} style={enterStyle(1)}>
                {hero.sub}
              </p>
            </div>
            <div className={`${home.heroActions} enter`} style={enterStyle(2)}>
              <ButtonLink href="/work" arrow>
                {hero.secondary}
              </ButtonLink>
            </div>
          </div>

          <div className={`${home.mediaWrap} enter`} style={enterStyle(3)}>
            <Showreel />
          </div>
        </div>
      </section>

      <TrustedBy />

      <Section labelledBy="statement-title">
        <div className={s.statement}>
          <h2 id="statement-title" className={`${s.title} reveal`}>
            {statement.headline}
          </h2>
          <p className={`${s.statementBody} reveal`}>{statement.body}</p>
        </div>
      </Section>

      <Section soft labelledBy="makes-title">
        <SectionHead id="makes-title" title={makes.headline} intro={makes.intro} />
        <div className={s.grid2}>
          {makes.items.map((item) => (
            <article key={item.title} className={`${s.card} reveal`}>
              <span className={s.num}>{item.n}</span>
              <h3 className={s.cardTitle}>{item.title}</h3>
              <p className={s.cardBody}>{item.body}</p>
              <Link href={item.href} className={s.textLink}>
                {item.link}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section labelledBy="why-title">
        <SectionHead id="why-title" title={why.headline} />
        <ul className={s.whyGrid}>
          {why.items.map((item) => (
            <li key={item.title} className={`${s.why} reveal`}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section soft labelledBy="work-title">
        <SectionHead id="work-title" title={selectedWork.headline} intro={selectedWork.intro} />
        <div className={`${s.workGrid} ${s.workGrid3}`}>
          {projects.map((project, index) => (
            <WorkCard key={project.name} project={project} index={index} />
          ))}
        </div>
        <div className={s.moreWrap}>
          <ButtonLink href="/work" variant="ghost" arrow>
            {selectedWork.button}
          </ButtonLink>
        </div>
      </Section>

      <Section labelledBy="process-title">
        <SectionHead id="process-title" title={howWeWork.headline} intro={howWeWork.intro} />
        <ol className={s.steps}>
          {howWeWork.steps.map((step) => (
            <li key={step.n} className={`${s.step} reveal`}>
              <span className={s.stepNum} aria-hidden="true">
                {step.n}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className={`${s.expect} reveal`}>
          <p className={s.expectLabel}>{howWeWork.expectLabel}:</p>
          <ul className={s.chips}>
            {howWeWork.expect.map((item) => (
              <li key={item} className={`${s.chip} ${s.chipSoft}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section soft labelledBy="toolkit-title">
        <SectionHead id="toolkit-title" title={toolkit.headline} intro={toolkit.body} />
        <ul className={`${s.chips} ${s.tools} reveal`}>
          {toolkit.tools.map((tool) => (
            <li key={tool} className={s.chip}>
              {tool}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="faq-title">
        <div className={s.faqLayout}>
          <SectionHead id="faq-title" title={faqHeadline} />
          <Faq items={homeFaq} />
        </div>
      </Section>

      <FinalCta id="cta-title" title={homeCta.headline} body={homeCta.body} secondaryPrefix={homeCta.secondaryPrefix} />
    </>
  )
}
