import { ImageResponse } from 'next/og'
import { FLAME_PATH } from '@/components/icons'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="57" height="64" viewBox="-20 0 657 720">
          <path d={FLAME_PATH} fill="#ff5e5e" fillRule="evenodd" />
        </svg>
      </div>
    ),
    size,
  )
}
