<script setup lang="ts">
import type { FontRecord } from '~/data/fonts'
defineProps<{ font: FontRecord; text?: string; size?: number; compact?: boolean }>()
const { favorites, toggle } = useFavorites()
</script>
<template>
  <article class="font-card" :class="{ compact }">
    <div class="font-specimen" :style="{ background: font.color, color: font.ink }">
      <span class="specimen-label">{{ font.category }} <span>Кириллица</span></span>
      <button class="bookmark-button" :class="{ saved: favorites.includes(font.slug) }" :aria-label="`${favorites.includes(font.slug) ? 'Убрать' : 'Сохранить'} ${font.name} ${favorites.includes(font.slug) ? 'из избранного' : 'в избранное'}`" :aria-pressed="favorites.includes(font.slug)" @click="toggle(font.slug)"><AppIcon name="bookmark" :filled="favorites.includes(font.slug)" /></button>
      <NuxtLink :to="`/fonts/${font.slug}`" class="specimen-link" :aria-label="`Подробнее о ${font.name}`"><span :style="{ fontFamily: `'${font.name}', ${font.fallback}`, fontWeight: font.featuredWeight, fontSize: size ? `${size}px` : undefined }">{{ text?.trim() || font.sample }}</span></NuxtLink>
      <span class="specimen-bottom"><span>Aa Бб 0123</span><span>{{ font.weights[0] === font.weights[1] ? 'Regular' : 'Variable' }}</span></span>
    </div>
    <div class="font-card-info"><div><NuxtLink :to="`/fonts/${font.slug}`"><h3>{{ font.name }}</h3></NuxtLink><p>{{ font.designer.split(',')[0] }} <span>· OFL</span></p></div><NuxtLink class="card-arrow" :to="`/fonts/${font.slug}`" :aria-label="`Открыть ${font.name}`"><AppIcon name="arrow" /></NuxtLink></div>
  </article>
</template>
