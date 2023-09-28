const accountId = 221234
let accountEmail = "abc@gmail.com"
var accountPassword = "123456789"
accountCity = "Chennai"

/** 
 * Prefer not to use var 
 * due to issue of
 *  block and functional scope 
 */
console.log("accountId")
console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])

//accountId = 400 //not allowed to change const variable
accountEmail = "tool@gmail.com"
accountPassword = "123"
accountCity = "Bengaluru"
let aVar;

console.log("After doing some changes");
console.table([accountId, accountEmail, accountPassword, accountCity, aVar])