//Determing if the product of all integers is odd or even
//Zero is returned if product of all integers is odd & Zero is taken as an even number
//Example#1-> Input: [1,2,3,4]
//Output: 10
//Explanation: 1 * 2 * 3 * 4 = 24 shows this is an even number & sum of all integers is 10
//Example#2-> Input: [5.7,9]
//Output: 0
//Explanation: 5 * 7 * 9 = 315 is odd so zero is returned

export function oddEvenProd(myList)
{
 const multi = multiAllInt(myList);
  if(multi % 2 === 0)
    {
    return sumAllInt(myList)
    }
  else
    {
    return 0;
    }
}

function multiAllInt(arr)
{
 let multi = 1;
  for(let i = 0; i<arr.length; i++)
    {
    multi = multi * arr[i];
    }
  return multi;
}

function sumAllInt(arr)
{
 let sum = 0;
  for(let i = 0; i<arr.length; i++)
    {
    sum = sum + arr[item];
    }
  return sum;
}  
