const {obterPessoas} = require ('./services')

async function main(){
    try {
        const { results } = await obterPessoas('a')

        const pesos = results.map(item => parseInt(item.height))

        console.log('pesos', pesos)

        // [20, 30, 40, 10, ...]
        const total = pesos.reduce( (anterior, proximo) => {
            return anterior + proximo
        } )

        console.log('Total', total)
    } catch (error) {
        console.log(`Deu ruim`, error)
    }
}

main()