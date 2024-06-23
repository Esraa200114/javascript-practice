console.log(this);

var user = {
    firstName: "John",
    courseCount: 3,
    getCourseCount: function () {
        console.log("Line 7 ", this);
        function sayHello(){
            console.log("Hello, World!");
            console.log("Line 10 ", this);
        }
        sayHello(); // Regular function call
    },
};

user.getCourseCount(); // Through an object function call not a regular function call