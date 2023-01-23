var readLineSync = require('readline-sync');

var news = readLineSync.question("Tell me for what news you want to do fact check: ");
var source = readLineSync.question("Can you tell me what is the source of this news: ");

function factChecker(news,source){
  if(source==="facebook"||source==="whatsapp"||source==="telegram"){
    console.log("Don't believe any news comming from "+source);
  }
  else{
    console.log("Your source looks genuine but still be aware of fake news");
  }
}

factChecker(news,source);