// Strings in JavaScript 🚀🔥
const firstName = "chinmay";
const repoCount = 50;

console.log(firstName + repoCount + " Value"); // chinmay50 Value
console.log(`Hello my name is ${firstName} and my repoCount is ${repoCount}.`); // Hello my name is chinmay and my repoCount is 50.

const gameName = new String("chinmay-ck");

console.log(gameName[0]); // c
console.log(gameName.__proto__); // {}

// length, toUpperCase, charAt, indexOf ✔️
console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); // CHINMAYCK
console.log(gameName.charAt(2)); // i
console.log(gameName.indexOf("i")); // 2

// substring ✔️
const newStr = gameName.substring(0, 4);
console.log(newStr); // chin

// slice ✔️
const anotherStr = gameName.slice(0, 4);
const anotherStr1 = gameName.slice(-9, 4);
console.log(anotherStr); // chin
console.log(anotherStr1); // hin

// trim() ✔️
const newStrOne = "  chinmay  ";
console.log(newStrOne); //    chinmay
console.log("Trim :", newStrOne.trim()); // Trim : chinmay

// replace ✔️
const url = "https://chinmay.com/chinmay%20kaitade";
console.log(url.replace("%20", "-")); // https://chinmay.com/chinmay-kaitade

// includes ✔️
console.log(url.includes("chinmay")); // true
console.log(url.includes("sundar")); // false

// split ✔️
console.log(gameName.split("-")); // [ 'chinmay', 'ck' ]
