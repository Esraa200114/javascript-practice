var user = {
    firstName: "John", 
    lastName: "Sam",
    role: "Admin", 
    loginCount: 32, 
    facebookSignedIn: true
};

console.log(user.firstName);
console.log(user['firstName']);

user.facebookSignedIn = false;

console.log(user);
console.table(user);