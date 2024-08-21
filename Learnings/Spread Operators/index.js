//spread operator = ...allows an iterable such as an array of string to be expanded into separte elements

let numbers = [1,2,3,4,5];

let maximum = Math.max(...numbers);
let minimum = Math.max(...numbers);

console.log(maximum);
console.log(minimum);

let username = "Mark Ely";
let letters = [...username];

console.log(letters);

//modify the username
letters = letters.join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];

//add the array into new array by spreading it
let newFruist = [...fruits, "mango","pineapple"];
console.log(newFruist);