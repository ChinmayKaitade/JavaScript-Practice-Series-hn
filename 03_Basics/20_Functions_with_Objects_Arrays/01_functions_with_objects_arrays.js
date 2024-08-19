// Functions with Objects and Arrays in JavaScript 🚀🔥
function calculateCartPrice(num1) {
  return num1;
}
console.log(calculateCartPrice(2)); // [2]

// rest operators ✔️
// Case-1
function calculateCartPrice(...num1) {
  return num1;
}
console.log("Using Rest :", calculateCartPrice(200, 300, 500)); // Using Rest : [ 200, 300, 500 ]

// Case-2
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log("Using Rest Cse-2 :", calculateCartPrice(200, 300, 500, 600, 700)); // Using Rest Cse-2 : [ 500, 600, 700 ]
// Here in case-2 500 will go in val1 and 600 will go in val2 remaining will goes in ...num1 as a rest operator.

// How to Pass objects in function and how to use it ? ✅
const user = {
  userName: "Chinmay",
  price: 199,
};

function handleObjects(anyObj) {
  console.log(`Username is ${anyObj.userName} and Price is ${anyObj.price}`);
}
handleObjects(user); // Username is Chinmay and Price is 199
handleObjects({
  userName: "dummy",
  price: 400,
}); // Username is dummy and Price is 400

// How to Pass arrays in function and how to use it ? ✅
const myArr = [200, 300, 400, 500];

function returnSecondVal(getArray) {
  return getArray[1];
}
console.log(returnSecondVal(myArr)); // 300
console.log(returnSecondVal([300, 400, 500, 700])); // 400
