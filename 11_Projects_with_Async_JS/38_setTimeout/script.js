// setTimeout ✅
setTimeout(function () {
  console.log("Chinmay");
}, 2000);

// reference of function ✔️
const sayHi = function () {
  console.log("Hi, Chinmay");
};
setTimeout(sayHi, 3000);

// Example2-
const changeText = function () {
  document.querySelector("h1").innerHTML = "Best JS Series";
};

// clearTimeout ✔️
const changeMe = setTimeout(changeText, 2000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeMe);
  console.log("Stopped");
});


