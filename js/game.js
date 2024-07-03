const spanPlayer = document.querySelector(".spanName");
const cards = document.querySelector(".container-cards");
const playerName = localStorage.getItem("playerName")

window.onload = () => {
    spanPlayer.innerText = playerName;

}

const cardsGame = [
    'Blastoise',
    'Bullbassaur',
    'Charizard',
    'Gengar',
    'Giglipuf',
    'Giratina',
    'Pikachu',
    'Snorlax',
]

let firstCard = "";
let secondCard = "";

function createCard(pokemon) {
    const div = document.createElement("div")
    const front = document.createElement("div")
    const back = document.createElement("div")

    div.className = "card";
    front.className = "face front"
    back.className = "face back"

    front.style.backgroundImage = ` url("../img/${pokemon}.png") `

    div.appendChild(front)
    div.appendChild(back)
    cards.appendChild(div)
    div.setAttribute("data-character", pokemon)

    div.addEventListener("click", ({target}) => {
        if (target.parentNode.className.includes("rotateCard")) {
            return
            
        } if (firstCard === "") {
            target.parentNode.classList.add("rotateCard")
            firstCard = target.parentNode;
            
        } else if (secondCard === "") {
            target.parentNode.classList.add("rotateCard")
            secondCard = target.parentNode

            checkCards();
            
        }

    })
    
}

function checkCards(params) {
    const cardOne = firstCard.getAttribute("data-character")
    const cardTwo = secondCard.getAttribute("data-character")

    if (cardOne === cardTwo) {
        firstCard.firstChild.classList.add("disabledCard")
        secondCard.firstChild.classList.add("disabledCard")

        endGame();
        firstCard = "";
        secondCard = "";
        
    } else {
        setTimeout(() => {
            firstCard.classList.remove("rotateCard")
            secondCard.classList.remove("rotateCard")

            firstCard = "";
            secondCard = "";
            
        }, 477);

    }
    
}

function endGame(params) {
    const disabledCard = document.querySelectorAll(".disabledCard")

    if (disabledCard.length === 16) {

        setTimeout(() => {
           alert(`Fim de jogo, parabéns!  ${playerName}`)
            
        }, 477);
        
    }
    
}

function loadGame(params) {
    const duplicateArray = [...cardsGame, ...cardsGame].sort(() => Math.random()-0.5)
    duplicateArray.forEach((pokemon) => {
        createCard(pokemon)

    })
    
}

loadGame()