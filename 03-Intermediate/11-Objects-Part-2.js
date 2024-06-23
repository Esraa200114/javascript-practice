var user = {
    firstName: "John", 
    lastName: "Sam",
    role: "Admin", 
    loginCount: 32, 
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses.`;
    },
    getInfo: function () {
        console.log(`
        firstName: ${this.firstName}
        lastName: ${this.lastName}
        Role: ${this.role}
        LoginCount: ${this.loginCount}
        FacebookSignedIn: ${this.facebookSignedIn}
        CourseList: ${this.courseList}
        `);
    }

};

console.log(user.getCourseCount());
console.log(user.firstName);
user.buyCourse("ReactJS course");
user.buyCourse("AngularJS course");
console.log(user.getCourseCount());
user.getInfo();
console.table(user);