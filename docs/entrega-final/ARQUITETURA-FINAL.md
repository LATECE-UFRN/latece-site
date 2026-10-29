# ARQUITETURA FINAL DO PROJETO

## 1. Stack Tecnológico
- **Framework:** Nuxt 4.6.2 (SSR/SPA)
- **UI:** Vue 3 + CSS Puro (Provisório)
- **Linguagem:** TypeScript (Strict)
- **Backend:** Nitro (API Routes)
- **Segurança:** Nuxt-Security, Zod 4, DOMPurify
- **Dados:** Mock em memória (`newsStore.ts`, `mockDb.ts`) / JSON estático.

## 2. Estrutura de Diretórios
- `app/pages/`: Páginas e rotas (Vue).
- `app/layouts/`: Layout global (Header/Footer).
- `app/middleware/`: Proteção de rotas.
- `server/api/`: Endpoints HTTP (Nitro).
- `server/utils/`: Regras de negócio e banco de dados mockado.
- `public/`: Assets estáticos (Imagens, ícones).

## 3. Fluxo de Dados Atual
`Componente Vue` -> `API Nitro` -> `Store em Memória / JSON` -> Retorno.

## 4. Pendências de Arquitetura
- Implementação do Banco PostgreSQL.
- Integração com Auth Institucional (SIGAA).
- Implementação de sistema de uploads de arquivos.