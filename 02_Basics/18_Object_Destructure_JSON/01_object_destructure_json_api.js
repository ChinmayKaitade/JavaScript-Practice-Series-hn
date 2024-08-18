// Objects De-Structure and JSON Api 🚀🔥

const course = {
  courseName: "JS in Hindi",
  price: "999",
  courseInstructor: "JS Instructor",
};

// console.log(course.courseInstructor); --> JS Instructor
console.log(course["courseInstructor"]); // JS Instructor

// De-structuring ✔️
// const { courseInstructor } = course;
const { courseInstructor: instructor } = course;

console.log(instructor); // JS Instructor

// JSON APIs ✔️

// JSON Example -
// {
//     "name":"Chinmay",
//     "courseName": "JS in Hindi",
//     "price": 999,
// }

// ✍️ Try this API -
`https://api.github.com/users/ChinmayKaitade`;

// [
//     {

//     },
//     {

//     },
//     {

//     }
// ]

// ✍️ Refer this API -
`https://randomuser.me`;
// - copy this JSON API and paste it into JSON Formatter and Study it.
// - study API response in tree and  code format.
