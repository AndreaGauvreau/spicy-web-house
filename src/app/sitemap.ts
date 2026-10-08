import type { MetadataRoute } from 'next'
import { company } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
  const lastModified = new Date(company.lastUpdated)

  return ['/', '/legal-notice', '/privacy', '/terms'].map((path) => ({
    url: `${origin}${path === '/' ? '' : path}`,
    lastModified,
  }))
}
