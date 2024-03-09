//примитивы
const typeNumberData = 2024; // NaN, Infinity, -Infinity

const typeStringData = "2024";
const typeStringData1 = `Our year is ${typeStringData}`;

const typeBooleanData = true; //true, false
const isAdmin = false;

const typeNullData = null;

const typeUndefinedData = undefined;

const typeBigintData = 234n;

const typeSymbolData = Symbol(123);

//object

const typeObjectData = {};

const user = {
  name: "Sergey",
  age: 30,
  car: {
    model: "BMW",
    year: 2020,
  },
};

const array = [0, 1, 2, "apple", false]; //type object

user.name = "Ivan";
user.name = "Sergey";

console.log(user["name"]);
