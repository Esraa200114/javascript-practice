// var  getUserRole = function (name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is an admin with all access`;
//         case "subadmin":
//             return `${name} is a sub-admin with access to create/delete courses`;
//         case "testprep":
//             return `${name} is with access to create/delete tests`;
//         case "user":
//             return `${name} consumes all content`;
//         default:
//             return `${name} is a trial user`;
//     }
// }

var  getUserRole = (name, role) => {
    switch (role) {
        case "admin":
            return `${name} is an admin with all access`;
        case "subadmin":
            return `${name} is a sub-admin with access to create/delete courses`;
        case "testprep":
            return `${name} is with access to create/delete tests`;
        case "user":
            return `${name} consumes all content`;
        default:
            return `${name} is a trial user`;
    }
}

var userRole = getUserRole("Esraa", "admin");
console.log(userRole);