var inpPass = document.querySelector('#inp');
var btnSubmit = document.querySelector('#btn-submit');
var statusMsg = document.querySelector('#status-msg');

// statusMsg.addEventListener('onload',function(){
//     // statusMsg.style.color = "white";
//     console.log("Added");
// })



btnSubmit.addEventListener('click',function(){
    
    if(inpPass.value.length===4){
      statusMsg.style.color = "green"  
      statusMsg.innerHTML = "Success";
    }
    else{
        statusMsg.style.color = "red"  
        statusMsg.innerHTML = "Error, Your Password is wrong"
    }
})