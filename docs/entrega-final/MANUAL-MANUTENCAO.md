# MANUAL DE MANUTENÇÃO (FUTUROS BOLSISTAS)

## 1. Como adicionar uma notícia?
**Atualmente:** Pelo painel Admin (`/admin/noticias/nova`). 
*Nota: Como não há banco de dados, a notícia some se o servidor reiniciar.*
**Futuro:** Quando o PostgreSQL for implementado, os dados ficarão salvos permanentemente.

## 2. Como alterar textos institucionais?
Altere diretamente nos arquivos `.vue` dentro de `app/pages/` (ex: `sobre.vue`).

## 3. Como atualizar a equipe?
Atualmente, os dados vêm do arquivo `server/data/team.json`. Edite o JSON e reinicie o servidor.

## 4. Como funciona o sistema de login?
O login é um *mock* (simulação). Não há verificação em banco. O cookie de segurança é gerado pelo servidor.

## 5. Onde estão as imagens?
Na pasta `public/images/`. Sempre use caminhos relativos (ex: `/images/team/foto.jpg`).

## 6. Problemas Conhecidos
- **Erro 429 (Too Many Requests):** Ocorre em ambiente local se muitas imagens faltarem e gerarem erro 404 em sequência. Desativado no `nuxt.config.ts` para testes locais.
- **Sessão expirada:** O login dura 24 horas.