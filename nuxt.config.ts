export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      titleTemplate: '%s — Pixelhav',
      meta: [{ name: 'theme-color', content: '#d9edf7' }],
      script: [
        { innerHTML: `(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=11301040","ym");
ym(11301040,"init",{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",accurateTrackBounce:true,trackLinks:true});` },
        { innerHTML: 'window.yaContextCb = window.yaContextCb || [];' },
        { src: 'https://yandex.ru/ads/system/context.js', async: true, id: 'yandex-context-script' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preload', href: '/fonts/onest.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://pixelhav.ru',
      yandexRtbBannerId: 'R-A-20107695-1',
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
