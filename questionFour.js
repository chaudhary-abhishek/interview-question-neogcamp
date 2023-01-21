var txt = document.querySelector("#txt");
var hone = document.querySelector("#h-one");
var htwo = document.querySelector("#h-two");
var hthree = document.querySelector("#h-three");


var h1 = 24;
var h2 = 22;
var h3 = 20;
hone.addEventListener("click",function(){
    txt.style.fontSize = h1+"px";
})

htwo.addEventListener("click",function(){
    txt.style.fontSize = h2+"px";
})

hthree.addEventListener("click",function(){
    txt.style.fontSize = h3+"px";
})