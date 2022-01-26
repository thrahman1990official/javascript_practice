const trap = function(heights)
{
 let leftPosition = 0, rightPosition = heights.length - 1;
  let maxLeft = 0, maxRight = 0;
   let totalWater = 0;
  
  while(leftPosition < rightPosition)             
  {
   if(heights[leftPosition] <= heights[rightPosition])
      {
     if(heights[leftPosition] >= maxLeft)
        {
        maxLeft = heights[leftPosition]; 
        }
     else
        {
        totalWater += maxLeft - heights[leftPosition]; 
        }
      leftPosition++;
      }
   else
   {  
    if(heights[rightPosition] >= maxRight)
      {
      maxRight = heights[rightPosition];
      }
    else
      {
      totalWater += maxRight - heights[rightPosition];
      }
      rightPosition--;
   } 
  }
  return totalWater;
}
