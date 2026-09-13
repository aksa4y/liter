import { fonts } from '../../app/data/fonts'
import { collections } from '../../app/data/collections'
import { articles } from '../../app/data/articles'
export default defineEventHandler(event => {
  const config = useRuntimeConfig(event)
  const origin = String(config.public.siteUrl).replace(/\/$/, '')
  const paths = ['/', '/fonts', '/collections', '/pairs', '/journal', '/about', '/privacy', ...fonts.map(f => `/fonts/${f.slug}`), ...collections.map(c => `/collections/${c.slug}`), ...articles.map(a => `/journal/${a.slug}`)]
  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin ? paths.map(path => `<url><loc>${escape(`${origin}${path}`)}</loc></url>`).join('') : ''}</urlset>`
})
