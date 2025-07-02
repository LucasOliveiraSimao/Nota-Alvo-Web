const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  if (req.method === 'GET' && (req.url === '/' || req.url === '')) {
    const indexPath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Erro ao carregar a página');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  } else {
    res.status(404).send('Página não encontrada');
  }
};
