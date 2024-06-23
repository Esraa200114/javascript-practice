// + - / % *

var num1 = 5; 
var num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 * num2);

var is5GreaterThan10 = num1 > num2;
console.log("Is 5 grater than 10 ? :", is5GreaterThan10);
console.log(typeof is5GreaterThan10);

// Determining the priority of calculations is important
// a + ((b * c) / d) * e

var discount = (listPrice - sellingPrice) / listPrice * 100;

var sellingPrice = 199;
var listPrice = 799;
//              75% = ((799 - 199) / 799) * 100
var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;
var displayDiscountPercent = Math.round(discountPercent);
console.log("Discount percentage is : ", displayDiscountPercent, "% off");

// Type and Operator precendence in javascript

