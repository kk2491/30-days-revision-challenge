"use strict";

function example01() {
  let inputList = [1, 2, 3, 4, 5, 7, 1, 13, 10, 11];

  let someOutput = inputList.some((obj) => {
    if (obj > 10) {
      return true;
    }
  });

  console.log("someOutput => ", someOutput);
  return;
}

function example02() {
  let inputList = [1, 2, 3, 4, 5, 7, 1, 13, 10, 11];

  let someOutput = inputList.some((obj) => {
    if (obj > 30) {
      return true;
    }
  });

  console.log("someOutput => ", someOutput);

  return;
}

function example03() {
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

  let positive = inputList.some((obj) => {
    return obj.age > 44;
  });

  let negative = inputList.some((obj) => {
    return obj.age < 10;
  });

  console.log("positive : ", positive, " negative : ", negative);
  return;
}

example01();
example02();
example03();
