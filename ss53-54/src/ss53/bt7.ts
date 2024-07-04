const myForEach = <T>(
  arr: T[],
  callback: (element: T, index: number, array: T[]) => void
): void => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

const numbers = [1, 2, 3, 4, 5];
myForEach(numbers, (element, index, array) => {
  console.log(
    `Element: ${element}, Index: ${index}, Array: [${array.join(", ")}]`
  );
});
