const express = require("express");
const app = express();
const routes = express.Router();
const path = require('path');

// fazendo com que possamos renderizar o documento html no nosso site por meio do express
app.use(express.static(path.join(__dirname)));

app.set('views', path.join(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// estamos aqui declarando que quando alguém entra no http://localhost/Clientes/, irá renderizar o arquivo
routes.use('/Clientes', (req, res) => {
    res.render('clientes.html');
});

// estamos aqui declarando que quando alguém entra no http://localhost/DeleteClientes/, irá renderizar o arquivo
routes.use('/DeleteClientes', (req, res) => {
    res.render('delClientes.html');
});

// usando para exportar
app.use(routes);

module.exports = app;