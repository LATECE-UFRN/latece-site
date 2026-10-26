# PLANO DE ROLLBACK (RECUPERAÇÃO) — OPERAÇÃO LATECE

## 1. Estratégia de Recuperação de Desastres

### 1.1 Localização dos Backups (Fictício até execução)
- **Backup de Código:** `../latece-vanilla-backup-2026-10-24.zip` (na pasta pai).
- **Backup de Histórico:** `latece-vanilla-historico.bundle`.
- **Projeto Nuxt:** Pasta estática `LATECE-SITE-main`, que não será alterada.

### 1.2 Como Recuperar os Arquivos (Passo a Passo para Low-Code)
1. Se o código atual for corrompido, **NÃO sobrescreva a pasta atual**. Mova a pasta corrompida para `_lixo/`.
2. Extraia o arquivo `.zip` na pasta original.
3. O estado dos arquivos voltará exatamente ao momento do backup.

### 1.3 Como Recuperar o Histórico Git
Se o repositório `.git` for corrompido:
1. Crie uma pasta vazia e execute `git init`.
2. Execute `git fetch ../latece-vanilla-historico.bundle`.
3. Verifique com `git log` e crie a branch novamente com `git checkout -b main FETCH_HEAD`.

## 2. Verificação de Integridade
- Antes de extrair o `.zip`, verifique se o tamanho do arquivo condiz com o tamanho da pasta do projeto.
- Após a recuperação, abra o `index.html` em um servidor local (ex: Live Server) para confirmar que a página carrega e os CSS/JS estão funcionando.