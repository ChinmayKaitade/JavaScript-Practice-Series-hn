// Stack and Heap Memory 🚀🔥

// 1) Stack Memory -
// - Stack Memory used in Primitive DataTypes.
// - The variables that we declare it makes copy of it.
// - Changes in the new variables will reflect on copy of original variables. Original variables value remains same.

let lang = "JavaScript";

let anotherlang = lang;
anotherlang = "React";

console.log(lang); // JavaScript
console.log(anotherlang); // React

// 2) Heap Memory -
// - Heap Memory used in Non-Primitive DataTypes.
// - The variables that we declare it takes reference of original variable.
// - Changes in the new variables will directly reflect on original variables. Original variables value changes.

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "dummy@google.com";
console.log(userOne.email);
console.log(userTwo.email);
