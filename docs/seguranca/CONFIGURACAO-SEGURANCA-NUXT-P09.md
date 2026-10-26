# CONFIGURAÇÃO DE SEGURANÇA DO NUXT — P09

## 1. Módulo nuxt-security
- **Instalado:** Sim.
- **Versão:** A mais recente compatível com Nuxt 4.
- **Configuração:** `nuxt.config.ts`.

## 2. Cabeçalhos HTTP Ativos
| Cabeçalho | Valor |
|---|---|
| Content-Security-Policy | Configurado (self, inline, youtube, vlibras). |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| X-Frame-Options | `SAMEORIGIN` |
| Permissions-Policy | camera, microphone, geolocation bloqueados |
| Strict-Transport-Security | Ativo apenas em produção (HSTS). |

## 3. Pendências e Limitações
- CSP usa `'unsafe-inline'` devido ao runtime do Vue e estilos inline atuais.
- Verificação real dos headers no ambiente de produção (pendente de infraestrutura).
- Rate limiting nativo do `nuxt-security` não foi ativado para evitar bloqueios em testes locais.