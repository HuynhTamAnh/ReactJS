"use strict";
function squareInput(input) {
    if (typeof input === "number") {
        return input * input;
    }
    else if (Array.isArray(input)) {
        return input.map((num) => num * num);
    }
    else {
        throw new Error("hi");
    }
}
const num = 5;
const numArray = [1, 2, 3, 4, 5];
console.log(squareInput(num));
console.log(squareInput(numArray));
