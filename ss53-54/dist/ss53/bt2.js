"use strict";
// Viết một hàm delayedCallback() nhận tham số truyền vào là một callback function và một số nguyên thể hiện thời gian delay (miligiây).
// Hàm delayedCallback() sẽ gọi callback function sau một khoảng thời gian nhất định.
const delayedCallback = (callback, int) => {
    setTimeout(() => {
        callback();
    }, int);
};
const printNumber = () => {
    let num = Math.random() * 1000;
    console.log(num);
};
delayedCallback(printNumber, 3000);
