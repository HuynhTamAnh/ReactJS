let checkStartString = (longString, shortString) => {
  return longString.endsWith(shortString);
};
console.log(checkStartString("hello world", "hello"));
console.log(checkStartString("hello world", "world"));
