
var inpText = document.querySelector('#inp-txt');
var textArea = document.querySelector('#txt-area');
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function urlGenerator(text){
    return url+"?text="+text;
}

function errorHandler(e){
    console.log("Some error is there"+e);
    textArea.value = e;
    // alert("Something went wrong with server");
}

inpText.addEventListener('change',function Urlfetch(){
    fetch(urlGenerator(inpText.value)).then(response=>response.json()).then(jsonResponse=>textArea.value=jsonResponse.contents.translated+" text by Abhsihek")
    .catch(errorHandler);
})
