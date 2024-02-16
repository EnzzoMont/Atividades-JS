const prompt = require('prompt-sync')()

const getUserInfo = () => {
    let n1 = Number(prompt('Digite o primeiro número?'))
    let n2 = Number(prompt('Digite o segundo número?'))
    let n3 = Number(prompt('Digite o terceiro número?'))
    return {
        n1: n1,
        n2: n2,
        n3: n3
    }
}
const calcularMaior = (n1,n2,n3) =>{
    if(n1 > n2 && n1 > n3){
        return n1
    }
    else if(n2 > n3){
        return n2
    }
    else {
        return n3
    }
}
const main = () =>{
    let numeroEscolhidos = getUserInfo()
    numero1 = numeroEscolhidos.n1
    numero2 = numeroEscolhidos.n2
    numero3 = numeroEscolhidos.n3
    let numeroCalculado = calcularMaior(numero1,numero2,numero3)
    console.log(`O maior valor é ${numeroCalculado}`)
}
main()