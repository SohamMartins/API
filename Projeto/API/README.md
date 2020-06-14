
***IMPORTANTE***

__PARA O PROGRAMA FUNCIONAR, DEVE-SE INSTALAR ALGUMAS DEPENDÊNCIAS NO SEU COMPUTADOR__
A primeira dependência é o NodeJS, caso já possua ele, suave. 
Inicie no terminal, no diretório da sua pasta, o comando npm init -y
Esse comando irá fazer com que se crie um package.json, que é extremamente importante


A segunda dependência é instalar o express.js, que é o framework que iremos utilizar
mas ele não se instala pela internet, ele se instala pelo cmd (já irei passar o comando)

A terceira dependência é instalar o socket.io, que também é instalado via cmd 

o comando que tu deverá utilizar no seu terminal NO DIRETÓRIO DA SUA PASTA ROOT é: 

    npm add ejs express socket.io

isso irá instalar todas as nossas dependências.

/// sobre os arquivos:

Aqui possui os arquivos que fazem o programa funcionar. 

O app.js é onde há a convergência entre tudo, ele funciona como um
arquivo mãe que gerencia o resto dos arquivos e gera o servidor; 

O routes.js é onde se pega as informações do front-end e jogam para o app.js;

O server.js fica o executável do server, é lá onde se inicia o servidor para
funcionar a aplicação, deves executá-lo para funcionar, execute somente ele; 

Caso tenha alguma dúvida sobre a sintaxe que utilizei nas funções e afins, pesquise na net; 
Pesquisar na net é a melhor coisa para um programador, acredite. Mas, caso não ache nada, 
só me perguntar que ajudarei de bom grado. Tamo junto e espero que entenda tudo! 