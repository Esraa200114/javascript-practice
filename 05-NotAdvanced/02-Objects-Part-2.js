var User = {
    name: "",
    getUserName : function() {
        console.log(`The name of the user is ${this.name}`);
    },
}

var john = Object.create(User);
console.log(john);
john.name = "John Sam";
john.getUserName();

var peter = Object.create(User, {
    name: {value: "Peter"},
    courseCount: {value: 8}
});

peter.getUserName();