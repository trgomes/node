const { deepEqual, ok } = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Lanterna verde',
    poder: 'Anel',
    id: 2
}

const database = require('./database')

describe('Suite de manipulação de Herois', function () {

    before( async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })

    // READ
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const result = await database.listar(expected.id)

        deepEqual(result, expected)
    })

    
    it('deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const result = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const actual = await database.listar(DEFAULT_ITEM_CADASTRAR.id)    
        deepEqual(actual, expected)
    })

    it('deve remover um heroi', async () => {
        const expected = true
        const result = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(result, expected)
    })
    
    it('deve atualizar o heroi', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Batman',
            poder: 'Dinheiro'
        }

        const novoDado = {
            nome: 'Batman',
            poder: 'Dinheiro'
        }

        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const result = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)

        deepEqual(result, expected)
    })

})