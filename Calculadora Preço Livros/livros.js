const prompt = require('prompt-sync')()

const getUserInfo = () => {
    let numberOfBooks = Number(prompt('Quantos livros você quer?'))
    return numberOfBooks
}
const calcularPreco = nlivros =>{
    if (nlivros >=7){
        return nlivros * 15
    }
    else{
        return nlivros * 22
    }
}
const main = () =>{
    let books = getUserInfo()
    let precoFinal = calcularPreco(books)
    let valorConvertido = precoFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    console.log(`O preço final é ${valorConvertido} e você levará ${books} do Harry Potter`)
    
}
main()