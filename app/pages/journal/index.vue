<script setsp lang="ts">
import { articles } from '~/data/articles'
ssePageSeo('Журнал о типографике', 'Как выбирать и сочетать шрифты, настраивать интервалы и работать с кириллицей. Понятные материалы о типографике от Pixelhav.')
</script>
<template><div class="page-content content-pad"><div class="page-heading"><span class="eyebrow">Читать между строк</span><h1>Журнал о типографике</h1><p>О буквах, смыслах и хорошем дизайне. Без сложных слов.</p></div><div class="article-grid journal-grid"><ArticleCard v-for="article in articles" :key="article.slug" :article="article" /></div><AdSlot /></div></template>
