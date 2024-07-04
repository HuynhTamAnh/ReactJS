const countDown = (n: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (n <= 0) {
      reject(new Error("Số giây phải là số nguyên dương"));
      return;
    }

    const intervalId = setInterval(() => {
      console.log(`Còn lại: ${n} giây`);
      n--;

      if (n === 0) {
        clearInterval(intervalId);
        console.log("Hoàn thành quá trình đếm");
        resolve();
      }
    }, 1000);
  });
};

countDown(5)
  .then(() => {
    console.log("Promise đã được giải quyết");
  })
  .catch((error) => {
    console.error(`Lỗi: ${error.message}`);
  });
