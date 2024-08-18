// Arrays in JavaScript - Part1 🚀🔥
const myArr = [0, 2, 4, 3, 6, 5];
const myHeros = ["shaktiman", "naagraj"];

console.log(myArr[0]); // 0
console.log(myArr[2]); // 4
console.log(myArr[9]); // undefined

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[1]); // 2

// Array Methods ✅

// push ✔️ --> adds in ending
myArr.push(6);
myArr.push(7);
console.log("push :", myArr); // [0, 2, 4, 3, 6, 5, 6]

// pop ✔️ --> removes from ending
myArr.pop();
console.log("pop :", myArr); // [0, 2, 4, 3, 6, 5, 6]

// unshift ✔️ --> adds in starting
myArr.unshift(9);
console.log("unshift :", myArr); // [9, 0, 2, 4, 3, 6, 5, 6]

// shift ✔️ --> removes from starting
myArr.shift(9);
console.log("shift :", myArr); // [0, 2, 4, 3, 6, 5, 6]

// includes ✔️
console.log(myArr.includes("9")); // false

// indexOf ✔️
console.log(myArr.indexOf(9)); // -1
console.log(myArr.indexOf(4)); // 2

// join ✔️
const newArr = myArr.join();
console.log("myArr :", myArr); // myArr : [0, 2, 4, 3, 6, 5, 6]
console.log("newArr :", newArr); // newArr : 0,2,4,3,6,5,6
console.log("newArr type :", typeof newArr); // newArr type : string

// slice and splice methods ⭐ (IMP)
// const myArr = [0, 2, 4, 3, 6, 5];
console.log("A", myArr); // A [ 0, 2, 4, 3, 6, 5 ]

// slice ✔️
const myNewArr1 = myArr.slice(1, 3);
console.log(myNewArr1); // [ 2, 4 ]
console.log("B", myArr); // B [ 0, 2, 4, 3, 6, 5 ]

// splice ✔️
const myNewArr2 = myArr.splice(1, 3);
console.log("C", myArr); // [0, 6, 5]
console.log(myNewArr2); // [ 2, 4, 3 ]

// ⭐ IMPORTANT NOTE -
// Key Differences:
// Modification: slice() does not modify the original array; splice() does.
// Return Value: slice() returns a new array with the extracted elements; splice() returns an array with the removed elements.
// Use Case: Use slice() when you want to create a subarray without altering the original array. Use splice() when you need to modify the array by adding, removing, or replacing elements.
