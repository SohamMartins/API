const express = require('express');
const app = express();
const routes = express.Router();
const path = require('path');

// importando as rotas de cada página
const prods = require('./public/Produtos/produtos');
const clients = require('./public/Clientes/clientes');

// aqui estamos utilizando o que pegamos dos clients e prods
routes.use(clients);
routes.use(prods);

// onde irão ficar os arquivos públicos acessados pela aplicação
app.use(express.static(path.join(__dirname, 'public')));

// fazendo com que possa usar html para as views do chat
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// usando as rotas
app.use(routes);

// exportamos o app para podermos utilizar no arquivo app.js
module.exports = app;