import type { MetadataRoute } from 'next'
import { company, siteUrl } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(company.lastUpdated)

  return ['/', '/legal-notice', '/privacy', '/terms'].map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified,
  }))
}
