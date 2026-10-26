
---

### ARQUIVO 5 — `INVENTARIO-DADOS-ASSETS.md`

```markdown
# INVENTÁRIO DE DADOS E ASSETS

## 1. Arquivos JSON (Vanilla)
- `data/news-fallback.json`: Array de notícias. Campos: `id`, `title`, `excerpt`, `content`, `category`, `createdAt`, `imageUrl`, `isVideo`, `links`.
- `data/equipment.json`: Array de equipamentos. Campos: `id`, `name`, `category`, `imageUrl`, `images` (array), `description`, `download`.
- `data/publications.json`: Array de publicações. Campos: `id`, `title`, `authors`, `abstract`, `type`, `year`, `doi`, `externalLink`.
- `data/team.json`: Array de membros. Campos: `id`, `name`, `role`, `photoUrl`, `lattesUrl`, `institution`.
- `data/agenda.json`: Array de eventos. Campos: `id`, `date`, `time`, `title`, `description`, `location`, `category`.

## 2. Imagens e Fontes
- **Logos:** `assets/images/logos/logo.png` (Vanilla e Nuxt).
- **Ícones:** `assets/images/icons/lattes.png`, Instagram e YouTube.
- **Fontes:** Montserrat e Open Sans (carregadas via Google Fonts).
- **Imagens de Equipe:** Salvas localmente com o nome do membro (ex: `debora.jpeg`).

## 3. Observações
- Os dados da versão Nuxt ficavam no PostgreSQL, mas possuíam fallback para `data/team.ts` (não migrado totalmente para banco na versão antiga).