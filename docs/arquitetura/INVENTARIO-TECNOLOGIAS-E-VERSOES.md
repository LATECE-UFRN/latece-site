
---

### ARQUIVO 2 — `INVENTARIO-TECNOLOGIAS-E-VERSOES.md`

```markdown
# INVENTÁRIO DE TECNOLOGIAS E VERSÕES

| Tecnologia | Papel | Versão no Manual | Estado de Suporte | Versão a Instalar | Pendência |
|---|---|---|---|---|---|
| Node.js | Runtime JS | 20.x | **EOL (Fim de Vida)** | **A DEFINIR** | STI precisa confirmar se aceita Node 22 ou 24. |
| Nuxt | Framework | 3.x | **EOL em 31/07/2026** | **A DEFINIR** | STI precisa confirmar se migramos para Nuxt 4. |
| Vue | UI Library | 3.x | Ativo | 3.x | Nenhuma. |
| TypeScript | Tipagem | 5.x | Ativo | 5.x | Nenhuma. |
| Pug | Template Engine | 3.x | Ativo | 3.x | Aguardando template STI. |
| Sass | Pré-processador | 1.x | Ativo | 1.x | Aguardando template STI. |
| Pinia | Estado | 2.x | Ativo | 2.x | Aguardando template STI. |
| PostgreSQL | Banco de Dados | (Não especificado) | Ativo | 15 ou 16 | Aguardando definição de infra (GOV-PEN-004). |
| ESLint | Lint JS/TS | 8.x | Ativo | 8.x | Nenhuma. |
| Prettier | Formatador | 3.x | Ativo | 3.x | Nenhuma. |

**Nota de Bloqueio:** Conforme a Regra de Bloqueio Tecnológico, o projeto não pode ser inicializado com as versões do manual (Nuxt 3 e Node 20) sem o aval da STI, pois são versões obsoletas.