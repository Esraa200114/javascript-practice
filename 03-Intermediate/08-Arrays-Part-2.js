var isEven = (num) => {
    return num % 2 === 0;
}

// You have to add the curly braces with the return statement

// console.log(isEven(2));
// console.log(isEven(3));

var result = [1, 2, 3, 4, 5].every(isEven); // every(): applies an operation on 
// all elements of an array.
// console.log(result); // cumulative result: if all elements are even, you get 
// true else you get false.

var result = [1, 2, 3, 4, 5].every((e) => (e % 2 === 0));
console.log(result);