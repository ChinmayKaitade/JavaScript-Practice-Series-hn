// for-of loops in JavaScript 🚀🔥

// example2 -
const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObj) {
  console.log(key, ":-", value); // TypeError: myObj is not iterable
}

const myObject = {};
