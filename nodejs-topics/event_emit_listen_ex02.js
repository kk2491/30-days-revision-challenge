"use strict";

const eventEmitter = require("events");
const testEmitter = new eventEmitter();

testEmitter.addListener("fruits", (eventData) => {
  console.log("fruits");
  console.log(eventData.name);
  console.log(eventData.quantity);
});

testEmitter.addListener("vegetables", (eventData) => {
  console.log("vegetables");
  console.log(eventData.name);
  console.log(eventData.quantity);
});

testEmitter.emit("fruits", { name: "mongo", quantity: 10 });
testEmitter.emit("fruits", { name: "orange", quantity: 11 });
testEmitter.emit("vegetables", { name: "carrot", quantity: 1 });
testEmitter.emit("vegetables", { name: "onion", quantity: 20 });
