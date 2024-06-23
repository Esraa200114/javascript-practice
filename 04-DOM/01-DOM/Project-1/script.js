// var title = document.getElementsByTagName("h1")[0].innerHTML;

// var title = document.getElementsByClassName("title");

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

// setInterval(function, milliseconds)

setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
    
}, 1);

// setTimeout(function, milliseconds)

setTimeout(()=> {
    followers.innerText = "Followers on Instagram!";
}, 8000);



