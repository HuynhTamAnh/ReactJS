function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Ví dụ sử dụng:
const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer", country: "USA" };

const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject); // Output: { name: "Alice", age: 25, job: "Developer", country: "USA" }
