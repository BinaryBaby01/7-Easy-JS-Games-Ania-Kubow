const cardArray = [
    {
        name: "fries",
        img:'images/fries.png'
    },
    {
        name:'cinnamon-roll',
        img:'images/cinnamon-roll.png'
    },
    {
        name:'victoria-sponge',
        img:'images/viccie-sponge.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'french-toast',
        img:'images/french-toast.png'
    },
    {
        name: "fries",
        img:'images/fries.png'
    },
    {
        name:'cinnamon-roll',
        img:'images/cinnamon-roll.png'
    },
    {
        name:'victoria-sponge',
        img:'images/viccie-sponge.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'french-toast',
        img:'images/french-toast.png'
    }

]


cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
const resultDisplay = document.querySelector('#result')

function createBoard() {
    for (let i = 0; i < cardArray.length; i ++){
        const card = document.createElement('img')
        card.setAttribute('src', "images/cardback.png")
        card.setAttribute('data-id', i)
        card.addEventListener("click" , flipCard)
        console.log(card,i)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    if (optionOneId == optionTwoId){
        alert('you found a match!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{  // not a match show back of card
        cards[optionOneId].setAttribute('src','images/cardback.png')
        cards[optionTwoId].setAttribute('src','images/cardback.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations you found them all"
    }
}

function flipCard() {
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    console.log('clicked', cardId)
    cardsChosen.push(cardArray[cardId].name)
    console.log(cardsChosen)

    cardsChosenIds.push(cardId)
    console.log(cardsChosenIds)

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 750)

    }
}