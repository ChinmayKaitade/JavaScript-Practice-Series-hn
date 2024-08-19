// Truthy and Falsy in JavaScript 🚀🔥

const userEmailId = "ck@chinmay.ai";

if (userEmailId) {
  console.log("User Email Verified"); // User Email Verified
} else {
  console.log("Don't have User Email");
}

// Falsy Values ✅
// - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values ✅
// - All values excepting Falsy values are truthy values.
// ✔️ IMP Note - when falsy values are added in string("") they always called as truthy values.
// -  Surprising truthy values --> "0", "false", " ", [ ], { }, function(){}

// Arrays ✔️
const userEmail = [];

if (userEmail.length === 0) {
  console.log("Array is Empty"); // Array is Empty
}

// Objects ✔️
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty"); // Object is Empty
}

// ⭐ IMPORTANT NOTE -

// false == 0; --> true

// false == ""; --> true

// 0 == ""; --> true

// Nullish Coalescing Operator ?? ✅

// null undefined --> This entire topic is depends on null and undefined.
// ---> Always first value is assigned to coalescing operator.

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

val2 = null ?? 10;
console.log(val2); // 10

val3 = undefined ?? 15;
console.log(val3); // 10

val4 = null ?? 20 ?? 30;
console.log(val4); // 10

// Ternary Operators ✅
// --> Ternary Operators and Nullish coalescing operators are different.

// condition ? true : false; --> Ternary Operator Syntax

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
