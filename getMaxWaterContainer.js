const heightsArray = [7,1,2,3,9];                 //an array has been assigned called heights array with values 7,1,2,3,9

const getMaxWaterContainer = function(heights)    //we named the function getMaxWaterContainer with a variable called heights
{
    let maxArea = 0;                                                //we created a variable called maxArea
    for(let p1 = 0; p1 < heights.length; p1++)                      //the first number pointed starts at array location zero and gradually increments searching
    {
        for(let p2 = p1+1; p2 < heights.length; p2++)               //the 2nd number points at the location next to the first number and increments searching
        {
            const height = Math.min(heights[p1], heights[p2]);      //height is minimum of the two numbers chose
            const width = p2 - p1;                                  //width is the difference between the first number chose & second number chosen
            const area = height * width;                            //area if the multipication of height to width
            
            maxArea = Math.max(maxArea, area);                      //maxArea is maximum possible value that comes out of the areas between the two array numbers chosen
        }
    };
    return maxArea;                                                 
}

console.log(getMaxWaterContainer(heightsArray));
