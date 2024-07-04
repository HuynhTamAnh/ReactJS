"use strict";
// const printName = (name: string, callback: Function) => {
//   let randomTime = Math.random() * 5 + 1;
//   setTimeout(() => {
//     console.log(name);
//     callback();
//   }, randomTime * 1000);
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function printName(name) {
    return new Promise((resolve, reject) => {
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
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield printName("a");
    yield printName("Kha");
    yield printName("tRâN kHôN");
    yield printName("Trung mickey");
    console.log("hết");
});
getAll();
