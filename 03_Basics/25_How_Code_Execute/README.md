# How does JavaScript Execute Code (Call Stack) 🚀🔥

**_JavaScript is a Single threaded Language (IMP⭐)_**

JavaScript is a single-threaded, synchronous language, meaning it executes one command at a time in a specific order. Here's a fun and visual way to understand how JavaScript executes code:

## Execution Context 🌍

When JavaScript runs, it creates an **execution context**, which is like the environment where your code is evaluated and executed. There are two main types:

1. **Global Execution Context** 🌐: This is the default context where everything starts. It creates a global object (like `window` in browsers), and the `this` keyword refers to this global object.

2. **Function Execution Context** 📦: Every time a function is called, a new execution context is created for it. This context holds the function's arguments, local variables, and its own `this` reference.

## The Call Stack 📚

The **call stack** is a special place where JavaScript keeps track of what function is currently being executed and what needs to be executed next. Think of it as a stack of plates 🍽️—last in, first out (LIFO).

## How It Works:

1. **Global Execution** 🌍: When JavaScript starts, the global context is pushed onto the call stack.

2. **Function Invocation** ➡️: When a function is called, a new execution context for that function is created and pushed onto the call stack on top of the global context.

3. **Function Returns** ⬅️: Once a function completes its task, its context is popped off the stack, and the control goes back to the previous context.

4. **Error Handling** ⚠️: If the stack gets too big (like from infinite recursion), you get a "stack overflow" error, and the program crashes.

### **Example** 📝

```javascript
function firstFunction() {
  console.log("First Function");
  secondFunction();
  console.log("First Function End");
}

function secondFunction() {
  console.log("Second Function");
}

firstFunction();
console.log("Global Context End");
```

## Call Stack Flow 📊

1. **Global Context** 🌍 is pushed onto the stack.
2. `firstFunction()` is called ➡️ **firstFunction Execution Context** 📦 is pushed onto the stack.
3. Inside `firstFunction()`, `console.log("First Function")` 🗨️ is executed.
4. `secondFunction()` is called ➡️ **secondFunction Execution Context** 📦 is pushed onto the stack.
5. Inside `secondFunction()`, `console.log("Second Function")` 🗨️ is executed.
6. **secondFunction Execution Context** 📦 is popped off the stack after it finishes ⬅️.
7. `console.log("First Function End")` 🗨️ in `firstFunction()` is executed.
8. **firstFunction Execution Context** 📦 is popped off the stack after it finishes ⬅️.
9. `console.log("Global Context End")` 🗨️ in the global context is executed.
10. **Global Context** 🌍 is popped off the stack, and the execution finishes 🎉.

## Visual Representation of Call Stack 🖼️

- **Initial State**: `[Global Execution Context 🌍]`
- **After `firstFunction()` call**: `[Global Execution Context 🌍, firstFunction Execution Context 📦]`
- **After `secondFunction()` call**: `[Global Execution Context 🌍, firstFunction Execution Context 📦, secondFunction Execution Context 📦]`
- **After `secondFunction` returns**: `[Global Execution Context 🌍, firstFunction Execution Context 📦]`
- **After `firstFunction` returns**: `[Global Execution Context 🌍]`
- **End of execution**: `[]`


