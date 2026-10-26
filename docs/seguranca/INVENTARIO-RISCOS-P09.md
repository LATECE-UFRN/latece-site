# INVENTÁRIO DE RISCOS — P09

| ID | Risco | Gravidade | Status | Ação |
|---|---|---|---|---|
| SEC-001 | Credenciais mock hardcoded | Crítico | ⚠️ Pendente | Substituir por PostgreSQL + bcrypt + JWT real. |
| SEC-002 | API sem autorização server-side | Crítico | ✅ Corrigido | Middleware `server/middleware/auth.ts`. |
| SEC-003 | Cookie não `httpOnly` | Alto | ✅ Corrigido | `setCookie` no servidor com `httpOnly: true`. |
| SEC-004 | Ausência de CSP e headers | Alto | ✅ Corrigido | `nuxt-security` configurado. |
| SEC-005 | Sem proteção CSRF | Médio | ⚠️ Mitigado | `sameSite: lax` no cookie. Token CSRF pendente. |
| SEC-006 | Validação básica | Médio | ✅ Corrigido | Zod 4 implementado nas rotas de escrita. |
| SEC-007 | Sem rate limiting | Médio | ❌ Pendente | Implementar em produção (ex: Redis). |
| SEC-008 | Sem `.env.example` | Baixo | ✅ Corrigido | Documentação de variáveis de ambiente. |
| SEC-009 | Uploads não implementados | N/A | — | Aguardando decisão institucional. |
| SEC-010 | Infraestrutura não definida | Pendência | ❌ Pendente | Aguardando STI/UFRN. |