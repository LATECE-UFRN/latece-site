# Estrutura de Arquivos e Dependências (Pós-Lotes 01, 02 e 03)

## Estrutura de Diretórios Ativa (estimada)
```text
latece-site/
├── app/
│   ├── assets/css/main.css
│   ├── layouts/default.vue
│   ├── pages/
│   │   ├── index.vue
│   │   ├── sobre.vue
│   │   ├── equipe.vue
│   │   ├── equipamentos.vue
│   │   ├── publicacoes.vue
│   │   ├── noticias/
│   │   │   ├── index.vue
│   │   │   └── [id].vue
│   │   └── sugestoes.vue (A SER REMOVIDO NO LOTE 05)
│   ├── app.vue
│   └── error.vue
├── server/
│   ├── api/
│   │   ├── news/
│   │   │   ├── index.get.ts
│   │   │   └── [id].get.ts
│   │   ├── team/index.get.ts
│   │   ├── equipment/index.get.ts
│   │   ├── publications/index.get.ts
│   │   └── agenda/index.get.ts
│   └── data/ (JSONs usados como fallback)
├── public/
│   ├── data/
│   └── images/
├── nuxt.config.ts
├── package.json
└── tsconfig.json