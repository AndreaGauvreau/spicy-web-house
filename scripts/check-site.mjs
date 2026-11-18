// Crawls a running copy of the site and reports problems.
//
//   npm run build && npm start        (in one terminal)
//   npm run check:site                (in another; or pass a URL: node scripts/check-site.mjs https://www.spicy-web-house.com)
//
// Checks: every page answers 200; every internal link, anchor and external link works; every page has one h1,
// a unique title and description, a canonical URL and no noindex; images have alt text and load; and the
// rendered text contains none of the forbidden strings ("[", TODO, lorem, the previous studio name, "coming soon",
// em and en dashes). Exits with code 1 when something is wrong.

const base = (process.argv[2] ?? process.env.SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '')
const baseUrl = new URL(base)
const PUBLIC_HOSTS = new Set([baseUrl.host, 'www.spicy-web-house.com', 'spicy-web-house.com'])
const UA = 'Mozilla/5.0 (compatible; site-check/1.0)'

const errors = []
const warnings = []
const fail = (page, message) => errors.push(`${page}  ${message}`)
const warn = (page, message) => warnings.push(`${page}  ${message}`)

const FORBIDDEN = [
  [/\[/, '"[" in visible text'],
  [/todo/i, 'TODO'],
  [/lorem/i, 'lorem'],
  [/kuartz/i, 'previous studio name'],
  [/coming soon/i, '"coming soon"'],
  [/—/, 'em dash'],
  [/–/, 'en dash'],
]

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))

const visibleText = (html) =>
  decode(
    html
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<(script|style|noscript|template)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'))
  return m ? decode(m[2] ?? m[3]) : undefined
}

const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? []

/** Local path for an internal URL, or null when the URL is external. */
function internalPath(href, from) {
  let url
  try {
    url = new URL(href, `${base}${from}`)
  } catch {
    return null
  }
  if (!/^https?:$/.test(url.protocol) || !PUBLIC_HOSTS.has(url.host)) return null
  return url.pathname.replace(/\/$/, '') || '/'
}

const pages = new Map() // path -> { html, status }

async function load(path) {
  if (pages.has(path)) return pages.get(path)
  const res = await fetch(`${base}${path}`, { headers: { 'user-agent': UA }, redirect: 'follow' })
  const html = res.headers.get('content-type')?.includes('text/html') ? await res.text() : ''
  const entry = { status: res.status, html }
  pages.set(path, entry)
  return entry
}

const externalCache = new Map()
async function checkExternal(url) {
  if (externalCache.has(url)) return externalCache.get(url)
  let result
  try {
    let res = await fetch(url, { method: 'HEAD', headers: { 'user-agent': UA }, redirect: 'follow' })
    if (res.status >= 400) res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' })
    result = res.status
  } catch (error) {
    result = `unreachable (${error.cause?.code ?? error.message})`
  }
  externalCache.set(url, result)
  return result
}

// 1. Pages: the sitemap plus everything reachable from the home page.
const queue = ['/']
try {
  const sitemap = await (await fetch(`${base}/sitemap.xml`, { headers: { 'user-agent': UA } })).text()
  for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = internalPath(loc, '/')
    if (path) queue.push(path)
  }
} catch {
  fail('/sitemap.xml', 'could not be fetched')
}

const seen = new Set()
const links = [] // { from, href }
while (queue.length) {
  const path = queue.shift()
  if (seen.has(path)) continue
  seen.add(path)

  const page = await load(path)
  if (page.status !== 200) {
    fail(path, `answers ${page.status}`)
    continue
  }
  for (const tag of tags(page.html, 'a')) {
    const href = attr(tag, 'href')
    if (!href) continue
    links.push({ from: path, href })
    const target = internalPath(href, path)
    if (target && !seen.has(target) && !/\.(png|jpe?g|svg|ico|xml|txt|webp|mp4)$/i.test(target)) queue.push(target)
  }
}

// 2. Per-page checks.
const titles = new Map()
const descriptions = new Map()
for (const [path, { status, html }] of pages) {
  if (status !== 200) continue

  const h1s = (html.match(/<h1\b/gi) ?? []).length
  if (h1s !== 1) fail(path, `has ${h1s} h1 elements (expected 1)`)

  const title = decode((html.match(/<title>([^<]*)<\/title>/i) ?? [])[1] ?? '')
  if (!title) fail(path, 'has no title')
  else if (titles.has(title)) fail(path, `shares its title with ${titles.get(title)}`)
  else titles.set(title, path)

  const meta = tags(html, 'meta')
  const description = meta.map((t) => (attr(t, 'name') === 'description' ? attr(t, 'content') : undefined)).find(Boolean)
  if (!description) fail(path, 'has no meta description')
  else if (descriptions.has(description)) fail(path, `shares its description with ${descriptions.get(description)}`)
  else descriptions.set(description, path)

  const ogImage = meta.map((t) => (attr(t, 'property') === 'og:image' ? attr(t, 'content') : undefined)).find(Boolean)
  if (!ogImage) fail(path, 'has no og:image (social preview)')
  else {
    const local = internalPath(ogImage, path)
    if (local && !(await fetch(`${base}${local}`, { headers: { 'user-agent': UA } })).ok) fail(path, `og:image does not load: ${ogImage}`)
  }

  const canonical = tags(html, 'link')
    .map((t) => (attr(t, 'rel') === 'canonical' ? attr(t, 'href') : undefined))
    .find(Boolean)
  if (!canonical) fail(path, 'has no canonical URL')

  if (meta.some((t) => attr(t, 'name') === 'robots' && /noindex/i.test(attr(t, 'content') ?? ''))) {
    fail(path, 'is marked noindex')
  }

  const text = visibleText(html)
  for (const [pattern, label] of FORBIDDEN) {
    const m = text.match(pattern)
    if (m) {
      const at = m.index ?? 0
      fail(path, `visible text contains ${label}: …${text.slice(Math.max(0, at - 30), at + 30).replace(/\s+/g, ' ')}…`)
    }
  }
  // The raw HTML too: attributes, URLs, metadata.
  const raw = decode(html.replace(/<script[^>]*type="application\/ld\+json"[\s\S]*?<\/script>/gi, ''))
  if (/kuartz/i.test(raw)) fail(path, 'the previous studio name appears in the HTML source')
  if (/[–—]/.test(raw.replace(/<script[\s\S]*?<\/script>/gi, ''))) fail(path, 'a dash character appears in the HTML source')

  for (const tag of tags(html, 'img')) {
    if (attr(tag, 'alt') === undefined) fail(path, `image without alt attribute: ${attr(tag, 'src')}`)
    const src = attr(tag, 'src')
    if (src && src.startsWith('/')) {
      const res = await fetch(`${base}${src}`, { headers: { 'user-agent': UA } })
      if (!res.ok) fail(path, `image does not load (${res.status}): ${src}`)
    }
  }
}

// 3. Links.
const checked = new Set()
let external = 0
for (const { from, href } of links) {
  const key = `${from} ${href}`
  if (checked.has(key)) continue
  checked.add(key)

  if (href.startsWith('mailto:')) {
    if (!/^mailto:[^@\s]+@[^@\s]+\.[^@\s]+/.test(href)) fail(from, `bad mailto link: ${href}`)
    continue
  }
  if (href.startsWith('tel:') || href.startsWith('javascript:')) continue

  const target = internalPath(href, from)
  if (target !== null) {
    const hash = new URL(href, `${base}${from}`).hash.slice(1)
    const page = await load(target)
    if (page.status !== 200) fail(from, `link to ${href} answers ${page.status}`)
    else if (hash && !new RegExp(`\\sid=["']${hash}["']`).test(page.html)) fail(from, `link to ${href}: no element with id "${hash}"`)
    continue
  }

  external += 1
  const status = await checkExternal(href)
  if (typeof status === 'number' && status < 400) continue
  if (typeof status === 'number' && [401, 403, 429, 999].includes(status)) {
    warn(from, `external link ${href} answers ${status} (the site may block automated checks)`)
  } else {
    fail(from, `external link ${href} answers ${status}`)
  }
}

// 4. Report.
console.log(`\nChecked ${pages.size} pages, ${checked.size} links (${external} external) on ${base}\n`)
for (const w of warnings) console.warn(`  warning  ${w}`)
for (const e of errors) console.error(`  ERROR    ${e}`)
if (errors.length) {
  console.error(`\n✗ ${errors.length} problem(s)\n`)
  process.exit(1)
}
console.log(`✓ No broken links, no forbidden strings, metadata complete${warnings.length ? ` (${warnings.length} warning(s))` : ''}\n`)
