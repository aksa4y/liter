export function usePageSeo(
  title: string,
  description: string,
  noindex = false,
  keywords: string[] = [],
  ogType: 'website' | 'article' = 'website'
) {
  const config = useRuntimeConfig()
  const route = useRoute()
  const origin = String(config.public.siteUrl).replace(/\/$/, '')
  const canonical = origin ? `${origin}${route.path}` : undefined
  const websiteId = origin ? `${origin}/#website` : undefined
  const structuredData = origin ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: origin,
        name: 'Pixelhav',
        description: 'Русскоязычный каталог шрифтов с кириллицей и журнал о типографике.',
        inLanguage: 'ru-RU'
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: `${title} — Pixelhav`,
        description,
        inLanguage: 'ru-RU',
        isPartOf: { '@id': websiteId }
      }
    ]
  } : undefined

  useSeoMeta({
    title,
    description,
    keywords: keywords.length ? keywords.join(', ') : undefined,
    ogTitle: `${title} — Pixelhav`,
    ogDescription: description,
    ogType,
    ogLocale: 'ru_RU',
    ogUrl: canonical,
    ogImage: origin ? `${origin}/images/letter-clouds.webp` : undefined,
    ogImageAlt: 'Розовая буква среди облаков — Pixelhav',
    twitterCard: 'summary_large_image',
    ...(noindex ? { robots: 'noindex,follow' } : {})
  })

  if (origin) useHead({
    link: [{ rel: 'canonical', href: canonical }],
    script: structuredData ? [{
      key: 'page-structured-data',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData)
    }] : []
  })
}
