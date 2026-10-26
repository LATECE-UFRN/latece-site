# AUDITORIA FORENSE — OPERAÇÃO LATECE CONFORMIDADE STI

## 1. Escopo e Fontes
- **Fonte A (Vanilla):** Arquivos HTML, CSS, JS, JSON, manifestos e relatórios fornecidos.
- **Fonte B (Nuxt Original):** Listagem de diretórios (`arquivos-totais.txt`), `README.md` original, configurações (`nuxt.config.ts`, `package.json`).

## 2. Arquitetura Observada

### 2.1 Fonte A (Vanilla)
- **Padrão:** MPA (Multi-Page Application) estática.
- **Renderização:** HTML puro + injeção dinâmica de componentes via JavaScript (`components.js`).
- **Estado:** Variáveis globais e `localStorage` (para temas e idioma).
- **Dados:** Consumo de arquivos JSON locais via `fetch()`.
- **Backend:** Inexistente.
- **Admin:** Interface visual (SPA simulada) que consome JSONs locais, mas **não possui persistência real** (não há banco de dados, não há escrita em servidor).

### 2.2 Fonte B (Nuxt)
- **Padrão:** SSR/SPA com Nuxt 3.
- **Camadas:** `pages` (rotas), `components` (Vue), `stores` (Pinia), `server/api` (Nitro), `server/utils` (Acesso a banco).
- **Banco de Dados:** PostgreSQL (via driver `pg`).
- **Segurança:** JWT, bcrypt, `nuxt-security`.

## 3. Principais Problemas Encontrados
1.  **Desconexão de Backend:** O painel admin da versão Vanilla é uma casca vazia. Qualquer operação de CRUD (criar notícia, editar equipamento) não funciona, pois não há servidor para receber os dados.
2.  **Acessibilidade:** O relatório Pa11y aponta 107 falhas, sendo a maioria de contraste (cores claras em fundos claros) e falta de rótulos (`label`) em inputs de busca.
3.  **Segurança:** A chave do Static Forms está exposta no HTML (comum em soluções client-side, mas requer configuração de domínio restrito no painel do serviço). O sistema de login Vanilla não valida senhas por segurança, retornando falha por padrão.
4.  **Caminhos Absolutos:** Alguns scripts e links podem quebrar dependendo de onde o site for hospedado (necessidade de `BASE_PATH`).

## 4. Recomendações para a Fase 03
A Fase 03 (Equivalência) deverá mapear que, para atender à STI (que exige CRUD e PostgreSQL), a Fonte B (Nuxt) possui uma base muito mais próxima do alvo do que a Fonte A (Vanilla), embora a interface visual da Fonte A seja a mais refinada.