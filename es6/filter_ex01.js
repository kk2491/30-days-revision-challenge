"use strict";

function example01() {
  let inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let outputList = inputList.filter((item) => {
    if (item % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });

  console.log("inputList  => ", inputList);
  console.log("outputList => ", outputList);

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

  let outputList = inputList.filter((obj) => {
    return obj.age >= 30;
  });

  console.log("inputList  => ", inputList);
  console.log("outputList => ", outputList);
  return;
}

function example03() {}

example01();
example02();
