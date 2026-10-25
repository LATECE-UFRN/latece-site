export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname
  const method = event.method

  // Aplica apenas a rotas de API
  if (!path.startsWith('/api/')) {
    return
  }

  // Métodos de leitura (GET, HEAD, OPTIONS) são públicos
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
    return
  }

  // Rotas públicas de escrita (login e sugestões)
  if (path === '/api/auth/login' || path.startsWith('/api/suggestions')) {
    return
  }

  // Rotas protegidas: exigem autenticação
  const token = getCookie(event, 'auth_token')

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Não autorizado. Faça login para continuar.'
    })
  }

  // MOCK: valida o token estático.
  // PENDÊNCIA: substituir por validação real de JWT quando o backend for implementado.
  if (token !== 'mock-jwt-token-123456789') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token inválido ou expirado. Faça login novamente.'
    })
  }

  // Adiciona o usuário autenticado ao contexto da requisição
  event.context.user = {
    id: 1,
    name: 'Administrador',
    role: 'admin'
  }
})