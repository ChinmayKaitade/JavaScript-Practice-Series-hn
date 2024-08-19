// Control Flow in JavaScript 🚀🔥

// if ✔️
if (false) {
  // this code will never execute because condition is `false`
}

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User is Logged In"); // User is Logged In
}

// Operators in JavaScript --> "<, >, >=, <=, ==, !=, ===, !=="

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User Power : ${power}`); // User Power : fly
}
// console.log(`User Power : ${power}`); // ReferenceError: power is not defined --> Because of Functional Scope `power` is not accessible outside blocks

// 💡 using shorthand notation
const balance = 1000;

if (balance > 500) console.log("TEST"); // TEST

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200"); // less than 1200
}

// Example1 -
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// and ✔️
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy courses");
}

// or ✔️
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User LoggedIn"); // User LoggedIn
}
