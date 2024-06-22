// Variable
// Array
// Loops
// Conditions
// Function

// Variables

// 3 ways to declare variables in javascript
// let X ;
// X = 10;

// let X = 'Apple';
// let Y = BigInt(4545544444545454545454545844n);
// console.log(Y);

const person = {
    name : "Kamar",
    age : 20,
    city : "Dhaka",
    haschildren : false
}
 console.log(person);
 console.log("MY name is " + person.name + " and I am " + person.age +" years old. I live in " + person.city);

 
const cars =["Apple", "Orange", "Banana", "Coconut"];
let text = "";
for(let car of cars){
    text += car + "<br>";
}
document.getElementById("demo").innerHTML=text;
