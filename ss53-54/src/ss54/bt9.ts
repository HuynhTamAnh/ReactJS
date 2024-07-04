const sortArrayWithPromise = (arr: number[]): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new Error("Đầu vào không phải là một mảng"));
      return;
    }
    if (arr.some((item) => typeof item !== "number")) {
      reject(new Error("Mảng phải chỉ chứa các số nguyên"));
      return;
    }

    const sortedArray = [...arr].sort((a, b) => a - b);
    resolve(sortedArray);
  });
};

// Sử dụng hàm sortArrayWithPromise
sortArrayWithPromise([5, 3, 8, 1, 2])
  .then((sortedArray) => {
    console.log("Mảng đã được sắp xếp:", sortedArray);
  })
  .catch((error) => {
    console.error(`Lỗi: ${error.message}`);
  });
