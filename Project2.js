//set ntial count
let mycounter = 0;


const plusButton = document.getElementById("increase");
const minusButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
// get h1 element content
const result = document.getElementById("span");

plusButton.addEventListener("click",function(){
    mycounter = mycounter + 1;
    result.innerText = mycounter;
})

minusButton.addEventListener("click",function(){
    mycounter = mycounter - 1;
    result.innerText = mycounter;
})    

resetButton.addEventListener("click",function(){
    mycounter = mycounter * 0;
    result.innerText = mycounter;
})    