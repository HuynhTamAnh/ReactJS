"use strict";
const lamPhangMang = (arr) => {
    let newArr = [];
    arr.forEach((e) => {
        if (Array.isArray(e)) {
            // Phần tử là một mảng
            // Gọi hàm lamPhangMang lại để làm phẳng mảng đó
            newArr = [...newArr, ...lamPhangMang(e)];
        }
        else {
            newArr = [...newArr, e];
        }
    });
    return newArr;
};
let arr = [1, [2, [3, 4], 5], 6];
console.log(lamPhangMang(arr));
///////////////////////////////////////////////////////////
