const strings = ['a', 'b', 'c', 'd'];
//PUSH
strings.push('e');
console.log(strings);
//Initial array: ['a', 'b', 'c', 'd'];
//Output array: ['a', 'b', 'c', 'd', 'e'];

//POP
strings.pop();
console.log(strings);


//UNSHIFT
strings.unshift('ralph');
console.log(strings);
//SPLICE
strings.splice(2, 0, 'John');
console.log(strings);
