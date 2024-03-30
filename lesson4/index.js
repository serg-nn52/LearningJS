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
// const checkLetter = (letter) => {
//   if (
//     letter === "а" ||
//     letter === "о" ||
//     letter === "у" ||
//     letter === "и" ||
//     letter === "е" ||
//     letter === "ё" ||
//     letter === "я" ||
//     letter === "ы" ||
//     letter === "э"
//   ) {
//     return true;
//   } else return false;
// };
// console.log(checkLetter("м"));
// const funcisEven = function isEven(numEve) {
//   let result;
//   numEve % 2 == 0 ? (result = true) : (result = false);
//   return console.log("#9-FE", result);
// };

// const result = funcisEven(5);
// console.log(typeof console.log(''));

// let isEven = function (a) {
//   return a % 2 ? false : true;
// };
// console.log(14 % 5);

// const squareNumber = (n) => n ** 2;

// console.log(squareNumber(5));

// const checkNumbers = (a, b = 0) => a === b;
// console.log(checkNumbers(5, "5"));

// const day = 5;

// function dayWeek(day) {
//   let nameDay;
//   switch (day) {
//     case 1:
//       console.log("понедельник");
//       nameDay = "Понедельник";
//       break;
//     case 2:
//       console.log("вторник");

//       break;
//     case 3:
//       console.log("среда");

//       break;
//     case 4:
//       console.log("четверг");

//       break;
//     case 5:
//       console.log("пятница");

//       break;
//     case 6:
//       console.log("суббота");

//       break;
//     case 7:
//       console.log("воскресенье");
//   }
//   return day;
// }

// console.log(dayWeek(1));

// function isNumberInRange(num) {
//   return num > 0 && num < 10;
// }
// console.log(typeof isNumberInRange(15));

const funcisEven = function (numEve) {
  let result;
  numEve % 2 == 0 ? (result = true) : (result = false);
  console.log("#9-FE", result);
  return result;
};

const result = funcisEven(5);

console.log(typeof result);
