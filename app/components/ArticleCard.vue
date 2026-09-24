<script setup lang="ts">
import type { Article } from '~/data/articles'
defineProps<{ article: Article }>()
</script>
<template><article class="article-card"><NuxtLink :to="`/journal/${article.slug}`" class="article-art" :style="{ background: article.color, color: article.ink }" :aria-label="article.title"><span>{{ article.cover }}</span><i>pixelhav / журнал</i></NuxtLink><div class="article-meta"><span>{{ article.category }}</span><span>{{ article.minutes }} мин чтения</span></div><NuxtLink :to="`/journal/${article.slug}`"><h3>{{ article.title }}</h3></NuxtLink><p>{{ article.excerpt }}</p></article></template>
