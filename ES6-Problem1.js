//Write JavaScript program to compare two objects to determine if first one contains equivalent property values to second one
//Use Object.keys() to get all keys of second object
//Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in first object and have same values

const matches = (obj, source) =>
Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
