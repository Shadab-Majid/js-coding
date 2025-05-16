/**
 * 
 * map function is the higher order function in js its basically used in the array elements to change the each array value .
 * 
 */

let arr = [2,3,4,5];
console.log(arr);

//there are different way to writing map function.

// 1st way to pass the function in params 

const output = arr.map((double));
console.log(output);
function double(num) {
    return num * 2;
}


// 2nd write complete function in params 

const triplet = arr.map(function(x){
    return x * 3;
})


// using arrow function 

const binary_of_arr = arr.map((x) => {
    return x.toString(2);
})
console.log(binary_of_arr);


const arr_square = arr.map((x) => x * x);
console.log(arr_square);