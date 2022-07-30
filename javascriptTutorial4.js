//Normal Function in JavaScript vs ES6 features Arrow function
function sum(a, b) //has two parameters
{
 return a + b; 
} //Function
//above is example of the older ES6

LET sum2 = (a, b) => a + b;
//above is example of the latest ES6

function isGood(number) //has one parameter
{
 return number >= 0; 
} //Function
//above is example of the older ES6

LET isGood2 = (number) => number >= 0;
//es6
//above is example of the latest ES6

function randomFigure() //has no parameter
{
 return Math.random; 
} //Function

document.addEventListener("click", function () {console.log("Click");}); //Function

//Es6 with Arrow Function
let sum2 = (a, b) => a + b; //Es6

let isGood2 = (number) => number => 0; //Es6
