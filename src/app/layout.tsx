import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { site, siteUrl } from '@/content/site'
import './globals.css'

const geist = Geist({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-geist',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Web design & development`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — Web design & development`,
    description: site.description,
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#fff4f4',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  )
}
