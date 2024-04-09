"use strict";

function checkPalindrome(inputString) {
  let palindromeStatus = true;
  let stringLength = inputString.length;
  console.log(stringLength);

  for (let i = 0; i < stringLength / 2; i++) {
    if (inputString[i] != inputString[stringLength - 1 - i]) {
      console.log("not a palindrome");
      palindromeStatus = false;
      break;
    }
  }

  if (palindromeStatus) {
    console.log("String ", inputString, " is a palindrome");
  } else {
    console.log("String ", inputString, " is not a palindrome");
  }
}

checkPalindrome("ixixi");
