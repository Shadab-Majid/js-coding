var a = [1,3,5,5,63,3];

console.log(typeof a);

// js converts array into obj like this 

var b = {
    0:1,
    1:3,
    2:5,
    3:5,
    4:63,
    5:3
}

typeof a;

// to know which is array and obj
console.log(Array.isArray(a));
console.log(Array.isArray(b));