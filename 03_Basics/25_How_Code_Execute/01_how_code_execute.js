// How does JavaScript Execute Code (call stack) 🚀🔥

// - JavaScript Execution Context
//  -- Global Execution Context (GEC)
//  -- Function Execution Context (FEC)

// - Memory Creation Phase (Creation Phase) --> Space is allocated to declared variables and can't execute here.

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// Step1 - Global Execution code is allocated to `this`.
// Step2 - Memory Phase
// val1 --> undefined
// val2 --> undefined
// addNum --> function definition
// result1 --> undefined
// result2 --> undefined

// This to steps comes in first cycle it will execute all time when code runs.

// Cycle-2 ✔️
// Step2- Execution Phase
// val1 --> 10
// val2 --> 5

// addNum --> creates separate Execution Context for it.
// --> (New Variable Environment + Execution Thread) --> This is created whenever function execute.
// ----> Memory Phase -
// val1 --> undefined
// val2 --> undefined
// total --> undefined
// ----> Execution Context -
// num1 --> 10
// num2 --> 5
// total --> 15 (here, it return back, it will return back in parent executional context/ returned in global execution context)
// After this (New Variable Environment + Execution Thread) will be deleted

// result1 --> 15

// result2 --> creates separate Execution Context for it.
// --> (New Variable Environment + Execution Thread) --> This is created whenever function execute.
// ----> Memory Phase -
// val1 --> undefined
// val2 --> undefined
// total --> undefined
// ----> Execution Context -
// num1 --> 10
// num2 --> 2
// total --> 12 (here, it return back, it will return back in parent executional context/ returned in global execution context)
// After this (New Variable Environment + Execution Thread) will be deleted
// result2 --> 12

// Finally this code block is executed

// Call Stack ✅
// it works on LIFO concept ---> Last in First Out
