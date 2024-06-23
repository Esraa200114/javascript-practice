// const person = ["John", 3, "admin"];

// console.log(person[0]);

// var name = person[0];
// var courseCount = person[1];
// var role = person[2];

// var [name, courseCount, role] = person;

// console.log(role);

const myUser = {
    name: "Sam", 
    courseCount: 5,
    role: "sub-admin"
};

console.log(myUser.role);

// name of fields should match
// const {name, myCourseCount, role} = myUser; **This will cause an error**
const {name, courseCount, role} = myUser;
console.log(courseCount);
