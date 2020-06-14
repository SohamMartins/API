// para o express
const express = require('express');
const routes = require('./routes');
const app = express();

// utlizando as rotas que importamos
app.use(routes);

// conectando-se com o banco de dados
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// para o db
const db_prods = require('./public/models/prods_db/database');
const db_clients = require('./public/models/clientes_db/database');

// para o servidor
const server = require('http').createServer(app); // define o protocolo HTTP
const io = require('socket.io')(server); // define o protocolo WSS pro websocket

// para nos conectarmos com o front-end por meio de sockets
io.on('connection', socket => {
    console.log(`Socket conectado com sucesso!`);

    // só para confirmar se tá tudo funfando direitinho
    socket.on('confirm', data => {
        console.log(`${socket.id} entrou na página inicial.`);
    });

    // registrando produtos
    socket.on('productRegister', data => {
        const _prod = new db_prods(data);
        _prod.save((err, prod) => {
            if (err) console.log('Ocorreu algum erro ao cadastrar o produto no banco de dados.');
    
            console.log('Produto cadastrado com sucesso!');
            console.log(prod);
        });
    });

    // registrando o cliente
    socket.on('clientRegister', data => {
        const _client = new db_clients(data);
        _client.save((err, cliente) => {
            if (err) console.log('Ocorreu algum erro ao cadastrar o cliente no banco de dados.');
    
            console.log('Cliente cadastrado com sucesso!');
            console.log(cliente);
        });
    });

    // para deletar o cliente
    socket.on('deleteClient', data => {

        db_clients.deleteOne({nome: data.nome}, (err, doc) => {
            if (err) console.log('Não foi possível deletar o cliente');

            if (doc.n == 1) {
                console.log("Cliente deletado com sucesso!");
            } else {
                console.log('Esse cliente não se encontra no banco de dados');
            }
        });


        
    });

    // para deletar um produto
    socket.on('delProduct', data => {
        db_prods.deleteOne({nome: data.nome}, (err, doc) => {
            if (err) console.log('Não foi possível deletar o produto');

            if (doc.n == 1) {
                console.log("Produto deletado com sucesso!");
            } else {
                console.log('Esse produto não se encontra no banco de dados');
            }
        });
    });
});

// aqui nós estamos exportando o servidor, o lugar onde irá hotear toda a nossa aplicação

module.exports = server;



// cambada de código que está aqui só para salvar
        /*
        db_clients.find({nome: data.nome}, (err, doc) => {
            db_clients.findByIdAndDelete({_id: doc._id});
            console.log(db_clients);
        });


        // db_clients.findOneAndDelete({nome: data.nome}, (err, doc) => {
        //    if (err) console.log('Ocorreu um erro ao deletar o cliente');
            
        //    if (doc) console.log('Sucesso ao deletar!');
        //});

        /*
        del_client.find({nome: data.nome}, (err, doc) => {
            if (err) console.log('Ocorreu um erro ao deletar o cliente');

            if (data.nome == doc.nome) {
                del_client.findOneAndDelete();

            }
        });

        // del_client.save((err, cliente) => {
        //    if (err) console.log('Ocorreu algum erro ao deletar o cliente no banco de dados.');

        //    console.log(cliente);
        //});
        */