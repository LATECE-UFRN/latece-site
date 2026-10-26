# INVENTÁRIO DE FUNCIONALIDADES

## 1. Componentes de Interface (Vanilla)
- **Header/Footer:** Injetados via `components.js`. Possuem lógica de menu mobile, seletor de idiomas (PT/EN/ES) e painel de acessibilidade.
- **Modais:** Usados em Equipamentos e Publicações. Possuem foco de acessibilidade básico, mas não prendem o foco do teclado (`focus trap` ausente).
- **Paginação:** Implementada em JavaScript (`paginateData` em `data.js`). Limita a 10 itens por página.
- **Carrossel:** Animação CSS infinita na Home.

## 2. Formulários e Integrações
- **Formulário de Sugestões:** Envia dados via POST para `https://api.staticforms.dev/submit`. Possui validação client-side. Não há backend próprio.
- **VLibras:** Mencionado no prompt, mas **não encontrado** nos arquivos da versão Vanilla (ausente).
- **TTS (Text-to-Speech):** Implementado em `speech.js` com fallback para API do Google Translate (devido a falhas no SAPI5 do Windows).

## 3. Segurança e Administração
- **Login (Vanilla):** `auth.js` não possui fallback de credenciais hardcoded. Retorna falha por padrão visando segurança.
- **Admin (Vanilla):** Não executa operações de banco. As telas são estáticas.
- **API (Nuxt):** Possui rotas reais de backend (`server/api`). Realiza consultas ao PostgreSQL (ex: `SELECT * FROM news`). Utiliza JWT para proteger rotas.

## 4. Acessibilidade e Temas
- **Painel de Acessibilidade:** Controla contraste, tamanho de fonte, espaçamento e redução de movimento. Persiste via `localStorage`.
- **Temas:** Claro e Escuro implementados via `data-theme` no HTML e variáveis CSS.