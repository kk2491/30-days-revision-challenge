"use strict";

let inputArray = [1, [2, 3], [4, 5, [6, 7, [8, 9, 10, [100, 101, 102]]]], [11, 12, 13]];
let outputArray = [];
let outputArray2 = [];

function flattenArray(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      flattenArray(inputArray[i]);
    } else {
      outputArray.push(inputArray[i]);
    }
  }
}

flattenArray(inputArray);
console.log(outputArray);
console.log(outputArray.length);
console.log("=========================");

function flattenArray2(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    // console.log(i, inputArray[i], inputArray[i].length);
    if (inputArray[i].length >= 1) {
      flattenArray2(inputArray[i]);
    } else {
      outputArray2.push(inputArray[i]);
    }
  }
}

flattenArray2(inputArray);
console.log(outputArray2);
console.log(outputArray2.length);
