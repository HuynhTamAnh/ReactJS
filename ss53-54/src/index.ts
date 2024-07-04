// const printName = (name: string, callback: Function) => {
//   let randomTime = Math.random() * 5 + 1;
//   setTimeout(() => {
//     console.log(name);
//     callback();
//   }, randomTime * 1000);
// };

// printName("h", () => {
//   printName("hùng hx", () => {
//     printName("ha", () => {
//       printName("trân ngu", () => {
//         console.log("end");
//       });
//     });
//   });
// });

//đây là ví dụ bất đồng bộ
//3 cách xử lý bất đồng bộ
//callback 1 hàm làm tham số của hàm khác
//asyn/await
//promise

//cách tạo promise
// let promise = new Promise((resolve: Function, reject: Function) => {
//   resolve("Hùng đại ca"); //thành công
//   // reject("h");
// });

//sử dụng promise
// promise
//   .then((name) => {
//     console.log("name:" + name);
//     console.log("Thành công");
//   })
//   .then(() => {
//     console.log("lần 2");
//   })
//   .then(() => {
//     console.log("lần 3");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("kết thúc");
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
// printName("tâm anh")
//   .then(() => {
//     return printName("kha");
//   })
//   .then(() => printName("haobebong"))
//   .then(() => printName("Tran ngu"))
//   .then(() => printName("hùng mafia"))
//   .catch((err) => console.log(err));
//asyn/ await: cấu trúc giúp promise đơn giản hơn
const getAll = async () => {
  await printName("a");
  await printName("Kha");
  await printName("tRâN kHôN");
  await printName("Trung mickey");
  console.log("hết");
};
getAll();
