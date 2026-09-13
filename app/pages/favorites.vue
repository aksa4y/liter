<script setup lang="ts">
import { fonts } from '~/data/fonts'
usePageSeo('Избранное', 'Твои сохранённые шрифты в Литере.', true)
const { favorites, storageMessage } = useFavorites()
const selected = computed(() => fonts.filter(font => favorites.value.includes(font.slug)))
</script>
<template><div class="page-content content-pad"><div class="page-heading"><span class="eyebrow">Оставить на потом</span><h1>Твоё избранное<span class="heading-count">{{ selected.length }}</span></h1><p>Шрифты, которые зацепили. Сохраняются в этом браузере.</p></div><p v-if="storageMessage" class="storage-message">{{ storageMessage }}</p><div v-if="selected.length" class="font-grid"><FontCard v-for="font in selected" :key="font.slug" :font="font" /></div><div v-else class="empty-state"><span class="empty-glyph">♡</span><h2>Здесь будут любимые</h2><p>Нажми на закладку в карточке шрифта, чтобы сохранить его здесь.</p><NuxtLink to="/fonts" class="button button-dark">Найти свой шрифт <AppIcon name="arrow" /></NuxtLink></div></div></template>
