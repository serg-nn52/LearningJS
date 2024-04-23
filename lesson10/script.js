// document.cookie = "name=Sergey";
// document.cookie = "age=30";

// console.log(document.cookie);

// localStorage.setItem("name", "Sergey");

// const obj = {
//   car: "Audi",
//   year: 2024,
// };

// localStorage.setItem("car", JSON.stringify(obj));
// sessionStorage.setItem("car", JSON.stringify(obj));

// const carJSON = localStorage.getItem("car");
// const car = JSON.parse(carJSON);

// console.log(car);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Sergey"), 1000);
// });

const posts = fetch("https://jsonplaceholder.typicode.com/posts");

//console.log(posts);

// promise
//   .then((result) => console.log(result))
//   .catch(() => console.error("OOoooopppss!"))
//   .finally(() => console.log("end"));

const list = document.querySelector(".list");

posts
  .then((response) => {
    if (!response.ok) throw new Error("Error");
    return response.json();
  })
  .then((response) => {
    response.map((el) => {
      const post = document.createElement("li");
      post.innerHTML = `<h2>${el.title}</h2>`;
      list.append(post);
    });
  })
  .catch((e) => console.error(e))
  .finally(() => console.log("end"));

const promise = new Promise((resolve, reject) => {
  resolve("promise");
});

console.log("start");
setTimeout(() => console.log("timeout"), 0); //macrotask
promise.then((result) => console.log(result), 0); //promise microtask
console.log("finish");
// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => alert("Купи меня"), 10000);
// });
