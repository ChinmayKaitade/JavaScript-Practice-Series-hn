// for-each loop in JavaScript 🚀🔥

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// values in for-each ✔️
coding.forEach((item, index, arr) => {
  console.log("values in for-each :", item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  //   console.log(item.languageName);
  //   console.log(item.languageFileName);
  console.log(
    `language name is ${item.languageName} and file name is ${item.languageFileName}`
  );
});
