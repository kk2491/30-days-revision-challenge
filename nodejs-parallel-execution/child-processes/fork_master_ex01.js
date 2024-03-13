"use strict";

const express = require("express");
const { fork } = require("child_process");

const port = 13000;
const app = express();

app.listen(port, (req, res) => {
  console.log("server listening on port : ", port);
});

app.get("/endpoint1", (req, res) => {
  let sum = longRunningTask();
  console.log("sum from endpoint1 : ", sum);
  res.status(200).json({ sum: sum });
});

app.get("/endpoint2", (req, res) => {
  const child = fork("./fork_child_ex01.js");
  child.send("start");
  child.on("message", (sum) => {
    res.status(200).json({ sum: sum });
  });
});

function longRunningTask() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum = sum + i;
  }

  return sum;
}
