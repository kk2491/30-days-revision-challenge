"use strict";

console.log("function execution started => ", new Date());

setTimeout(() => {
  console.log("calling setTimeout callback function => ", new Date());
}, 5000);
