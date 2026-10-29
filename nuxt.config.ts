// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@pinia/nuxt',
    'nuxt-security'
  ],
  
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  
  typescript: {
    strict: true
  },
  
  runtimeConfig: {
    public: {
      cmsApiBase: process.env.NUXT_PUBLIC_CMS_API_BASE || 'https://api.sti.ufrn.br/cms/v1'
    }
  },
  
  security: {
    rateLimiter: false, // Mantido desativado para testes locais conforme correção anterior
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'https://img.youtube.com', 'https://via.placeholder.com'],
        'font-src': ["'self'", 'data:'],
        'connect-src': ["'self'"],
        'frame-src': ["'self'", 'https://www.youtube.com', 'https://www.youtube-nocookie.com', 'https://vlibras.gov.br'],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'upgrade-insecure-requests': true,
      },
      xContentTypeOptions: 'nosniff',
      referrerPolicy: 'strict-origin-when-cross-origin',
      xFrameOptions: 'SAMEORIGIN',
      permissionsPolicy: {
        camera: [],
        microphone: [],
        geolocation: [],
      },
      strictTransportSecurity: process.env.NODE_ENV === 'production' ? {
        maxAge: 31536000,
        includeSubdomains: true,
      } : false,
    },
  },
})