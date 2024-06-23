const myStates = ["Cairo", "Giza", "Alexandria", 1002];

// let i = 0;

// while(i < myStates.length){
//     console.log(myStates[i]);
//     i++;
// }

// do {
//     console.log(myStates[i]);
//     i++;
// } while(i < myStates.length);

// var i = 0;

// myStates.forEach((s) => {console.log(s)});

const names = ["Google", "Youtube", "Facebook"];

// For of is used for arrays
for(const n of names){
    console.log(n);
}

const symbols = {
    gg: "Google",
    yt: "Youtube",
    fb: "Facebook"
};

// For in is used for objects
for(const s in symbols){
    console.log(`The Key is: ${s} and the value is: ${symbols[s]}`);
}





