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

//EVENT LISTNERS///////////////////////////////

















































