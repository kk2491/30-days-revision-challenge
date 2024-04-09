"use strict";

function example01() {
  let inputList = [2, 3, 4, 5, 12, 3, 5, 10, 18, 11];

  let everyOutput = inputList.every((obj) => {
    return obj > 1;
  });

  console.log("everyOutput => ", everyOutput);
  return;
}

function example02() {
  let inputList = [2, 3, 4, 5, 12, 3, 5, 10, 18, 11];

  let everyOutput = inputList.every((obj) => {
    return obj > 2;
  });

  console.log("everyOutput => ", everyOutput);
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

  let positive = inputList.every((obj) => {
    return obj.age > 11;
  });

  let negative = inputList.every((obj) => {
    return obj.age < 30;
  });

  console.log("positive : ", positive, " negative : ", negative);
  return;
}

example01();
example02();
example03();
