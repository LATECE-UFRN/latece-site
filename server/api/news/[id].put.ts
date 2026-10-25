import { z } from 'zod'
import { noticiasStore } from '../../utils/newsStore'

const noticiaSchema = z.object({
  title: z.string().min(5, { error: 'O título deve ter pelo menos 5 caracteres.' }).max(150, { error: 'O título deve ter no máximo 150 caracteres.' }),
  category: z.enum(['Evento', 'Equipamentos', 'Formação', 'Pesquisa', 'Notícia'] as const, {
    error: () => ({ message: 'Categoria inválida.' })
  }),
  excerpt: z.string().max(300, { error: 'O resumo deve ter no máximo 300 caracteres.' }).optional().default(''),
  content: z.string().min(20, { error: 'O conteúdo deve ter pelo menos 20 caracteres.' }),
  imageUrl: z.string().url({ error: 'URL da imagem inválida.' }).optional().or(z.literal('')),
})

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, 'id') || '0')
  const body = await readBody(event)

  const index = noticiasStore.findIndex(n => n.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: 'Notícia não encontrada para edição.' })
  }

  const resultado = noticiaSchema.safeParse(body)

  if (!resultado.success) {
    const mensagens = resultado.error.issues.map(e => e.message).join(' ')
    throw createError({ statusCode: 400, statusMessage: mensagens })
  }

  const dadosValidados = resultado.data

  // Força uma string segura para a data de atualização
  const agora = new Date().toISOString() || ''

  noticiasStore[index] = {
    ...noticiasStore[index],
    ...dadosValidados,
    updatedAt: agora,
    id // Garante que o ID não seja alterado
  }

  return {
    status: 'success',
    message: 'Notícia atualizada com sucesso!',
    data: noticiasStore[index]
  }
})