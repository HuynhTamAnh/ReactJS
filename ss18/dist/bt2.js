"use strict";
function timingDecorator(targetFunction) {
    return function (...args) {
        console.log(`Function name: ${targetFunction.name}`);
        console.log(`Input arguments: ${JSON.stringify(args)}`);
        const startTime = performance.now();
        const result = targetFunction.apply(add1, args);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Execution time: ${executionTime.toFixed(2)} milliseconds`);
        console.log(`Result: ${result}`);
        return result;
    };
}
function add1(a, b) {
    return a + b;
}
const timedAdd = timingDecorator(add1);
timedAdd(5, 3);
