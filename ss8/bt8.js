"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// Ví dụ sử dụng:
const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer", country: "USA" };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject); // Output: { name: "Alice", age: 25, job: "Developer", country: "USA" }
