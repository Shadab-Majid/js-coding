// what is sync and async 

/**
 * in sync js the working process follow one by one after completion of one task second will start.
 *      lets suppose :
 *             task a - 5; // it will complete first 
 *             task b - 2; // then this will 
 *             task c - 15; // then this will complete  
 *              means total time taken to complete : 22 sec 
 * but in Async multiple request or work start at the same time and jiska response pahle aye uska answer dedena.
 *        let suppose:
 *             task a - 5; 
 *             task b - 2; 
 *             task c - 15;
 *       total time : 15 sec.
 *              but in async all task will start at a same time and whover complete first it will update and give the response and based on that rest will work.
 * 
 * To understant that the code is sync or async
 *  this is the some term which show that its a async;
 *          setTimeout;
 *          setInterval;
 *          promisses;
 *          fetch;
 *          axios;
 *          XMLHttpRequest.
 * 
 *      What is Async js ?
 *   kai aar apka final code depended hota hai kisi aur ke server par, is case mein humein nahi pata hota ki answer uske server se ka laut kar ayega
 *   to hum kya nahi kar skte is writing sync code, isse nipatne ke liye hm log async code lik dete hai taaki blocking naa ho and ja bhi answer aaye humare
 *  anser ke respect mein chalne wala code chal jaye.
 *  eg;
 *      facebook se photo lao or jb photo ajaye to show kar dena.
 *        
 * 
 */ 

console.log('hey');
setTimeout(function(){  // here the function is a callback function the function will be run after the set time. callback function jb usko call kiya jata hai tab chalta hai.
    console.log('hey 2');
},2000)
console.log('hey 3');
 

// console.log('hey');
// console.log('hey 2');
// setInterval(function(){
//     console.log('hey');
//     return;
// }, 2000);
// console.log('hey 3');