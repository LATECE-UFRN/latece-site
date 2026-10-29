export const useImageUrl = () => {
  const config = useRuntimeConfig()
  // Pega a URL base configurada (ex: '/latece-site/')
  const baseURL = config.app.baseURL || '/'

  const resolveImage = (path: string | null | undefined) => {
    if (!path) return ''
    
    // 1. Se a imagem já for um link externo (ex: YouTube), retorna como está
    if (path.startsWith('http')) return path
    
    // 2. Remove 'assets/' ou '/assets/' do início, se existir
    let cleanPath = path.replace(/^\/?assets\//, '')
    
    // 3. Remove a barra inicial (/) para não duplicar com a baseURL
    cleanPath = cleanPath.replace(/^\//, '')
    
    // 4. Garante que o caminho comece com 'images/'
    if (!cleanPath.startsWith('images/')) {
      cleanPath = `images/${cleanPath}`
    }
    
    // 5. Junta a URL base com o caminho da imagem e remove barras duplas (//)
    return `${baseURL}${cleanPath}`.replace(/([^:])\/\//g, '$1/')
  }

  return { resolveImage }
}