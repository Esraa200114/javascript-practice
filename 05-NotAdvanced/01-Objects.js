// Use uppercase letter for prototypes

// 1. New keyword is used to create objects using a the function way.
// 2. Responsible for invoking the constructor and creating a new instance everytime.
// 3. Responsilbe for switching the context from global to inside the object itself.

var User = function (firstName, CourseCount) {
    this.firstName = firstName;
    this.CourseCount = CourseCount;
    this.getCourseCount = function () {
        console.log(`Course count is : ${this.CourseCount}`);
    }
}

// Prototype here is used to define a method for the object oustide the object declaration.
// Everthing that is in the prototype can be overridden or inject our own stuff.
User.prototype.getFirstName = function () {
    console.log(`Your first name is : ${this.firstName}`);
}

var john = new User("John", 2);
john.getCourseCount();

// To access prototype, you can also do so:
if(john.hasOwnProperty("firstName")){
    john.getFirstName();
}

// console.log(john);

var sam = new User("Sam", 5);
sam.getCourseCount();
sam.getFirstName();
// console.log(sam);

