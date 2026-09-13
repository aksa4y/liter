<script setup lang="ts">
import { fonts, categories } from '~/data/fonts'
usePageSeo('Каталог шрифтов', '12 шрифтов с кириллицей: гротески, антиквы, акцидентные, рукописные и моноширинные. Примерьте свой текст и скачайте шрифт с лицензией OFL.')
const query = ref('')
const category = ref('Все шрифты')
const sample = ref('')
const size = ref(46)
const sort = ref('editorial')
const filtered = computed(() => {
  const result = fonts.filter(font => (category.value === 'Все шрифты' || font.category === category.value) && `${font.name} ${font.designer} ${font.category} ${font.use.join(' ')}`.toLowerCase().includes(query.value.toLowerCase().trim()))
  return sort.value === 'name' ? [...result].sort((a, b) => a.name.localeCompare(b.name)) : result
})
function reset() { query.value = ''; category.value = 'Все шрифты' }
</script>
<template><div class="page-content content-pad">
  <div class="page-heading"><span class="eyebrow">Найди свой голос</span><h1>Каталог шрифтов<span class="heading-count">12</span></h1><p>Разные характеры. Одна хорошая идея — твоя.</p></div>
  <div class="catalog-toolbar"><label class="search-field"><AppIcon name="search" /><input v-model="query" type="search" aria-label="Поиск шрифта" placeholder="Название, автор или задача" /></label><label class="sort-field"><span class="sr-only">Сортировка</span><select v-model="sort"><option value="editorial">Выбор редакции</option><option value="name">По алфавиту</option></select></label></div>
  <div class="category-list" aria-label="Категории шрифтов"><button v-for="item in categories" :key="item" class="filter-chip" :class="{ active: category === item }" :aria-pressed="category === item" @click="category = item">{{ item }}<span v-if="item === 'Все шрифты'">12</span></button></div>
  <div class="preview-toolbar"><label class="preview-input"><span class="type-symbol">Aa</span><input v-model="sample" type="text" maxlength="100" aria-label="Текст для предпросмотра" placeholder="Напиши что-нибудь своё…" /></label><label class="size-control"><span>Размер</span><input v-model.number="size" type="range" min="24" max="72" aria-label="Размер шрифта" /><output>{{ size }} px</output></label></div>
  <div class="results-line" role="status"><span>Найдено: {{ filtered.length }}</span><span>Кириллица · Латиница · OFL</span></div>
  <div v-if="filtered.length" class="font-grid"><FontCard v-for="font in filtered" :key="font.slug" :font="font" :text="sample" :size="size" /></div>
  <div v-else class="empty-state"><span class="empty-glyph">?</span><h2>Пока ни одной буквы</h2><p>Попробуй другое название или убери фильтр.</p><button class="button button-dark" @click="reset">Сбросить поиск</button></div>
  <AdSlot />
</div></template>
