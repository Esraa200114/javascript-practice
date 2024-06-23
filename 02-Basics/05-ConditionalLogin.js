var email = true;
var facebook = false;
var google = true;

// if(email) {
//     console.log("Log in success! using email");
// } else if (facebook) {
//     console.log("Log in success! using facebook");
// } else if (google) {
//     console.log("Log in success! using google");
// }

if(email || facebook || google) {
    console.log("Log in success!");
}