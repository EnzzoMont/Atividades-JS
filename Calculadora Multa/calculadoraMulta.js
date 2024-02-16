const prompt = require('prompt-sync')()

const getUserInfo = () => {
    let velocidade = Number(prompt('Qual foi a sua velocidade?'))
    return velocidade
}
const calcularMulta = velocidade =>{
    let multaFinal = (velocidade - 60) * 100
    return multaFinal
}
const main = () =>{
    let velocidadeInformada = getUserInfo()
    console.log(velocidadeInformada)
    if (velocidadeInformada > 60){
        let multaFinal = calcularMulta(velocidadeInformada)
        console.log(`O valor da sua multa é ${multaFinal}`)
    }
    else{
        console.log('Parabéns! Você estava na velocidade correta.')
    }
}
main()