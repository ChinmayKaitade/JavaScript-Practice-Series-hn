const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});
console.log(values); // undefined --> for-each `doesn't holds` values in variables and gives undefined. for-each doesn't `return` any value

// for conditional checking we have to take value as a reference here for-each loops fails.


