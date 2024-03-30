"use strict";

console.log("function execution started at => ", new Date());

let timer1 = setTimeout(() => {
  console.log("setTimeout callback function started at => ", new Date());
}, 5000);

clearTimeout(timer1);
