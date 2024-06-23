// var maximum = Math.max(2, 5.5, 8, 1, 0, 100);
// console.log(maximum);

// var myObject = {

// };

// Object.assign(myObject, {a: 1, b: 2, c: 3}, {z: 7, x: 0, y: 9});
// console.log(myObject);

function sumOne(a, b) {
    return a + b;
}

// var myArray = [5, 4, 3, 2];
// console.log(sumOne(...myArray)); // Spread Operator: the problem it solves is 
// that you don't want to change the function declaration.

// REST Operator ...args only
// Multi Operator a, b, ...args
function sumTwo(a, b, ...args){ // args is probably an array
    let multiply = a*b;

    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return [multiply, sum];
}

console.log(sumTwo(1, 4, 3, 2, 3));