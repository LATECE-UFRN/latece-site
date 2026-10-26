# INVENTÁRIO DE REFERÊNCIAS — OPERAÇÃO LATECE CONFORMIDADE STI

## 1. Fontes Identificadas

| ID | Caminho / Origem | Categoria | Finalidade | Estado |
|---|---|---|---|---|
| REF-01 | Raiz do projeto atual (HTML/CSS/JS/JSON) | VANILLA-CONSOLIDADA | Site em produção atual. Fonte de verdade funcional, textos e JSONs. | Ativo |
| REF-02 | `I:\UNIDADE-DEV-MARCONE\LATECE\Engenharia-reversa\LATECE-SITE-main` | NUXT-ORIGINAL | Projeto base (Nuxt 3, Vue, TS, SCSS). Referência arquitetural. | Parado |
| REF-03 | Histórico de Chat e `memorial-desenvolvimento-completo.docx` | DOCUMENTACAO | Registro histórico de decisões e correções. | Arquivado |
| REF-04 | Manuais STI e LATECE (PDFs) | DOCUMENTACAO | Regras de conformidade e identidade visual. | Analisado |

## 2. Distinção Crucial
- **REF-01 (Vanilla)** não possui tipagem estrita, não possui SSR (Server-Side Rendering) e usa ES Modules puros. É o que os usuários acessam hoje.
- **REF-02 (Nuxt)** possui estrutura SPA/SSR, mas foi descontinuada localmente para dar lugar à versão simplificada. É a base para a futura reimplementação exigida pela STI.

## 3. Limitações
- Não foi possível inspecionar o histórico de commits (`.git`) de REF-01 e REF-02 via interface de IA. Recomenda-se execução de `git log` localmente para atestar a integridade dos mesmos.