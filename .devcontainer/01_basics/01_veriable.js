const accountId =  144553;
let accountEmail = "skhanra52@gmail.com";
var accountPassword = "12345";
accountCity = "Bengaluru";

// accountId = 2; // node allowed
accountEmail = "hs@example.com"
accountPassword = "2432535345345"
accountCity = "Jaipur"
/*Prefer not to use var due to block scope and function scope */

console.log("AccountID", accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])