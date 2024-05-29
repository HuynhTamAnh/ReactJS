let check1 = <T>(a: T): boolean => {
  if (a == "number") {
    return true;
  } else return false;
};
check1("a");

let isNumber: boolean = check1(123);

if (isNumber) {
  console.log("Xin chào");
} else {
  console.log("Tạm biệt");
}
