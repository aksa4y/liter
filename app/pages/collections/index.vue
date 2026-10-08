<script setup lang="ts">
import { collections } from '~/data/collections'
usePageSeo(
  'Подборки шрифтов для сайтов и дизайна',
  'Тематические подборки шрифтов с кириллицей: гарнитуры для интерфейсов, выразительных заголовков и редакционного дизайна.',
  false,
  ['подборки шрифтов', 'шрифты для сайта', 'шрифты для интерфейса', 'шрифты для заголовков', 'шрифты с кириллицей', 'шрифты для дизайна']
)
</script>
<template><div class="page-content content-pad"><div class="page-heading"><span class="eyebrow">Подобрано с чувством</span><h1>Подборки</h1><p>Меньше поисков. Больше точных попаданий.</p></div><div class="collection-grid"><CollectionCard v-for="collection in collections" :key="collection.slug" :collection="collection" /></div><AdSlot /></div></template>
