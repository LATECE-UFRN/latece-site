# PENDÊNCIAS DE INFRAESTRUTURA — P09

| ID | Pendência | Dependência | Impacto |
|---|---|---|---|
| INFRA-01 | Provisionamento do PostgreSQL | STI/UFRN | Bloqueia backend real. |
| INFRA-02 | Domínio (`latece.ufrn.br`) | STI/UFRN | Bloqueia publicação. |
| INFRA-03 | Certificado TLS | STI/UFRN | Necessário para cookies `secure`. |
| INFRA-04 | Rate limiting | Definição de Infra | Proteção contra DoS. |
| INFRA-05 | Monitoramento de logs | STI/UFRN | Detecção de incidentes. |
| INFRA-06 | Pipeline de CI/CD | Definição de Repo | Automação de deploy. |
| INFRA-07 | Backup automatizado | PostgreSQL | Recuperação de desastres. |
| INFRA-08 | Integração SIGAA | STI/UFRN | Autenticação real. |
| INFRA-09 | Template oficial STI | STI/UFRN | Substituir UI provisória. |