const inputCheckbox = document.getElementById("checksubs");
let btn = document.getElementById("btn");

const homecredit = document.getElementById("homecredit");
const bdo = document.getElementById("bdo");
const lanbank = document.getElementById("lanbank");

btn.onclick = function (){
    //check if the checkbox is checked
    if(inputCheckbox.checked){
        console.log("Subscribed");
    }else{
        console.log("not subscribe");
    }

    //check for radio checked

    if(homecredit.checked){
        console.log("You have Home Credit Card");
    }else if(bdo.checked){
        console.log("You have bdo card");
    } else if (lanbank.checked){
        console.log("You have Land Bank Card");
    }else{
        console.log("You have no card")
    }
}