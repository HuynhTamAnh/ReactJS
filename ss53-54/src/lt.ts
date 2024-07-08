let promise = new Promise((resolve: Function, reject: Function) => {
  resolve("who");
  //   reject();
});
promise
  .then((name) => {
    console.log("name: " + name);
    console.log("thành công");
  })
  .catch(() => {
    console.log("err");
  });
console.log("kết thúc");
function printName(name: string) {
  return new Promise((resolve: Function, reject) => {
    let time = Math.floor(Math.random() * 5) * 1000;
    console.log(time);
    setTimeout(() => {
      console.log(name);
      resolve();
    }, time);
  });
}
printName("who")
  .then(() => printName("someone"))
  .then(() => printName("nobody"));
