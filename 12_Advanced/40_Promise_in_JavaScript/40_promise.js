const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed!");
    resolve();
  }, 1000);
});

// resolve is connected with `.then`
promiseOne.then(function () {
  console.log("Promise consumed!");
});

// new promise without storing function in variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2!");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved!");
});

// promise with storing function in variable and passing parameters to `.then`
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Dummy", email: "dummy@example.com" });
  }, 1000);
});

// passing `user` argument to `.then` from `promise` parameters
promiseThree.then(function (user) {
  console.log(user);
});

// promise with error (reject)
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "chinmay", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// promise `.then` chaining with `.catch` and `.finally`
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// handling promises with async functions
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// handling promise with async function
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/ChinmayKaitade")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all ✅
// In JavaScript, `Promise.all` is a method that takes an array (or any iterable) of promises and returns a single promise that resolves when all of the promises in the array have resolved. If any of the promises in the array reject, the returned promise will immediately reject with that reason.

// How `Promise.all` Works:

// 1. Resolves when all promises resolve: If all the promises resolve, `Promise.all` resolves with an array of the resolved values, in the same order as the promises in the input array.

// 2. Rejects if any promise rejects: If any promise in the array rejects, `Promise.all` immediately rejects with the reason from the first promise that rejects, and ignores the results of the other promises.

// Example1:
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First Promise Resolved"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Second Promise Resolved"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third Promise Resolved"), 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });

// Explanation:

// - Promises:
//   - `promise1` resolves after 1 second.
//   - `promise2` resolves after 2 seconds.
//   - `promise3` resolves after 1.5 seconds.

// - `Promise.all([promise1, promise2, promise3])`:
//   - Waits for all three promises to resolve.
//   - After 2 seconds (when the longest promise, `promise2`, resolves), the `then` block is executed.
//   - The `results` array contains: `['First Promise Resolved', 'Second Promise Resolved', 'Third Promise Resolved']`.

// Handling Rejections:

// If one of the promises rejects, `Promise.all` will immediately reject.
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First Promise Resolved"), 1000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Second Promise Rejected"), 2000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third Promise Resolved"), 1500);
});

Promise.all([promise4, promise5, promise6])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });

// In this case, after 2 seconds, `promise2` will reject, causing `Promise.all` to reject immediately with the error `'Second Promise Rejected'`. The other promises are ignored after the rejection.

// When to Use `Promise.all`:
// - When you want to wait for multiple asynchronous operations to complete before proceeding.
// - When you need all promises to succeed, and want to handle failure if any of them fail.

// This method is useful when you want to run multiple asynchronous tasks in parallel and wait for all of them to complete.
