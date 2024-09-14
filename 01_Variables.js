let accountId = 14589
let accountEmail = "piyush@google.com"
var accountPassword = "78169"
let accountCity = "pryagraj"
var accountState = "UP" 

// accountId = 2  not allowed

accountId = 6378
accountEmail = "rishi123@gmail.com"
accountPassword = "52145"   
accountCity = "Ranchi"
accountState = "Bihar"


accountId = 25469
accountEmail = "isha123@gmail.com"
accountPassword = "332145"   
accountCity = "Ambikapur"
accountState = "CG"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])









