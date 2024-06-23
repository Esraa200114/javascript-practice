var countries = ["Egypt", "Turkey", "Palestine"];
var states = new Array("Cairo", "Istanbul", "Gaza");

// console.log(states);
// console.log(states[0]);

// console.log(states.length);

states[0] = "Giza";
// console.log(states);

var user = ["email", "password", 3, 34, true];
// console.log(user);

user.pop();
user.pop();
// console.log(user);

user.unshift(20); // unshift(): adds an element at the begining of the array 
// and shifts all other elements to the right of the array.
// console.log(user);

user.shift(); // shift(): shift all elements to the left.
// console.log(user);

// console.log(user.indexOf(3)); // takes the value not the index
// console.log(user.indexOf("hello"));

console.log(Array.from("Esraa")); // converts the string into an array of characters