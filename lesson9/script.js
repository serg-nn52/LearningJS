//console.log(screen);

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.send();
// console.log(document.body);

//const list = document.getElementById("list");
//const items = document.getElementsByClassName("item");
// const list = document.querySelector("#list");
// const items = document.querySelectorAll(".item");

// const h1 = document.querySelector("h1");

// h1.innerHTML = "New <span>DOM</span>";
// h1.outerHTML = "New <span>DOM</span>";

// h1.style.backgroundColor = "grey";
// h1.className = "title";
// h1.classList.add("title");

// h1.addEventListener("click", () => {
//   h1.classList.toggle("title");
// });

// const info = document.createElement("div");
// info.classList.add("title");
// info.innerText = "Info";

//document.body.prepend(info);
//h1.after(info);

// header содержащий заголовок страницы
// контейнер с контентом страницы
// поле ввода input
// список элементов (число элементов > 1)
// кнопка добавления To Do

const header = document.createElement("header");
const container = document.createElement("section");
const input = document.createElement("input");
const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");

const button = document.createElement("button");

const h1 = document.querySelector("h1");

header.innerText = "Header";

header.style.backgroundColor = "grey";
header.style.height = "100px";
header.classList.add("header");

container.classList.add("container");

h1.innerText = "ToDo";
list.innerText = "ToDo List";
item1.innerText = "todo1";
item2.innerText = "todo2";
button.innerText = "button";

document.body.append(header);
document.body.append(container);
container.append(h1);
container.append(input);
container.append(button);
container.append(list);
list.append(item1);
list.append(item2);

let inputValue = "";

input.addEventListener("input", (event) => {
  inputValue = event.target.value;
});

const resetInput = () => {
  input.value = "";
  inputValue = "";
};

const createToDo = (todo) => {
  if (!todo) return;
  const item = document.createElement("li");
  item.innerText = todo;
  list.append(item);
};

button.addEventListener("click", () => {
  createToDo(inputValue);
  resetInput();
});

// const handlerInput = (event) => {
//   event.target.value = "";
//   console.log("blur");
// };

//input.addEventListener("focus", (event) => console.log(event));
// input.addEventListener("blur", (event) => handlerInput(event));

// input.addEventListener("input", (event) => console.log(event.target.value));

// const buttonWrapper = document.querySelector(".button-wrapper");
// const buttonBubble = document.querySelector(".button");

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => event.preventDefault());

// buttonBubble.addEventListener("click", (e) => {
//   //e.stopPropagation();
//   console.log("button", e);
// });
// buttonWrapper.addEventListener("click", (e) => console.log("wrapper", e));
