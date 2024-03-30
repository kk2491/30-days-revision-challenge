"use strict";

let counter = 0;

setInterval(() => {
  console.log("setInterval execution called at => ", new Date(), counter, " times");
  counter = counter + 1;
}, 5000);

setTimeout(() => {
  console.log("setTimeout execution started at => ", new Date());
  for (let i = 0; i < 10000000000; i++) {
    let temp = i;
  }

  return;
}, 7000);
