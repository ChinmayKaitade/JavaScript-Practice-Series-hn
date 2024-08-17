// Let, Const and Var in JavaScript 🚀🔥
const accoundId = "1234";
let accoundEmail = "chinmay@email.com";
var accoundPassword = "4321";
accoundCity = "Nagpur";

let accoundState;

// accoundId = "5678"; --> not allowed - TypeError: Assignment to constant variable.

accoundEmail = "ck@ck.com";
accoundPassword = "32323232";
accoundCity = "Bhandara";

console.table([accoundId, accoundEmail, accoundPassword, accoundCity]);

console.log(accoundState); // undefined --> because it is not declared.

/*
⚠️ Caution -
Prefer not to use var,
because of issue in block scope and functional scope.
*/
