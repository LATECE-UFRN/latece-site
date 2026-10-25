import { noticiasStore } from '../../utils/newsStore'

export default defineEventHandler((event) => {
  const id = parseInt(getRouterParam(event, 'id') || '0')
  const noticia = noticiasStore.find(n => n.id === id)

  if (!noticia) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Notícia não encontrada'
    })
  }

  return noticia
})