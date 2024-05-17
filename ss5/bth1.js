let words = [
  "hello",
  "xinchao",
  "caigi",
  "lemon",
  "grape",
  "coconut",
  "cherry",
  "boom",
];
let word = "";
let count;

// hàm hiển thị chuỗi cần đoán
const renderWord = (inputText = "") => {
  // cú pháp truy xuất kí tự của chuỗi
  let text = word
    .split("")
    .reduce(
      (temp, c, index) => temp + (c == inputText.charAt(index) ? c : "*"),
      ""
    );
  document.getElementById("text").innerText = text;
  document.getElementById("count").innerText = count;
};

// hàm bắt đàu
const start = () => {
  count = 5;
  // random từ cần đoán
  let indexRandom = Math.floor(Math.random() * words.length); // random từ 0 -> array.length-1
  word = words[indexRandom];
  console.log(word);
  renderWord();
};

start();

const guessWord = () => {
  count--;
  let value = document.getElementById("word").value;
  console.log("value ", value);

  if (value === word) {
    alert("you win");
    start();
  } else {
    if (count == 0) {
      alert("you lose");
      start();
    }
  }
  renderWord(value);
};
