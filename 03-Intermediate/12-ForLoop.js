// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

const myStates = ["Cairo", "Giza", "Alexandria", 1002];
for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] === "string"){
        console.log(myStates[i]);
    } else {
        continue;
    }
}

// for(;;){
//     if(i > 3){
//         break;
//     } else{
//         console.log(i);
//         i++;
//     }
// }