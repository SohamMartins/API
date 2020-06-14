Nessa pasta aqui ficará guardados todos os documentos HTML e CSS;
Além das rotas de clientes e produtos; 
Caso queira criar um novo arquivo HTML, crie nesta pasta public, e, caso queira
renderizá-lo no código, utilize o mesmo padrão de comandos que eu fiz: 

    const express = require('express');
    const app = express();
    const routes = express.Router();
    const path = require('path');

    app.use(express.static(path.join(__dirname, 'public')));

    // fazendo com que possa usar html para as views do chat
    app.set('views', path.join(__dirname, 'public'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.use(routes);

    module.exports = app;

Exportando essa variável "app", vá no arquivo principal "routes.js" e adicione-a com o seguinte comando:

    // um ponto importante: é para passar o path do arquivo, não o arquivo em si
    // caso ele esteja na pasta public, passe o path: './public/seu_arquivo', se estiver numa pasta dentro da pasta public
    // é só tu passar o diretório correspondente: './public/nome_da_pasta/seu_arquivo' (sempre ponha em string)
    const nome_da_sua_variável = require('arquivo javascript que ficará junto no mesmo dir do html');

    // lembrando que o './' significa diretório local, ou seja, ele irá analisar o diretório em que o arquivo
    // que você está editando agora se encontra, se eu der um ./ no routes.js, ele reconhece como a pasta mãe
    // que é a root do projeto: projetoLicoviski (no meu caso) 
    // agora, se eu der um './' no public, será na pasta: projetoLicoviski/public/seu_arquivo 
    // esse tipo de coisa é meio chata de se lidar, por isso é bom prestar atenção, é normal errar os diretórios kkkkk
 