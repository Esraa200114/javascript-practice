// Falsy values
// undefined 0 "" NaN null

var user = null;

if(user) {
    console.log("Condiiton is true");
}

console.log("2" + 2); // Concatentaion happens

if(2 == "2"){ // comparing a 2 with an 2 whether it is a string or number
    console.log("2 is equal to \"2\" using ==");
}

if(2 === "2"){ // comparing a 2 with a string containing 2
    console.log("2 is equal to \"2\" using ===");
}