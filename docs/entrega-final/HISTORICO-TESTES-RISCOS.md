# HISTÓRICO DE TESTES E RISCOS

## Testes Homologados
- Build e compilação (Vite/Nuxt).
- Hydration (Vue) corrigida.
- Middleware de autenticação.
- Validação de payloads (Zod).

## Testes Bloqueados / Não Executados
- Testes de usabilidade com leitores de tela reais (NVDA).
- Testes de carga (Rate Limiting em produção).
- Teste de persistência real (PostgreSQL).

## Riscos Ativos
1. **Perda de Dados:** Qualquer reinício do servidor apaga as notícias criadas no Admin (banco em memória).
2. **Identidade Visual:** O layout atual não é o oficial da UFRN.
3. **Segurança de Produção:** O mock de login precisa ser substituído antes de ir ao ar.