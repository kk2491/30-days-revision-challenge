"use strict";

function withoutCurrying(length, width, height) {
  let volume = length * width * height;
  return volume;
}

function withCurrying(length) {
  return function (width) {
    return function (height) {
      let volume = length * width * height;
      return volume;
    };
  };
}

let volWithoutCarrying = withoutCurrying(10, 12, 4);
console.log("Volume without currying : ", volWithoutCarrying);

let volWithCarrying = withCurrying(10)(12)(4);
console.log("Volume with currying : ", volWithCarrying);
