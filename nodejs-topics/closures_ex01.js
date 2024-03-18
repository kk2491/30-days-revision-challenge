"use strict";

function outerFunction(a, b, operationType) {
  let innerFunction = null;

  switch (operationType) {
    case "add":
      innerFunction = function () {
        return a + b;
      };
      break;

    case "subtract":
      innerFunction = function () {
        return a - b;
      };
      break;

    case "multiply":
      innerFunction = function () {
        return a * b;
      };
      break;

    case "divide":
      innerFunction = function () {
        return a / b;
      };
      break;

    default:
      return null;
  }

  return innerFunction;
}

let operation1 = outerFunction(100, 10, "add");
let sum = operation1();
console.log("operation1 output : ", sum);

let operation2 = outerFunction(100, 10, "subtract");
let difference = operation2();
console.log("operation2 output : ", difference);

let operation3 = outerFunction(100, 10, "multiply");
let product = operation3();
console.log("operation3 output : ", product);

let operation4 = outerFunction(100, 10, "divide");
let quotient = operation4();
console.log("operation4 output : ", quotient);
