# ESTRUTURA DO PROJETO (PROJETADA)

*Aviso: Nenhuma pasta foi criada fisicamente ainda.*

A nova implementação será criada em um diretório separado, por exemplo:
`I:\UNIDADE-DEV-MARCONE\LATECE\latece-sti-compliance`

Isso garante que o projeto atual (Vanilla) e o projeto original (Nuxt) permaneçam intocados.

## 1. Diretórios Previstos
- **`/server`:** Onde ficará a lógica de backend do Nuxt (Nitro). Aqui criaríamos o arquivo `db.ts` (conexão PostgreSQL) e as rotas da API (`/server/api/news`).
- **`/pages`:** Onde ficarão as telas. Ex: `index.vue`, `equipe.vue`, `equipamentos.vue`.
- **`/stores`:** Onde ficará o Pinia para gerenciar o estado do usuário logado e das notícias.
- **`/assets/scss`:** Onde entra o design system da UFRN.

## 2. O que NÃO será criado agora
- Arquivos vazios (ex: `composables/` sem conteúdo).
- Configurações de Docker ou Kubernetes (Fase 06).
- Pipeline de CI/CD (Fase 06).