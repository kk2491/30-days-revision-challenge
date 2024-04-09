"use strict";

let inputArray = [
  {
    name: "abc",
    age: 20,
  },
  {
    name: "def",
    age: 25,
  },
  {
    name: "ghi",
    age: 33,
  },
  {
    name: "def",
    age: 25,
  },
];

function removeDuplicates(inputArray) {
  let outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (outputArray.find((obj) => obj.name == inputArray[i].name)) {
      continue;
    } else {
      outputArray.push(inputArray[i]);
    }
  }

  return outputArray;
}

function removeDuplicatesOptimized(inputArray) {
  return inputArray.filter((obj, index, arr) => {
    console.log(obj, index, arr);
    return arr.findIndex((item) => item.name === obj.name) === index;
  });
}

let outputArray1 = removeDuplicates(inputArray);
console.log("output array => ", outputArray1);

console.log("===============================");

let outputArray2 = removeDuplicatesOptimized(inputArray);
console.log("output array => ", outputArray2);
