type Square = { kind: "square"; sideLength: number };
type Circle = { kind: "circle"; radius: number };

type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
  if (shape.kind === "square") {
    return shape.sideLength * shape.sideLength;
  } else if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    throw new Error("kh hiểu gì cạ");
  }
}

const square: Square = { kind: "square", sideLength: 5 };
const circle: Circle = { kind: "circle", radius: 3 };

console.log(calculateArea(square));
console.log(calculateArea(circle));
