import { noticiasStore } from '../../utils/newsStore'

export default defineEventHandler((event) => {
  const id = parseInt(getRouterParam(event, 'id') || '0')
  const index = noticiasStore.findIndex(n => n.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: 'Notícia não encontrada para exclusão.' })
  }

  noticiasStore.splice(index, 1)

  return {
    status: 'success',
    message: 'Notícia excluída com sucesso!'
  }
})