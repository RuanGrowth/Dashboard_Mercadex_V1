// Servidor mínimo (sem dependências) para servir o dashboard do Mercadex.
// O Railway define a variável PORT automaticamente; aqui apenas a usamos.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  // Healthcheck simples (Railway/monitoramento)
  if (req.url === '/health' || req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    return;
  }
  // Single-page: qualquer rota devolve o dashboard
  fs.readFile(INDEX, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Erro ao carregar o dashboard.');
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('Dashboard Mercadex no ar na porta ' + PORT);
});
