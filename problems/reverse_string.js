"use strict";

function reverseString1(inputString) {
  let reversedString = inputString.split("").reduce((acc, char) => char + acc, "");
  console.log("reversedString => ", reversedString);
  return;
}

function reverseString2(inputString) {
  let reversedString = inputString.split("").reduce((acc, char) => {
    console.log(acc, char);
    return char + acc;
  }, "");
  console.log("reversedString => ", reversedString);
  return;
}

reverseString2("What");
