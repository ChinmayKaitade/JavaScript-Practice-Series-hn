// Scope Level and Mini Hoisting in JavaScript 🚀🔥

// ✍️ Example1 -
function one() {
  const userName = "chinmay";

  function two() {
    const website = "youtube";
    console.log(userName);
  }
  //   console.log(website); // ReferenceError: website is not defined

  //   two(); // chinmay
}

one(); // doesn't gives output

// ✍️ Example2 -
if (true) {
  const userName = "chinmay";
  if (userName === "chinmay") {
    const website = " youtube";
    // console.log(userName + website); // chinmay youtube
  }
  //   console.log(website); // ReferenceError: website is not defined
}

// console.log(userName); // ReferenceError: userName is not defined

// ⭐ IMPORTANT -
console.log(addOne(5)); // 6
function addOne(num) {
  return num + 1;
}

addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};

// ✅ NOTE -
// - Function Declarations are hoisted with their definitions, so you can call them before they are defined in the code.
// - Function Expressions are only hoisted as variables, and the variable is not initialized until the expression is assigned. This causes an error if you try to use the function before it's defined.
