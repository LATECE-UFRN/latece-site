# MATRIZ DE ACESSIBILIDADE — P08 (FINAL)

| Página/Componente | Critério | Evidência | Estado |
|---|---|---|---|
| Layout Global | Skip link funcional | `default.vue`, `main.css` | ✅ Concluído |
| Layout Global | Foco visível (WCAG 2.4.7) | `main.css` (`:focus-visible`) | ✅ Concluído |
| Menu Mobile | `aria-expanded` e `aria-controls` | `default.vue` | ✅ Concluído |
| Menu Mobile | Fecha com tecla `Escape` | `default.vue` | ✅ Concluído |
| Página Equipe | Imagem com fallback acessível | `equipe.vue` | ✅ Concluído |
| Página Equipe | Links Lattes com `aria-label` | `equipe.vue` | ✅ Concluído |
| Página Equipamentos | Imagem com fallback acessível | `equipamentos.vue` | ✅ Concluído |
| Página Notícias | Links com contexto (`aria-label`) | `index.vue`, `[id].vue` | ✅ Concluído |
| Página Notícias | Sanitização de HTML | `[id].vue` (DOMPurify) | ✅ Concluído |
| Página Login | `aria-required` e `aria-describedby` | `login.vue` | ✅ Concluído |
| Admin (Tabela) | `scope="col"` | `admin/noticias/index.vue` | ✅ Concluído |
| Admin (Tabela) | Botões com `aria-label` | `admin/noticias/index.vue` | ✅ Concluído |
| Global | `prefers-reduced-motion` | `main.css` | ✅ Concluído |
| Global | VLibras | — | ❌ Pendente |
| Global | Testes com leitores de tela | — | ❌ Pendente |