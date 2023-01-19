const express = require('express');
const { productsRouter, salesRouter } = require('./routers');

const app = express();
app.use(express.json()); // para poder ler o corpo 
app.use('/products', productsRouter); // defnindo as rotas e aonde devem ser procuradas
app.use('/sales', salesRouter); // defnindo as rotas e aonde devem ser procuradas

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;