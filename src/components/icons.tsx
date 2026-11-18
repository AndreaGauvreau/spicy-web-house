type IconProps = { className?: string }

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
} as const

export function ExpandIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5 9 7M2.5 13.5 7 9" />
    </svg>
  )
}

export function CollapseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13.5 2.5 9.5 6.5M9.5 6.5v-3M9.5 6.5h3M2.5 13.5l4-4M6.5 9.5v3M6.5 9.5h-3" />
    </svg>
  )
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 10.5 11 5M6 4.5h5.5V10" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m3.5 8.5 3 3 6-7" />
    </svg>
  )
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 3v10M3 8h10" />
    </svg>
  )
}
