# MODELOS

__esse diretório é responsável por criar os modelos dos banco de dados que criamos__

Os modelos tem uma estrutura bem fácil e concisa de se entender: 

    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
  
    const new_client = new Schema({
        nome: String, // declarando o tipo do objeto 'nome'
        tel: String // mesma coisa com o objeto 'tel'
    });
    
    const Client = mongoose.model('Clientes', new_client);

A primeira linha de código mostra que estamos utilizando a biblioteca mongoose (que lida com mongo em js);
A segunda nós estamos criando um Schema (esquema que iremos utlizar);

Já na próxima linha, o new_client é referido a um novo cliente que irá seguir o schema dito ali;
Depois nós declaramos um modelo com o nome 'Clientes' (primeiro parâmetro) com o esquema, schema, do new_client.
