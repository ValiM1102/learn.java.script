//arrays
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];
document.getElementById("demo").innerHTML = cars;

//Objects use names to access its "members"
const person = {
    firstName:"Chris",
    middleName:"P.",
    lastName:"Bacon",
    age: 22
};

//Accessing the Last Array Element
let car = cars[cars.length - 1]

//One way to loop through an array, is using a for loop:
const fruits = ["Apple", "Orange",
                "Mango", "Pear"];
let fLen = fruits.length;

let text = "<ul>";
for (let i=0; i<fLen; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("fruits").innerHTML = text;

///You can also use the Array.forEach() function:
const carBrands=['bmw', 'mercedes', 'opel', 'ford', 'vw', 'jaguar', 'gm'];
let text1='<ul>';
carBrands.forEach(myFunction);
text1 +='</ul>';

function myFunction(value){
    text1 +='<li>'+value+'</li>';
}
document.getElementById('carBrands').innerHTML=text1;

//Here I'll test myself
//Create new array, add 2 items and then remove the last one.
const myList=['cars', 'hiking', 'trucks', 'country'];
myList.push('nature', 'lakes');
 document.getElementById("myList").innerHTML=myList;
 //now let's remove the last 2 items
 const myList1=['cars', 'hiking', 'trucks', 'country'];
myList1.push('nature', 'lakes');
myList1.pop();
myList1.pop();
 document.getElementById("myList1").innerHTML=myList1;
 //job is done, could be better but I did it.

 var myName = "Valentin"; //global
 let secondName = "Bombonel"; //local
 const age = 22; //constant

 //primitive
 let boolean = false;
 console.log(typeof(boolean));

 let n = null;
 console.log(typeof(n));

 let undf = undefined;
 console.log(typeof(undf));

 let num = 123;
 console.log(typeof(num));

 let str = "This is a string";
 console.log(typeof(str));

 //objects
let persone1 = {
    age: 20,
    name: "Bombo"    
}
console.log(persone1);

//arrays

const hobbies = ["Motorsports", "Hiking", "Swimming"]
console.log(hobbies);

const prices = [12, 11, 13];
console.log(prices);

//operators

// +, -, /, *, 
//++, -- adds or removes 1

// and - &&, or - ||, not - !

// == != === !== <= >= < > -will result booleans(true/false)

console.log(length.hobbies === length.prices); //3=3

//atributions = += /= *= -= -I can specify the increment number

let num1 = 20;
num1 *= 2; //40
console.log(num1);

//flow control
// if/else
const age1 = [18]; 

if(age1 < 18){
    console.log("You are under aged.")
} else {
    console.log("Welcome.")
};

//for loop

const humans = ['Vali', 'Deni', 'Bombo'];

for(i=0; i<humans.length; i++){
    console.log(humans[i]);
};
for(i=humans.length - 1; i>=0; i--){
    console.log(humans[i]);
};

//while loop

let number=1;
while(number <10){
    console.log(number);
    number++;
};

//do while loop

do {

}while();

//switch

switch(){

};










































