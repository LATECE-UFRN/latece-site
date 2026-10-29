# Resumo de Retomada — Pós-Transição (Caminho A)

## O que mudou?
- O projeto agora é um site puramente institucional.
- Foram removidos: painel admin, login, autenticação e APIs de escrita.
- As páginas públicas consomem dados da API do CMS Institucional (`NUXT_PUBLIC_CMS_API_BASE`).

## O que falta?
- A STI precisa fornecer a documentação exata dos endpoints do CMS para ajustar os contratos de dados (ex: o CMS usa `titulo` em vez de `title`?).
- A STI precisa fornecer o template oficial de layout (Header/Footer).

## Como testar?
Execute `npm run dev` e verifique se as notícias e informações estão aparecendo corretamente.