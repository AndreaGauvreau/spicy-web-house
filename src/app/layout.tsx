import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { site } from '@/content/site'
import './globals.css'

const geist = Geist({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-geist',
})

const origin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(origin),
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
