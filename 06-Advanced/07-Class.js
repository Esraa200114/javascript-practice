class User {

    // This is valid but most people don't do this
    // name = "";
    // email = "";

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    // Use a hashtag to make a clas field private
    #courseList = [];
    getInfo(){
        return {name: this.name, email: this.email};
    }

    enrollInCourse(courseName){
        this.#courseList.push(courseName);
    }

    getCourseList(){
        return this.#courseList;
    }
}

module.exports = User;

const rock = new User("Rock", "rock@example.com");

console.log(rock.getInfo());

rock.enrollInCourse("Java Bootcamp");
rock.enrollInCourse("Android Bootcamp");

console.log(rock.getCourseList);
console.log(rock.courseList);
