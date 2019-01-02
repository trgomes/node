const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function(click){
    console.log('Um usuário clicou', click);
})

meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no ok');

let count = 0;

setInterval(function () {
    while(count < 3){
        meuEmissor.emit(nomeEvento, 'no ok ' + (count ++));
    }
    
}, 1000);

//eventos do console
//process pertence ao node
const stdin = process.openStdin();

//data é um evento padrão descrito na documentação
stdin.addListener('data', function(value){
    console.log(`Você digitou: ${value.toString().trim()}`);
})
