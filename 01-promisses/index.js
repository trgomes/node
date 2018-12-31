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


function obterEndereco(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'Rua dos bobos',
                numero: 0
            })
        }, 1000);
    })
}


const usuarioPromise = obterUsuario();

// Para manipular successo usamos Then
// Para manipular erro usamos Catch

usuarioPromise
    .then(usuario => {
        return obterTelefone(usuario.id)
            .then(function resolververTelefone(result) {
                return{
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(resultado => {
        return obterEndereco()
            .then(function resolverEndereco(result) {
                return {
                    usuario: resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: result
                }
            })
    })
    .then( resultado => {
        console.log('Resultado', `
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}

        `)
    })
    .catch(error => {
        console.log('Deu ruim', error)
    });