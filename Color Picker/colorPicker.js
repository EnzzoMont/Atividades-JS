const btn = document.querySelector('#btn')
const colors = ['green','red','blue']
const color = document.querySelector(".color");

const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * colors.length)
    return randomNumber
}
btn.addEventListener('click', () =>{
    
    let randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})