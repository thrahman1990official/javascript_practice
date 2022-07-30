//Normal Function in JavaScript vs ES6 features Arrow function
function sum(a,b)
{
 return a + b; 
} //Function

function isGood(number)
{
 return number >= 0; 
} //Function

function randomFigure()
{
 return Math.random; 
} //Function

document.addEventListener("click", function () {console.log("Click");}); //Function

//Es6 with Arrow Function
let sum2 = (a, b) => a + b; //Es6

let isGood2 = (number) => number => 0; //Es6
