// Numbers and Math in JavaScript 🚀🔥
// Numbers ✅
const score = 100;
console.log(score); // 100

const balance = new Number(100);
console.log(balance); // [Number: 100]

// toString(), toFixed() ✔️
console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

// toFixed() ✔️
const otherNumber = 23.9876;
console.log(otherNumber.toFixed(2)); // 23.99

// toPrecision ✔️
const otherNumber2 = 123.9876;
console.log(otherNumber2.toPrecision(3)); // 124

// toLocaleString ✔️
const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // 1,00,00,000 --> US Style
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000 --> IND Style

// Maths ✅

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 5, 6, 7)); // 3
console.log(Math.max(4, 3, 5, 6, 7)); // 7

console.log(Math.random());
// console.log((Math.random() * 10)+1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
