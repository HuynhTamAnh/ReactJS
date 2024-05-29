"use strict";
function validateParameters(targetFunction, validationFunction) {
    return function (...args) {
        if (validationFunction(...args)) {
            return targetFunction.apply(add3, args);
        }
        else {
            throw new Error("Invalid arguments provided.");
        }
    };
}
function validateAddArguments(a, b) {
    return typeof a === "number" && typeof b === "number" && a >= 0 && b >= 0;
}
function add3(a, b) {
    return a + b;
}
const validatedAdd = validateParameters(add3, validateAddArguments);
try {
    console.log(validatedAdd(5, 3));
    console.log(validatedAdd(-1, 3));
}
catch (error) {
    console.error(error.message);
}
try {
    console.log(validatedAdd(5, "3"));
    /;
}
catch (error) {
    console.error(error.message);
}
