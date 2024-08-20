// Loops (Iterations) in JavaScript 🚀🔥

// for loop in JavaScript✅

// for loop ✔️
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// } --> Basic Syntax

// example1 -
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  //   console.log(element);
}

// example2 -
for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value : ${j} and inner loop ${i}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}

// example2 -
const myArray = ["flash", "batman", "superman"];
// console.log(myArray.length); --> 3

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}



