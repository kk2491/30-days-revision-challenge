"use strict";

function reverseNumber(number) {
  try {
    let reversedNumber = 0;

    while (number != 0) {
      let remainder = number % 10;
      reversedNumber = reversedNumber * 10 + remainder;
      number = Math.floor(number / 10);
    }

    console.log("reversed number : ", reversedNumber);

    return;
  } catch (err) {
    console.log("reverseNumber error : ", err);
  }
}

reverseNumber(123);
