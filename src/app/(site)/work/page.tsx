import { FinalCta, PageHeader, Section } from '@/components/Section'
import { TrustedBy } from '@/components/TrustedBy'
import { WorkCard } from '@/components/WorkCard'
import { projects, workPage } from '@/content/work'
import { pageMetadata } from '@/lib/metadata'
import s from '@/components/site.module.css'

export const metadata = pageMetadata({
  title: 'Work',
  description:
    'Selected work by Spicy Web House: websites for Blackbox AI, WinningHunter, Tied, Alexandrie, Everything To Gain and Trust, from AI tools to e-commerce.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow={workPage.eyebrow} title={workPage.headline} sub={workPage.sub} />

      <TrustedBy />

      <Section labelledBy="projects-title">
        <h2 id="projects-title" className="sr-only">
          Projects
        </h2>
        <div className={s.workGrid}>
          {projects.map((project, index) => (
            <WorkCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </Section>

      <FinalCta id="cta-title" title={workPage.cta.headline} body={workPage.cta.body} />
    </>
  )
}
