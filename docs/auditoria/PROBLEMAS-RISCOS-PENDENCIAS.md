# PROBLEMAS, RISCOS E PENDÊNCIAS

| ID | Problema | Gravidade | Evidência | Impacto |
|---|---|---|---|---|
| PROB-01 | Admin Vanilla é apenas fachada (mock). | CRÍTICA | `admin.js` não salva dados. | Impossível gerenciar conteúdo sem editar JSON manualmente. |
| PROB-02 | Falhas de Acessibilidade (107 issues). | ALTA | `pa11y-report.json` | Não conformidade com WCAG e exclusão digital. |
| PROB-03 | Ausência de VLibras. | MÉDIA | Código Vanilla | Perda de acessibilidade linguística exigida em projetos de TA. |
| PROB-04 | Chave Static Forms exposta no HTML. | BAIXA | `sugestoes.html` | Risco de spam (mitigável via config. de domínio). |
| PROB-05 | Caminhos de assets quebram em subdiretórios. | MÉDIA | `path.js` e links com `/`. | Páginas e imagens 404 no GitHub Pages. |
| PROB-06 | Fallback de credenciais expostas no Nuxt original. | CRÍTICA | `README.md` (admin/admin123) | Risco de segurança (se o backend não for alterado). |
| PROB-07 | Funções do Nuxt API não estão protegidas por autenticação. | ALTA | `server/api/news/index.post.ts` | Permite criação de notícia sem token JWT. |