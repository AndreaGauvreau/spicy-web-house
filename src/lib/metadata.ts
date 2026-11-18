import type { Metadata } from 'next'
import { site } from '@/content/site'

/**
 * Social preview images (src/app/opengraph-image.jpg and twitter-image.jpg). A page that sets its own
 * openGraph or twitter metadata replaces the ones from the root, so the images are named again here.
 */
export const openGraphImages = [{ url: '/opengraph-image.jpg', width: 809, height: 406, alt: site.name }]
export const twitterImages = [{ url: '/twitter-image.jpg', alt: site.name }]

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
    openGraph: { type: 'website', siteName: site.name, title: full, description, url: path, images: openGraphImages },
    twitter: { card: 'summary_large_image', title: full, description, images: twitterImages },
  }
}
