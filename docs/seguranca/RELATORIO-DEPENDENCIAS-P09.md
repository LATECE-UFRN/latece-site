# RELATÓRIO DE DEPENDÊNCIAS — P09

## 1. Dependências Diretas (Produção)
| Pacote | Versão | Função | Alerta |
|---|---|---|---|
| `nuxt` | 4.6.2 | Framework | Nenhum crítico. |
| `vue` | 3.5.44 | UI | Nenhum crítico. |
| `pinia` | 2.x | Estado | Nenhum crítico. |
| `@pinia/nuxt` | 2.x | Módulo Pinia | Nenhum crítico. |
| `@fortawesome/fontawesome-free` | 6.x | Ícones | Nenhum crítico. |
| `isomorphic-dompurify` | Atual | Sanitização HTML | Nenhum crítico. |
| `nuxt-security` | Atual | Segurança | Nenhum crítico. |
| `zod` | 4.x | Validação | Nenhum crítico. |

## 2. Dependências de Desenvolvimento
`@types/node`, `eslint`, `prettier`, `stylelint`, `sass`, `pug`.

## 3. Observações
- A árvore de dependências é enxuta.
- O comando `npm audit --production` deve ser executado periodicamente.
- **Não executar `npm audit fix --force`** para evitar quebras de compatibilidade.