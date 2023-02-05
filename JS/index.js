// people counter


// let count = 0;
// let countEl = document.getElementById("count-el");

// function increment(){
//   count += + 1;
//   countEl.textContent = count;
// }

// let savedDoc = document.getElementById("saved-count");
// let countTxt = "History: "
// function save(){
//   let savedHistory =  count + " - ";
//   savedDoc.textContent += savedHistory;
//   count = 0;
//   countEl.textContent = count
// }

// function removeEntry(){
//   count = 0;
//   countEl.innerText = count;
//   savedDoc.textContent = "Entryes: ";
// }




//exercices

// let errorMsg = document.getElementById("errorMsg");
// function error(){
//   errorMsg.textContent = "Something went wrong, please try again later!"
// }



// mini calculator

// let numOne = 2
// let numTwo = 8
// document.getElementById("num1").textContent = numOne  
// document.getElementById("num2").textContent = numTwo 
// let result = document.getElementById("result")
// result.innerText = "result"


// function add(){
//   result.innerText = numOne + numTwo; 
// }

// function substract (){
//   result.innerText = numOne - numTwo;
// }

// function multiply (){
//   result.innerText = numOne * numTwo;
// }

// function divide(){
//   result.innerText = numOne / numTwo;
// }

//blackjack

// random numbers function

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}  

// here are all the cards
let firstCard = getRandomIntInclusive(1, 11)
let secondCard = getRandomIntInclusive(1, 11)


// let randomIndex = getRandomIntInclusive(0, 1);

let allCards = [firstCard, secondCard]
let sum = allCards[0] + allCards[1]




let hasBlackjack = false
let isAlive = true
let message
let cards = document.querySelector("#cards-el")
let score = document.querySelector("#score-el")
let messageEl = document.querySelector("#message-el")

// these functions start and render the game when play and draw is pressed
function startGame (){
  renderGame()
}

function renderGame(){
  cards.textContent = "Cards: ";
  for (let i = 0; i < allCards.length; i++){
    cards.textContent += allCards[i] + " "
  }
  score.textContent = "Score: " + sum
  
  if (sum <= 20){
  message = "Do you want to draw another card?"
} else if(sum === 21){
  message = "Congratulations! Blackjack!"
  hasBlackjack = true
} else {
  message = "Sorry, you've lost!"
  isAlive = false
}
  messageEl.textContent = message;
  
}

// draw new card function



function newCard(){
  let card = getRandomIntInclusive(1, 11); 
  allCards.push(card)
  sum += allCards[2];
  renderGame();
}

function getRandomCard(){
  return 5
}
let random = getRandomCard()
console.log(random)