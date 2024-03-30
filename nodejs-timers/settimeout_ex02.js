"use strict";

console.log("function execution started at => ", new Date());

setTimeout(() => {
  console.log("setTimeout callback function called at => ", new Date());
}, 5000);

function startLongRunningFunction() {
  console.log("longRunningFunction started at => ", new Date());
  for (let i = 0; i < 10000000000; i++) {
    let temp = i + 10;
  }

  console.log("longRunningFunction completed at => ", new Date());
  return;
}

startLongRunningFunction();
