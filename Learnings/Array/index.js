//array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

//access element
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//change array
fruits[1] = "pomelo";
console.log("change to ", fruits[1]);

//add end
fruits.push("new");

console.log(fruits);

//remove element in the end
fruits.pop();
console.log(fruits);
//add beggening
fruits.unshift("mango");
console.log(fruits);
//remove elemnt int the begginer
fruits.shift();

//length of array
let numOfFruits = fruits.length;
console.log(numOfFruits);

//return the index of the element
console.log(fruits.indexOf("banana"));

//loop thorugh array

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//reverse
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

//sort fruits
fruits.sort();

//shortcut
for (let fruit of fruits) {
  console.log(fruit);
}

//can be reverse fruits
fruits.sort().reverse();
for (let fruit of fruits) {
  console.log(fruit);
}
