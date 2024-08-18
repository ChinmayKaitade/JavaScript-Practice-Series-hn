# 📚 JavaScript Array Methods: `slice()` vs. `splice()`

**_For More Info_ [Arrays In JavaScript](./01_arrays_in_javascript.js)**

Understanding the difference between `slice()` and `splice()` in JavaScript is crucial for working efficiently with arrays. Here's a quick guide to help you out! 🧑‍💻

## ✂️ `slice()` Method

**Purpose**: Extracts a portion of an array without modifying the original array.

### 🔧 Syntax:

```javascript
array.slice(start, end);
```

- **`start`**: The index at which to begin extraction. 🛫
- **`end`**: The index at which to end extraction (but not including the element at this index). 🛑

### 📦 Returns:

- A new array containing the extracted elements. 🆕

### 📝 Example:

```javascript
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice(1, 4);
console.log(newNumbers); // Output: [2, 3, 4] 🎉
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array is unchanged) 🔒
```

## 🛠️ `splice()` Method

**Purpose**: Adds, removes, or replaces elements in an array. This method modifies the original array. ⚠️

### 🔧 Syntax:

```javascript
array.splice(start, deleteCount, item1, item2, ...)
```

- **`start`**: The index at which to start changing the array. 🛠️
- **`deleteCount`**: The number of elements to remove. If set to `0`, no elements are removed. 🗑️
- **`item1, item2, ...`**: The elements to add to the array at the `start` index. ➕

### 📦 Returns:

- An array containing the removed elements (if any). 🗂️

### 📝 Example:

```javascript
let numbers = [1, 2, 3, 4, 5];
let removedNumbers = numbers.splice(2, 2, "a", "b");
console.log(removedNumbers); // Output: [3, 4] 🗑️
console.log(numbers); // Output: [1, 2, 'a', 'b', 5] (original array is modified) 🔧
```

## 🆚 Key Differences:

- **Modification**:
  - `slice()` does **not** modify the original array. 🔒
  - `splice()` **does** modify the original array. 🔧
- **Return Value**:

  - `slice()` returns a new array with the extracted elements. 🆕
  - `splice()` returns an array with the removed elements. 🗑️

- **Use Case**:
  - Use `slice()` when you want to create a subarray without altering the original array. 🌱
  - Use `splice()` when you need to modify the array by adding, removing, or replacing elements. 🔄

---

Happy coding! 🎉
