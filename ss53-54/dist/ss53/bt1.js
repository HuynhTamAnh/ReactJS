"use strict";
// Xây dựng một hàm đặt tên là calculate nhận vào ba tham số a , b có kiểu dữ liệu là số nguyên và một callback function.
// Hàm calculate sẽ tính tổng của hai số a và b
// Callback function sẽ in ra kết quả của phép tính trên
const calculate = (a, b, callbackFn) => {
    const sum = a + b;
    callbackFn(sum);
};
calculate(3, 5, (res) => {
    console.log(res);
});
