// Lists what is still a stand-in before launch.
// Warns by default; set STRICT_PLACEHOLDERS=1 (e.g. on the Vercel production env) to fail the build instead.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = join(process.cwd(), 'src', 'content')
const hits = []

for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  readFileSync(join(dir, file), 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (/^\s*(\/\/|\*|\/\*)/.test(line)) return
      if ((line.includes('__TODO__') || /:\s*TODO\b/.test(line)) && !line.includes('export const TODO')) {
        hits.push(`${file}:${i + 1}  ${line.trim()}`)
      } else if (/placeholder:\s*true/.test(line)) {
        hits.push(`${file}:${i + 1}  stand-in content (placeholder: true)`)
      }
    })
}

if (hits.length === 0) {
  console.log('✓ No placeholders left in src/content')
  process.exit(0)
}

console.warn(`\n⚠ ${hits.length} placeholder(s) still to fill before launch:\n`)
for (const h of hits) console.warn('  ' + h)
console.warn('')

if (process.env.STRICT_PLACEHOLDERS === '1') {
  console.error('STRICT_PLACEHOLDERS=1: failing the build.')
  process.exit(1)
}
