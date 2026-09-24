import { fonts } from '~/data/fonts'
export function useFavorites() {
  const favorites = useState<string[]>('font-favorites', () => [])
  const ready = useState('font-favorites-ready', () => false)
  const storageMessage = useState('font-storage-message', () => '')
  function toggle(slug: string) {
    favorites.value = favorites.value.includes(slug) ? favorites.value.filter(item => item !== slug) : [...favorites.value, slug]
    try { localStorage.setItem('pixelhav:favorites', JSON.stringify(favorites.value)); localStorage.removeItem('litera:favorites'); storageMessage.value = '' }
    catch { storageMessage.value = 'В этом браузере избранное сохранится только до закрытия страницы.' }
  }
  onMounted(() => {
    if (ready.value) return
    try {
      const saved: unknown = JSON.parse(localStorage.getItem('pixelhav:favorites') || localStorage.getItem('litera:favorites') || '[]')
      if (Array.isArray(saved)) favorites.value = [...new Set(saved.filter((item): item is string => typeof item === 'string' && fonts.some(f => f.slug === item)))]
    } catch { /* Storage may be unavailable; bookmarks remain usable in memory. */ }
    ready.value = true
  })
  return { favorites, toggle, storageMessage }
}
