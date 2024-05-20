"use strict";
function calculateArea(shape) {
    if (shape.kind === "square") {
        return shape.sideLength * shape.sideLength;
    }
    else if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        throw new Error("kh hiểu gì cạ");
    }
}
const square = { kind: "square", sideLength: 5 };
const circle = { kind: "circle", radius: 3 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
