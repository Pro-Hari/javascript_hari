const accountId = 18323
let accountEmail = "hari32@google.com"
var accountPassword = "12345"
accountCity = "Agra" //Don't  use this thing as a programmer

let accountState;


// accountId = 4 //Not allowed

accountEmail = "Agar@gmail.com" //allowed 
accountPassword = "567890"
accountCity = "Mathura"


/*
Prefer not to use var keyword because of issue in block scope and functional scope


*/
console.log(accountId);

console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])