"use strict";

function spreadOperation01() {
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let array3 = [...array1, ...array2];
  console.log("array3 => ", array3);

  let array4 = [1, 2, 3, 4, 5];
  let array5 = [...array4];
  console.log("array5 => ", array5);

  let object1 = { name: "kk", email: "kk@kk.com" };
  let object2 = { phoneNumber: "90909090", address: "404" };
  let object3 = { ...object1, ...object2 };
  console.log("object3 => ", object3);

  return;
}

function restOperation01(...args) {
  let total = 0;
  args.forEach((obj) => (total = obj + total));
  console.log("total => ", total);
  return;
}

spreadOperation01();
restOperation01(1, 2, 3, 4, 5, 6, 7, 8, 9);
