import { z } from 'zod'
import { noticiasStore, gerarNovoId } from '../../utils/newsStore'

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
  const body = await readBody(event)
  const resultado = noticiaSchema.safeParse(body)

  if (!resultado.success) {
    const mensagens = resultado.error.issues.map(e => e.message).join(' ')
    throw createError({ statusCode: 400, statusMessage: mensagens })
  }

  const dadosValidados = resultado.data

  // Força uma string segura para a data
  const hoje = new Date().toISOString().split('T')[0] || ''

  const novaNoticia = {
    id: gerarNovoId(),
    title: dadosValidados.title,
    excerpt: dadosValidados.excerpt,
    content: dadosValidados.content,
    category: dadosValidados.category,
    createdAt: hoje,
    imageUrl: dadosValidados.imageUrl || '',
    status: 'published',
    authorId: 1,
    isVideo: false
  }

  noticiasStore.push(novaNoticia)

  return {
    status: 'success',
    message: 'Notícia criada com sucesso!',
    data: novaNoticia
  }
})