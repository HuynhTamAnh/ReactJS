"use strict";
let sentence = "this is a test sentence";
const fil = (sentence) => {
    return Array.from(new Set(sentence.split(""))).join("");
};
console.log(fil(sentence)); // Kết quả: "this aen"
