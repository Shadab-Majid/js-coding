//foreach loop runs only for array 

/**
 * when you have array then you can use the foreach loop.
 * foreach never change your array by default its changing the array templrory copy so array never get changed.
 */

var a = [1,23,45,4,5,6,6];

a.forEach(function(val){
    console.log(val + 2);
})

console.log(a);

// forin loop

/**
 * objects par loop karne ke liey hota hai forin loop.
 */

var obj = {
    name: 'shadab',
    age: 24,
    city: 'Ranchi'
}

for(var key in obj) {
    console.log(key + ':' + obj[key]);
}