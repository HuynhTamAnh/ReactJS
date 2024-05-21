type check = "success" | "failure";
let inp1 = (input: check) => {
  if (input === "success") {
    return true;
  } else if (input === "failure") {
    return false;
  }
};
inp1("success");
