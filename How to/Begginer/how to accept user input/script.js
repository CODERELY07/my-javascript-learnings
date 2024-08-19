//how to accept user input

//access the document the button using id
//onlick is a event that trigger the button to execute the code inside the function
document.getElementById('btn').onclick = function(){
    //get the value
    let username = document.getElementById("myText").value;
    document.getElementById("result").textContent = `Hello ${username}`;
}