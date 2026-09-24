export function usePageSeo(title: string, description: string, noindex = false) {
  const config = useRuntimeConfig()
  const route = useRoute()
  const origin = String(config.public.siteUrl).replace(/\/$/, '')
  useSeoMeta({ title, description, ogTitle: `${title} — Pixelhav`, ogDescription: description, ogType: 'website', ogLocale: 'ru_RU', ...(noindex ? { robots: 'noindex,follow' } : {}) })
  if (origin) useHead({ link: [{ rel: 'canonical', href: `${origin}${route.path}` }] })
}
