//string slicing = creating a substring from a portion of another string

//slice(start,end)
const fullName = "Mark Ely";

let firstName = fullName.slice(0,4);

let lastName = fullName.slice(5);

console.log(firstName);
console.log(lastName);

//get the first character 

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log("first character " + firstChar);
console.log("first character " + lastChar);

//get the firstname dynamically
let firstNames = fullName.slice(0, fullName.indexOf(" "));
console.log(firstNames);
let lastNames = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastNames);