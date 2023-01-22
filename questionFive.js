var inp = document.querySelector("#inp")
var inpText = document.querySelector("#inp-txt");
var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");


inp.addEventListener('change',function(){
    inpText.innerHTML = inp.value;
})

red.addEventListener('click',function(){
    inpText.style.color = "red";
})

green.addEventListener('click',function(){
    inpText.style.color = "green";
})

blue.addEventListener('click',function(){
    inpText.style.color = "blue";
})


