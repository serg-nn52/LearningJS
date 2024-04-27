//const error = new Error("Test error");

// setTimeout(() => {
//   try {
//     throw new Error("Test error");
//   } catch (e) {
//     console.error(e);
//   } finally {
//     console.log("finally");
//   }
// }, 1000);

// try {
//   setTimeout(() => {
//     throw new Error("Test error");
//   }, 1000);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("finally");
// }

// const sendRequest = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://reqres.in/api/products/3", true);
//   xhr.onload = function () {
//     console.log(xhr.responseText);
//   };
//   xhr.send();
// };

const button = document.querySelector(".button");
const postsList = document.querySelector(".posts");

//button.addEventListener("click", sendRequest);

// const fetchData = async () => {
//   try {
//     let data = await fetch("https://reqres.in/api/users");
//     data = await data.json();
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.error(e);
//   } finally {
//     console.log("end");
//   }
// };

// const createCustomElement = (text, isError = false) => {
//   const element = document.createElement("li");
//   element.innerHTML = `<h3>${text}</h3>`;
//   postsList.append(element);
//   if (isError) element.style.color = "red";
//   return element;
// };

// const fetchPosts = async () => {
//   const posts = [...document.querySelectorAll("li")];
//   posts.forEach((el) => el.remove());
//   const loader = createCustomElement("Loading");
//   try {
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     data = await data.json();
//     data.map((post) => {
//       createCustomElement(post.title);
//     });
//     console.log(data);
//     return data;
//   } catch (e) {
//     createCustomElement("Что-то пошло не так!", true);
//   } finally {
//     loader.remove();
//   }
// };
// button.addEventListener("click", fetchPosts);

const sendPost = (post) => {
  try {
    let data = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

button.addEventListener("click", () => sendPost({ id: 1, text: "text" }));

const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
map.set("key3", "value3");

const arr = [1, 2, 4, 2, 4];

const set = new Set(arr);

set.add(1);

console.log(set);
