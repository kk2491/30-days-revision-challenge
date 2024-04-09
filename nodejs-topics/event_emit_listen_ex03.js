"use strict";

const EventEmitter = require("events");
const logEmitter = new EventEmitter();

logEmitter.on("INFO", (data) => {
  console.log("INFO : ", data.msg, " created at", data.createdTimestamp);
});

logEmitter.on("WARNING", (data) => {
  console.log("WARNING : ", data.msg, " created at", data.createdTimestamp);
});

logEmitter.on("ERROR", (data) => {
  console.log("ERROR : ", data.msg, " created at", data.createdTimestamp);
});

logEmitter.emit("INFO", { msg: "successful login", createdTimestamp: new Date() });
logEmitter.emit("ERROR", { msg: "undefined variable x", createdTimestamp: new Date() });
logEmitter.emit("WARNING", { msg: "variable declared but never used", createdTimestamp: new Date() });
logEmitter.emit("ERROR", { msg: "object of undefined", createdTimestamp: new Date() });
logEmitter.emit("INFO", { msg: "user created", createdTimestamp: new Date() });
