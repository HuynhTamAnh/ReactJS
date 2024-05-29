"use strict";
function chainFunctions(...funcs) {
    return function (...args) {
        return funcs.reduce((result, func) => {
            return [func.apply(add, Array.isArray(result) ? result : [result])];
        }, args)[0];
    };
}
function add(a, b) {
    return a + b;
}
function square(n) {
    return n * n;
}
function halve(n) {
    return n / 2;
}
const addSquareHalve = chainFunctions(add, square, halve);
const result = addSquareHalve(3, 2);
console.log(result);
