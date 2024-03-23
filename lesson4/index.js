// let a = -10;
// if (a >= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// const a = 1;

// a === true ? console.log("Верно") : console.log("Неверно");

// function sayHi(name = "Guest") {
//   console.log(`Hi, ${name}!`);
// }

// sayHi();

// function showSum(a, b = 5) {
//   console.log(a + b);
// }

// showSum(1);

// function sum(a, b) {
//   return;
// }

// const resultSum = sum(2, 3);
//console.log(Math.random());

//console.log(typeof sum);
// let text = "Hi!";
// function sayHi() {
//   console.log(text);
// }
// sayHi();

// let name = "Ivan";
// function sayHi() {
//   a = 10;
// }
// console.log(a);
// sayHi();

// function checkNumber(value) {
//   return value % 2 ? "Нечетное" : "Четное";
// }

// console.log(checkNumber(9));

// showSum(2, 3);

// function showSum(a, b) {
//   console.log(a + b);
// }
// const copyShowSum = showSum;

// showSum(1, 5);
// copyShowSum(1, 5);

// const callback = function () {
//   console.log("Work callback!");
// };

// setTimeout(callback, 3000);

// const sum = (a, b) => {
//   console.log(a + b);
//   return a + b;
// };

// sum(4, 5);

//setTimeout(() => console.log("3 секунды истекло"), 3000);
const checkLetter = (letter) => {
  if (
    letter === "а" ||
    letter === "о" ||
    letter === "у" ||
    letter === "и" ||
    letter === "е" ||
    letter === "ё" ||
    letter === "я" ||
    letter === "ы" ||
    letter === "э"
  ) {
    return true;
  } else return false;
};
console.log(checkLetter("м"));
