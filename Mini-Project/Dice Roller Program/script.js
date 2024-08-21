const btn = document.getElementById("btn");
const resultText = document.getElementById("resultText");
const resultImg = document.getElementById("resultImg");

btn.onclick = function () {
  const textBox = parseInt(document.getElementById("textBox").value, 10);
  const text = [];
  const image = [];

  if (isNaN(textBox) || textBox <= 0) {
    resultText.textContent = "Please enter a valid number of dice.";
    resultImg.innerHTML = "";
    return;
  }

  for (let i = 0; i < textBox; i++) {
    const random = Math.floor(Math.random() * 6) + 1;
    text.push(random);
    image.push(
      `<img src='dice/Dice-${random}.png' alt='Dice ${random}'>`
    );
  }

  resultText.textContent = `Dice: ${text.join(", ")}`;
  resultImg.innerHTML = image.join("");
};