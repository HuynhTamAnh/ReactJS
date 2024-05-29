"use strict";
function cachingDecorator(targetFunction) {
    const cache = {};
    const wrappedFunction = function (...args) {
        const cacheKey = JSON.stringify(args);
        if (cacheKey in cache) {
            console.log("Returning cached result for", cacheKey);
            return cache[cacheKey];
        }
        const result = targetFunction.apply(add2, args);
        cache[cacheKey] = result;
        return result;
    };
    return wrappedFunction;
}
function add2(a, b) {
    console.log(`Computing add(${a}, ${b})`);
    return a + b;
}
const cachedAdd = cachingDecorator(add2);
console.log(cachedAdd(5, 3));
console.log(cachedAdd(5, 3));
console.log(cachedAdd(2, 3));
console.log(cachedAdd(5, 3));
