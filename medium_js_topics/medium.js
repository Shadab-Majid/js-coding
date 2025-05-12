//difference b/w var, let and const

// let and const has introduced in js es6 it was not present in es5

// var is a functional scoped => var apne parent funciton me kahin bhi use ho sakta hai.
// let is a braces scoped 

//var adds itself in the window object 

// ** js language me kch chizein nahi hai jo hum use kar sakte hai aur wo cheeje hume js se nahi balki browser se milti hai, aise saare features jo
// js ka part nahi hai but fir bhi hm use kar sakte hai unhe hum dhoond sakte hai ek particular object mein jisa naam window hai.
//lets doesn't add in the window object.
checkVarScoped();
letBracesScoped();

function checkVarScoped() {
    for(var i = 1; i<10; i++) {
        console.log(i);
    }
    console.log(i); // here you can see after for loop ends we can still access i its not giving error .
}
var a = 12;

//checking let braces scoped
console.log('checking let.');
function letBracesScoped() {
    for(let i = 1; i <10; i++) {
        console.log(i);
    }
    console.log(i);
}

/**
 * 
 * browser context api
 * 
 * Broser mainly provides three things which called browser context api
 * 
 * window -> which is the object inside which we get different type of data 
 * stact -> stack is how the things will work its follows fifo (first in first out). 
 * heap -> jitna bhi data hm use karte hai usko store kahi to hota hai uske liye heap momory hota hai.
 * 
 */

/**
 * 
 * exucution context :
 * It is nothing but a imaginary container which created whenever any function get called. It store data of that function whcih is present and mentain how funciton will work.
 * inside this container function properties and methods and lexical enviornment present.
 * 
 * three things present inside this container:
 *  1. variable
 *  2. functions inside that parent fnc
 *  3. lexical environment ise hi hum execution context kahte hai.
 */

/**
 * 
 * lecsical scope or evnviorment 
 * lexical environment hota hai ek chart jisye ye likha hota hai ke apka particular function kin chizon ko access kar sakta hai and kinko nahi.
 * matlab it holds its scope and scope chain
 */

// how to copy reference value 

/**
 * to copy the reference value we can use the spread operator([...a]) which copies the reference value in place of spread operator.
 */

var a = [1,2,3,5,6];
var b = [...a];
b.pop();

// truty and falsy

/**
 * js mein kch bhi likho wo mainly do prakaar me se kisi ek prakar ko belong karti hai.
 * 
 * falsy value ye hai: 0, false, undefined, null, NaN, document.all
 */

if(1) {
    console.log('hey');
}
else {
    console.log('hello');
}