export default defineEventHandler((event) => {
  const forwardedHost = getRequestHeader(event, 'x-forwarded-host')
  const requestHost = (forwardedHost?.split(',')[0] || getRequestHeader(event, 'host') || '')
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, '')

  if (requestHost !== 'www.pixelhav.ru') return

  const target = new URL(getRequestURL(event))
  target.protocol = 'https:'
  target.hostname = 'pixelhav.ru'
  target.port = ''

  return sendRedirect(event, target.toString(), 301)
})
