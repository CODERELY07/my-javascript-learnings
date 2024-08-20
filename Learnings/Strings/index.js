//String method = allow you to manipulate and work with text (string)

//get the character at index
let userName = "BroCodes";
//create first index
console.log(userName.charAt(0));
//create the lastindex
console.log(userName.charAt(userName.length - 1))

//get the index 
//first index
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));

//get length of strings
console.log(userName.length);

//delete or trim for whitespace

userName = userName.trim();
console.log(userName);

//make string uppercase amd lowercase
userName = userName.toLowerCase();
console.log(userName);
userName = userName.toUpperCase();
console.log(userName);

//repeat a string
userName = userName.repeat(3);
console.log(userName);



//starts with
let myName = " Mark";
let result = myName.startsWith(" ");

console.log("username starts With " + result);

//end with
 result = myName.endsWith(" ");

console.log("username ends With " + result);

result = " mark";
//inlcudes
if(result.includes(" ")){
    console.log("Your username can't include white space");
}else{
    console.log(userName);
}
//replace all
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", " ")
console.log(phoneNumber);

//padstart
phoneNumber = phoneNumber.padStart(15,"0");
console.log(phoneNumber);

//you can try padend 