function parseInput(
  input: string
): number | boolean | string | null | undefined {
  if (!isNaN(Number(input))) {
    return Number(input);
  } else if (input.toLowerCase() === "true") {
    return true;
  } else if (input.toLowerCase() === "false") {
    return false;
  } else if (input.toLowerCase() === "null") {
    return null;
  } else if (input.toLowerCase() === "undefined") {
    return undefined;
  } else {
    return input;
  }
}

console.log(parseInput("123"));
console.log(parseInput("true"));
console.log(parseInput("false"));
console.log(parseInput("hello"));
console.log(parseInput("null"));
console.log(parseInput("undefined"));
