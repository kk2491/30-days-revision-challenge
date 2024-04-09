"use strict";

function example01() {
  let inputList = [1, 2, 3, 4, 5, 6, 7];

  let outputList = inputList.map((obj) => {
    return obj * 10;
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

  let outputList = inputList.map((obj) => {
    let initials = obj.name.split("");
    let initial = initials[0];

    return {
      initials: initial,
      ...obj,
    };
  });

  console.log("inputList  => ", inputList);
  console.log("outputList => ", outputList);

  return;
}

function example03() {}

example01();
example02();
