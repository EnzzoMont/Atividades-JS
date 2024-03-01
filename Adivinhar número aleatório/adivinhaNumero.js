const prompt = require('prompt-sync')()
//escolhe um número aleatório entre 0 e 10
const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random()*10 + 1)
    return randomNumber
}
//compara e decide se o número escolhido pelo usuário é igual ao escolhido pelo pc
const playGame = randomNumber =>{
    randomNumber = getRandomNumber()
    let chances = 3
    while(chances > 0){
    
        const playerOption = parseInt(prompt(`Escolha um número de 1 a 10: `))
        if (!isNaN(playerOption) && playerOption >=0 && playerOption <=10){
        if (playerOption === randomNumber){
            console.log('Parabéns! Você acertou!')
            return // finaliza o loop e encerra o programa
        }
        else{
            chances--
            if(chances > 0){
                console.log(`Você ainda tem ${chances} ${chances===1?'tentativa restante.':'tentativas restantes.'}`)
            }
            else{
                console.log(`Que pena! Tente de novo. O número era ${randomNumber}`)
            }
        }
    }
    else {
        console.log('Digite um número correto')
    }

}
}
playGame()