import { Home } from '@/components/Home'
import { site, siteUrl } from '@/content/site'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: siteUrl,
    description: site.description,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home year={new Date().getFullYear()} />
    </>
  )
}
