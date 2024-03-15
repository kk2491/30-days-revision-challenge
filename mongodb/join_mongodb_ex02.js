db.Inventory.insertMany([
  { _id: "x001", name: "rice", price: 70, quantity: 50 },
  { _id: "x002", name: "sugar", price: 90, quantity: 100 },
  { _id: "x003", name: "tea", price: 150, quantity: 70 },
  { _id: "x004", name: "atta", price: 30, quantity: 60 },
  { _id: "x005", name: "milk", price: 50, quantity: 40 },
  { _id: "x006", name: "oil", price: 80, quantity: 30 },
  { _id: "x007", name: "salt", price: 10, quantity: 90 },
]);

db.Order.insertMany([
  { customerName: "ram", prodId: "x002", numPurchased: 10 },
  { customerName: "sham", prodId: "x007", numPurchased: 7 },
  { customerName: "som", prodId: "x001", numPurchased: 5 },
  { customerName: "bheem", prodId: "x003", numPurchased: 20 },
  { customerName: "kareem", prodId: "x003", numPurchased: 10 },
  { customerName: "pam", prodId: "x002", numPurchased: 60 },
  { customerName: "sam", prodId: "x007", numPurchased: 40 },
  { customerName: "shyam", prodId: "x006", numPurchased: 10 },
  { customerName: "cam", prodId: "x005", numPurchased: 30 },
  { customerName: "jam", prodId: "x004", numPurchased: 15 },
  { customerName: "lam", prodId: "x001", numPurchased: 20 },
]);

db.createView("OrderDetails", "Order", [
  {
    $lookup: {
      from: "Inventory",
      localField: "prodId",
      foreignField: "_id",
      as: "InventoryDocs",
    },
  },
  {
    $project: {
      customerName: 1,
      prodId: 1,
      numPurchased: 1,
      productName: "$InventoryDocs.name",
      productPrice: "$InventoryDocs.price",
    },
  },
]);

db.OrderDetails.find();
