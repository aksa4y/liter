export default defineEventHandler(event => {
  const origin = String(useRuntimeConfig(event).public.siteUrl).replace(/\/$/, '')
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return `User-agent: *\nAllow: /\nDisallow: /favorites\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`
})
