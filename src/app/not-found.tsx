import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'grid',
        placeContent: 'center',
        gap: 12,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0, fontSize: 28, fontWeight: 500, letterSpacing: '-0.03em' }}>Page not found</h1>
      <p style={{ margin: 0, color: 'var(--ink-2)' }}>This page does not exist or has moved.</p>
      <p style={{ margin: 0 }}>
        <Link href="/">Back to the home page</Link>
      </p>
    </main>
  )
}
