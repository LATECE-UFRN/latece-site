# MAPA DE REPOSITÓRIOS — OPERAÇÃO LATECE CONFORMIDADE STI

## 1. Relação de Repositórios e Fluxos

### 1.1 Repositório Vanilla (REF-01)
- **Localização:** Pasta atual do projeto.
- **Hospedagem:** GitHub Pages (`polimatastudio.github.io/lateceufrn`).
- **Branch de referência:** `main` (presumido).
- **Observação:** É a versão de consulta e validação de conteúdo.

### 1.2 Repositório Nuxt Original (REF-02)
- **Localização:** `LATECE-SITE-main`.
- **Finalidade:** Fonte arquitetural para a nova implementação STI.
- **Observação:** Possui estrutura de backend (Nitro server) e componentes Vue não totalmente mapeados na versão Vanilla.

### 1.3 Fluxo de Desenvolvimento Futuro
- O novo projeto deverá ser instanciado em um **novo repositório Git** (ou branch órfã `sti-compliance`), evitando misturar o código legado com o novo.
- O template oficial da STI (quando fornecido) será a semente deste novo repositório.