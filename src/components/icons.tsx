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

/** The cursor from the logo, used on its own for the call to action. */
export function CursorIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="160 298 290 260"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M432.097 337.375L316.551 537.192C307.242 553.285 283.054 549.386 279.241 531.182L261.316 445.603C260.178 440.115 256.81 435.371 252.057 432.441L177.659 386.87C161.814 377.159 166.246 352.996 184.492 349.568L410.879 307.226C427.888 304.047 440.762 322.35 432.097 337.375Z" />
    </svg>
  )
}
