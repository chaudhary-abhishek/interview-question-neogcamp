var inpText = document.querySelector('#inp-txt')
var errorMsg = document.querySelector('#err-msg');


var url = "https://lessonfourapi.tanaypratap.repl.co/translat/yoda.json";

function urlGenerator(text){
    return url+"?text="+text;
}

function errorHandler(e){
    errorMsg.innerHTML = e;
    // console.log(e);
}
inpText.addEventListener('change',function(){
    fetch(urlGenerator(inpText.value))
    .then(response=>response.json())
    .then(jsonResponse=>console.log(jsonResponse))
    .catch(errorHandler);
})