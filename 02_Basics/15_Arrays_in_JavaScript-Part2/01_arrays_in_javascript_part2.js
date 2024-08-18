// Arrays in JavaScript - Part2 🚀🔥
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

/* ❌❌❌

// marvel_heros.push(dc_heros);

console.log(marvel_heros); 
console.log(marvel_heros[3][1]); 

*/

// concat ✔️
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread ✔️
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// flat ✔️
const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_arr.flat(Infinity);
console.log(real_another_array); // [(1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5)];

// from ✔️
console.log(Array.isArray("Chinmay")); // false
console.log(Array.from("Chinmay")); //["C", "h", "i", "n", "m", "a", "y"];
console.log(Array.from({ name: "chinmay" })); // [] --> interesting case for interview

// of ✔️
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
