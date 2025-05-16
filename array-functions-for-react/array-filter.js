/**
 * 
 * filter function use to filter the value inside an array.
 * 
 */

let arr = [2,4,5,6];

//filter odd number 

function isEven(x){
    return x % 2 === 0;
}

const output = arr.filter(isEven);

const greater_then_2 = arr.filter((x) =>  x > 2);
console.log(output);
console.log(greater_then_2);

