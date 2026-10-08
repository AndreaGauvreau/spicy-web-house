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

/** The Spicy Web House mark: a flame with the cursor cut out of it. */
export const FLAME_PATH =
  'M631.82 349.717C631.795 349.593 630.582 343.708 630.31 342.54C604.611 208.584 508.896 118.683 389.563 95.0163C389.365 94.9917 389.241 94.9666 389.043 94.9169C275.651 69.7846 249.259 0 249.259 0C249.259 0 150.747 63.0545 108.832 164.701L108.782 164.776C108.733 164.776 108.733 164.85 108.733 164.85H108.683C106.059 164.925 49.388 166.415 39.0886 143.145C39.0886 143.145 -18.3252 342.366 6.01196 458.293C37.4794 640.875 195.906 745.329 372.48 714.708C548.237 684.211 663.287 532.3 631.82 349.717ZM432.097 337.375L316.551 537.192C307.242 553.285 283.054 549.386 279.241 531.182L261.316 445.603C260.178 440.115 256.81 435.371 252.057 432.441L177.659 386.87C161.814 377.159 166.246 352.996 184.492 349.568L410.879 307.226C427.888 304.047 440.762 322.35 432.097 337.375Z'

export function FlameMark({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="-20 0 657 720"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path fillRule="evenodd" d={FLAME_PATH} />
    </svg>
  )
}

/** The cursor from the mark, used on its own for the call to action. */
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
