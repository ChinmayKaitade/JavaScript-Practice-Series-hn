// This and Arrow Functions in JavaScript 🚀🔥
const user = {
  userName: "chinmay",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to website`);
    console.log(this);
    /* Output:
        chinmay, Welcome to website
    {
        userName: 'chinmay',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
    }
        sam, Welcome to website
    {
        userName: 'sam',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
    }
    */
  },
};

user.welcomeMessage(); // chinmay, Welcome to website
user.userName = "sam";
user.welcomeMessage(); // sam, Welcome to website

console.log(this); // {}

function anotherOne() {
  let userName = "chinmay";
  console.log(this);
  //   console.log(this.userName); // undefined
}
anotherOne(); // Object [global].....

// const chai = function () {
//   let userName = "chinmay";
//   console.log(this.userName);
// };

const chai = () => {
  let userName = "chinmay";
  console.log(this); // {}
  console.log(this.userName); // undefined
};
chai(); // undefined

// Arrow Functions ✅
// () => {};

// function with explicit return ✔️ (return keyword used because curly braces used)
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 4)); // 7

// function with implicit return ✔️ (used whenever your code is in single line / return keyword not used because curly braces not used)
const addThree = (num1, num2) => num1 + num2;

console.log(addThree(3, 4)); // 7
