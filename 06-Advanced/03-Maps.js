var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");

console.log(myMap);

console.log("Keys:");
for(let k of myMap.keys()){
    console.log(k);
}

console.log("Values:");
for(let v of myMap.values()){
    console.log(v);
}

// Always gives you the key first then the value
console.log("Keys & Values:");
for(let [k, v] of myMap){
    console.log(k + " , " + v);
}

// You can use the for of to get keys and values.
// But by using for each, you will only get the values by default.
myMap.forEach((value) => {
    console.log(value);
});

// If you want both:
// Always gives you the value first then the key.
myMap.forEach((value, key) => {
    console.log(value + " , " + key);
});

myMap.delete(2);
console.log(myMap);

myMap.

