type numberOrString = number | string;

function check(a: numberOrString) {
  if (typeof a === "number") {
    console.log(`Number: ${a}`);
  } else if (typeof a === "string") {
    console.log(`String: ${a}`);
  }
}
check(20);
check("hi");
