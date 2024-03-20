"use strict";

let inputArray = [{ apple: 4 }, { orange: 7 }, { orange: 2 }, { apple: 3 }, { apple: 5 }];
let countMap = new Map();

function countFruits(inputArray) {
  try {
    for (let i = 0; i < inputArray.length; i++) {
      let key = Object.keys(inputArray[i])[0];
      let value = Object.values(inputArray[i])[0];
      console.log(key, value);

      if (countMap.get(key)) {
        let currentCount = countMap.get(key);
        countMap.set(key, currentCount + value);
      } else {
        countMap.set(key, value);
      }
    }
  } catch (err) {
    console.log("countFruits error : ", err);
  }
}

countFruits(inputArray);
console.log(countMap);
