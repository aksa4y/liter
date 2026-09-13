<script setup lang="ts">
const open = ref(false)
const route = useRoute()
const { favorites } = useFavorites()
watch(() => route.fullPath, () => { open.value = false })
const links = [{ to: '/fonts', label: 'Шрифты' }, { to: '/collections', label: 'Подборки' }, { to: '/pairs', label: 'Шрифтовые пары' }, { to: '/journal', label: 'Журнал' }]
</script>
<template>
  <header class="site-header">
    <NuxtLink class="wordmark" to="/" aria-label="Литера — главная">литера<span class="wordmark-dot">✳</span></NuxtLink>
    <nav class="desktop-nav" aria-label="Основная навигация"><NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink></nav>
    <div class="header-actions">
      <NuxtLink class="icon-button favorites-link" to="/favorites" :aria-label="`Избранное: ${favorites.length}`"><AppIcon name="bookmark" /><span v-if="favorites.length" class="count-badge">{{ favorites.length }}</span></NuxtLink>
      <NuxtLink class="button button-dark header-cta" to="/fonts">Найти свой шрифт <AppIcon name="arrow" /></NuxtLink>
      <button class="icon-button mobile-menu-button" :aria-expanded="open" aria-controls="mobile-nav" aria-label="Меню" @click="open = !open"><AppIcon :name="open ? 'close' : 'menu'" /></button>
    </div>
    <nav v-if="open" id="mobile-nav" class="mobile-nav" aria-label="Мобильная навигация"><NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink></nav>
  </header>
</template>
