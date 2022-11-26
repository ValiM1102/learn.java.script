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

