const myText = document.getElementById("myText");
let mySubmit = document.getElementById("mySubmit");
let result = document.getElementById("result");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age === 0) {
    result.textContent = "You are not born";
  } else if (age >= 16 && myText.value <= 80) {
    result.textContent = "You are old enough to drive";
  } else if (age < 16) {
    result.textContent = "You must be 16+ to have a license";
  } else {
    result.textContent = "You are too old to drive";
  }
};
