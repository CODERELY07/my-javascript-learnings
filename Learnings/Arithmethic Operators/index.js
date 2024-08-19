//arithmetic operators = operands(values, variables, etc)
                         //operators (+ - * /)
                         //ex. 11 = x + 5;

let students = 30;

students = students / 2;
console.log(students);
students = students - 2;
console.log(students);
students = students * 2;
console.log(students);
students = students + 2;
console.log(students);
//exponent operator
students = students ** 2;

console.log(students);

//modulo operator to get the remainder
let extraStudents = students  % 3;
console.log(extraStudents);

//Augmented assignment operators

students = 30;
students += 1;
console.log(students);
students -= 1;
console.log(students);
students /= 1;
console.log(students);
students *= 1;
console.log(students);
students **= 1;
console.log(students);
students %= 1;
console.log(students);

//decrement and increment
students = 30;
students++;
console.log(students);
students--;
console.log(students);

//Operator precedence
//1. Parenthesis()
//2. exponents
//3. multipication and division and modulo
//4. addition and subtraction

let result = (11+2) / 3 - 20 * 6 + 20 + (10-5);
console.log(result);