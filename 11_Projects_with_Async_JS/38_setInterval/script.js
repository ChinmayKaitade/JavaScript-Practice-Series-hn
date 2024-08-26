// setInterval ✅
// setInterval(() => {
//   console.log("Chinmay", Math.round(Math.random() * 100 + 1));
// }, 1000);

// reference of function ✔️
// const sayNumber = function (str) {
//   console.log(str, Math.round(Math.random() * 100 + 1));
// };
// const intervalId = setInterval(sayNumber, 1000, "Hello");

// clearInterval(intervalId);

// Assignment -
// Q. Design a code, where if user clicks on start button then the number printing will start and when you press stop button the number printing will stop.

document.querySelector("#start").addEventListener("click", function () {
  const startNum = setInterval(() => {
    console.log(`The Random Number is ${Math.round(Math.random() * 100 + 1)} `);
  }, 1000);

  document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(startNum);
  });
});
