console.log('the value of b is:',b);
console.log(a);
let a;
var b;

/**
 * 
 * its happening because js works in two faces first is memory creation and second is execution.
 * 
 * In memory creation its storing the variable which is present and the function definations.
 * 
 * And 
 * 
 * In execution its assining the values of created variables and execute the functions. 
 * 
 * 
 * so thats why when in the second face its showing a = undefined because in the memory creation it assigned the 'var' a as undefined.
 * 
 * 
 * this works var only .
 * 
 */