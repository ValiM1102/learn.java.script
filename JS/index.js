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

 //drawing 100 circles, I write the code from mdn and I try to understand it
 const btn=document.querySelector('button');
 const canvas=document.querySelector('canvas');
 const ctx=canvas.getContext('2d', { alpha: false });

 document.addEventListener('DOMContentLoaded', () => {
    canvas.width=
        document.documentElement.clientWidth;
    convas.height=
        document.documentElement.clientHeight;
})
    function random(number){
        return
            Math.floor(Math.random()*number);
    }

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(canvas.width),
    random(canvas.height), random(50), 0, 2 * Math.PI);
    ctx.fill();
    }
}

btn.addEventListener('click', draw);


