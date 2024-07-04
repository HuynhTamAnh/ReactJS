"use strict";
const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};
const numbers = [1, 2, 3, 4, 5];
myForEach(numbers, (element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array.join(", ")}]`);
});
