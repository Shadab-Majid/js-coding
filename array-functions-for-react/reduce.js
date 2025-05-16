/**
 * reduce
 * 
 * this function get use when we have to return one value or result from the array like sum, largest etc.
 * 
 */


// before diving into the reduce lets find the sum in normal way 

let arr = [2,3,4,5,6,6];

function sum(arr) {
    let sum = 0; 

    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sum(arr));

// function isMax(arr) {
//     let max = 0; 
//     for(let i = 0; i < arr.length; i++) {
//         return max < i ? max:     
//     }
// }
// now lets dive into reduce syntax and way 

const output = arr.reduce(function(acc, curr) { // here the acc is acts like sum varible (check the normal funciton) which is storing the arr of i value in its self after every iteratio. here the 0 is the default value of the acc varibe
    return acc = acc + curr;
}, 0);

const max = arr.reduce(function(max, i){
    max < i ? max = i : max;
    return max;
}, 0);


// other way to write 

const min = arr.reduce((acc, curr) => {
    return acc > curr ? acc = curr: acc; 
}, 1)
console.log(output);
console.log(max);
console.log(min)