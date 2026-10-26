# MATRIZ DE SEGURANÇA DA API — P09

| Endpoint | Método | Autenticação | Validação | Observação |
|---|---|---|---|---|
| `/api/auth/login` | POST | Pública | Zod (email, senha) | Cookie `httpOnly` via servidor. |
| `/api/news` | GET | Pública | N/A | Leitura. |
| `/api/news/:id` | GET | Pública | `parseInt` | Leitura. |
| `/api/news` | POST | **Protegido** | Zod (título, categoria, content) | Middleware server-side. |
| `/api/news/:id` | PUT | **Protegido** | Zod (título, categoria, content) | Middleware server-side. |
| `/api/news/:id` | DELETE | **Protegido** | `parseInt` | Middleware server-side. |
| `/api/suggestions` | POST | Pública | Zod (tipo, mensagem, email) | Formulário público. |
| `/api/team` | GET | Pública | N/A | Leitura. |
| `/api/equipment` | GET | Pública | N/A | Leitura. |
| `/api/publications` | GET | Pública | N/A | Leitura. |
| `/api/agenda` | GET | Pública | N/A | Leitura. |