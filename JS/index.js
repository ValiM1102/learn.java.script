// //arrays
// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
// ];
// document.getElementById("demo").innerHTML = cars;

// //Objects use names to access its "members"
// const person = {
//     firstName:"Chris",
//     middleName:"P.",
//     lastName:"Bacon",
//     age: 22
// };

// //Accessing the Last Array Element
// let car = cars[cars.length - 1]

// //One way to loop through an array, is using a for loop:
// const fruits = ["Apple", "Orange",
//                 "Mango", "Pear"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i=0; i<fLen; i++){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("fruits").innerHTML = text;

// ///You can also use the Array.forEach() function:
// const carBrands=['bmw', 'mercedes', 'opel', 'ford', 'vw', 'jaguar', 'gm'];
// let text1='<ul>';
// carBrands.forEach(myFunction);
// text1 +='</ul>';

// function myFunction(value){
//     text1 +='<li>'+value+'</li>';
// }
// document.getElementById('carBrands').innerHTML=text1;

// //Here I'll test myself
// //Create new array, add 2 items and then remove the last one.
// const myList=['cars', 'hiking', 'trucks', 'country'];
// myList.push('nature', 'lakes');
//  document.getElementById("myList").innerHTML=myList;
//  //now let's remove the last 2 items
//  const myList1=['cars', 'hiking', 'trucks', 'country'];
// myList1.push('nature', 'lakes');
// myList1.pop();
// myList1.pop();
//  document.getElementById("myList1").innerHTML=myList1;
//  //job is done, could be better but I did it.

//  var myName = "Valentin"; //global
//  let secondName = "Bombonel"; //local
//  const age = 22; //constant

//  //primitive
//  let boolean = false;
//  console.log(typeof(boolean));

//  let n = null;
//  console.log(typeof(n));

//  let undf = undefined;
//  console.log(typeof(undf));

//  let num = 123;
//  console.log(typeof(num));

//  let str = "This is a string";
//  console.log(typeof(str));

//  //objects
// let persone1 = {
//     age: 20,
//     name: "Bombo"    
// }
// console.log(persone1);

// //arrays

// const hobbies = ["Motorsports", "Hiking", "Swimming"]
// console.log(hobbies);

// const prices = [12, 11, 13];
// console.log(prices);

// //operators

// // +, -, /, *, 
// //++, -- adds or removes 1

// // and - &&, or - ||, not - !

// // == != === !== <= >= < > -will result booleans(true/false)

// console.log(length.hobbies === length.prices); //3=3

// //atributions = += /= *= -= -I can specify the increment number

// let num1 = 20;
// num1 *= 2; //40
// console.log(num1);

// //flow control
// // if/else
// const age1 = [18]; 

// if(age1 < 18){
//     console.log("You are under aged.")
// } else {
//     console.log("Welcome.")
// };

// //for loop

// const humans = ['Vali', 'Deni', 'Bombo'];

// for(i=0; i<humans.length; i++){
//     console.log(humans[i]);
// };
// for(i=humans.length - 1; i>=0; i--){
//     console.log(humans[i]);
// };

// //while loop

// let number=1;
// while(number <10){
//     console.log(number);
//     number++;
// };

//dom - document object model


// // getElementByID()

// const title = document.getElementById('main-heading');
// console.log(title);

// //getElementByClassName()

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// // getElementByTagName()

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// //querySelector ()

// const container1 = document.querySelector('.container1')
// console.log(container1);


// //querySelectorAll()

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// //I need to make a for loop to aplly the styling 
// //                               for more than 1 element 
// const items = document.querySelectorAll('.list-items');

// for (i=0; i<items.length; i++){
//     items[i].style.fontSize = '2rem';
// };

//Creating element

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //adding elements

// ul.append(li);

// //Modifying the text

// li.innerText = 'Mustang';


// //Modifying attributes and classes

// li.setAttribute('class', 'list-items');

// //remove elements

// li.remove();

///////////////////////////////////////////////////////


//traversing the dom

//let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);


// child node traversal

// console.log(ul.childNodes);

// console.log(ul.firstChild);

// console.log(ul.lastChild);


// ul.childNodes[1].style.backgroundColor = 'blue';



// let ul = document.querySelector('ul');

// console.log(ul.children);
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

//sibling nodes h1 and ul, same level for example

// let ul = document.querySelector('ul');

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

//for elements just add element


///////////////////////////////////////////////

//EVENT LISTENERS///////////////////////////////

//element.addEventListener("click", function);

// const buttonTwo = document.querySelector('.box-2');

// function alertBtn () {
//     alert('this works too')
// };

// buttonTwo.addEventListener("click", alertBtn);

// //mouse over event


// const newBackgroundColor = document.querySelector('.box-3');

// function changeBackground(){
//     newBackgroundColor.style.backgroundColor = 'red';
// };

// newBackgroundColor.addEventListener("mouseover", changeBackground);

//reveal event

// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');

// function revealContent(){
//     if(hiddenContent.classList.contains('reveal-btn')
//     ) {
//         hiddenContent.classList.remove('reveal-btn')
//     }   else {
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener('click', revealContent);


// // the end for now

// const repeatString = ['hey'];
// for (i=0; i<3; i++){
   
// };

//ROCK PAPER SCISSORS

//getCompuerChoice = randomly return 'rock', 'paper' or 'scissors'

// let getComputerChoise = Math.floor(Math.random() * 3);
// let computerChoise = "";

// switch(getComputerChoise){
//     case 0: 
//         computerChoise = "rock";
//     break;

//     case 1:
//         computerChoise = "paper";
//     break;

//     case 2:
//         computerChoise = "scissors";
//     break;
// }

// let myChoice = "";

// let myPaper = document.getElementById("paper");
// myPaper.addEventListener("click", function(e){
//     myChoice = "paper";
//     return("paper");
// });

// let myRock = document.getElementById("rock");
// myPaper.addEventListener("click", function(e){
//     myChoice = "rock";
//     return("rock");
// });

// let myScissors = document.getElementById("scissors");
// myPaper.addEventListener("click", function(e){
//     myChoice = "scissors";
//     return("scissors");
// });

// if(computerChoise == myChoice){
//     alert("DRAW")
// }else if( computerChoise == "rock", myChoice == "paper"){
//     alert("YOU WIN")
// }else if( computerChoise == "rock", myChoice == "scissors"){
//     alert("YOU LOSE")
// }else if( computerChoise == "paper", myChoice == "rock"){
//     alert("YOU LOSE")
// }else if( computerChoise == "paper", myChoice == "scissors"){
//     alert("YOU WIN")
// }else if( computerChoise == "scissors", myChoice == "rock"){
//     alert("YOU WIN")
// }else if( computerChoise == "scissors", myChoice == "paper"){
//     alert("YOU LOSE")
// };

////////////////////////////
// MAKING A CUSTOM FUNCTION THAT WILL DISPLAY A MESSAGE BOX 

// const body = document.body;

// function displayMessage(msgText, msgType){
//     const panel = 
//         document.createElement('div');
//         panel.setAttribute('class', 'msgBox');
//         body.appendChild(panel);

//     const msg = 
//         document.createElement('p');
//         msg.textContent = msgText;
//         panel.appendChild(msg);

//     const closeBtn =
//         document.createElement('button');
//         closeBtn.textContent = 'x';
//         panel.appendChild(closeBtn);

//         closeBtn.addEventListener('click', () => 
//         panel.parentNode.removeChild(panel));

//     if (msgType === 'warning') {
//         msg.style.backgroundImage = 'url(../icons/warning.png)';
//         panel.style.backgroundColor = 'red';
//     } else if (msgType === 'chat') {
//         msg.style.backgroundImage = 'url(../icons/chat.png)'
//         panel.style.backgroundColor = 'green';
//     } else {
//         msg.style.paddingLeft = '20px';
//     }   
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => displayMessage
// ('Vali: Need help?', 'chat'));
// ('WARNING! NO MEMORY LEFT', 'warning'));

/////////////////////////
//make a return function MDN

// const input = document.querySelector('.numberInput');
// const para = document.querySelector('p');

// function squared(num){
//     return num * num;
// }

// function cubed(num){
//     return num * num * num;
// }

// function factorial(num) {
//     if (num < 0) return undefined;
//     if (num === 0) return 1;
//     let x = num - 1;
//     while(x > 1) {
//         num *= x;
//         x--;
//     }
//     return num
// }

// input.addEventListener("change", ()=>{
//     const num = parseFloat(input.value);
//     if (isNaN(num)) {
//         para.textContent = "Youu need to enter a number you idiot!";
//     }else {
//         para.textContent = `${num} squared is ${squared(num)}. `;
//         para.textContent += `${num} cubed is ${cubed(num)}. `;
//         para.textContent += `${num} factorial is ${factorial(num)}. `;
//     }
// });

// TOP PROJECT
 //a function that adds 7 to my number

//  function add7(num){
//     console.log(num + 7)
//  }

//  //multiply numbers function

// function multiply(num, num1){
//     console.log(num * num1)
// }

// //capitalize

// function capitalize(word){
//     const firstLetter = word.charAt(0);
//     const upperCaseFL = firstLetter.toUpperCase();
//     const upperCase = word.toUpperCase();
//     console.log(upperCase, upperCaseFL)
// }

// function lastLetter(word){
//     const lastLetter = word.slice(-1);
//     console.log(lastLetter)
// }
// lastLetter('abcd')

/////////////////
//rock paper scissors from console

// const random = Math.floor(Math.random()*3)

// function getCompuerChoice(){
//     if(random == 0){
//         return 'rock'
//     } else if (random == 1){
//         return 'paper'
//     }else{
//         return "scissors"
//     }
// }

// // const player = myChoise;
// const computer = getCompuerChoice;

// function checkWinner(){
//     if(player == computer){
//         return "Draw!";
//     }
//     else if(computer == "ROCK"){
//         return (player == "PAPER") ? "You Win!" : "You Lose!";
//     }
//     else if(computer == "PAPER"){
//         return (player == "SCISSORS") ? "You Win!" : "You Lose!";
//     }
//     else if(computer == "SCISSORS"){
//         return (player == "ROCK") ? "You Win!" : "You Lose!";
//     }
// }
// const player = 'rock';
// const winner = checkWinner;
// console.log(winner)

// const cars = [
//     "BMW",
//     "Volvo",
//     "Opel",
//     "peugeot",
//     "Audi",
//     "Ford"
// ]
// let carsLength = cars.length

// let text = "<ul>";
// for (let i = 0; i < carsLength; i++){
//     text += "<li>" + cars[i] + "</li>";
// }
// text += "</ul>"
// document.getElementById("demo").innerHTML = cars[cars.length - 1];


