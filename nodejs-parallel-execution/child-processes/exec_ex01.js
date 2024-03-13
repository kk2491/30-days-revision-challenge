"use strict";

const { exec } = require("child_process");

function runExecExample01(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log("this is error : ", error);
      return;
    }

    if (stderr) {
      console.log("this is stderr : ", stderr);
      return;
    }

    if (stdout) {
      console.log("this is stdout : ", stdout);
      return;
    }

    return;
  });
}

// example - valid
runExecExample01("ls -l");

// example - buffer exceeds as the command generates huge output
runExecExample01("find /");

// example - invalid command
runExecExample01("notfound");
