//foreach, map
let student = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 18,
  },
  {
    id: 2,
    name: "Nguyen Van B",
    age: 20,
  },
  {
    id: 3,
    name: "Nguyen Van C",
    age: 19,
  },
];

student.map((student) => console.log(student.name));

student.forEach((student) => console.log(student.age));
