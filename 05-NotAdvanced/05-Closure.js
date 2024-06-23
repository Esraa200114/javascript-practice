// function init(){
//     console.log("Iam init");
//     var firstName = "John";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();
// value();

function doAddition(x){
    return function(y){
        return x + y;
    };
}

var add5 = doAddition(5);
console.log(add5(3));
console.log(doAddition(4)(7)); // doAddition()() this also knows as curring