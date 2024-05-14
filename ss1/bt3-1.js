let arr = [1, 2, "z", true, -1, -3];
let duong = arr.filter((arr) => typeof arr === "number" && arr > 0);
console.log(duong);
