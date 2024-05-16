const accountId  = 23432
let accountEEmail = "haris@gmail.com"
var accountPass = "1234"
accountCity = "jaipur"
let accountState;
// accountId = 1; not allowed 
/*
prefer not use the var 
becase of issue in block scope and functional scope 
*/
accountEEmail = "shadab@gmail.com";
accountPass = "5432";
console.log(accountId);
console.table([accountEEmail,accountPass,accountCity,accountState])