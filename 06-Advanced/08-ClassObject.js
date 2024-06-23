// import User from "./07-Class.js";

const User = require("./07-Class.js");

let john = new User("John", "john@example.com");

console.log(john.getInfo());
john.enrollInCourse("Java Bootcamp");
john.enrollInCourse("Android Bootcamp");

var courses = john.getCourseList();
courses.forEach((c) => {
    console.log(c);
});
