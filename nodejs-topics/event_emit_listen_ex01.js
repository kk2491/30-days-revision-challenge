"use strict";

const eventEmitter = require("events");

const testEmitter = new eventEmitter();

testEmitter.on("fruits", (fruitName) => {
  console.log("fruit received : ", fruitName);
});

testEmitter.on("vegetables", (vegetableName) => {
  console.log("vegetable received : ", vegetableName);
});

testEmitter.emit("fruits");
testEmitter.emit("fruits", "mongo");
testEmitter.emit("fruits", "orange");

testEmitter.emit("vegetables");
testEmitter.emit("vegetables", "carrot");
testEmitter.emit("vegetables", "onion");
