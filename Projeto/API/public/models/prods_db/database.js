// aqui será onde criaremos os nossos models para os produtos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// criando um Schema (um padrão para se seguir ao criar um produto)
const new_prod = new Schema({
    nome: String, // definindo o tipo do objeto 'nome'
    orig_value: Number, // mesma coisa
    sell_value: Number // mesma coisa
});

// nota-se que o valor original e o valor de venda não são int ou float, só são number
// isso porquê o javascript já converte por si só

// aqui nós estamos criando um modelo com nome 'Produtos' que irá receber o Schema (esquema) da const new_prod
const Product = mongoose.model('Produtos', new_prod);

/* notas do Sohamzin
    
    Um ponto importante a se falar é que o modelo não é uma coleção (collection). 
    Uma collection possui um modelo que segue um esquema. 

*/

// exportando para utilizarmos nos outros códigos
module.exports = Product;