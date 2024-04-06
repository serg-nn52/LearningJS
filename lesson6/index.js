// const str = "exampleCamelCaseString";

// const initSnake = (str) =>
//   str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

// const initSnake = (str) => {
//   let tempStr = "";
//   for (let i of str) {
//     tempStr =
//       i === i.toUpperCase() ? tempStr + "_" + i.toLowerCase() : tempStr + i;
//   }
//   return tempStr;
// };

// console.log(initSnake(str));

//Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным
//знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = (num, len, sign = "+") => {
//   if (String(num).length > len) return sign + num;
//   return sign + num + "0".repeat(len - String(num).length);
// };

// console.log(zeros(111, 3, "-"));

//const arr = ["apple", 1, true, null, undefined];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//arr.length = 3;

// arr[0] = "lemon";

// console.log(...arr);

// let arr = [
//   "Яблоко",
//   { name: "Джон" },
//   true,
//   function () {
//     console.log("привет");
//   },
// ];

// console.log(arr[1].name);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const arr = ["apple", "lemon", "banana", "tomato"];

//arr.unshift("banana", "tomato");
// const newArr = arr.map(
//   (el, i, arr) => `fruit number ${i} ` + el + "all fructs " + String(arr)
// );
// console.log(newArr);

// const arr = [1, 2, 3, 4];
// const filterArr = arr.filter((e, i) => e + i < 4);
// console.log(arr);

// let arr = ["str1", "str2", "str3"];
// let result = arr.reduce((accum, current) => {
//   console.log("accum", accum);
//   console.log("current", current);
//   return accum + current;
// });
// console.log(result); // 10

// let arr = [1, 2, 3, 4, 6, -3, -6];
// const test = (arr) =>
//   arr.filter((el) => el > 0 && !(el % 2)).reduce((acc, val) => acc + val, 0);

// console.log(test(arr));

function getSum(arr) {
  let sum = 0;
  arr.forEach((el) => {
    if (el > 0 && el % 2 == 0) sum += el;
  });
  return sum;
}

//const arr = [1, 2, 3, 4, -4, -3, -2, -1, 4, 2, 1, 7];

// const uniqValue = (arr) => {
//   const tempArr = [];

//   for (let el of arr) {
//     if (!tempArr.includes(el)) tempArr.push(el);
//   }
//   arr.forEach((el) => {
//     if (!tempArr.includes(el)) tempArr.push(el);
//   });
//   return tempArr;
// };
//console.log([...new Set(arr)]);

// let firstObj = {
//   a: "Hello",
//   car: { model: "BMW" },
//   getUser() {
//     return "value";
//   },
// };
// const user = { age: 18 };
//let secondObj = Object.assign({}, user);
//let secondObj = { ...user, age: 25 };
//const obj2 = JSON.parse(JSON.stringify(firstObj));

//secondObj.name = "Sergey";

// const arr = ["apple", "lemon"];
// const copyArray = [...arr];
// console.log([...arr, "banana"]);

// const sum = (a, b, ...num) => {
//   console.log(arguments);
//   return a + b;
// };
// function sum(a, b, ...num) {
//   console.log([...arguments]);
//   return a + b;
// }
// sum(2, 5, 3, 7);

// console.log(sum(2, 5, 10, 15, 20, 21));

// const user = {
//   name: "Sergey",
//   age: 30,
//   car: {
//     model: "BMW",
//   },
// };

// for (let key in user) {
//   console.log(key);
// }
// let car = "name";

//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));

// const obj = {
//   name: "Sergey",
// };

// const copyObj1 = Object.assign({}, obj);
// const copyObj2 = { ...obj };
// copyObj1.age = 18;
// copyObj2.car = "BMW";
// console.log(obj, copyObj1, copyObj2);

// const sumEven = (...num) => {
//   return getSum(num);
// };

// console.log(sumEven(1, 2, 3, 4, 5, 4));

// const equalValue = (arr1, arr2) => {
//     const tempArr = [];
//     arr1.forEach((el) => {
//       if (arr2.includes(el)) tempArr.push(el);
//     });
//   return tempArr;
// };

const equalValue = (arr1, arr2) => arr1.filter((el) => arr2.includes(el));

const arr1 = [1, 3, 5, 7];
const arr2 = [1, 100, 5, 700];

console.log(equalValue(arr1, arr2));
