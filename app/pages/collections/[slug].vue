<script setup lang="ts">
import { collections } from '~/data/collections'
import { fonts } from '~/data/fonts'
const route = useRoute()
const collection = collections.find(item => item.slug === route.params.slug)
if (!collection) throw createError({ statusCode: 404, statusMessage: 'Подборка не найдена' })
const collectionKeywords: Record<string, string[]> = {
  'quiet-luxury': ['шрифты для обложек', 'антиква с кириллицей', 'шрифты для редакционного дизайна'],
  digital: ['шрифты для интерфейсов', 'шрифты для сайтов и приложений', 'шрифты для UI'],
  loud: ['шрифты для выразительных заголовков', 'акцидентные шрифты', 'декоративные шрифты']
}
usePageSeo(
  `${collection.title} — подборка шрифтов с кириллицей`,
  `${collection.description} В подборке — живой предпросмотр, сведения об авторах и лицензии OFL.`,
  false,
  ['подборка шрифтов', collection.title.toLowerCase(), 'шрифты с кириллицей', ...(collectionKeywords[collection.slug] || [])]
)
const selected = collection.fontSlugs.map(slug => fonts.find(font => font.slug === slug)!)
</script>
<template><div v-if="collection" class="page-content content-pad"><NuxtLink to="/collections" class="back-link">← Все подборки</NuxtLink><section class="collection-detail-hero" :style="{ background: collection.color, color: collection.ink }"><div><span class="eyebrow">Коллекция / {{ collection.count }} шрифта</span><h1>{{ collection.title }}</h1><p>{{ collection.description }}</p></div><span :style="{ fontFamily: `'${collection.family}'` }">{{ collection.specimen }}</span></section><div class="font-grid two-column"><FontCard v-for="font in selected" :key="font.slug" :font="font" /></div><AdSlot /></div></template>
