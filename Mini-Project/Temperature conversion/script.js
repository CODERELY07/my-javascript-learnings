// temperature conversion formula
//fahrenheit to celsius= temp * 9 / 5 + 32
//celsuis to fahrenheit = (temp - 32) * (5/9)

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.onclick = function () {
  let temp = Number(textBox.value);
  if (toFahrenheit.checked) {
    temp = (temp * 9) / 5 + 32;
    result.textContent = `${temp} °F`;
  } else if (toCelsius.checked) {
    temp = (temp - 32) * (5 / 9);
    result.textContent = `${temp} °C`;
  } else {
    result.textContent = "Please select a conversion.";
  }
};
