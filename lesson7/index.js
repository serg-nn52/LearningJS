//HW
//1
// let str = "строка";

// let arrayOfLetters = (str) => {
//   const strArr = str.split("");
//   let result = strArr.map(
//     (el, i, arr) => (arr[i - 1] || "") + el + (arr[i + 1] || "")
//   );
//   console.log(result);
// };
// arrayOfLetters(str);

//2
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const revers = (arr) => {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// };
// console.log(revers(num));

//this

// function getThis() {
//   console.log(this);
// }
// getThis();

// const example = () => {
//   console.log(this);
//   console.log(this === testObject);
// };
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

// let place = {
//   name: "N",
//   people: 1000,
// };

// let city = {
//   name: "Minsk",
//   people: 2000000,
//   getName,
//   setName(name) {
//     this.name = name;
//   },
// };

// function getName(people = 0) {
//   return this.name + " численность " + people;
// }

// console.log(getName.call(place, 50000));
// console.log(getName.call(place, 50000));
// console.log(getName.apply(place, [50000]));

// const getCityName = getName.bind(place, 10000);

// console.log(getCityName());

// let user1 = { name: "Вася" };
// let user2 = { name: "Петя" };
// function say(phrase) {
//   console.log(`${this.name} : ${phrase} `);
// }

// say.call(user1, "Привет"); // Вася : Привет
// say.call(user2, "И тебе привет"); // Петя : И тебе привет

// let city = {
//   name: "Minsk",
//   people: 2000000,
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   },
// };
// let otherCity = {
//   name: "NN",
//   people: 1300000,
// };

// const renameCity = city.setName.bind(otherCity, "Msk");
// renameCity();

// console.log(otherCity);

// function example() {
//   let closure = 100;
//   return function (b) {
//     return closure + b;
//   };
// }
// const closureExample = example();

// console.log(closureExample(100)); // 200

// const createCounter = (value) => {
//   let initialValue = value;
//   return () => (initialValue += 1);
// };

// const counter1 = createCounter(1);
// const counter2 = createCounter(10);
// const counter3 = createCounter(100);

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter1());
// console.log(counter1());

// console.log(counter3());

// const getVolume = (height) => {
//   let h = height;
//   return (w, l) => w * h * l;
// };
// const volume = getVolume(20);
// console.log(volume(1, 5));

// const getVolume = (h) => {
//   return (w) => {
//     return (l) => h * w * l;
//   };
// };

// console.log(getVolume(4)(2)(3));

let getValue = (a) => {
  return (getValue = (b) => {
    return (getValue = (c) => {
      return a * b * c;
    });
  });
};

console.log(getValue(2)(3)(3));
