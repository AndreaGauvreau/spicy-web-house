// Full-page screenshots of every page, desktop (1440 px) and mobile (390 px), into ./screenshots.
//
//   npm run build && npm start        (in one terminal)
//   npm run screenshots               (in another; or pass a URL: node scripts/screenshots.mjs http://localhost:3000)
//
// Uses the Google Chrome installed on the machine, or Playwright's own Chromium if there is none.
import { mkdirSync } from 'node:fs'
import { chromium } from 'playwright'

const base = (process.argv[2] ?? process.env.SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '')
const routes = [
  ['home', '/'],
  ['services', '/services'],
  ['work', '/work'],
  ['about', '/about'],
  ['contact', '/contact'],
  ['legal-notice', '/legal-notice'],
  ['privacy', '/privacy'],
  ['terms', '/terms'],
  ['not-found', '/this-page-does-not-exist'],
]
const viewports = [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
]

mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch())

for (const [device, viewport] of viewports) {
  // Reduced motion shows every block in place; the page is still scrolled through once so lazy parts load.
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' })
  const page = await context.newPage()
  const consoleErrors = []
  let current = ''
  page.on('console', (message) => {
    // The 404 page itself makes the browser log "Failed to load resource": expected, not an error of the site.
    if (message.type() === 'error' && current !== 'not-found') consoleErrors.push(`${current}: ${message.text()}`)
  })
  page.on('pageerror', (error) => consoleErrors.push(`${current}: ${error.message}`))

  for (const [name, path] of routes) {
    current = name
    await page.goto(`${base}${path}`, { waitUntil: 'networkidle' })
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y)
        await new Promise((resolve) => setTimeout(resolve, 60))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(500)
    await page.screenshot({ path: `screenshots/${name}-${device}.png`, fullPage: true })

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    console.log(`${device.padEnd(7)} ${name.padEnd(13)} ok${overflow > 0 ? `  (horizontal overflow: ${overflow}px)` : ''}`)
  }
  if (consoleErrors.length) console.error(`console errors on ${device}:\n  ` + [...new Set(consoleErrors)].join('\n  '))
  await context.close()
}

await browser.close()
console.log('\nScreenshots are in ./screenshots')
