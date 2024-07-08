// Viết một hàm processArray() nhận tham số truyền vào là một mảng các số nguyên và một callback function.

// Hàm processArray() sẽ duyệt qua mảng và gọi callback function với từng phần tử của mảng được in ra sau một khoảng thời gian.
let i = 0;
const processArray = (intArr: number[], callback: Function) => {
  if (i < intArr.length) {
    callback(intArr[i]); //in ra giá trị
    i++;
    setTimeout(() => {
      processArray(intArr, callback);
    }, 1000);
  }

  //   const processElement = () => {
  //     //hàm để kiểm tra xem i có phải 1 vị trí trong mảng hay không
  //     //nếu là vị trí trong mảng thì in ra
  //     //sau đó tăng i lên 1
  //     //gọi đến chính nó
  //     //in ra từng phần tử
  //     if (i < intArr.length) callback(intArr[i]);
  //     i++;
  //     setTimeout(processElement, 1000);
  //   };
  //   processElement();
};
processArray([1, 2, 3, 4, 5], (a: number) => {
  console.log(a);
});
