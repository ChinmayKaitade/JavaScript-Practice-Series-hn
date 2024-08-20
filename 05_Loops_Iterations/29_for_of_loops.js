// Loops (Iterations) in JavaScript 🚀🔥

// for-of loop in JavaScript✅
// ["", "", "", ""]
// [{}, {} {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
  console.log(`Each Char is : ${greet}`);
}

// break, for-in
const greetings1 = "Hello World!";

for (const greet1 of greetings1) {
  if (greet1 === " ") {
    console.log("*** space detected ***");
    continue;
  }
  console.log(`Each Char is : ${greet1}`);
}

// Map ✅
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

console.log(map);
// o/p -
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'France'
//   }

// for-of loop on map ✔️
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
// o/p -
// IN :- India
// USA :- United States of America
// FR :- France


