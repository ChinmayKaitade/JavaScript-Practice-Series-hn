// Comparison in JavaScript 🚀🔥
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// ✍️ Note -
// For Null -->
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality check `==` and comparisons `>`, `<`, `>=`, `<=` work differently.
// Comparison convert null to a number, treating it as 0. That's why (3) null >= 0 is `true` and (1) null > 0 is `false`.

// For Undefined -->
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// for `undefined` it gives false in all conditions.

// Don't write code like this, as given in NOTE because it creates more confusion // 🔴

// -------------------------- //

// Strict Equals Comparison (===)

console.log("2" === 2); // false
