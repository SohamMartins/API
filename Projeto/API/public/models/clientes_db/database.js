// aqui será onde criaremos os nossos models para os clientes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// criando um Schema (um padrão para se seguir ao criar um cliente)
const new_client = new Schema({
    nome: String, // declarando o tipo do objeto 'nome'
    tel: String // mesma coisa com o objeto 'tel'
});

// aqui nós estamos criando um modelo com nome 'Clientes' que irá receber o Schema (esquema) da const new_client
const Client = mongoose.model('Clientes', new_client);

/* notas do Sohamzin
    
    Um ponto importante a se falar é que o modelo não é uma coleção (collection). 
    Uma collection possui um modelo que segue um esquema. 

*/


// exportando esse modelo para utilizarmos em outros códigos
module.exports = Client;