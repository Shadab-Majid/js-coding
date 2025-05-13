/**
 * koi be esa function jisme aap async code likhege , kyonko async code hai hamko promisses ka instemaal kr sakte hai , jab uska answer ayega hmko then lagana padega,
 * us then ko lagane se bachne le liye , hm asyn await ka istemaal krte hai.
 */

//example of normal function 

// function abcd() {
//     fetch('https://randomuser.me/api/')
//     .then(function(raw) {
//         return raw.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// }

// using await

async function abcd() {
    var raw = await fetch('https://randomuser.me/api/') // when we add await its means it will go to the side stack and when it complete it will come.
    var data = await raw.json(); 
    console.log(data);
}
abcd();