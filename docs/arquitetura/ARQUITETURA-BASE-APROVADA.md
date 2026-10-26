# ARQUITETURA BASE APROVADA

## 1. Status da Aprovação
**BLOQUEADO.** A arquitetura não pode ser inicializada fisicamente até que a STI forneça o template oficial e confirme as versões vigentes.

## 2. Decisões Institucionais Aplicadas
- **GOV-DEC-001:** Adotar template e identidade visual UFRN.
- **STI-TEC-003:** O framework deve ser Nuxt (versão a confirmar).
- **STI-TEC-013:** O banco de dados deve ser PostgreSQL (a confirmar se será gerido pela STI ou pelo LATECE).

## 3. Modelo de Execução e Renderização
- **Modelo:** A ser definido. O template da STI ditará se será SSR (Server-Side Rendering), SSG (Static Site Generation) ou SPA (Single Page Application). O projeto Nuxt original usava SPA (`ssr: false`), mas o template institucional pode exigir SSR para SEO.

## 4. Estrutura de Diretórios (Proposta Baseada no Manual)
A estrutura deverá seguir o padrão Nuxt, adaptada pela STI:
```text
/latece-sti-compliance
├── assets/          # SCSS, imagens processadas
├── components/      # Componentes Vue reutilizáveis
├── composables/     # Lógica reutilizável (ex: useAuth)
├── config/          # Configurações do projeto
├── layouts/         # Layouts de página (default, admin)
├── pages/           # Rotas da aplicação
├── plugins/         # Inicialização de bibliotecas
├── public/          # Assets estáticos (favicon, robots.txt)
├── server/          # API Routes (Nitro) e middlewares
├── stores/          # Gerenciamento de estado (Pinia)
├── utils/           # Funções auxiliares
├── app.vue          # Componente raiz
├── nuxt.config.ts   # Configuração do Nuxt
├── package.json     # Dependências
└── tsconfig.json    # Configuração do TypeScript