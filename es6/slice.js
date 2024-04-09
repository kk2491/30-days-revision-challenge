"use strict";

function example01() {
  let inputList = [1, 2, 4, 5, 8, 10, 14, 10, 11, 19];

  let slicedList1 = inputList.slice(2);
  console.log("slicedList1   => ", slicedList1);

  let slicedList2 = inputList.slice(2, 6);
  console.log("slicedList2   => ", slicedList2);

  let slicedList3 = inputList.slice(-1);
  console.log("slicedList3   => ", slicedList3);

  let slicedList4 = inputList.slice(-3);
  console.log("slicedList4   => ", slicedList4);

  return;
}

example01();
