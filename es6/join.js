"use string";

function example01() {
  let inputList1 = [1, 2, 3, 4, 5];

  let concateString1 = inputList1.join();

  console.log("inputList      => ", inputList1);
  console.log("concateString1 => ", concateString1);

  let concateString2 = inputList1.join("X");

  console.log("inputList      => ", inputList1);
  console.log("concateString2 => ", concateString2);

  let concateString3 = inputList1.join("   ");

  console.log("inputList      => ", inputList1);
  console.log("concateString3 => ", concateString3);

  return;
}

function example02() {
  let inputList1 = [1, { name: "Dev" }, 3, { age: 110 }, 5];

  let concateString1 = inputList1.map((obj) => (typeof obj == "object" ? JSON.stringify(obj) : obj)).join(" * ");

  console.log("concateString1  => ", concateString1);

  return;
}

example01();
example02();
