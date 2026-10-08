import { ImageResponse } from 'next/og'
import { Logo } from '@/components/Logo'
import { site } from '@/content/site'

export const alt = site.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#fff4f4',
          color: '#0d0000',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', width: 150, height: 112 }}>
            <Logo ink="#0d0000" brand="#ff5e5e" />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          <span>{site.tagline}</span>
          <span style={{ color: '#b52d2d' }}>{site.highlight}</span>
        </div>
      </div>
    ),
    size,
  )
}
