"use strict";
const { execFile } = require("child_process");

function runExecExample01(filename) {
  execFile(filename, (error, stdout, stderr) => {
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

runExecExample01("./execfile_sh.sh");
