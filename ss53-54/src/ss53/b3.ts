// Viết một hàm processArray() nhận tham số truyền vào là một mảng các số nguyên và một callback function.

// Hàm processArray() sẽ duyệt qua mảng và gọi callback function với từng phần tử của mảng được in ra sau một khoảng thời gian.
let j = 0;
const processArray1 = (arrInt: number[], callbackFn: Function) => {
  if (j < arrInt.length) {
    setTimeout(() => {
      callbackFn(arrInt[j]);
      j++;
      processArray1(arrInt, callbackFn); //in ra giá trị
    }, 1000);
  }
};

//gọi hàm
processArray1([1, 2, 3, 4, 5], (b: number) => {
  console.log(`phần tử thứ ${b}`);
});
