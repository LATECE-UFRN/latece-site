import newsData from '../../data/news-fallback.json'

export default defineEventHandler(() => {
  // Verifica se o JSON é um array direto ou um objeto com a chave 'items'
  const noticias = Array.isArray(newsData) ? newsData : newsData.items || []
  return noticias
})