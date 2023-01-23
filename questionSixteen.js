var Ram = {
    name:"Ram",
    power:"2500",
    yuga:"Treta"
}

var Krishna = {
    name:"Krishna",
    power:"3175",
    yuga:"Dwapar"
}

    function morePower(objectOne,objectTwo){
       if(objectOne.power>objectTwo)
       console.log(objectOne.name+" has more power");
       else
       console.log(objectTwo.name+" has more power");
    }

    morePower(Ram,Krishna);