// Immediate Invoked Function Expressions (IIFE) in JavaScript 🚀🔥
(function chai() {
  console.log(`DB Connected`);
})(); // DB Connected

// Q. Why IIFE used in JavaScript ?
// Ans. To prevent Global Scope declaration pollution and to call function immediately after function is executed.
// Extra Tip - To end this function execution semi-colon(;) is compulsory at the end of the function.

// simple iife ✔️
(() => {
  console.log("DB Connected 2");
})(); // DB Connected 2

// named iife ✔️
(function chai() {
  console.log("DB Connected 2");
})(); // DB Connected 2

// simple iife with parameter passed ✔️
((name) => {
  console.log(`DB Connected 2 ${name}`);
})("chinmay"); // DB Connected 2 chinmay
