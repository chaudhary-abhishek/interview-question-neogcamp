//name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar.
var powerForCharacter = 35;
var Ram = {
    name:"Ram",
    power:2500,
    yuga:"Treta"
}

var Krishna = {
    name:"Krishna",
    power:2825,
    yuga:"Dwapar"
}

function morePower(objectOne,objectTwo){
    var FinalObjOnePower = (objectOne.power)+(objectOne.name.length*35);
    var FinalObjTwoPower = (objectTwo.power)+(objectTwo.name.length*35);
    if(FinalObjOnePower>FinalObjTwoPower)
    console.log(objectOne.name+" has more power");
    else
    console.log(objectTwo.name+" has more power");
}

morePower(Ram,Krishna);