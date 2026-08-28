# Dashboard Mercadex 24h — Bursty

Dashboard de performance (Meta Ads, Google Ads, Instagram Orgânico e Operações/Jira)
do cliente **Mercadex 24h**, em arquivo único (`index.html`).

Os dados são lidos, no navegador do usuário, direto das planilhas do Google Sheets
publicadas em CSV. Não há backend de dados — o `server.js` apenas entrega o HTML.

## Estrutura

```
index.html     → o dashboard (arquivo único)
server.js      → servidor Node mínimo, sem dependências (usa a porta do Railway)
package.json   → define o comando de start (node server.js)
```

## Subir no GitHub

No terminal, dentro desta pasta:

```bash
git init
git add .
git commit -m "Dashboard Mercadex 24h"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

## Publicar no Railway

1. Acesse https://railway.app e faça login.
2. **New Project → Deploy from GitHub repo** e selecione o repositório que você acabou de subir.
3. O Railway detecta o Node automaticamente, roda `npm start` e sobe o serviço.
   Não é preciso configurar mais nada — o servidor usa a variável `PORT` do Railway.
4. Em **Settings → Networking → Generate Domain** para gerar a URL pública.

Pronto: a URL gerada abre o dashboard.

## Rodar localmente (opcional)

```bash
npm start
# abre em http://localhost:3000
```

## Observações

- Para os dados aparecerem, cada aba da planilha do Mercadex precisa estar
  **publicada na web em formato CSV** (Arquivo → Compartilhar → Publicar na web → CSV).
- Se algum indicador não aparecer, abra o Console do navegador (F12) e verifique a
  linha `[Bursty] Fontes ...` para ver quantas linhas e quais colunas foram lidas.
