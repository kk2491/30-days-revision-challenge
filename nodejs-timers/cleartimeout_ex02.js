"use strict";

console.log("function execution started at => ", new Date());

let timer1 = setTimeout(() => {
  console.log("setTimeout 1 callback function started at => ", new Date());
}, 5000);

let timer2 = setTimeout(() => {
  console.log("setTimeout 2 callback function started at => ", new Date());
}, 5000);

clearTimeout(timer2);
