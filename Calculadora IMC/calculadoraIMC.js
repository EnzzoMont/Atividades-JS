const getUserInfo = () =>{
let peso = Number(prompt('Qual é o seu peso?'))
let altura = Number(prompt('Qual é a sua altura?'))

return {
    peso : peso,
    altura: altura
}
}

const calcularIMC = (pesoDoUsuario, alturaDoUsuario) =>{
    if(isNaN(pesoDoUsuario) || isNaN(alturaDoUsuario) || pesoDoUsuario === 0 || alturaDoUsuario === 0){
        console.log('Digite novamente')}
    else{
    let imc = pesoDoUsuario / (alturaDoUsuario**2)
    return imc.toFixed(2)}
}

const iniciarPrograma = () =>{
    let userInfo = getUserInfo()
    let peso = userInfo.peso
    let altura = userInfo.altura
    const imc = calcularIMC(peso,altura)

    console.log(`Seu peso é ${peso}, sua altura
    é ${altura} e seu IMC é ${imc}`)
}

iniciarPrograma()
