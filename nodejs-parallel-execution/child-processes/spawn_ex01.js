"use strict";

const { spawn } = require("child_process");

function runExecExample01(cmd1, cmd2) {
  const child = spawn(cmd1, [cmd2]);

  child.stdout.on("data", (data) => {
    console.log("stdout : ", data.toString());
  });

  child.stderr.on("data", (data) => {
    console.log("stderr : ", data.toString());
  });

  child.on("error", (error) => {
    console.log("error : ", error.message);
  });

  child.on("exit", (code, signal) => {
    console.log("code : ", code, " signal : ", signal);
    if (code) {
      console.log("exit code : ", code);
    }

    if (signal) {
      console.log("exit signal : ", signal);
    }

    console.log("=== completed ===");
  });
}

runExecExample01("ls", "-lh");

runExecExample01("ls", "-xyz");

runExecExample01("find", "/");
