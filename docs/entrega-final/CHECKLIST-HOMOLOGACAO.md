# CHECKLIST DE HOMOLOGAÇÃO INSTITUCIONAL

| Categoria | Item | Status | Evidência / Observação |
| :--- | :--- | :--- | :--- |
| **Funcionamento** | Compilação de Produção | ✅ Aprovado | `npm run build` executado com sucesso. |
| **Funcionamento** | Inicialização e Rotas | ✅ Aprovado | Rotas públicas e admin respondem corretamente. |
| **Funcionamento** | Login e Proteção de Rota | ✅ Aprovado | Mock JWT + Middleware `auth.ts` validados. |
| **Qualidade** | Responsividade (Mobile/Tablet) | ⚙️ Parcial | Testado via emulação DevTools; falta hardware real. |
| **Qualidade** | Acessibilidade (Teclado/Foco) | ✅ Aprovado | Skip links, `aria-labels` e foco visível implementados. |
| **Qualidade** | Leitor de Tela (NVDA/VoiceOver) | ⏳ Pendente | Necessário ambiente com software assistivo. |
| **Segurança** | Validação Zod nas APIs | ✅ Aprovado | Endpoints POST/PUT barram dados inválidos. |
| **Segurança** | Headers e CSP | ✅ Aprovado | `nuxt-security` configurado no `nuxt.config.ts`. |
| **Institucional** | Template Oficial UFRN | ❌ Pendente | Interface atual é provisória (aguardando STI). |
| **Institucional** | Identidade Visual | ❌ Pendente | Cores e fontes aguardam manual oficial da UFRN. |
| **Institucional** | Infraestrutura de Deploy | ❌ Pendente | Domínio e servidor não definidos. |