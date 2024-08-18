// Objects in JavaScript - Part2 🚀🔥
// const tinderUser = {}; --> non-singleton object
// const tinderUser = new Object(); --> singleton object
// console.log(tinderUser); --> o/p: {}

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gamil.com",
  fullName: {
    userFullName: {
      firstName: "chinmay",
      lastName: "kaitade",
    },
  },
};

console.log(regularUser.fullName); // { userFullName: { firstName: 'chinmay', lastName: 'kaitade' } }
console.log(regularUser.fullName.userFullName); // { firstName: 'chinmay', lastName: 'kaitade' }
console.log(regularUser.fullName.userFullName.firstName); // chinmay

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1 , obj2}; --> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } --> Don't use this ❌

// const obj3 = Object.assign(obj1, obj2); --> Don't use this ❌
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj = Object.assign({}, obj1, obj2); // --> Use this ✔️
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const anotherObj = Object.assign({}, obj1, obj2, obj4); // --> Use this ✔️
console.log(anotherObj); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
