# GUIA DE INSTALAÇÃO, EXECUÇÃO E PUBLICAÇÃO

## 1. Pré-requisitos
- Node.js v24.x (ou superior)
- NPM v10.x
- Git

## 2. Instalação Local
1. Clone o repositório.
2. Acesse a pasta: `cd latece-site`.
3. Instale as dependências: `npm install`.
4. Configure as variáveis: copie `.env.example` para `.env` (se aplicável).
5. Inicie o servidor de dev: `npm run dev`.
6. Acesse `http://localhost:3000`.

## 3. Verificações Básicas
- Home deve carregar notícias.
- Login deve funcionar com `admin` / `admin123`.
- Rota `/admin` deve redirecionar para `/login` se não autenticado.

## 4. Compilação de Produção
- Execute: `npm run build`.
- O Nuxt gerará a pasta `.output/`.

## 5. Publicação (Pendente de Definição)
*Nota: O procedimento abaixo é um rascunho para o ambiente de produção.*
Caso a STI defina o uso de servidor Node:
- O servidor deve rodar `node .output/server/index.mjs`.
- Variáveis de ambiente de produção devem ser injetadas.
- É necessário um banco PostgreSQL e o domínio `latece.ufrn.br`.