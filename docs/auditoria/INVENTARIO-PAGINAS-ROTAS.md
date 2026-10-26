# INVENTÁRIO DE PÁGINAS E ROTAS

## 1. Fonte A — Vanilla (HTML)
| Página | Arquivo | Finalidade | Dependências | Estado |
|---|---|---|---|---|
| Home | `index.html` | Apresentação, Carrossel de Notícias | `components.js`, `news.js`, `agenda.js` | Funcional |
| Sobre | `about.html` | Missão, Visão, Valores | `components.js` | Funcional |
| Equipe | `team.html` | Listagem de Membros | `components.js`, `data.js` | Funcional |
| Equipamentos | `equipment.html` | Catálogo, Filtros, Modal | `components.js`, `data.js` | Funcional |
| Publicações | `publications.html` | Repositório | `components.js`, `data.js` | Funcional |
| Notícias | `news.html` | Listagem e Filtros | `components.js`, `news.js` | Funcional |
| Detalhe Notícia | `news-detail.html` | Artigo Completo | `components.js`, `news.js` | Funcional |
| Sugestões | `sugestoes.html` | Formulário de Contato | `sugestoes-init.js`, Static Forms | Funcional |
| Login | `login.html` | Autenticação Mock | `login-init.js`, `auth.js` | Apenas visual (não autentica) |
| Admin | `admin/index.html` | Painel Admin | `admin.js`, `auth.js` | Apenas leitura/mock |
| Termos/Privacidade | `termos...`, `politica...` | Documentos Legais | Nenhuma | Estático |
| 404 | `404.html` | Erro | `404-init.js` | Funcional |

## 2. Fonte B — Nuxt (Rotas no diretório `pages/`)
- `/` (`index.vue`)
- `/about` (`about.vue`)
- `/equipment` (`equipment.vue`)
- `/publications` (`publications.vue`)
- `/team` (`team.vue`)
- `/login` (`login.vue`)
- `/news` (`news/index.vue`)
- `/news/:id` (`news/[id].vue`)
- `/admin` (`admin/index.vue`)
- `/admin/news` (`admin/news/index.vue`)
- `/admin/news/create` (`admin/news/create.vue`)
- `/admin/secret-register` (`admin/secret-register.vue`)
- *(APIs no diretório `server/api/`: `/api/news`, `/api/auth/login`, etc.)*