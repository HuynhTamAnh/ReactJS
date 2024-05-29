"use strict";
function logFunctionDetails(targetFunction) {
    return function (...args) {
        console.log(`Function name: ${targetFunction.name}`);
        console.log(`Input arguments: ${JSON.stringify(args)}`);
        const result = targetFunction.apply(add, args);
        console.log(`Result: ${result}`);
        return result;
    };
}
function add(a, b) {
    return a + b;
}
const loggedAdd = logFunctionDetails(add);
loggedAdd(5, 3);
