"use strict";
// Viết một hàm displayNumbers() nhận tham số truyền vào là một callback function và một giá trị là khoảng thời gian delay có kiểu dữ liệu là number
// Hàm displayNumbers() sẽ gọi đến một callback function để in ra lần lượt các số nguyên bắt đầu từ 1 và tăng giá trị lên 1 đơn vị sau khoảng thời gian delay
const displayNumbers = (delay, callbackFn) => {
    let num = 1;
    const display = () => {
        console.log(num);
        callbackFn(num);
        num++;
        setTimeout(() => {
            display();
        }, delay);
    };
    display();
};
displayNumbers(1000, (num) => {
    console.log(`In ra số ${num}`);
});
