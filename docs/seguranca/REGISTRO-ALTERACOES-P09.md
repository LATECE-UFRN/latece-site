# REGISTRO DE ALTERAÇÕES — P09

| Data | Arquivo | Alteração |
|---|---|---|
| 25/10/2026 | `nuxt.config.ts` | `nuxt-security` (CSP, HSTS condicional, headers). |
| 25/10/2026 | `server/middleware/auth.ts` | Criado. Proteção server-side das rotas de escrita. |
| 25/10/2026 | `server/api/auth/login.post.ts` | Cookie `httpOnly` via `setCookie`. |
| 25/10/2026 | `app/pages/login.vue` | Remoção do cookie via cliente. |
| 25/10/2026 | `tsconfig.json` | Adicionado `"types": ["node"]`. |
| 25/10/2026 | `package.json` | Instalados: `nuxt-security`, `zod`, `@types/node`. |
| 25/10/2026 | `server/api/news/index.post.ts` | Validação Zod 4. |
| 25/10/2026 | `server/api/news/[id].put.ts` | (Pendente validação Zod - próxima etapa). |
| 25/10/2026 | `server/api/suggestions/index.post.ts` | Validação Zod 4. |
| 25/10/2026 | `.env.example` | Criado. |