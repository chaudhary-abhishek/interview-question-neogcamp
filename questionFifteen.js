var Ramayana = {
    name:"Ram",
    age:"25",
    yuga:"Treta"
}

var MahaBharata = {
    name:"Krishna",
    age:"31",
    yuga:"Dwapar"
}

function tellMegreatest(objOne,objTwo){
    if(objOne.age>objTwo.age)
    console.log(objOne.name+" is greater");
    else
    return console.log(objTwo.name+" is greater");
}

tellMegreatest(Ramayana,MahaBharata);