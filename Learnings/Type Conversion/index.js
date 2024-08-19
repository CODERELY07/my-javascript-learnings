//type conversion = change the datatype of a value to another(string,numbers, booleans)

let age = "20";
//convert the data type to number
age = Number(age);
age += 1;

console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
x = "0";
y = "0";
z = "0";


x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
x = "";
y = "";
z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);