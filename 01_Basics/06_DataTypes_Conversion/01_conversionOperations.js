// DataTypes Conversion Confusion 🚀🔥
let score = "23";
let score2 = "23abc";
let score3 = null;
let score4 = undefined;
let score5 = true;
let score6 = false;

console.log(typeof score); // string

// String to Number Conversion 🔄️
let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);
let valueInNumber5 = Number(score5);
let valueInNumber6 = Number(score6);
console.log(typeof valueInNumber); // number
console.log(valueInNumber2); // NaN (not a number)
console.log(valueInNumber3); // 0
console.log(valueInNumber4); // NaN (not a number)
console.log(valueInNumber5); // 1
console.log(valueInNumber6); // 0

// ✍️ Note -
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = 1;
let isLoggedIn1 = 0;
let isLoggedIn2 = "";
let isLoggedIn3 = "chinmay";

let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn); // true
console.log(booleanIsLoggedIn1); // false
console.log(booleanIsLoggedIn2); // false
console.log(booleanIsLoggedIn3); // true

// ✍️ Note -
// 1 => true
// 0 => false
// "" => false
// "chinmay" => true

// Number to String Conversion 🔄️
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string
