// var is for variable
/*
var yourName;
yourName=10;
var yourname="Chris P. Bacon";
*/
//the net ninja tutorial 8
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}
console.log(favoriteAnimal('Bombonel'))

//Write a function called add7 that takes one number and returns that number + 7.

function add7 (number) {
    return number + 7
}
console.log(add7(13))

//Write a function called multiply that takes 2 numbers and returns their product.

function multiply(numero1) {
    return numero1 * 5
}
console.log(multiply(5))

var button = document.querySelector('button');
var box = document.getElementById('box');

button.onclick = function changeColor(){
    if(box.style.background == 'pink'){
        box.style.background = 'blue';
    }else{
        box.style.background = 'pink'
    }
   
}