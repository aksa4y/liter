<script setup lang="ts">
import type { collections } from '~/data/collections'
defineProps<{ collection: typeof collections[number] }>()
</script>
<template><NuxtLink class="collection-card" :to="`/collections/${collection.slug}`" :style="{ background: collection.color, color: collection.ink }"><div class="collection-top"><span>Подборка / {{ collection.count }} шрифта</span><AppIcon name="arrow" /></div><span class="collection-specimen" :style="{ fontFamily: `'${collection.family}'` }">{{ collection.specimen }}</span><div><h3>{{ collection.title }}</h3><p>{{ collection.subtitle }}</p></div></NuxtLink></template>
