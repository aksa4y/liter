<script setup lang="ts">
import { fonts } from '~/data/fonts'
import { collections } from '~/data/collections'
import { articles } from '~/data/articles'
usePageSeo('Шрифты с характером', 'Литера — шрифты с кириллицей, живой предпросмотр, шрифтовые пары и журнал о типографике. Скачивайте шрифты с открытыми лицензиями.')
</script>
<template>
  <section class="hero">
    <img class="hero-image" src="/images/letter-clouds.webp" width="2048" height="1024" alt="Объёмная розовая буква среди облаков" fetchpriority="high" />
    <div class="hero-content"><span class="eyebrow hero-eyebrow">Пространство хорошей типографики</span><h1>Шрифты<br>с <em>характером.</em></h1><p>Найди голос для своей идеи.<br>От первой буквы до целой истории.</p><NuxtLink to="/fonts" class="button button-dark hero-button">Исследовать шрифты <AppIcon name="arrow" /></NuxtLink></div>
    <div class="hero-bottom"><span>Кириллица. Латиница. Вдохновение.</span><span class="hero-bottom-right">Буквы меняют всё <span>↗</span></span></div>
    <span class="hero-side-note" aria-hidden="true">TYPE IS EVERYWHERE</span>
  </section>
  <div class="intro-strip"><span>Хороший дизайн начинается с букв</span><span class="intro-feature">12 гарнитур <i>✳</i> Открытые лицензии <i>✳</i> Кириллица</span></div>
  <section class="section content-pad">
    <div class="section-heading"><div><span class="eyebrow">В поле зрения</span><h2>Знакомься, твой новый шрифт.</h2></div><NuxtLink to="/fonts" class="text-link">Весь каталог <AppIcon name="arrow" /></NuxtLink></div>
    <div class="font-grid"><FontCard v-for="font in fonts.slice(0, 6)" :key="font.slug" :font="font" /></div>
  </section>
  <div class="content-pad"><AdSlot /></div>
  <section class="section content-pad collections-section"><div class="section-heading"><div><span class="eyebrow">Подобрано с чувством</span><h2>Под настроение. Под задачу.</h2></div><NuxtLink to="/collections" class="text-link">Все подборки <AppIcon name="arrow" /></NuxtLink></div><div class="collection-grid"><CollectionCard v-for="collection in collections" :key="collection.slug" :collection="collection" /></div></section>
  <section class="pair-banner content-pad"><div class="pair-banner-visual" aria-hidden="true"><span>A</span><span>a</span><i>+</i></div><div class="pair-banner-copy"><span class="eyebrow">Вместе — лучше</span><h2>У каждой буквы<br>есть своя пара.</h2><p>Сочетай выразительный заголовок и спокойный текст. Пробуй, сравнивай, находи баланс.</p><NuxtLink to="/pairs" class="button button-dark">Подобрать пару <AppIcon name="arrow" /></NuxtLink></div></section>
  <section class="section content-pad"><div class="section-heading"><div><span class="eyebrow">Читать между строк</span><h2>Журнал о том, что важно.</h2></div><NuxtLink to="/journal" class="text-link">Все материалы <AppIcon name="arrow" /></NuxtLink></div><div class="article-grid"><ArticleCard v-for="article in articles.slice(0, 3)" :key="article.slug" :article="article" /></div></section>
</template>
