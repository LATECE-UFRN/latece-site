# PLANO DE TESTES DE ACEITE (Implementação Futura)

## 1. Testes do Módulo Administrativo (LAT-F008 / LAT-F016)
- **Método:** Teste Funcional (API + Front).
- **Critério:** Fazer login com credenciais válidas (JWT). Criar uma notícia. Recarregar a página pública e verificar se a notícia aparece.
- **Segurança:** Tentar acessar `/admin` sem token e verificar redirecionamento (401/403).

## 2. Testes de Migração de Dados (LAT-F003, F004, F005, F006)
- **Método:** Integração (Banco de Dados).
- **Critério:** A contagem de itens (notícias, equipamentos) no novo banco deve ser igual à contagem dos arquivos JSON antigos. Os links de imagens devem estar corretos.

## 3. Testes de Acessibilidade (LAT-F009)
- **Método:** Automatizado (Pa11y/Lighthouse) + Manual.
- **Critério:** O novo painel de acessibilidade deve permitir aumentar a fonte, mudar para alto contraste e persistir a escolha após recarregar a página. A navegação por teclado deve funcionar sem barreiras.

## 4. Testes de Formulário (LAT-F007)
- **Método:** Funcional.
- **Critério:** Preencher o formulário de sugestões. Ele deve validar os campos e enviar via API (ou CMS STI), exibindo mensagem de sucesso. Não deve usar Static Forms em produção, se a STI exigir API própria.

## 5. Testes de Layout (LAT-F001, LAT-F013, LAT-F014)
- **Método:** Visual e Responsividade.
- **Critério:** A página deve se adaptar perfeitamente a celulares, tablets e desktops, seguindo estritamente o modelo da UFRN (quando fornecido).