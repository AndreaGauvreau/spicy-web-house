import type { Metadata } from 'next'
import { site } from '@/content/site'

type PageMeta = {
  /** Short page title. The site name is added by the title template. */
  title: string
  description: string
  /** Route, for example /services. Becomes the canonical URL. */
  path: string
}

/** Unique title, description, canonical URL and social tags for one page. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const full = `${title} | ${site.name}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: site.name, title: full, description, url: path },
    twitter: { card: 'summary_large_image', title: full, description },
  }
}
