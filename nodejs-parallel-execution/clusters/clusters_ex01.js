"use strict";

const cluster = require("cluster");
const os = require("os");
const express = require("express");
const killWorker = true;

const numCpus = os.cpus().length;
console.log("numCpus ===> ", numCpus);

const app = express();
const port = 13000;

app.get("/endpoint1", (req, res) => {
  console.log("endpoint1 being served by pid ", process.pid);
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum = sum + 1;
  }

  res.status(200).json("success");

  // Note: We do not need to kill the process
  if (killWorker) {
    console.log("KILLLLLLLLLLL");
    cluster.worker.kill();
  }
});

if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
    console.log("fork done : ", i);
  }

  // Note: This can be outside the if
  // Note: This is important, will handle the worker during unexpected failures
  cluster.on("exit", (worker, code, signal) => {
    console.log("worker died with pid ", worker.process.pid);

    cluster.fork();
    console.log("forking new worker after kill ", process.pid);
  });
} else {
  app.listen(port, (req, res) => {
    console.log("listening on port : ", port, " pid : ", process.pid);
  });
}
