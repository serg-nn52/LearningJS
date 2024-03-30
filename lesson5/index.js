// const people = {
//   "min-age": 18,
// };

// people.name = "Ivan";

// people.name = "Sergey";

// people["age"] = 18;

// const value = "car";

// people[value] = "BMW";

// delete people.age;

// console.log(people["min-age"]);

// let user = {
//   name: "Sergey",
//   sayName: () => {
//     console.log(user.name);
//   },
// };
// user.sayName();

// let myFavoriteFilm = {
//   name: "Интерстеллар",
//   year: 2012,
//   director: "Нолан",
//   country: "USA",
// };
// let value = "money";
// myFavoriteFilm[value] = 1000000;
// console.log(myFavoriteFilm.name);
// delete myFavoriteFilm.year;
// console.log(myFavoriteFilm);

//const str = "   Hello Ivan    ";

//верхний регистр
//console.log(str.toUpperCase());

// console.log(str.trim());

// let number = 1.2395;

// console.log(number.toFixed(2));
// const width = "10.5px";
// console.log(parseFloat(width));

//const number = 100;

// console.log(Math.min(10, 5, 1));

// const generateRandomValue = (min, max) => {
//   return Math.floor((max - min + 1) * Math.random() + min);
// };

// function dayWeek() {
//   const day = generateRandomValue(1, 7);
//   switch (day) {
//     case 1:
//       console.log("понедельник");
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
// }

// dayWeek();

//console.log("Ivan \nSergey \nMaria");

// const name = "Sergey";

// name[2] = "e";

// console.log(name.toUpperCase());
// console.log(name);

// console.log("z".codePointAt(0));
// console.log("Z".codePointAt(0));

// let str = "Widget with id";
// console.log(str.includes("id")); // 12

// .slice(start , end) - Возвращает часть строки от start до (не включая) end.
// .substr(start, length) - Возвращает часть строки от start длины length.
// .substring(start , end) - Возвращает часть строки между start и end.
//let str = "stringifystrfdgfdfstr";
// console.log(str.substring(0, 2));

// let tempString = str;

// while (tempString.includes("str")) {
//   tempString = tempString.replace("str", "$");
// }

// const replaceAll = (string, substr, replaceValue) => {
//   let tempString = string;

//   while (tempString.includes(substr)) {
//     tempString = tempString.replace(substr, replaceValue);
//   }
//   return tempString;
// };

// console.log(replaceAll(str, "str", "#"));
// console.log(tempString);

// let str = "str1ingify%3S$tr(fdgfdf5st4r";

// const result = str.replace(/[^a-zA-Z0-9]/gi, "");

// console.log(result);

// const getCase = (str, n) => str[n] === str[n].toUpperCase();

// console.log(getCase("strIng", 1));

console.log(0.1 + 0.2);
const sum = 0.1 + 0.2;
console.log(+sum.toFixed(2));
