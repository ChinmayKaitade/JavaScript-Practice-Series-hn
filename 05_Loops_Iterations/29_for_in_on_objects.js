// for-in loops on Objects 🚀🔥

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(key);
  console.log(myObject[key]);
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "python", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
  // console.log(key);
}
