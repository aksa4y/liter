export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      titleTemplate: '%s — Литера',
      meta: [{ name: 'theme-color', content: '#d9edf7' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preload', href: '/fonts/onest.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: '',
      yandexRtbBannerId: '',
      yandexRtbArticleId: '',
      adsPreview: false
    }
  },
  hooks: {
    'nitro:config'(config) {
      if (config.static) {
        config.prerender ||= {}
        config.prerender.crawlLinks = true
        config.prerender.routes = [...(config.prerender.routes || []), '/sitemap.xml', '/robots.txt']
      }
    }
  },
  typescript: { strict: true }
})
