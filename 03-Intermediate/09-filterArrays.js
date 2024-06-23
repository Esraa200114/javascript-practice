var testArray = [2, 1, 4, 6, 5, 8, 10];

// If no starting or ending position, then the whole array is going to be filled.
// console.log(testArray.fill("h", 2)); // 2 is the starting position (inclustive)
// console.log(testArray.fill("h", 2, 5)); // 5 is the ending position (exclusive)

const myNumbers = [93, 14, 85, 46, 78];
// const result = myNumbers.filter((number) => (number != 85));
const result = myNumbers.filter((number) => (number < 85));
// console.log(result);

var users = ["ted", "sam", "sarah", "john", "mona"];
// console.log(users.slice(0, 3)); // slice(): give us a subarray
// console.log(users.slice(1)); // here the first element will be removed
// console.log(users.slice(users.length - 1)); // gets the last element only

// users.splice(1, 2, "HELLO") // will replace element of index 1 with HELLO and remove elments of index 2
// console.log(users);

users.splice(1, 3, "HELLO", "BYE");
console.log(users);

