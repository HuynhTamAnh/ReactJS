const divideNumbers = (num1: number, num2: number): number | void => {
  try {
    if (num2 === 0) {
      throw new Error("Không thể chia cho 0");
    }
    const result = num1 / num2;
    console.log(`Kết quả của phép chia là: ${result}`);
    return result;
  } catch (error: any) {
    console.error(`Lỗi: ${error.message}`);
  } finally {
    console.log("Hàm divideNumbers đã kết thúc.");
  }
};

divideNumbers(10, 2);
divideNumbers(10, 0);
