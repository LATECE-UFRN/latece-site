export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie('auth_token')

  // Se o usuário tentar acessar /admin e não tiver o token, redireciona para o login
  if (to.path.startsWith('/admin') && !authToken.value) {
    return navigateTo('/login')
  }
})