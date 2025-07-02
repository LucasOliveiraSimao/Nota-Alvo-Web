const { Analytics } = require("@vercel/analytics");

module.exports = (req, res) => {
  // Serve conteúdo para a rota raiz
  if (req.method === 'GET' && req.url === '/') {
    // Se quiser servir arquivo HTML da pasta public, pode ler com fs
    // Ou só enviar uma resposta simples como exemplo:
    res.status(200).send('<h1>Olá, servidor serverless na Vercel!</h1>');
  } else {
    res.status(404).send('Not Found');
  }
};