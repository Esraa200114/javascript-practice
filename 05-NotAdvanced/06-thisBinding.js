const John = {
    firstName: "John",
    lastName: "Samy",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        First name is : ${this.firstName},
        Last name is : ${this.lastName},
        Role is : ${this.role},
        Course count is : ${this.courseCount}
        `);
    }
}

const dj = {
    firstName: "The Rock",
    lastName: "DJ",
    role: "sub-admin",
    courseCount: 4
}

// John.getInfo();
// dj.getInfo();

John.getInfo.bind(dj); // Gives us a reference only
// To run it: 
John.getInfo.bind(dj)();
// You can store the reference: 
var djGetInfo = John.getInfo.bind(dj);
djGetInfo();

// This directly calls getInfo with dj while bind returns a reference from 
// which you can call the method.
John.getInfo.call(dj);