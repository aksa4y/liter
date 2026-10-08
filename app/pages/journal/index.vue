<script setup lang="ts">
import { articles } from '~/data/articles'
usePageSeo(
  'Журнал о типографике и шрифтах',
  'Практические статьи о том, как выбрать шрифт с кириллицей, сочетать гарнитуры и настроить кернинг, трекинг и межстрочный интервал.',
  false,
  ['типографика', 'как выбрать шрифт', 'сочетание шрифтов', 'кернинг', 'трекинг', 'межстрочный интервал', 'кириллические шрифты']
)
</script>
<template><div class="page-content content-pad"><div class="page-heading"><span class="eyebrow">Читать между строк</span><h1>Журнал о типографике</h1><p>О буквах, смыслах и хорошем дизайне. Без сложных слов.</p></div><div class="article-grid journal-grid"><ArticleCard v-for="article in articles" :key="article.slug" :article="article" /></div><AdSlot /></div></template>
