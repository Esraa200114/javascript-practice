const uid = "ABC123";
// uid = "ABC234"; This is going to cause an error beacuse you are trying 
// to change something that is not suppose to change after being already 
// assiging a value to it.

var firstName = "Esraa"
var lastName = "Tarek";
var email = "esraa@example.com";
var password = "123456";
var confirmPassword = "123456";
var country = "Egypt";
var state = "Cairo";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

// console.log("Full name: " + fullName);
// console.log("Email: ", email);
// console.log("Course Count: ", courseCount);

console.log(`
    User ID: ${uid}
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Password: ${password}
    Country: ${country}
    State: ${state}
    Course Count: ${courseCount}
    Logged In From Google: ${isLoggedInFromGoogle}
    Logged In From Facebook ${isLoggedInFromFacebook}
`);

// Taking input from user
// Requires linking with HTML file
// var userInput = prompt("Enter something:");