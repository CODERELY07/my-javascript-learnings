const PI = 3.14159;
let radius = document.getElementById('radius');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let circumference;

btn.onclick = function(){
    circumference = 2 * PI * radius.value;
    result.textContent = `The circumeference of the circle is ${circumference}cm`;
}

