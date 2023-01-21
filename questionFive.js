var text = document.querySelector("#txt");
var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

red.addEventListener("click",function(){
    text.style.color = "red";
})

green.addEventListener("click",function(){
    text.style.color = "green";
})

blue.addEventListener("click",function(){
    text.style.color = "blue";
})

