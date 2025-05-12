/**
 * 
 * promises
 * 
 * The code which present in promises will run in fution which will have mainly two part 
 * 
 * either the code will run or give response(which called resolve) or it will reject not work(which we say reject).
 * eg: 
 *  I sent one request and we use promises then three posiblity is presemt
 *  It will give response meas resolve 
 *  It will be rejected 
 *  It will be in pening state 
 * 
 * then if its resolve the we will use 'then'
 * if its reject we will use 'catch'
 * 
 */

var ans = new Promise((res, rej) => {
    if(false) {
        return res();
    }
    else {
        return rej();
    }
})
ans
    .then(function() {
        console.log('resolve hua tha');
    })
    .catch (function() {
        console.log('reject hua tha');
    })


/**
 * 
 * question:
 * user will ask for a number between a 0 to 9 and if the number is below 5 resolve other reject.
 * 
 */

var ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random()*10);

    if(n < 5) {
        return res();
    }
    else {
        return rej();
    }
})

ans
    .then(function() {
        console.log('number is less then 5');
    })
    .catch(function() {
        console.log('number is greater then 5')
    })

/**
 * 
 * ghar par aao
 * gate kholo or gate lagao
 * khana pakao or kahana khao
 * incognito mode chalao
 * or phir uske baad so jao.
 * 
 */

var ans = new Promise(function(res, rej){
    return res("sabse pahle ghar par aao");
})
var p2 = ans.then(function(data) {
        console.log(data);
        return new Promise(function(res, rej){
            return res('gate kholo gate lagao');
        })
    })

var p3 = p2.then(function(data) {
    console.log(data);
    return new Promise(function(res, rej) {
        return res('khana pakao or kahana khao');
    })
})

var p4 = p3.then(function(data) {
    console.log(data);
    return new Promise(function(res, rej) {
        return res('incognito kholo or chalao');
    })
})

var p5 = p4.then(function(data){
    console.log(data);
    return new Promise(function(res, rej) {
        return res('so jao');
    })
})
p5.then(function(data) {
    console.log(data);
})