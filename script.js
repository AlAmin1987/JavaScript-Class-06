// function declaration

// function calculatorAge(birthYear) {
//   return 2022 - birthYear;
// }

// const ageOne = calculatorAge(1975);
// console.log(ageOne);
// const ageTwo = calculatorAge(1967);
// console.log(ageTwo);

// function Expression

// const age = function calculatorAge(birthYear) {
//   return 2022 - birthYear;
// };

// const ageOne = age(1975);
// console.log(ageOne);
// const ageTwo = age(2005);
// console.log(ageTwo);

// arrow function

// const ageCalculator = (birthYear) => 2022 - birthYear;
// const ageAnother = ageCalculator(1972);
// console.log(ageAnother);

// Another Example of arrow function

// const ageCalculator = (birthYear) => {
//   return 2022 - birthYear;
// };

// const age = ageCalculator(1992);
// console.log(age);

// Another Real Life Example

// const jobLeft = (birthYear) => {
//   const age = 2022 - birthYear;
//   const ageLeft = 62 - age;
//   return ageLeft;
// };

// const ajobLeft = jobLeft(1975);
// console.log(ajobLeft);

// console.log(`a job is left ${ajobLeft} years`);

// Array example

// const fruits = ["apple", "mango", "banana"];

// console.log(fruits[2]);
// console.log(fruits[0]);

// const players = ["Mehrab", "Bulbul", "Naimur", "Sahadat", "Liton", "Mominul"];

// console.log(players);
// console.log(players[players.length - 5]);
// // console.log(players.length);
// // console.log(players[4]);

// // const studentName = ["Asif", "Rahi", "Shimul", "mustafa", "Ashraful"];

// // // console.log(studentName);
// // // console.log(studentName.length);
// // // console.log(studentName[1]);

// // studentName[4] = "minar";
// // console.log(studentName);
// // console.log(studentName[4]);

// const user = ["Ashik", "Talukder", 1985, 2022 - 1985, "Web Developer"];
// console.log(user);
// console.log(user[4]);
// console.log(user.length);
// console.log(user[user.length - 1]);

// array method

// const users = ["Asif", "Jannatul", "Nafiz", "Ashik", "Shimul"];
// console.log(users);

// //  push

// users.push("parves");
// console.log(users);

// //unshift

// users.unshift("Kamal");
// console.log(users);

// // pop

// users.pop();
// console.log(users);

// // shift

// users.shift();
// console.log(users);

//  another example of array methods

const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);

// push

// fruits.push("Grape");
// console.log(fruits);

// // unshift

// fruits.unshift("Orange");
// console.log(fruits);

// // pop
// fruits.pop();
// console.log(fruits);

// // shift

// fruits.shift();
// console.log(fruits);

const removeItem = fruits.pop();
console.log(removeItem);

const deleteItem = fruits.shift();
console.log(deleteItem);
