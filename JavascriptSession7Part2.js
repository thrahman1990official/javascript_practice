//Challenge 1: Algorithm Sort
//Implement Bubble Sort
//This is among several challenges on sorting algorithms
//Give array of unsorted items, we want to be able to return sorted array, we will see several different methods to do this & learn some trade-offs between
//between these different approaches. While most modern languages have languages have built-in-sorting methods for applications like this, it is still
//important to understand some of common basic approaches & learn how they can be implemented. 

//Here we shall bubble-sort. The bubble sort method starts at beginning of an unsorted array & bubbles up unsorted value towards the end, iterating through
//the array until it is completely sorted it does this by comparing adjacent items & swapping them if they are out of order. The method continues looping
//through array until no swaps occur at which point array is sorted.

//This method requires multiple iterations through array & for average & worst cases has quadratic time complexity. While simple it is usually impractical
//in most situations

//Three successful tips of passing Algorithms: (1) Understand sequence (2) Understand flow of algo (3) Understand the statement

function bubbleSort(array)
{
 //change code below
 for(let i = 0; i < array.length -1; i++)
  {
  for(let j = 0; j < array.length -1 -i; j++)
   {
    if(array[j] > array[j+1])
     {
     const temp = array[j];
       array[j] = array[j+1];
     array[j+1] = temp;
     }
   }
 }
 return array
  //change code above this line
}
console.log(bubbleSort([100, 1, 21, 200, 4,...., 101, 67, 77, 45, 55]));
