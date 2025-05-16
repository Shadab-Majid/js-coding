//js is not a async because js is single thread.

/**
 * js is not caculating multiple code at a single time 
 * 
 */

/**
 * callbacks
 * 
 * when we use the callbacks
 * 
 * we use to send the request via
 *  fetch 
 *  axios
 *  promises
 *  settimout
 *  setInterval
 * 
 * and after fetching the value we use 
 *  then catch 
 *  callbacks
 *  async await
 * 
 * what is callbacks -> its a function its run on time only when async code completion.
 * 
 */


/**
 * the meaning of async is running multiple function at a single time.
 * 
 * there is two type of stach main stack and side stack(callback queue) 
 * 
 * the code which is present in the main stack is responsible for output and the code which present in side stack its running the code behind.
 * 
 * sync code always move to main stack.
 * 
 * async code move to side stack 
 * 
 * when main stack is emtpy then side stack code will come to main stack like it has complete the compilation.
 * 
 * event loop: main stack me side stack se data lata hai. event loop is the things which make relation between the main and side stack.
 * 
 */

// lets check the example of main and side stack 

// in the given example there is three sync and 1 async is present here i have set the 0 time interval which means hey 3 will print after the hey 2 but according the info all sync will run first and at the last async will call to the main stack from the side stack.
console.log('hey');
console.log('hey 1');
setTimeout(function(){
    console.log('hey 3');
},0)
console.log('hey 4');

/**
 * this output you will get in the console
 * hey
hey 1
hey 4
hey 3
 */
