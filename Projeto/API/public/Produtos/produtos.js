const express = require("express");
const app = express();
const routes = express.Router();
const path = require('path');

// para renderizar documentos html no nosso site
app.use(express.static(path.join(__dirname)));

app.set('views', path.join(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// estamos aqui declarando que quando alguém entra no http://localhost/Produtos/, irá renderizar o arquivo
routes.use('/Produtos', (req, res) => {
    res.render('produtos.html');
});

// estamos aqui declarando que quando alguém entra no http://localhost/DeleteProdutos/, irá renderizar o arquivo
routes.use('/DeleteProdutos', (req, res) => {
    res.render('delProds.html');
});

// usando para exportar
app.use(routes);

module.exports = app;