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

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m3.5 3.5 9 9M12.5 3.5l-9 9" />
    </svg>
  )
}
