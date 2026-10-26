# MANIFESTO DE BACKUPS — OPERAÇÃO LATECE

## 1. Registro de Ações

| Data/Hora | Fonte | Destino | Tipo | Incluídos | Excluídos | Integridade |
|---|---|---|---|---|---|---|
| 24/10/2026 | Projeto Vanilla | `../backup-24-10.zip` | Arquivo ZIP | Todos os arquivos exceto `node_modules` | Pastas de dependência e cache | Pendente de validação (Aguardando execução) |
| 24/10/2026 | Repositório Git | `latece-vanilla-historico.bundle` | Git Bundle | Todos os commits e branches | N/A | Pendente de validação (Aguardando execução) |

## 2. Itens de Configuração Sensível
- Arquivo `sugestoes.html` contém API Key pública do Static Forms. O backup não deve ser enviado para repositórios públicos.
- O arquivo `.gitlab-ci.yml` contém pipelines de validação que não serão acionados nesta fase.

## 3. Limitações
- Este manifesto não atesta a execução dos comandos, apenas documenta a estratégia. Os campos "Integridade" devem ser alterados para "Validado" somente após execução local pelo usuário.