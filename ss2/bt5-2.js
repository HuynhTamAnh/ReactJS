const employees = [
  {
    name: "Nguyễn Văn A",
    age: 21,
  },
  {
    name: "Nguyễn Văn B",
    age: 30,
  },
  {
    name: "Nguyễn Văn C",
    age: 19,
  },
];

function sortEmployee(arr, type) {
  if (type === "Increase") {
    return arr.sort((a, b) => a.age - b.age);
  } else if (type === "Decrease") {
    return arr.sort((a, b) => b.age - a.age);
  }
}
console.log(sortEmployee(employees, "Increase"));
