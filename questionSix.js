const readLineSync = require('readline-sync');

var students=[];
var maxMarks = 0;
var maxMarkStudent = "";
for(var i=0;i<2;i++){
    var name = readLineSync.question("Please give me your name: ")
    var unitMarks = readLineSync.question("Please enter your unit exam marks: ");
    var preMarks = readLineSync.question("Please enter your pre exam marks: ");
    var mainMarks = readLineSync.question("Please enter your main exam marks: ");
    students[i] = parseInt(unitMarks)+parseInt(preMarks)+parseInt(mainMarks);
    if(students[i]>maxMarks){
        maxMarks = students[i];
        maxMarkStudent = name;
    }

    console.log("-----------------------------------------------");
}

console.log("The Student: "+maxMarkStudent+" got the maximum marks, he/she got: "+maxMarks);

console.log("The Student: "+maxMarkStudent+" has the average marks: "+maxMarks/3);

