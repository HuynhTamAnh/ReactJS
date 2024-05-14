let employees = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    department: "IT",
  },
  { id: 2, name: "Bob", age: 20, department: "IT" },
  { id: 3, name: "Charlie", age: 25, department: "Marketing" },
  { id: 4, name: "David", age: 35, department: "IT" },
  { id: 5, name: "Eve", age: 30, department: "HR" },
];

let employeesN = employees.filter((employees) => employees.age < 25);
console.log(employeesN);
