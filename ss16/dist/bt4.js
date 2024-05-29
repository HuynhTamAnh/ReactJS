"use strict";
let check1 = (a) => {
    if (a == "number") {
        return true;
    }
    else
        return false;
};
check1("a");
let isNumber = check1(123);
if (isNumber) {
    console.log("Xin chào");
}
else {
    console.log("Tạm biệt");
}
