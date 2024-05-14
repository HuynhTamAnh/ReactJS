let users = [
  { id: 1, name: "Alice", hobbies: ["Reading", "Drawing"] },
  { id: 2, name: "Bob", hobbies: ["Gaming", "Cooking"] },
];

let allHobbies = users.flatMap((user) => user.hobbies);

console.log(allHobbies);
