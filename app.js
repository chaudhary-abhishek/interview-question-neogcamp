const inpOne = document.querySelector("#input-one");
const inpTwo = document.querySelector("#input-two");
const btnAdd = document.querySelector("#btn-add");
const btnSub = document.querySelector("#btn-sub");
const btnMul = document.querySelector("#btn-mul");
const btnDiv = document.querySelector("#btn-div");
const textArea = document.querySelector("#txt-area");



btnAdd.addEventListener("click",function(){
    var num1 = parseInt(inpOne.value);
    var num2 = parseInt(inpTwo.value);
   textArea.value = num1+num2;
})
btnSub.addEventListener("click",function(){
    var num1 = parseInt(inpOne.value);
    var num2 = parseInt(inpTwo.value);
    textArea.value = num1-num2;
 })
 btnMul.addEventListener("click",function(){
    var num1 = parseInt(inpOne.value);
    var num2 = parseInt(inpTwo.value);
    textArea.value = num1*num2;
 })
 btnDiv.addEventListener("click",function(){
    var num1 = parseInt(inpOne.value);
    var num2 = parseInt(inpTwo.value);
    textArea.value = num1/num2;
 })


// function calculator(op){
//     var num1 = parseInt(inpOne.value);
//     var num2 = parseInt(inputTwo);
//   switch (op) {
//     case value:"+"
//         textArea.value = num1+num2;
//         break;
//     case value:"-"
//         textArea.value = num1-num2;
//         break;
//     case value:"*"
//         textArea.value = num1*num2;
//         break;    
//     case value:"/"
//         textArea.value = num1/num2;
//         break;
//     default:
//         break;
//   }
// }




// console.log(inpOne);