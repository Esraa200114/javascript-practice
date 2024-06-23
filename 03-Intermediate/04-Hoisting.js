// var num = 2;

// function sayMe(){
//     console.log("Say Me!");
// }

// sayMe();

tipper("80");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// This is going to work fine because function declarations are scanned and made available.
// bigTipper("200");

// function bigTipper(a){
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }

// While here things are different, because now the function is stored in a variable.
// At the time the function is called, the variable, where the fucntion is stored in, is scanned and made undefined.

// bigTipper("200");

// var bigTipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }

// So if you want to use the variable function ish, you have to declare the 
// variable where the function is stored in first, than call the function as 
// you like.

var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");

// We are going to get undefined if we try to print the value of the variable 
// first before initialization

// console.log(nameE);
// var nameE = "Esraa";

// If we do so we are going to get an error because the global context 
// couldn't find the declaration of the variable.

// console.log(nameE);
// var nameE = "Esraa"; // This should be commented

// Another Example

console.log(nameE);
var nameE = "Esraa";

function sayName(){
    var nameE = "Miss E";
    console.log(nameE);
}

sayName();

console.log(nameE);



