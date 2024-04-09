"use strict";

function example01() {
  let inputList = [1, 2, 3, 4, 5, 6, 7, 8];

  let outputList = [];
  inputList.forEach((obj) => {
    console.log(obj);
    outputList.push(obj * 10);
  });

  console.log(inputList);
  console.log(outputList);

  return;
}

function example02() {
  let inputList = [
    {
      name: "Dave",
      age: 25,
    },
    {
      name: "Justin",
      age: 30,
    },
    {
      name: "Robert",
      age: 33,
    },
    {
      name: "Max",
      age: 45,
    },
    {
      name: "Dustin",
      age: 12,
    },
  ];

  let outputList = [];
  inputList.forEach((obj) => {
    outputList.push({
      createImageBitmap: new Date().toString(),
      ...obj,
    });
  });

  console.log("inputList  => ", inputList);
  console.log("outputList => ", outputList);
  return;
}

example01();
example02();
