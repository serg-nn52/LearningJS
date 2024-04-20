// class MyString {
//   reverse(value) {
//     return value.split("").reverse().join("");
//   }
//   ucFirst(value) {
//     return value[0].toUpperCase() + value.slice(1);
//   }
//   ucWords(string) {
//     return string
//       .split(" ")
//       .map((el) => this.ucFirst(el))
//       .join(" ");
//   }
// }

// const myString = new MyString();

// console.log(myString.ucWords("hello beautiful world"));

const createTimer = () => {
  let count;
  return (start, finish) => {
    count = start;
    const interval = setInterval(() => {
      if (count < finish) {
        console.log("Время вышло!");
        clearInterval(interval);
        return;
      }
      console.log(count);
      count--;
    }, 1000);
  };
};

const timer = createTimer();

timer(10, 0);
