// function = A section of reusable code.
//            Declare code once use it whenever you want. 
//            call the ufunction to execute the code.

function happyBirthDay(){
    console.log("Happy birthdat to you!");
}
happyBirthDay()
//with parameter
function args(username, age){
    console.log(`Happy birthday ${username} your age is ${age}`);
}
//parameters
args("Mark", 18);
args("Ely", 100);

//with return value

function add(x,y){
    return x + y;
}

let sum = add(2,6);
console.log(sum);

function isEven(number){
    return number % 2 === 0 ? true : false;
}

let isItEven = isEven(3);
console.log(isItEven);

function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log("is valid email? " + isValidEmail("cal@gmail.com"))