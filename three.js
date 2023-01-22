var inp = document.querySelector("#inp");
var inpText = document.querySelector("#inp-txt");
var btnLg = document.querySelector("#btn-lg");
var btnSm = document.querySelector("#btn-sm");

var num = 10;
inpText.style.fontSize = num+"px";
btnLg.addEventListener("click",function(){
    num+=2;
    inpText.style.fontSize = num+"px";
});

btnSm.addEventListener("click",function(){
    num-=2;
    inpText.style.fontSize = num+"px";
});
    inp.addEventListener("change",function(){
        inpText.innerHTML= inp.value;
        console.log("Clicked");
    })