const cardArray = [
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'fries',
        img : 'images/fries.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'fries',
        img : 'images/fries.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    },
]


cardArray.sort(() => 0.5 - Math.random())
let cardChosen = []
let chosenCardIds = []
const cardsWon = []

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
function createBoard() {
    for(let i=0; i< cardArray.length; i++){

        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }

}    

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = chosenCardIds[0]
    const optionTwoId = chosenCardIds[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image ')
    }

    if(cardChosen[0] == cardChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    chosenCardIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!'
    }

}

createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    chosenCardIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}