type Nation = "VN" | "US" | "UK";
let inp = (nation: Nation): void => {
  if (nation === "VN") {
    console.log("10000");
  } else if (nation === "US") {
    console.log("20000");
  } else if (nation === "UK") {
    console.log("30000");
  }
};
inp("VN");
inp("US");
inp("UK");
