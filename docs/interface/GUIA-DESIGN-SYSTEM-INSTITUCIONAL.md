# GUIA DE USO DO DESIGN SYSTEM INSTITUCIONAL

## 1. Tipografia
- **Fonte:** Utilizar estritamente a definida pelo manual da UFRN (Liberation Sans ou similar configurada no template).
- **Pesos:** Respeitar a hierarquia (H1 a H6, corpo, legenda).
- **Ação:** Não importar fontes do Google Fonts (como Montserrat) sem autorização.

## 2. Cores
- **Tokens:** Utilizar as variáveis CSS do template da UFRN (ex: `var(--color-primary)`).
- **Proibição:** Não criar variáveis com o roxo antigo do LATECE.
- **Background:** Utilizar as cores de superfície e fundo padrão.

## 3. Componentização (Vue/Nuxt)
- **Layouts:** Utilizar a estrutura de `layouts/` do Nuxt para herdar o Header e Footer institucionais.
- **Props:** Se o template fornecer componentes encapsulados (ex: `<UfrnButton>`), usá-los em vez de criar `<button>` puro com CSS customizado.
- **Extensão:** Se um componente precisar de ajuste, verificar se o template permite classes utilitárias antes de sobrescrever o CSS interno.

## 4. Restrições de Customização
- Não alterar o Header global para incluir a identidade do LATECE (a não ser que haja uma prop específica no template para isso).
- Não recriar efeitos de animação da versão antiga (como o hero inclinado).
- A identidade do LATECE deve estar focada no **conteúdo** das páginas, não na casca global do site, salvo autorização em contrário.