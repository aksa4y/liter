<script setup lang="ts">
const props = withDefaults(defineProps<{ placement?: 'banner' | 'article' }>(), { placement: 'banner' })
const config = useRuntimeConfig()
const blockId = computed(() => String(props.placement === 'article' ? config.public.yandexRtbArticleId : config.public.yandexRtbBannerId))
const preview = computed(() => config.public.adsPreview === true || String(config.public.adsPreview) === 'true')
const container = ref<HTMLElement>()
const renderId = ref(`yandex-rtb-${useId().replace(/[^a-zA-Z0-9]/g, '')}`)
let alive = true
let observer: IntersectionObserver | undefined
onMounted(async () => {
  if (!blockId.value || !container.value) return
  renderId.value += `-${Math.random().toString(36).slice(2, 10)}`
  await nextTick()
  if (!alive || !container.value) return
  const render = () => {
    if (!alive) return
    window.yaContextCb = window.yaContextCb || []
    window.yaContextCb.push(() => {
      if (alive && document.getElementById(renderId.value)) window.Ya?.Context?.AdvManager?.render({ blockId: blockId.value, renderTo: renderId.value })
    })
    if (!document.getElementById('yandex-context-script')) {
      const script = document.createElement('script')
      script.id = 'yandex-context-script'; script.async = true; script.src = 'https://yandex.ru/ads/system/context.js'
      document.head.appendChild(script)
    }
  }
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) { observer?.disconnect(); render() } }, { rootMargin: '250px' })
    observer.observe(container.value)
  } else render()
})
onBeforeUnmount(() => { alive = false; observer?.disconnect() })
</script>
<template><aside v-if="blockId || preview" class="ad-slot" :class="[`ad-${placement}`, { 'ad-preview': !blockId }]" aria-label="Реклама"><span class="ad-label">Реклама</span><div :id="renderId" ref="container" class="ad-container"><span v-if="!blockId" class="ad-preview-copy">{{ placement === 'banner' ? 'Адаптивный баннер' : 'Рекламный блок' }}</span></div></aside></template>
