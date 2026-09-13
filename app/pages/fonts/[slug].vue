<script setup lang="ts">
import { fonts } from '~/data/fonts'
const route = useRoute()
const font = fonts.find(item => item.slug === route.params.slug)
if (!font) throw createError({ statusCode: 404, statusMessage: 'Шрифт не найден' })
usePageSeo(`${font.name} — скачать шрифт`, `${font.name}: ${font.description} Кириллица, предпросмотр и скачивание с лицензией OFL.`)
const { favorites, toggle, storageMessage } = useFavorites()
const sample = ref('Всё начинается с буквы.')
const size = ref(72)
const weight = ref(font.featuredWeight)
const tracking = ref(0)
const italic = ref(false)
const pair = fonts.find(item => item.slug === font.pair)!
const copied = ref(false)
const copyError = ref('')
const css = computed(() => `@font-face {\n  font-family: '${font.name}';\n  src: url('/fonts/${font.files[0]}') format('woff2');\n  font-weight: ${font.weights[0]} ${font.weights[1]};\n  font-display: swap;\n}\n\n.title {\n  font-family: '${font.name}', ${font.fallback};\n  font-weight: ${weight.value};\n}`)
async function copyCss() {
  try { await navigator.clipboard.writeText(css.value); copied.value = true; copyError.value = ''; setTimeout(() => { copied.value = false }, 2200) }
  catch { copyError.value = 'Не удалось скопировать автоматически. Выдели код ниже и скопируй вручную.' }
}
</script>
<template><div v-if="font" class="page-content content-pad font-detail">
  <NuxtLink class="back-link" to="/fonts">← Каталог шрифтов</NuxtLink>
  <div class="font-detail-heading"><div><span class="eyebrow">{{ font.category }} / Кириллица / OFL</span><h1>{{ font.name }}</h1><p>{{ font.designer }}</p></div><div class="detail-actions"><button class="icon-button bordered" :aria-pressed="favorites.includes(font.slug)" :aria-label="favorites.includes(font.slug) ? 'Убрать из избранного' : 'Сохранить в избранное'" @click="toggle(font.slug)"><AppIcon name="bookmark" :filled="favorites.includes(font.slug)" /></button><a class="button button-dark" :href="`/downloads/${font.slug}.zip`" download>Скачать шрифт <AppIcon name="download" /></a></div></div>
  <p v-if="storageMessage" class="storage-message" role="status">{{ storageMessage }}</p>
  <section class="font-playground" :style="{ background: font.color, color: font.ink }"><div class="playground-top"><span>Твоя идея, его характер</span><span>Живой предпросмотр</span></div><label class="sr-only" for="font-text">Текст для предпросмотра</label><textarea id="font-text" v-model="sample" maxlength="300" spellcheck="false" :style="{ fontFamily: `'${font.name}', ${font.fallback}`, fontSize: `${size}px`, fontWeight: weight, letterSpacing: `${tracking}em`, fontStyle: italic ? 'italic' : 'normal' }" /><div class="playground-controls"><label>Кегль <input v-model.number="size" type="range" min="20" max="120" /><output>{{ size }} px</output></label><label v-if="font.weights[0] !== font.weights[1]">Насыщенность <input v-model.number="weight" type="range" :min="font.weights[0]" :max="font.weights[1]" step="10" /><output>{{ weight }}</output></label><label>Трекинг <input v-model.number="tracking" type="range" min="-0.04" max="0.12" step="0.01" /><output>{{ tracking.toFixed(2) }} em</output></label><label v-if="font.files.some(file => file.includes('italic'))" class="italic-control"><input v-model="italic" type="checkbox" /> Курсив</label></div></section>
  <div class="detail-columns"><section><span class="eyebrow">Ближе к буквам</span><h2>О шрифте</h2><p class="detail-description">{{ font.description }}</p><div class="tags"><span v-for="use in font.use" :key="use">{{ use }}</span></div><h2 class="small-heading">Знаки и символы</h2><div class="glyph-grid" :style="{ fontFamily: `'${font.name}'` }"><span v-for="glyph in Array.from(font.glyphs)" :key="glyph">{{ glyph }}</span></div></section><aside class="detail-sidebar"><h3>Внутри архива</h3><p>Шрифтовые файлы, лицензия OFL и ссылка на источник.</p><dl><div><dt>Лицензия</dt><dd>SIL Open Font License</dd></div><div><dt>Языки</dt><dd>Кириллица, латиница</dd></div><div><dt>Насыщенность</dt><dd>{{ font.weights[0] }}{{ font.weights[0] !== font.weights[1] ? `–${font.weights[1]}` : '' }}</dd></div><div><dt>Размер архива</dt><dd>{{ (font.bytes / 1024).toFixed(0) }} КБ</dd></div></dl><a :href="`/downloads/${font.slug}.zip`" class="button button-dark full-width" download>Скачать .zip <AppIcon name="download" /></a><a :href="font.source" target="_blank" rel="noopener noreferrer" class="source-link">Исходный проект ↗</a><NuxtLink to="/about#licenses" class="source-link">Условия использования</NuxtLink></aside></div>
  <AdSlot placement="article" />
  <section class="css-section"><div class="section-heading"><div><span class="eyebrow">Для веба</span><h2>Подключить на сайте</h2></div><button class="button button-light" @click="copyCss">{{ copied ? 'Скопировано' : 'Копировать CSS' }}<AppIcon v-if="copied" name="check" /></button></div><p>Помести WOFF2-файл в папку <code>/fonts/</code> своего сайта. Он доступен <a class="inline-link" :href="`/fonts/${font.files[0]}`" download>по этой ссылке</a>.</p><pre><code>{{ css }}</code></pre><p v-if="copyError" role="status">{{ copyError }}</p></section>
  <section class="section"><div class="section-heading"><div><span class="eyebrow">Хорошая компания</span><h2>Попробуй в паре</h2></div><NuxtLink to="/pairs" class="text-link">Сочетать шрифты <AppIcon name="arrow" /></NuxtLink></div><div class="pair-recommend"><FontCard :font="pair" /><p>{{ font.name }} задаёт настроение, а {{ pair.name }} помогает выстроить контраст. Проверь сочетание на заголовке и настоящем абзаце своего проекта.</p></div></section>
</div></template>
