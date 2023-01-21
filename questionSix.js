const readFileSync = require('readline-sync');

var students=[];
var maxMarks = 0;
var maxMarkStudent = "";
for(var i=0;i<2;i++){
    var unitMarks = readFileSync.question("Please enter your unit exam marks: ");
    var preMarks = readFileSync.question("Please enter your pre exam marks: ");
    var mainMarks = readFileSync.question("Please enter your main exam marks: ");
    students[i] = parseInt(unitMarks)+parseInt(preMarks)+parseInt(mainMarks);
    if(students[i]>maxMarks){
        maxMarks = students[i];
        maxMarkStudent = i;
    }

    console.log("-----------------------------------------------");
}

console.log("The Student: "+i+" got the maximum marks, he/she got: "+maxMarks);

console.log("The Student: "+i+" has the average marks: "+maxMarks/3);

