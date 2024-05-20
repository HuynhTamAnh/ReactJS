let sentence: string = "this is a test sentence";

const fil = (sentence: string): string => {
  return Array.from(new Set(sentence.split(""))).join("");
};

console.log(fil(sentence)); // Kết quả: "this aen"
