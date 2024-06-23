// this = context
// 

console.log(this); // You will get an empty scope

var game = "BasketBall";

function sayName(){
    var name = "Esraa";
    console.log(this);
}

sayName();
