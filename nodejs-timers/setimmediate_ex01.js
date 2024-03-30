"use strict";

console.log("function execution started at => ", new Date());

setImmediate(() => {
  console.log("setImmediate callback function started => ", new Date());
});
