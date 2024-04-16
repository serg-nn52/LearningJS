// const animal = {
//   isLive: true,
//   hasHead: true,
// };

// const dog = {
//   name: "Sharik",
//   isTail: true,
// };

// const human = {
//   name: "Sergey",
//   isTail: false,
// };

// dog.__proto__ = animal;

// console.log(dog.isLive);

// function CreateUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let firstUser = new CreateUser("Ivan", 21); // {name: “Ivan”, age: 21}
// let secondUser = new CreateUser("Alex", 18); // {name: “Alex”, age: 18}

// console.log(firstUser.name);

// function CreateUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// CreateUser.prototype.sayHi = function () {
//   console.log("Меня зовут: " + this.name);
// };

// const user1 = new CreateUser("Sergey", 30);
// const user2 = new CreateUser("Ivan", 20);

// console.log(CreateUser.prototype);

// function CreatePostcards(from, to) {
//   this.from = from;
//   this.to = to;
//   this.show = function () {
//     console.log(this.from + this.to);
//   };
// }
// CreatePostcards.prototype.changeFrom = function (newFrom) {
//   this.from = newFrom;
// };

// let postCard = new CreatePostcards("NN-", "-Minsk");

// console.log(postCard);
// postCard.show();
// postCard.changeFrom("Moscow");
// console.log(postCard);

// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.isLive = true;
//   }

//   sayName() {
//     console.log("Животное: ", this.name);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//     this.isTail = true;
//   }
//   sayHi() {
//     console.log("Gav");
//   }
// }

// const dog = new Dog("Sharik");

// console.log(dog);
// dog.sayHi();
// dog.sayName();

// class User {
//   get name() {
//     console.log("Попытка получения данных");
//     return this._name + "пользователь";
//   }
//   set name(value) {
//     value.length < 5
//       ? console.log("Слишком короткое имя!")
//       : (this._name = value);
//   }
// }

// const user = new User();

// user.name = "Sergey";

// console.log(user);

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `Имя: ${this.name} Фамилия: ${this.surname}`;
  }
  setAge(age) {
    this.age = age;
  }
}

class Worker extends People {
  constructor(name, surname, rate, days) {
    super(name, surname);
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

const manager = new Worker("Ivan", "Ivanov", 3000, 22);
manager.setAge(18);
const developer = new Worker("Petr", "Petrov", 5000, 22);
console.log(manager, manager.getFullName(), manager.getSalary());
console.log(developer, developer.getFullName(), developer.getSalary());

// class People {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// class Worker extends People {
//   constructor(name, surname, rate, day) {
//     super(name, surname);
//     this.rate = rate;
//     this.day = day;
//   }
//   getSalary() {
//     console.log(this.rate * this.day);
//   }
// }

// const worker = new Worker("Denis", "Abramov", 5000, 22);

// worker.name = "denis";
// worker.surname = "Abram";

// worker.getFullName();
