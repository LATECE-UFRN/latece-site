# RELATÓRIO DE TESTES DE SEGURANÇA — P09

## 1. Testes Executados (Local)
| Teste | Resultado |
|---|---|
| Build de produção | ✅ Sucesso. |
| Acesso POST `/api/news` sem token | ✅ Retorna 401. |
| Cookie `httpOnly` (inspeção via DevTools) | ✅ Inacessível via JS. |
| Envio de notícia com título vazio | ✅ Zod retorna 400. |
| Envio de `<script>` no conteúdo | ✅ DOMPurify remove. |

## 2. Testes Não Executados
| Teste | Motivo |
|---|---|
| DAST / Pentest | Requer autorização. |
| Rate Limiting | Não implementado. |
| CSRF Token | Não implementado (mitigado por SameSite). |
| Produção | Ambiente não provisionado. |