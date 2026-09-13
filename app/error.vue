<script setup lang="ts">
defineProps<{ error: { statusCode?: number; message?: string } }>()
</script>
<template><div class="error-page"><NuxtLink class="wordmark" to="/">литера✳</NuxtLink><span class="error-number">{{ error.statusCode || 500 }}</span><h1>{{ error.statusCode === 404 ? 'Эта буква потерялась.' : 'Не удалось открыть страницу.' }}</h1><p>{{ error.statusCode === 404 ? 'В каталоге найдётся ещё много интересного.' : 'Попробуй открыть главную страницу ещё раз.' }}</p><button class="button button-dark" @click="clearError({ redirect: '/' })">На главную</button></div></template>
