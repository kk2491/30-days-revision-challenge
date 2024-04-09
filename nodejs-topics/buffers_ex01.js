"use strict";

const buffer = new Buffer.from("Testing");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("Dev");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("Deployment");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());
