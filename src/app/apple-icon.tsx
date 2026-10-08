import { ImageResponse } from 'next/og'
import { FLAME_PATH } from '@/components/icons'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff4f4',
        }}
      >
        <svg width="112" height="126" viewBox="-20 0 657 720">
          <path d={FLAME_PATH} fill="#ff5e5e" fillRule="evenodd" />
        </svg>
      </div>
    ),
    size,
  )
}
