var btnlarge = document.querySelector("#btn-lg");
var btnsmall = document.querySelector("#btn-sm");
var text = document.querySelector("#txt");

var num = 10;
text.style.fontSize = num+"px";

btnlarge.addEventListener("click",function(){
    num+=2;
    text.style.fontSize = num+"px";
})

btnsmall.addEventListener("click",function(){
    num-=2;
    text.style.fontSize = num+"px";
})


