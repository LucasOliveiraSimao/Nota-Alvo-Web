const { Analytics } = require("@vercel/analytics");

const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Erro ao ler o arquivo');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  } else {
    res.status(404).send('Not Found');
  }
};