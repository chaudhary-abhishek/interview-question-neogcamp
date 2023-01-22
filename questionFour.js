var inp = document.querySelector("#inp");
var inpText = document.querySelector("#inp-txt");
var hone = document.querySelector("#h-one");
var htwo = document.querySelector("#h-two");
var hthree = document.querySelector("#h-three");


var h1 = 24;
var h2 = 22;
var h3 = 20;
hone.addEventListener("click",function(){
    inpText.style.fontSize = h1+"px";
})

htwo.addEventListener("click",function(){
    inpText.style.fontSize = h2+"px";
})

hthree.addEventListener("click",function(){
    inpText.style.fontSize = h3+"px";
})

inp.addEventListener('change',function(){
    inpText.innerHTML = inp.value;
})