// ternary operator = a shortcut to if{} statements

let age = 12;
let message = age >= 18 ? "You're am adult" : "You're a minor";
console.log(message);

let time = 9;
let greeting = time < 12 ? "Good morning" : "Good afternooon";
console.log(greeting);

let isStudent = false;
message = isStudent ? "You are a Student" : "You are Not a student";
console.log(message);

//add discount
let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`) ;
