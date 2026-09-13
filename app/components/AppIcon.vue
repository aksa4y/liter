<script setup lang="ts">
const props = defineProps<{ name: 'arrow' | 'search' | 'bookmark' | 'download' | 'close' | 'menu' | 'chevron' | 'sliders' | 'check'; filled?: boolean }>()
const paths = {
  arrow: 'M5 12h14M12 5l7 7-7 7', search: 'M21 21l-5.2-5.2M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
  bookmark: 'M6 3h12v18l-6-4-6 4V3Z', download: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
  close: 'm6 6 12 12M6 18 18 6', menu: 'M4 7h16M4 12h16M4 17h16',
  chevron: 'm7 10 5 5 5-5', sliders: 'M4 6h16M4 18h16M8 3v6m8 6v6', check: 'm5 12 4 4L19 6'
}
</script>
<template><svg viewBox="0 0 24 24" :fill="props.filled ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name]" /></svg></template>
