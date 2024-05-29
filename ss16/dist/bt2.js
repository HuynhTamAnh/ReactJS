"use strict";
function swapElements(array, index1, index2) {
    // Kiểm tra chỉ mục hợp lệ
    if (index1 < 0 ||
        index1 >= array.length ||
        index2 < 0 ||
        index2 >= array.length) {
        throw new Error("Chỉ mục không hợp lệ");
    }
    // Thực hiện hoán đổi
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
// Kiểm tra hàm với nhiều loại dữ liệu khác nhau
const numberArray = [1, 2, 3, 4];
console.log(swapElements(numberArray, 1, 3)); // Output: [1, 4, 3, 2]
const stringArray = ["a", "b", "c", "d"];
console.log(swapElements(stringArray, 0, 2)); // Output: ["c", "b", "a", "d"]
const mixedArray = [1, "two", true, { name: "Alice" }];
console.log(swapElements(mixedArray, 1, 3)); // Output: [1, { name: "Alice" }, true, "two"]
