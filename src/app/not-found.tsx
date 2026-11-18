import { ButtonLink } from '@/components/Button'
import { PageHeader } from '@/components/Section'
import { SiteShell } from '@/components/SiteShell'
import s from '@/components/site.module.css'

export default function NotFound() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="404"
        title="Page not found."
        sub="This page does not exist or has moved. Head back to the home page, or tell us what you were looking for."
      >
        <ButtonLink href="/" arrow>
          Back to the home page
        </ButtonLink>
        <ButtonLink href="/contact" variant="ghost">
          Contact us
        </ButtonLink>
      </PageHeader>
      <div className={s.container} style={{ paddingBottom: 96 }} />
    </SiteShell>
  )
}
