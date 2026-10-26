# RELATÓRIO DE ACESSIBILIDADE GLOBAL

## 1. Status dos Testes
- **Não executado:** A verificação prática não pôde ser realizada pois a implementação física está bloqueada (falta do template STI).
- **Análise Estática:** Baseada no manual da UFRN e nas diretrizes WCAG 2.2.

## 2. Requisitos Críticos para a Implementação Futura
- **Foco Visível:** Garantir que todos os links do menu institucional e botões tenham outline claro (não remover com `outline: none`).
- **Teclado:** O menu hambúrguer (se houver) e os modais devem prender o foco do teclado (`focus trap`).
- **Leitores de Tela:** Os ícones de redes sociais no footer devem ter `aria-label`.
- **VLibras:** O botão de Libras deve estar acessível e não sobrepor outros controles.

## 3. Pendências
- Verificar a ordem de tabulação no Header da STI.
- Auditar o contraste das cores do template com as ferramentas (axe / WAVE) quando implementado.