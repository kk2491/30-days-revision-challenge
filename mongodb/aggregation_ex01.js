db.Orders.insertMany([
  { fruit: "banana", orderStatus: "approved", price: 10, quantity: 5 },
  { fruit: "grape", orderStatus: "declined", price: 15, quantity: 5 },
  { fruit: "apple", orderStatus: "approved", price: 10, quantity: 11 },
  { fruit: "orange", orderStatus: "approved", price: 15, quantity: 5 },
  { fruit: "banana", orderStatus: "approved", price: 10, quantity: 6 },
  { fruit: "grape", orderStatus: "declined", price: 15, quantity: 7 },
  { fruit: "orange", orderStatus: "approved", price: 10, quantity: 6 },
  { fruit: "banana", orderStatus: "approved", price: 15, quantity: 1 },
  { fruit: "banana", orderStatus: "approved", price: 10, quantity: 2 },
  { fruit: "orange", orderStatus: "declined", price: 15, quantity: 15 },
  { fruit: "banana", orderStatus: "approved", price: 10, quantity: 9 },
  { fruit: "grape", orderStatus: "approved", price: 15, quantity: 6 },
  { fruit: "orange", orderStatus: "approved", price: 10, quantity: 3 },
  { fruit: "grape", orderStatus: "approved", price: 15, quantity: 5 },
  { fruit: "banana", orderStatus: "declined", price: 10, quantity: 15 },
  { fruit: "sapota", orderStatus: "approved", price: 15, quantity: 12 },
]);

// Example 1
db.Orders.aggregate([
  {
    $match: { orderStatus: "approved" },
  },
  {
    $group: { _id: "$fruit", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } },
  },
  {
    $sort: { totalPrice: 1 },
  },
]);

// Example 2

db.Orders.aggregate([
  {
    $match: { orderStatus: "approved" },
  },
  {
    $group: { _id: "$fruit", totalPrice: { $sum: { $multiply: ["$price", "$quantity"] } } },
  },
]);

// Example 3
