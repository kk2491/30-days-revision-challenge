"use strict";

// Function01 - the function to be throttled
function Function01() {
  try {
    console.log("Function01");
    let currentTime = new Date();
    console.log("executed at : ", currentTime.toString());

    return;
  } catch (err) {
    console.log("Function01 error : ", err);
  }
}

// without thtrottling
console.log("========= WITHOUT THROTTLING =========");

for (let i = 0; i < 10; i++) {
  setTimeout(Function01, 10 * 1000);
}

// with throttling
console.log("========= WITH THROTTLING =========");

function applyThrottle(Function01, delay) {}
