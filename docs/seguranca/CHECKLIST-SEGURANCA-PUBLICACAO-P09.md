# CHECKLIST DE SEGURANÇA PARA PUBLICAÇÃO — P09

## 1. Antes de Publicar
- [ ] `npm run build` executado com sucesso.
- [ ] Variáveis de ambiente configuradas no servidor.
- [ ] `.env` no `.gitignore`.
- [ ] `NODE_ENV=production` definido.
- [ ] HTTPS configurado no proxy/servidor.

## 2. Verificação de Cabeçalhos
- [ ] CSP presente e sem bloqueio de recursos essenciais.
- [ ] `X-Content-Type-Options` presente.
- [ ] `X-Frame-Options` presente.
- [ ] HSTS ativo em produção.

## 3. API
- [ ] Endpoints de escrita retornando 401 sem token.
- [ ] Cookies `httpOnly` e `secure`.
- [ ] Validação Zod testada (dados inválidos barrados).
- [ ] Rate limiting ativado (pendente).

## 4. Banco de Dados
- [ ] PostgreSQL provisionado.
- [ ] Credenciais seguras via `.env`.
- [ ] Backup testado.

## Legenda
✅ Aprovado | ⚙️ Configurado | ⏳ Pendente Infra | 📋 Pendente Decisão