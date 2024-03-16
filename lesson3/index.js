// const age = 20;
// if (age < 18) {
//   console.log("Доступ запрещен!");
// } else if (age >= 18) {
//   console.log("Доступ разрешен!");
// } else {
//   console.log("Укажите свой возраст!");
// }
// const a = 1;
// const b = 2;
//let result = a > b ? "a больше b" : "a меньше b" ;

// let result;
// if (a > b) {
//   result = "a больше b";
// } else {
//   result = "a меньше b";
// }

// console.log(result);

// const line1 = 11;
// const line2 = 150;
// const line3 = 200;

// if (line1 > line2) {
//   if (line1 > line3) {
//     console.log(line1);
//   }
// }
// if (line2 > line3) {
//   if (line2 > line1) {
//     console.log(line2);
//   }
// }
// if (line3 > line1) {
//   if (line3 > line2) {
//     console.log(line3);
//   }
// }

// ниже либо равна -30:  “Оставайтесь дома!”;
// от -30 до -10 включительно: “Сегодня холодно”;
// от -10 до +5 включительно: “Не холодно”;
// от +5 до +15 включительно: “Тепло”;
// от +15 до +25 включительно: “Очень тепло”;
// от +25 до +35: “Жарко”;
// выше либо равно +35: “Пекло!”;

// const temp = -35;

// if (temp <= -30) {
//   console.log("Оставайтесь дома!");
// } else if (temp <= -10) {
//   console.log("Сегодня холодно");
// } else if (temp <= 5) {
//   console.log("Не холодно");
// } else if (temp <= 15) {
//   console.log("Тепло");
// } else if (temp <= 25) {
//   console.log("Очень тепло");
// } else if (temp < 35) {
//   console.log("Жарко");
// } else {
//   console.log("Пекло!");
// }

// const role = "admi";
// switch (role) {
//   case "admin":
//     console.log("admin");
//     break;
//   case "user":
//     console.log("user");
//     break;
//   case "manager":
//     console.log("manager");
//     break;
//   default:
//     console.log("кто ты");
// }
// const a = 0;
// const b = 1;
// let result1 = a || b; // result1 = 1
// let result2 = a || false || "value" || b; // result2 = “value”
// let result3 = false || "" || 0; // result3 = 0

// const a = 0;
// const b = 1;
// let result1 = a && b; // result1 = 0
// let result2 = b && true && "value"; // result2 = “value”
// console.log(result1, result2);

// const a = "string";
// console.log(!!a); //Boolean(a)
// console.log(Boolean(a));

// console.log((0 && true) || ("false" && null));

// for (let i = 0; i <= 3; i++) {
//   console.log(i); //0,1,2,3
// }

//console.log(i);
// let i = 0;
// while (true) {
//   i++;
//   console.log(i);
//   if (i === 5) break;
// }

// for (let i = 0; i <= 3; i++) {
//   if (i === 2) continue;

//   console.log(i); //0,1,3
// }

// mark: for (let j = 0; j < 3; j++) {
//   for (let i = 0; i < 3; i++) {
//     if (i === 1) break mark;
//     console.log("i", i, "j", j);
//   }
// }

let N = 32;
const M = 5;
//let counterDays = 1;

// while (N >= M) {
//   N = N / 2;
//   counterDays++;
//   console.log(counterDays);
// }

for (let i = 1; N >= M; i++) {
  if (i > 1) N = N / 2;
  console.log(i);
}
