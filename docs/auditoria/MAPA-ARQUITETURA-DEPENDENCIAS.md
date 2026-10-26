# MAPA DE ARQUITETURA E DEPENDÊNCIAS

## 1. Fluxo Vanilla (Fonte A)
```text
[Usuário]
   ↓
[HTML (index.html, etc.)]  ← Carrega CSS Global (`variables.css`, `components.css`)
   ↓
[`js/main.js`] (Ponto de entrada)
   ├─→ `components.js` (Cria header, footer, cards)
   ├─→ `data.js` (Faz `fetch()` em `data/*.json`)
   ├─→ `i18n.js` (Lê `locales/*.json`)
   ├─→ `accessibility.js` (Manipula DOM e localStorage)
   └─→ `speech.js` (Web Speech API / Audio)