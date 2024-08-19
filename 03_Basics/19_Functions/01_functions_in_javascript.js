// Functions in JavaScript 🚀🔥
// console.log("C");
// console.log("H");
// console.log("I");
// console.log("N");
// console.log("M");
// console.log("A");
// console.log("Y");
// Instead of this we use functions,

function sayMyName() {
  console.log("C");
  console.log("H");
  console.log("I");
  console.log("N");
  console.log("M");
  console.log("A");
  console.log("Y");
}

// sayMyName();

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
addTwoNumbers(3, 5); // 8
addTwoNumbers(1, 2); // here (1,2) are arguments because they are called inside functions
// when num1 and num2 are passed in function definition they are parameters.
// when we call functions and pass num1 and num2 into it then they are arguments.
// NOTE - Whenever function is called when values they are arguments. and Whenever function is defined with vales they are parameters.

// return in functions ✔️
function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
} // way-1

function addTwoNumbers(num1, num2) {
  return num1 + num2;
} // way-2

const result = addTwoNumbers(3, 5);
console.log("Result :", result); // Result : 8

// -------------------------------------------------------- //

function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage("Chinmay")); // Chinmay just logged in
console.log(loginUserMessage("")); // just logged in
console.log(loginUserMessage()); // undefined just logged in

// for avoiding this undefined we use conditions if-else
function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please Enter a Username");
    return;
  } else {
    return `${username} just logged in`;
  }
} // way-1

function loginUserMessage(username) {
  if (!username) {
    console.log("Please Enter a Username");
    return;
  } else {
    return `${username} just logged in`;
  }
} // way-2
console.log(loginUserMessage("chinmay")); // chinmay just logged in
console.log(loginUserMessage()); // Please Enter a Username

// // for default values
// function loginUserMessage(username = "dummy") {
//   if (!username) {
//     console.log("Please Enter a Username");
//     return;
//   } else {
//     return `${username} just logged in`;
//   }
// }
// console.log(loginUserMessage()); // dummy just logged in
// console.log(loginUserMessage("chinmay")); // chinmay just logged in
