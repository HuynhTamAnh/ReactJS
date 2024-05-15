function hasUppercase(str) {
  return str
    .split("")
    .map((char) => char >= "A" && char <= "Z")
    .some((isUpper) => isUpper);
}

// Ví dụ kiểm tra:
console.log(hasUppercase("hello")); // false
console.log(hasUppercase("Hello")); // true
console.log(hasUppercase("HELLO")); // true
console.log(hasUppercase("123abcABC")); // true
console.log(hasUppercase("123abc")); // false
