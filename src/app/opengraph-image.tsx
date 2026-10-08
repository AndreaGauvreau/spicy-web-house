import { ImageResponse } from 'next/og'
import { FLAME_PATH } from '@/components/icons'
import { site } from '@/content/site'

export const alt = site.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
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
        <svg
          width="620"
          height="700"
          viewBox="-20 0 657 720"
          style={{ position: 'absolute', left: -120, bottom: -260 }}
        >
          <path d={FLAME_PATH} fill="#f6d6d4" fillRule="evenodd" />
        </svg>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 34, fontWeight: 800 }}>
          <svg width="40" height="44" viewBox="-20 0 657 720">
            <path d={FLAME_PATH} fill="#ff5e5e" fillRule="evenodd" />
          </svg>
          <span>SPICY</span>
          <span style={{ background: '#ff5e5e', padding: '4px 12px', borderRadius: 10 }}>WEB</span>
          <span>HOUSE</span>
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
