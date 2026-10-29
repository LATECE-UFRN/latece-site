import newsData from '../../data/news-fallback.json'

export default defineEventHandler((event) => {
  const id = parseInt(getRouterParam(event, 'id') || '0')
  
  // Extrai a lista de notícias de forma segura
  const noticias = Array.isArray(newsData) ? newsData : newsData.items || []
  const noticia = noticias.find(n => n.id === id)

  if (!noticia) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Notícia não encontrada'
    })
  }

  return noticia
})