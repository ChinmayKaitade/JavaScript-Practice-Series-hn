// DataTypes Interview Summary 🚀🔥

// - JavaScript is Static or Dynamic type Language?
// ANS: JavaScript is a Dynamic type Language.

// 1) Primitive DataTypes.
// 1) Non-Primitive or Reference DataTypes.

// 1) Primitive DataTypes ✅
// They are of 7 types. They are call by value that means when you copy this values, the original value remains same, and it gives copy of values for usage. Simply in Primitive DataTypes Value doesn't change original value it is changed into copied array.
// - String
// - Number
// - Boolean
// - Null
// - Undefined
// - Symbol (It gives Unique value)
// - BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false --> Because `Symbol` always gives unique value.

const bigNumber = 343536366367373n;

// 2) Non-Primitive or Reference DataTypes ✅
// Reference vale passed in this. That means if you change into original value, change will reflect in into new value.
// - Array
// - Objects
// - Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "chinmay",
  age: 24,
};

const myFunction = function () {
  console.log("Hello Function");
};

console.log(typeof bigNumber); // bigint
console.log(typeof outsideTemp); // Object

// IMP Types of values and their results ✅

// undefined --> "undefined"
// Null --> "object"
// Boolean --> "boolean"
// Number --> "number"
// String --> "string"
// Object (native and does not implement [[Call]]) --> "object"
// Object (native or host and does not implement [[Call]]) --> "function"
// Object (host and does not implement [[Call]]) --> "Implementation-defined expect may not be `undefined`, `boolean`, `number`, or `string`."
