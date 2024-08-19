// Function in JavaScript (Global and Local Scope) 🚀🔥
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// var c = 300; // Local Scope
let a = 300; // Global Scope
if (true) {
  let a = 10;
  const b = 20;
  console.log("Block Scope :", a); // Block Scope : 10
}

console.log("Local or Global Scope :", a); // Local or Global Scope : 300
