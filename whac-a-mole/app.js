const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60 
let timerId = null

function randomSquare() {
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

// for each square listen out for a click on the mole 
// then reset hitposition so u can click another mole 
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.innerHTML = result
            hitPosition = null
        }
    })
})

//move mole
function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 700)
}
moveMole()

function countDown(){
    currentTime--
    timeLeft.innerHTML = currentTime

    if(currentTime <= 0){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown,1000)
