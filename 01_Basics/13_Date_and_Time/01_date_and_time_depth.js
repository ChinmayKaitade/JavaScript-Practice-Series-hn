// Date and Time in Depth 🚀🔥
// Dates ✅
let myDate = new Date();
console.log(myDate); // 2024-08-17T10:31:39.981Z

console.log("toString :", myDate.toString()); // toString : Sat Aug 17 2024 16:02:24 GMT+0530 (India Standard Time)
console.log("toDateString :", myDate.toDateString()); // toDateString : Sat Aug 17 2024
console.log("toISOString :", myDate.toISOString()); // toISOString : 2024-08-17T10:35:35.755Z
console.log("toJSON :", myDate.toJSON()); // toJSON : 2024-08-17T10:35:35.755Z
console.log("toLocaleDateString :", myDate.toLocaleDateString()); // toLocaleDateString : 17/8/2024
console.log("toLocaleString :", myDate.toLocaleString()); // toLocaleString : 17/8/2024, 4:05:35 pm

console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate2 = new Date("2023-01-14");
let myCreatedDate2 = new Date("01-14-2023");

console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
console.log(myCreatedDate1.toLocaleString()); // 23/1/2023, 5:03:00 am
console.log(myCreatedDate2.toLocaleString()); // 14/1/2023, 12:00:00 am

// TimeStamps ✔️
let myTimeStamp = Date.now();

console.log(myTimeStamp); // 1723891373048
console.log(myCreatedDate.getTime()); // 1674412200000
console.log(Math.floor(Date.now() / 1000)); // 1723891564

let newDate = new Date();
console.log(newDate); // 2024-08-17T10:48:37.938Z
console.log(newDate.getMonth()); // 7
console.log(newDate.getMonth() + 1); // 8
console.log(newDate.getDate()); // 17
console.log(newDate.getHours()); // 16
console.log(newDate.getTime()); // 1723891717938
console.log(newDate.getDay()); // 6

`${newDate.getDay()} and the time is ${newDate.getTime()}`; // --> String Interpolation

newDate.toLocaleString("default", {
  weekday: "long",
});
