let student = [
  {
    id: 1,
    name: "Nguyen Van A",
    number: 18,
  },
  {
    id: 2,
    name: "Nguyen Van B",
    number: 20,
  },
  {
    id: 3,
    name: "Nguyen Van C",
    number: 19,
  },
];

let modifiedStudents = student.map((student) => {
  if (student.number < 30) {
    return {
      ...student,
      number: student.number + 10,
    };
  } else if (student.number > 40) {
    return {
      ...student,
      number: student.number - 10,
    };
  } else {
    return student;
  }
});

console.log(modifiedStudents);
