function longRunningTask() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum = sum + i;
  }

  return sum;
}

process.on("message", (message) => {
  if (message == "start") {
    const sum = longRunningTask();
    process.send(sum);
  }
});
