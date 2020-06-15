const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/Clientes';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Client = require('./public/models/clientes_db/database');

// ESSE CÓDIGO É DE SUMA IMPORTÂNCIA

// para mostrar tudo que tem naquela collection
Client.find((err, cliente) => {
    if (err) console.log('Ocorreu um erro');

    for (let clientes of cliente) { 
        console.log(clientes);
    }
});


/*
// para deletar muitos objetos
Client.deleteMany({ nome: /a/i }, (err, doc) => {
    if (err) console.log('Deu erro ao deletar');
});
*/