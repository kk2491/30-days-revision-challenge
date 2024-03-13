"use strict";

const cluster = require("cluster");
const os = require("os");
const express = require("express");

const numCpus = os.cpus().length;
console.log("numCpus ===> ", numCpus);

const app = express();

app.get("/endpoint1", (req, res) => {
  console.log("endpoint1");
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum = sum + 1;
  }

  res.status(200).json("success");
});

app.listen(13000, (req, res) => {});
