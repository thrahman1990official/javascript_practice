const strings = ['a', 'b', 'c', 'd']; //initial array used as an input
//PUSH
strings.push('e');
console.log(strings);
//push a new value at the end of the array after the last existing value in the array
//Initial array: ['a', 'b', 'c', 'd'];
//Output array in the console: ["a", "b", "c", "d", "e"];

//POP
strings.pop();
console.log(strings);
//removes the last array value
//Output array in the console: ["a", "b", "c"];

//UNSHIFT
strings.unshift('x');
console.log(strings);
//adds a value in the front of the array
//Output array: ["x", "a", "b", "c", "d"];

//SPLICE
strings.splice(2, 0, 'John');
console.log(strings);
//Output array: ["a", "b", "John", "c", "d"];
