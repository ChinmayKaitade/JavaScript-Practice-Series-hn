# Filter, Map and Reduce in JavaScript 🚀🔥

Got it! Here’s the explanation with emojis, but without using them for numbers in the examples:

### 1. **Filter 🕵️‍♂️**

The `filter` method 🧹 creates a new array with all elements that pass a test implemented by the provided function. Think of it as a sieve that filters out unwanted elements!

**Example:**
Imagine you have an array of numbers and you want to filter out all the numbers greater than 10. 🔍

```javascript
const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter((number) => number > 10);

console.log(filteredNumbers); // Output: [15, 20, 25]
```

### 2. **Map 🗺️**

The `map` method 🎨 creates a new array by calling a provided function on every element in the calling array. It's like applying a transformation or a new "paint" to every item in the array!

**Example:**
Suppose you have an array of numbers and you want to double each number. ✖️2️⃣

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

### 3. **Reduce ➕**

The `reduce` method 🧮 takes all the elements in an array and reduces them to a single value. It's like collecting all the elements and summing them up into one final value!

**Example:**
Suppose you want to calculate the sum of all the numbers in an array. 🧑‍🏫➕➕➕

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 15
```

### Combining Them 🛠️

You can combine these methods to create more powerful transformations! For example, let’s filter numbers greater than 10, double them, and then sum them up. 💪

```javascript
const numbers = [5, 10, 15, 20, 25];

const result = numbers
  .filter((number) => number > 10) // Filter numbers > 10 🔍
  .map((number) => number * 2) // Double them 🎨
  .reduce((acc, num) => acc + num, 0); // Sum them up ➕

console.log(result); // Output: 120
```

- **Filter** removes elements you don’t need. 🗑️
- **Map** transforms each element. ✨
- **Reduce** accumulates everything into one value. 🎁

These methods are like the magic trio 🧙‍♂️ of array manipulation in JavaScript, making your code cleaner and more expressive!
