// IF STATEMENT = if a condition is true, execute some code
//                 if not , do something else

let age = 81;
let hasLicense = true;

if (age >= 16 && age <= 80) {
  console.log("You are old enough to drive");

  if (hasLicense) {
    console.log("You have your license");
  } else {
    console.log("You do not have your license yet!");
  }
} else if (age < 16) {
  console.log("You must be 16+ to have a license");
} else {
  console.log("You are too old to drive");
}
