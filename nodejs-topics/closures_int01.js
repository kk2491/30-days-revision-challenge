"use strict";
const variableMode = "let";

if (variableMode == "let") {
  for (let i = 0; i < 3; i++) {
    const log = function () {
      console.log("i : ", i);
      return;
    };

    setTimeout(log, 1000);
  }
}

if (variableMode == "var") {
  for (var i = 0; i < 3; i++) {
    const log = function () {
      console.log("i : ", i);
      return;
    };

    setTimeout(log, 1000);
  }
}
