"use strict";
// Viết một hàm checkCondition() có tham số truyền vào là một điều kiện và một callback function.
// Hàm checkCondition() sẽ kiểm tra điều kiện và gọi callback function với kết quả của điều kiện sau một khoảng thời gian.
const checkCondition = (condition, callbackFn) => {
    setTimeout(() => {
        callbackFn(condition);
    }, 1000);
};
checkCondition(true, (res) => {
    console.log(`${res}`);
});
