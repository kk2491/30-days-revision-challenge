"use strict";

function example01() {
  let inputList = [1, 3, 4, 1, 9, 10, 12, 14];

  let itemFound = inputList.find((obj) => obj == 1);
  console.log("item found     => ", itemFound);

  let itemNotFound = inputList.find((obj) => obj == 131);
  console.log("item not found => ", itemNotFound);

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

  let itemFound1 = inputList.find((obj) => obj.name == "Dave");
  console.log("item found     => ", itemFound1);

  let itemFound2 = inputList.find((obj) => obj.age > 30);
  console.log("item found     => ", itemFound2);

  let itemNotFound1 = inputList.find((obj) => obj.name == "Davis");
  console.log("item not found => ", itemNotFound1);

  let itemNotFound2 = inputList.find((obj) => obj.age > 60);
  console.log("item not found => ", itemNotFound2);
}

example01();
example02();
