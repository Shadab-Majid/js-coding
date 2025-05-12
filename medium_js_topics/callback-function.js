//callback function 

/**
 * jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyunki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi, aise code ke completeion par
 * js ko bayata jata hai ke wo complete hogya aur aap use chala sakte ho, ye bataane ka kaam callback ka hai.
 * 
 *  callack is async js
 * 
 * aisa code jo baad me chalta hai use ham ek func dedete hai ke jb complete jogaana to ye function chala dena, aur wo func jo hm dete hai wo ek normal fnc hi hota hai aur use kahte hai callback fnc
 */

setTimeout(function(){
    console.log('hogya')
}, 2000);

// first class funciton 

/**
 * 
 * first class func is the property available in js in which we can store the function in variable.
 * 
 */

function abcd(a) {
    a();
}

abcd(function(){console.log('hello')});

