"use strict";
// const divideNumbers = (num1: number, num2: number): number | void => {
//   try {
//     if (num2 === 0) {
//       throw new Error("Không thể chia cho 0");
//     }
//     const result = num1 / num2;
//     console.log(`Kết quả của phép chia là: ${result}`);
//     return result;
//   } catch (error: any) {
//     console.error(`Lỗi: ${error.message}`);
//   } finally {
//     console.log("Hàm divideNumbers đã kết thúc.");
//   }
// };
// divideNumbers(10, 2);
// divideNumbers(10, 0);
const divideNumbers = (a, b) => {
    if (b == 0) {
        throw new Error("lỗi");
    }
    return a / b;
};
try {
    divideNumbers(5, 6);
}
catch (error) {
    console.log(error);
}
finally {
    console.log("kết thúc");
}
