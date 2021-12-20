//We are creating a function(not the entire program) for the problem below
//Input: nums = [2,7,11,15] with target=9
//Output: [0,1] because nums[0]+nums[1]==target==9
//the solution below has time comlexity of O(n)

var twoSum = function(nums, target)
{
  const numsMap={};                                       //creating a constant variable for mapping out the numbers
  for(let position=0; position<nums.length; position++)
  {
    const numsMapValue=numsMap[nums[position]];
        if(numsMapValue>=0)
        {
          returns [numsMapValue, position];
        }
        else
        {
         const findNum = target - nums[position];
         numsMap[findNum] = position;
        }
  }
};
