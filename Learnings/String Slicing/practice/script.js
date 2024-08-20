
const email = "mark@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extenstion = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extenstion);