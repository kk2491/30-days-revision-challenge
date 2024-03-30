"use strict";

let counter = 0;
console.log("function execution started at => ", new Date());

setTimeout(() => {
  console.log("setTimeout callback executed at => ", new Date());
}, 5000);

setImmediate(() => {
  console.log("setImmediate callback executed at => ", new Date());
});

const intervalId = setInterval(() => {
  if (counter > 5) {
    clearInterval(intervalId);
  }

  console.log("setInteval callback executed at => ", new Date());
  counter = counter + 1;
}, 5000);

process.nextTick(() => {
  console.log("process.next executed at => ", new Date());
});

console.log("funcation execution completed at => ", new Date());
