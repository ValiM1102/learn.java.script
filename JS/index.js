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
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}  

let firstCard = getRandomIntInclusive(1, 11)
let secondCard = getRandomIntInclusive(1, 11)

let sum = firstCard + secondCard

