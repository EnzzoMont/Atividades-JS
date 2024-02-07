console.log('Olá!');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
    return userInput
  }
  else{
    console.log('Error')
  }
  }

  const getComputerChoice = () =>{
    let choice = Math.floor(Math.random()*3)
      if(choice == 0){
        return 'rock'
      }
      else if(choice == 1){
        return 'paper'
      }
      else{
        return 'scissors'
      }
    }
const determineWinner = (userChoice,computerChoice) => {
  if(computerChoice === userChoice){
    return 'tie'
  }
  else if(userChoice === 'paper'){
    if (computerChoice == 'scissors'){
      return 'The computer won!'
    }
    else{
      return 'You won'
    }
  }
  else if (userChoice === 'scissors'){
    if(computerChoice == 'paper'){
      return 'You won'
    }
    else {
      return 'The computer won!'
    }
  }
  else if (userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'You won'
    }
    else {
      return 'The computer won!'
    }
}
}
const playGame = () =>{
  let userChoice = getUserChoice('rock')
  let computerChoice = getComputerChoice()
  console.log(userChoice,computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
}
playGame()

