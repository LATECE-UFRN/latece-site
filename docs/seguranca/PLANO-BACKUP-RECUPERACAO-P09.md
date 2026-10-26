# PLANO DE BACKUP E RECUPERAÇÃO — P09

## 1. Estado Atual
- **Banco de dados:** JSON em memória (sem persistência real).
- **Código:** Git.
- **Arquivos:** Sem upload implementado.

## 2. Estratégia Proposta (Pós-PostgreSQL)
| Item | Frequência | Retenção | Armazenamento |
|---|---|---|---|
| Dump PostgreSQL | Diário | 7 dias / 4 semanas | Servidor UFRN + Cópia externa. |
| Arquivos (uploads) | Semanal | 30 dias | Servidor UFRN. |
| Código-fonte | A cada commit | Permanente | GitLab UFRN. |

## 3. Recuperação
1. Restaurar dump do PostgreSQL.
2. Restaurar arquivos.
3. `npm run build`.
4. Validar integridade e reiniciar o serviço.