export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'E-mail e senha são obrigatórios.'
    })
  }

  // MOCK de autenticação (credenciais hardcoded para desenvolvimento)
  // PENDÊNCIA CRÍTICA: substituir por verificação real no PostgreSQL (bcrypt) e JWT assinado.
  if (body.email === 'admin' && body.password === 'admin123') {
    const token = 'mock-jwt-token-123456789'

    // Define o cookie httpOnly no servidor (proteção contra XSS)
    setCookie(event, 'auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 horas
      path: '/'
    })

    return {
      status: 'success',
      message: 'Login realizado com sucesso',
      user: {
        id: 1,
        name: 'Administrador',
        role: 'admin'
      }
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'Credenciais inválidas. Verifique seu e-mail e senha.'
    })
  }
})