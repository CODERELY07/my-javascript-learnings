// rest parameters = (...rest) allow a function to work with a variable
// number of arguments by bundling them into an Array

//spread = expands an array into separate elements
// rest = bundles separate elements into an array make a elements be array

// the parameters use rest
function openFridge(...fooods) {
  //in the console use the spear
  console.log(...fooods);
}
openFridge("burger", "ramen", "hotdog", "tocino");

//example rest
function sum(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 23, 3, 4, 56, 6);
console.log(`Your total is ${total}`);

//example rest get aaverge
function aaverge(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const ave = aaverge(90, 90, 90);
console.log(ave.toFixed(2));

function combineStrings(...strings) {
  return strings.join(" ");
}

let names = combineStrings("Mark", "Ely", "CoderEly");
console.log(names);
