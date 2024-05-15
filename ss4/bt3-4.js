let typeConsole = (type) => {
  if (type === "warn") {
    return `Đây là type: ${type}`;
  } else if ("error") {
    return `Đây là type: ${type}`;
  } else if ("log") {
    return `Đây là type: ${type}`;
  } else return `Đây là type: ${type}`;
};
console.log(typeConsole("log"));
console.log(typeConsole("warn"));
console.log(typeConsole("error"));
console.log(typeConsole());
