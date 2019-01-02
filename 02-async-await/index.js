function obterUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    });
}


function obterTelefone(idUsuario){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '99999999',
                ddd: 12
            })
        }, 1000);
    });
}   


function obterEndereco(usuarioId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'Rua dos bobos',
                numero: 0
            })
        }, 1000);
    })
}

//1° passo adicionar a palavra async -> automaticamente retornará uma promise
main();

async function main(){
    try{

        console.time('time-promise')

        let usuario = await obterUsuario();
        //let telefone = await obterTelefone(usuario.id);
        //let endereco = await obterEndereco(usuario.id);
        let resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ]);

        let telefone = resultado[0];
        let endereco = resultado[1];

        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereço: ${endereco.rua}, ${endereco.numero}            
        `);

        console.timeEnd('time-promise');
    } catch(error) {
        console.log("Deu ruim", error)
    }
}