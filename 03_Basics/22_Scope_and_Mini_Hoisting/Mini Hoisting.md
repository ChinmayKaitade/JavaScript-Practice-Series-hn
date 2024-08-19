# 📘 JavaScript Function Declarations vs. Function Expressions

Welcome to the README that explains the difference between **Function Declarations** and **Function Expressions** in JavaScript. Let's dive into these concepts! 🚀

## 📖 Table of Contents

- 🔍 [Overview](#overview)
- 📚 [Function Declarations](#function-declarations)
- 📝 [Function Expressions](#function-expressions)
- 🆚 [Summary](#summary)
- 🤔 [FAQ](#faq)

## 🔍 Overview

In JavaScript, functions can be defined in two main ways: **Function Declarations** and **Function Expressions**. The way these functions are hoisted within their scope affects how and when they can be invoked in the code.

## 📚 Function Declarations

Function Declarations are hoisted to the top of their scope. This means the entire function definition is moved to the top, making the function available to be called even before it appears in the code.

### Example:

```javascript
console.log(addOne(5)); // 6

function addOne(num) {
  return num + 1;
}
```

- **Explanation**: The function `addOne` is hoisted, so you can call it before its definition in the code.
- **Output**: `6`

## 📝 Function Expressions

Function Expressions, on the other hand, are not hoisted in the same way. Only the variable to which the function is assigned is hoisted, and it remains uninitialized until the assignment. Trying to use the function before it is defined results in a `ReferenceError`.

### Example:

```javascript
addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};
```

- **Explanation**: The variable `addTwo` is hoisted, but since the function assignment happens later, the function is not available at the time of the call.
- **Error**: `ReferenceError: Cannot access 'addTwo' before initialization`

## 🆚 Summary

- **Function Declarations**: Hoisted with their definitions, allowing them to be called before they are defined in the code.
- **Function Expressions**: Hoisted as variables, remaining uninitialized until the assignment, causing errors if called before they are defined.

## 🤔 FAQ

- **Q: What is hoisting?**  
  **A:** Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

- **Q: What is the "temporal dead zone"?**  
  **A:** It's the period between the start of the block and the point where the variable is declared and initialized.

---

