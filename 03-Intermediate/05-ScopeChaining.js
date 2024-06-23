var nameE = "Esraa";

console.log("Line number 3 :", nameE);

function sayName(){
    var nameE = "John";
    console.log("Line number 7 :", nameE);

    sayName2();

    function sayName2(){
        var nameE = "Sam";
        console.log("Line number 13 :", nameE);
    }
}

sayName();