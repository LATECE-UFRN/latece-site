# REGISTRO DE ALTERAÇÕES — P08 (FINAL)

| Data | Arquivo | Alteração | Motivo |
|---|---|---|---|
| 25/10/2026 | `app/pages/equipe.vue` | Fallback acessível + `aria-label` no Lattes | ACC-001 |
| 25/10/2026 | `app/pages/equipamentos.vue` | Fallback acessível + `aria-live` | ACC-001 |
| 25/10/2026 | `app/pages/login.vue` | `aria-required`, `aria-invalid`, `aria-describedby` | ACC-003 e ACC-007 |
| 25/10/2026 | `app/pages/admin/noticias/index.vue` | `scope="col"` + `aria-label` nos botões | ACC-004 e ACC-006 |
| 25/10/2026 | `app/pages/noticias/index.vue` | `aria-label` nos links "Ler notícia" | ACC-002 |
| 25/10/2026 | `app/pages/index.vue` | `aria-label` nos links "Ler mais" | ACC-002 |
| 25/10/2026 | `app/pages/noticias/[id].vue` | Sanitização (DOMPurify) + `useHead` | ACC-008 e SEO |
| 25/10/2026 | `app/pages/sugestoes.vue` | `aria-required` e associação de erro | ACC-007 |
| 25/10/2026 | `app/layouts/default.vue` | `Escape` fecha menu mobile | ACC-009 |
| 25/10/2026 | `app/assets/css/main.css` | Foco visível, Skip Link e `prefers-reduced-motion` | ACC-010 |