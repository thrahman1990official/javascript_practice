var trap = function(height)
{
let totalWater = 0; //initialize total water to be zero at the beginning of the cycle  
  for(let position = 0; position < height.length; position++)
  {
    let leftPosition = position, rightPosition = position;
      let maxLeft = 0, maxRight = 0;
    while(leftPosition>=0)
      {
      maxLeft = Math.max(maxLeft, height[leftPosition]);
        leftPosition--;
      }
    while(rightPosition<height.length)
      {
      maxRight = Math.max(maxRight, height[rightPosition]);
        rightPosition++;
      }
    const currentWater = Math.min(maxLeft, maxRight) - height[position];
      if(currentWater>=0)
      {
        totalWater+=currentWater;
      }
  }
  return totalWater;
};
