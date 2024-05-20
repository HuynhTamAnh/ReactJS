function isNumber(value: any): value is number {
  return typeof value === "number";
}

function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

function isObject(value: any): value is object {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function identifyType(input: any): void {
  if (isNumber(input)) {
    console.log("Đây là số.");
  } else if (isArray(input)) {
    console.log("Đây là mảng.");
  } else if (isObject(input)) {
    console.log("Đây là đối tượng.");
  } else {
    console.log("Đây là loại dữ liệu khác.");
  }
}

// Ví dụ sử dụng:
identifyType(42); // Output: Đây là số.
identifyType([1, 2, 3]); // Output: Đây là mảng.
identifyType({ key: "value" }); // Output: Đây là đối tượng.
identifyType(null); // Output: Đây là loại dữ liệu khác.
identifyType("hello"); // Output: Đây là loại dữ liệu khác.
