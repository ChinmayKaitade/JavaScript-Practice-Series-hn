// Objects in JavaScript 🚀🔥
// singleton -->  when object is made with constructor it is a singleton. when object is made with literals it is not singleton.
// Constructor --> Object.create
// Literals --> const user = {}

const mySymbol = Symbol("key1");

// Object Literals ✅
const JSUser = {
  name: "Chinmay",
  "full Name": "Chinmay Kaitade",
  [mySymbol]: "myKey1",
  age: 24,
  location: "Nagpur",
  email: "chinmay@ck.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JSUser.email); // chinmay@ck.com
console.log(JSUser["email"]); // chinmay@ck.com
console.log(JSUser["full Name"]); // Chinmay Kaitade
console.log(JSUser[mySymbol]); // myKey1

JSUser.email = "chinmay@chatgpt.com";
// Object.freeze(JSUser);
JSUser.email = "chinmay@lama.com";
console.log(JSUser);

JSUser.greeting = function () {
  console.log("Hello, JS User!");
};
// console.log(JSUser.greeting);
console.log(JSUser.greeting());

JSUser.greetingTwo = function () {
  console.log(`Hello, JS User!, ${this.name}`);
};
console.log(JSUser.greetingTwo());

// ⭐ IMPORTANT NOTE -
// Use dot notation for simplicity when possible, but switch to square bracket notation for dynamic, special, or Symbol-based keys.
