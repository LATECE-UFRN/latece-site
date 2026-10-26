# REGISTRO DE DECISÕES — NÃO MIGRAR (N)

## LAT-F015 — Script de Caminhos (`path.js`)
- **Motivo de não migração:** A arquitetura Nuxt e o servidor institucional da STI lidam com caminhos base de forma nativa (via configuração do servidor ou `baseURL` do router). Manter esse script criaria redundância e possível conflito de rotas.
- **Impacto:** Nenhum. As imagens e links devem usar caminhos gerenciados pelo Nuxt.
- **Ação necessária:** Incluir a lógica de caminhos na configuração do `nuxt.config.ts`.

## Qualquer customização de layout que conflite com o template UFRN
- **Motivo de não migração:** As normas da Fase 00 determinam a adoção do template UFRN (GOV-DEC-001). Elementos visuais como o "Hero inclinado com ondas", o carrossel JS puro e os cards personalizados serão descartados.
- **Impacto:** A identidade visual da versão Vanilla será perdida em favor da identidade UFRN.
- **Referência histórica:** Os arquivos da versão Vanilla estão congelados na Fase 01 e podem ser consultados para entender a intenção de design original.