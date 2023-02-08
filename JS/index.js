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

// function randomCards(){
//     let randomNum = Math.floor( Math.random()*13 ) + 1;
//     if(randomNum > 10){
//       return randomNum = 10
//     } else if(randomNum === 1){
//       return randomNum = 11
//     } else {
//       return randomNum
//     }
// }  
// /////player details

// let player = {
//   name: "Vali",
//   chips: 100
// }
// let playerEL = document.querySelector(".player-el")
// playerEL.textContent = player.name + ": $" + player.chips

// /////
// let allCards = []
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// let message
// let cards = document.querySelector("#cards-el")
// let score = document.querySelector("#score-el")
// let messageEl = document.querySelector("#message-el")

// // these functions start and render the game when play and draw is pressed
// function startGame (){
//   isAlive = true
//   let firstCard = randomCards();
//   let secondCard = randomCards();
//   allCards = [firstCard, secondCard]
//   sum = allCards[0] + allCards[1]
//   renderGame()
// }

// function renderGame(){
 
//   cards.textContent = "Cards: ";
//   for (let i = 0; i < allCards.length; i++){
//     cards.textContent += allCards[i] + " "
//   }
//   score.textContent = "Score: " + sum
  
//   if (sum <= 20){
//   message = "Do you want to draw another card?"
// } else if(sum === 21){
//   message = "Congratulations! Blackjack!"
//   hasBlackjack = true
// } else {
//   message = "Sorry, you've lost!"
//   isAlive = false
// }
//   messageEl.textContent = message;
//   return allCards;
// }

// // draw new card function



// function newCard(){
//   if(isAlive === true && hasBlackjack === false){
//   let card = randomCards();
//   sum += card;
//   allCards.push(card)
//   renderGame();
// }}


///blackjack

////

// let countries = ["Romania", "Polonia", "Serbia", "Bulgaria", "Moldova"]

// countries.pop()
// //removes last element
// countries.shift()
// //removes first element
// countries.push("Austria")
// //adds element to the end
// countries.unshift("Germania")
// //adds element to the start
// console.log(countries)

////

// let dayOfTheMonth = 11
// let month = "February"
// if(dayOfTheMonth === 11 && month === "February"){
//   console.log("Special day today big boss")
// }

////

// let hands = ["rock", "paper", "scissors"]

// function randomHand(){
//   let random = Math.floor(Math.random()*hands.length)
//   console.log(hands[random]) 
// }
// randomHand()

////

// chrome extension


const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.querySelector("#input-el")
const unList = document.querySelector("#ul-el")




inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    render()
    inputEl.value = 'input here' 
})

function render(){
    let listItems = ""
    for (let i = 0; i<myLeads.length; i++){

        listItems += `
        <li>
            <a href = '${myLeads[i]}' target = '_blank'>
                ${myLeads[i]}
            </a>
        </li>`
        
    }
    unList.innerHTML = listItems
   
}




// chrome extension

