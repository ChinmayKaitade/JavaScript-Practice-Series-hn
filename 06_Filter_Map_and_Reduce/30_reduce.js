// Filter, Map and Reduce in JavaScript 🚀🔥

// Reduce ✅
const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, curVal) {
  console.log(`acc : ${acc} and curVal : ${curVal}`);
  return acc + curVal;
}, 0);

console.log(myTotal); // 6

// using arrow function ✔️
const myArr = [1, 2, 3];

const newArr = myArr.reduce((acc, curVal) => acc + curVal, 0);
console.log(newArr); // 6

// example1 -

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // 22996
