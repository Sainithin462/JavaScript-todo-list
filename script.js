

let data=[];


let userInput=document.getElementById("task");
let display=document.getElementById("display");
const addData=()=>{

    data.push(userInput.value);

    display.innerHTML="";

    data.map((task)=>{
        display.innerHTML+=`<li>${task}</li>`
    });

    userInput.value="";


}