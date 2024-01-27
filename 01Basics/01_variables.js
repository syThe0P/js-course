const accountId = 144553;   //const value cannot be change;
let accountEmail = "pranavkumar1522@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;  //This will give an output of undefined because it is not defined


// accountId = 2 // not allowed

accountEmail = "pk@pk.com"
accountPassword = "212121"
accountCity = "Delhi";


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
