//We are creating a function for the problem below
//Input: nums = [2,7,11,15] with target=9
//Output: [0,1] because nums[0]+nums[1]==target==9
//the solution below has time comlexity of O(n^2)

var twoSum = function(nums, target)   
//the twoSum variable uses two primary functions 'nums' for the numbers that are added & target which is resultant of the added numbers
{
for(let position1=0; position1<nums.length; position1++)              //while scanning through finding the position of the first number to find the target number
  {
  const findNum = target - nums[position1];                       //initializing a constant variable which is difference between target & number at position one
  for(let position2=position1+1; position2<nums.length; position2++)  //while scanning through finding the position of the second number to find the target number
      {
      if(findNum==nums[position2])                                //finding Number at position 2 by equating it to variable constant variable 'findNum'
          {
          return[position1, position2];                           //returning position of the first number & second number needed to reach the target number
          }
      }
  }
return null;
};
