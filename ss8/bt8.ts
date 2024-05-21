function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer", country: "USA" };

const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);
