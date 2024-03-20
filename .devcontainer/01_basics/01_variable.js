const accountId = 12213; // value will be the same  
let gmail = "muhammadfahad@gmail.com"; // let will be access in its own scope
var accountInfo = "asdsa"; // prefer not not use the var because it's will be accessible in the scope 

var changeAccess = "Fahad"
let changesAccess2 = "Hammad"
{
 var changeAccess = "Wahab";
 let changesAccess2 = "Hamza";
}

accountCity = "Karachi";
console.table([accountId, gmail, accountInfo , accountCity, changeAccess,changesAccess2]);