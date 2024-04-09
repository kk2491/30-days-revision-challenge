"use strict";

function example01() {
  let inputList = [1, 2, 3, 4, 6, 7, 8, 11];

  // callback function
  // previous return value
  // current list item

  let sum = inputList.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  console.log("sum example01 => ", sum);
}

function example02() {
  let inputList = [
    {
      name: "Ram",
      age: 34,
    },
    {
      name: "Sham",
      age: 45,
    },
    {
      name: "Bheem",
      age: 12,
    },
    {
      name: "Som",
      age: 33,
    },
  ];

  let oldest = inputList.reduce((prev, curr) => {
    if (curr.age > prev) {
      return curr.age;
    }
    return prev;
  }, 0);

  console.log("oldest age => ", oldest);
  return;
}

function example03() {
  let inputList = [
    {
      name: "Ram Ram",
      age: 34,
    },
    {
      name: "Sham Sham",
      age: 45,
    },
    {
      name: "Bheem Bheem",
      age: 12,
    },
    {
      name: "Som Som",
      age: 33,
    },
  ];

  let initials = inputList.reduce((prev, curr, idx, arr) => {
    let split = curr.name.split(" ");
    let first = split[0][0];
    let second = split[1][0];
    let initial = first + second;

    if (idx == arr.length) {
      initial = initial + ".";
    } else {
      initial = initial + ", ";
    }

    return prev + initial;
  }, "");

  console.log("Initials => ", initials);
  return;
}

example01();
example02();
example03();
