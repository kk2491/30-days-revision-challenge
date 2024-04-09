"use strict";

function example01() {
  let inputList1 = [1, 2, 3, 4, 5];
  let inputList2 = [6, 7, 8, 9, 0];

  let concatList1 = inputList1.concat(inputList2);
  console.log("inputList1  => ", inputList1);
  console.log("inputList2  => ", inputList2);
  console.log("concatList1 => ", concatList1);

  let concatList2 = inputList2.concat(inputList1);
  console.log("inputList1  => ", inputList1);
  console.log("inputList2  => ", inputList2);
  console.log("concatList2 => ", concatList2);

  return;
}

function example02() {
  let inputList1 = [1, 2, 3, 4, 5];
  let inputList2 = [
    {
      name: "Dave",
    },
    {
      name: "Kevin",
    },
    {
      name: "Seb",
    },
  ];

  let concatList1 = inputList1.concat(inputList2);
  console.log("inputList1  => ", inputList1);
  console.log("inputList2  => ", inputList2);
  console.log("concatList1 => ", concatList1);

  return;
}

example01();
example02();
