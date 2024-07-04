// Xây dựng một hàm có tên là fibonacci() có tham số truyền vào là một số nguyên dương n và trả về số Fibonacci thứ n.

// Sử dụng Async/Await để tính toán số Fibonacci bất đồng bộ và trả về kết quả.

// Sử dụng đệ quy để tính toán số Fibonacci.

// Thực hiện kiểm tra số n có hợp lệ không?

// Nếu <= 0 sẽ bắn ra lỗi sau: “Dữ liệu nhập vào không hợp lệ”

const fibonacci = async (n: number) => {
  return await new Promise((resolve, reject) => {
    if (n <= 0) {
      reject(new Error(`${n} không thoả mãn yên cầu phải >0`));
    } else {
      resolve(fibo(n));
    }
  });
};
const fibo = (n: number): number => {
  if (n <= 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};
fibonacci(10)
  .then((res) => console.log("số fibonacci thứ 10 là :" + res))
  .catch((err) => console.log(err));
