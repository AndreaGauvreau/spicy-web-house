import type { MetadataRoute } from 'next'
import { company, siteUrl } from '@/content/site'

/** Every public page. Keep in step with the routes under src/app. */
const routes = ['/', '/services', '/work', '/about', '/contact', '/legal-notice', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(company.lastUpdated)

  return routes.map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified,
  }))
}
