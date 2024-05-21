"use strict";
let tong = (item) => {
    const [name, price, quantity] = item;
    return item[1] * item[2];
};
const item = ["Apple", 10, 5];
const total = tong(item);
console.log(total);
