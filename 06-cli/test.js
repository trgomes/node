const { deepEqual, ok } = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

const database = require('./database')

describe('Suite de manipulação de Herois', function () {

    // READ
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const result = await database.listar(expected.id)

        deepEqual(result, expected)
    })

    /*
    it('deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR

        ok(null, expected)
    })
    */

})