//Math built-in object that provide a collection of properties and methods

let x = 31.21;
let y = 2;
let z = 10.5;

//round the number
z = Math.round(z);
console.log('round ' + z);

//round down
z = 10.6;
z = Math.floor(z);
console.log('round down ' + z);
//round up
z = 10.6;
z = Math.ceil(z);
console.log('round up ' + z);
//elemenate decimals

z = 10.6;
z = Math.trunc(z);
console.log('elemenate decimals ' + z);

//power
z = Math.pow(x,y);
console.log("Math Power", z);

//sqrt 
z = Math.sqrt("sqrt " + x);
console.log("square root", z);
//absolute value or positve
z = -39;
z = Math.abs("absoulute value" + z);
console.log("Abosulte value", z);
//sign
z = -20;
z = Math.sign(z);
console.log("Sign", z);

// max and minimum
z = Math.max(x,y);
console.log("Max number is " + z);

z = Math.min(x,y);
console.log("Min number is " + z);