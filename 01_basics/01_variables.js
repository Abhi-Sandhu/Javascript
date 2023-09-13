const accountId = 14453
let accountEmail = "abhi@google.com"
var accountPassword = "12234"
accountCity = "Bathinda"

let accountState;

/*
Prefer not to use var 
due to issue in block scope and functional scope
*/

console.log(accountId);

// accountId = 21    // not allowed

accountEmail = "as@as.com"
accountPassword  = "21212121"
accountCity  = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])