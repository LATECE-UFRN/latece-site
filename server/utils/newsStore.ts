import newsData from '../data/news-fallback.json'

// Define a interface flexível para acomodar os dados do JSON e os novos criados pelo Admin
export interface Noticia {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  createdAt?: string // Tornando opcional para evitar conflito com dados antigos ou undefined
  updatedAt?: string
  imageUrl?: string
  status?: string
  authorId?: number
  isVideo?: boolean
  videoUrl?: string | null
  links?: { label: string, url: string }[] | null
}

export const noticiasStore: Noticia[] = newsData.items as Noticia[]

export const gerarNovoId = () => {
  return noticiasStore.length > 0 ? Math.max(...noticiasStore.map(n => n.id)) + 1 : 1
}