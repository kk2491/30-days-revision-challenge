"use strict";

function sortAndRemoveDuplicates(inputArray) {
  try {
    console.log("sortAndRemoveDuplicates");
    let outputArray = [];

    for (let i = 0; i < inputArray.length; i++) {
      for (let j = i + 1; j < inputArray.length; j++) {
        if (inputArray[j] < inputArray[i]) {
          let tempi = inputArray[i];
          let tempj = inputArray[j];
          inputArray[i] = tempj;
          inputArray[j] = tempi;
        }
      }

      if (!isExistsInArray(inputArray[i], outputArray)) {
        outputArray.push(inputArray[i]);
      }
    }

    return outputArray;
  } catch (err) {
    console.log("sortAndRemoveDuplicates error : ", err);
  }
}

function isExistsInArray(element, targetArray) {
  let elementFound = false;
  for (let i = 0; i < targetArray.length; i++) {
    if (element == targetArray[i]) {
      elementFound = true;
      break;
    }
  }

  return elementFound;
}

let inputArray = [30, 14, 56, 19, 190, 13, 145, 184, 56, 13];
let outputArray = sortAndRemoveDuplicates(inputArray);
console.log("outputArray => ", outputArray);
